/*
    用户提交任务
 */
var env = require('../env').urls.putAdvertisementOfComplete,
    http = require('../utils/http');

module.exports = {
    url : '/advertisement/complete/:advertisementId.do',
    method : 'put',
    execute : function(req,res){

        var datas = {};
        datas[env.params.advertisementId] = req.params.advertisementId;
        datas[env.params.userId] = req.userInfo.id;
        datas[env.params.data] = req.userInfo.data;
        http.put(env.url.datas).then(function(result){
            if(result.status != 0){
                throw new Error(result.message,'put_advertisement_of_complete');
            }

            res.writeJson(res.STATUS.SUCCESS,result.result,'ok');
        });

    }
};