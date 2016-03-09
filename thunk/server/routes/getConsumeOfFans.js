/**
 * 获取粉丝收益
 */
var env = require('../env').urls.getConsumeOfFans,
    http = require('../utils/http');

module.exports = {
    url : '/consume/fans.do',
    method : 'get',
    execute : function(req,res){

        var datas = {};
        datas[env.params.userId] = req.userInfo.id;
        http.get(env.url,datas).then(function(consumeOfFans){

            if(consumeOfFans.status != 0){
                throw new Error(consumeOfFans.message,'get_consume_of_fans');
            }

            res.writeJson(res.STATUS.SUCCESS,consumeOfFans.result,'ok');

        });

    }
};
