/*
    获取任务详情
 */
var http = require('../utils/http'),
    stringUtils = require('../utils/string'),
    env = require('../env').urls.getAdvertisementDetail,
    getUserAdvertisementStatusEnv = require('../env').urls.getUserAdvertisementStatus;

module.exports = {
    url : '/advertisement/:id.do',
    method : 'get',
    execute : function(req,res){
        var result = null;

        var advertisementId = req.params.id;
        if(stringUtils.isBlank(advertisementId)){
            throw new Error('任务id不能为空','get_advertisement_detail');
        }

        var datas = {};
        datas[env.params.id] = advertisementId;
        http.get(env.url,datas).then(function(advertisementDetail){

            // 获取数据失败
            if(advertisementDetail.status != 0){
                throw new Error(advertisementDetail.message,'get_advertisement_detail');
            }

            result = advertisementDetail.result;

            var statusDatas = {};
            statusDatas[getUserAdvertisementStatusEnv.params.advertisementIds] = advertisementDetail.result.id;
            statusDatas[getUserAdvertisementStatusEnv.params.userId] = req.userInfo.id;
            return http.get(getUserAdvertisementStatusEnv.url,statusDatas);
            //res.writeJson(res.STATUS.SUCCESS,advertisementDetail.result,advertisementDetail.message);
        }).then(function(statusResponse){

            if(statusResponse.status != 0){
                throw new Error(statusResponse.message,'get_advertisement_detail');
            }

            result.status = statusResponse.result;
            res.writeJson(res.STATUS.SUCCESS,result,'ok');

        });

    }
};