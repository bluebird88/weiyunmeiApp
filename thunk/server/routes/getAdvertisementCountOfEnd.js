/*
    获取已完成的任务总数量
 */
var http = require('../utils/http'),
    userAdvertisementCountEnv = require('../env').urls.getUserAdvertisementCount;

module.exports = {
    url : '/advertisement/complete/count.do',
    method : 'get',
    execute : function(req,res){
        var userId = req.userInfo.id;

        var datas = {};
        datas[userAdvertisementCountEnv.params.status] = userAdvertisementCountEnv.status.end;
        datas[userAdvertisementCountEnv.params.userId] = userId;
        http.get(userAdvertisementCountEnv.url,data).then(function(advertisementCount){

            if(advertisementCount.status != 0){
                throw new Error(advertisementCount.message);
            }

            res.writeJson(res.STATUS.SUCCESS,advertisementCount.result,'ok');

        });
    }
};

