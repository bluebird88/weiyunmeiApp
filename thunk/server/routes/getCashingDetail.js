/*
    获取提现明细
 */
var http = require('../utils/http'),
    env = require('../env').urls.getCashingDetail;

module.exports = {
    url : '/cashing/detail.do',
    method : 'get',
    execute : function(req,res){

        var datas = {};
        datas[env.params.userId] = req.userInfo.id;
        http.get(env.url,datas).then(function(userCashingDetails){

            if(userCashingDetails.status != 0){
                throw new Error(userCashingDetails.message,'get_cashing_detail');
            }

            res.writeJson(res.STATUS.SUCCESS,userCashingDetails.result,'');

        });

    }
};