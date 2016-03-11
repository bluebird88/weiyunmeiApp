var stringUtils = require('../utils/string'),
    uuid = require('node-uuid'),
    cache = require('../MapCache'),
    http = require('../utils/http');

var env = require('../env');

module.exports = {
    url : '/login.do',
    method : 'get',
    execute : function(req,res){
        // 获取参数,验证参数是否存在
        var loginName = req.body.loginName,
            password = req.body.password;

        if(stringUtils.isBlank(loginName)){
            res.writeJson(res.STATUS.FAIL,'','用户名不能为空');
            return;
        }

        if(stringUtils.isBlank(password)){
            res.writeJson(res.STATUS.FAIL,'','密码不能为空');
            return;
        }

        var datas = [];
        datas[env.urls.findByLoginNameAndPassword.params.loginName] = loginName;
        datas[env.urls.findByLoginNameAndPassword.params.password] = password;

        // 远程服务器验证
        http.get(env.urls.findByLoginNameAndPassword.url,datas).then(function(response){
            if(response.status==0){     // 登录成功

                if(response.result==null || response.result==""){
                    throw new Erro("用户名或者密码错误","login");
                }

                var loginToken = uuid.v4();
                cache.addCache(loginToken,env.cache.userInfo,response.result);  // 缓存用户信息
                res.writeJson(res.STATUS.SUCCESS,{token:loginToken,userInfo:response.result},response.message);
            }else{                      // 登录失败
                throw new Error(response.message,'login');
            }
        });
    }
};
