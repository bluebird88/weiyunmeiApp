/**
 * 获取收益明细
 */
var env = require('../env').urls.getConsumeDetails,
    http = require('../utils/http');

module.exports = {
    url : '/consume/detail.do',
    method : 'get',
    execute : function(req,res){

        var datas = {};
        datas[env.params.userId] = req.userInfo.id;
        http.get(env.url,datas).then(function(consumeDetails){

            if(consumeDetails != 0){
                throw new Error(consumeDetails.message,'get_consume_details');
            }

            res.writeJson(res.STATUS.SUCCESS,consumeDetails.result,'ok');

        });
    }
};
