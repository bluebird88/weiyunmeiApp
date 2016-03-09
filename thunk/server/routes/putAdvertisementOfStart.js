/*
    接受任务
 */
var env = require('../env').urls.putAdvertisementOfStart,
    http = require('../utils/http');

module.exports = {
    url : '/advertisement/start/:advertisementId.do',
    method : 'put',
    execute : function(req,res){
        var datas = {};
        datas[env.params.advertisementId] = req.params.advertisementId;
        datas[env.params.userId] = req.userInfo.id;
        http.put(env.url.datas).then(function(result){
            if(result.status != 0){
                throw new Error(result.message,'put_advertisement_of_start');
            }

            res.writeJson(res.STATUS.SUCCESS,result.result,'ok');
        });
    }
};