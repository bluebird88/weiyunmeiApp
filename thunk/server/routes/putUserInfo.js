/*
    修改用户资料
 */
var http = require('../utils/http'),
    env = require('../env').urls.putUserInfo;

module.exports = {
    url : '/userInfo.do',
    method : 'put',
    execute : function(req,res){

        var datas = {};
        datas[env.params.address] = req.body.address;
        datas[env.params.birthday] = req.body.birthday;
        datas[env.params.icon] = req.body.icon;
        datas[env.params.mobile] = req.body.mobile;
        datas[env.params.name] = req.body.name;
        datas[env.params.sex] = req.body.sex;
        datas[env.params.userId] = req.userInfo.id;
        http.put(env.url,datas).then(function(result){

            if(result.status != 0){
                throw new Error(result.message,'put_user_info');
            }

            res.writeJson(res.STATUS.SUCCESS,result.result,'ok');

        });
    }
};