/*
    获取任务详情
 */
var http = require('../utils/http'),
    stringUtils = require('../utils/string'),
    env = require('../env').urls.getAdvertisementDetail;

module.exports = {
    url : '/advertisement/:id.do',
    method : 'get',
    execute : function(req,res){
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

            res.writeJson(res.STATUS.SUCCESS,advertisementDetail.result,advertisementDetail.message);

        });

    }
};