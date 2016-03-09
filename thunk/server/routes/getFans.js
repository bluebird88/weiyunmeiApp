/*
    获取当前用户的粉丝列表
 */
var env = require('../env').urls.getFans,
    http = require('../utils/http');

module.exports = {
    url : '/fans.do',
    method : 'get',
    execute : function(req,res){

        var datas = {};
        datas[env.params.userId] = req.userInfo.id;
        http.get(env.url,datas).then(function(consumeOfFans){

            if(consumeOfFans.status != 0){
                throw new Error(consumeOfFans.message,'get_fans');
            }

            res.writeJson(res.STATUS.SUCCESS,consumeOfFans.result,'ok');

        });

    }
};
