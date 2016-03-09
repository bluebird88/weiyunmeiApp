/*
    修改密码
 */
var env = require('../env').urls.resetPassword,
    http = require('../utils/http');

module.exports = {
    url : '/password.do',
    method : 'put',
    execute : function(req,res){
        var datas = {};
        datas[env.params.newPassword] = req.body.newPassword;
        datas[env.params.oldPassword] = req.body.oldPassword;
        datas[env.params.userId] = req.userInfo.id;
        http.put(env.url.datas).then(function(result){
            if(result.status != 0){
                throw new Error(result.message,'put_of_password');
            }

            res.writeJson(res.STATUS.SUCCESS,result.result,'ok');
        });
    }
};