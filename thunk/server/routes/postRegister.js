/*
    用户注册
 */
var env = require('../env').urls.register,
    http = require('../utils/http');

module.exports = {
    url : '/register.do',
    method : 'post',
    execute : function(req,res){

        var datas = {};
        datas[env.params.mobile] = req.body.mobile;
        datas[env.params.password] = req.body.password;
        http.post(env.url,datas).then(function(registerResult){

            if(registerResult.status != 0){
                throw new Error(registerResult.message,'post_register');
            }

            res.writeJson(res.STATUS.SUCCESS,registerResult.result,'ok');

        });

    }
};