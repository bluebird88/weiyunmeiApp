/**
 * 获取所有推广中的广告列表
 */
var http = require('../utils/http'),
    env = require('../env').urls.getAdvertisements,
    getUserAdvertisementStatusEnv = require('../env').urls.getUserAdvertisementStatus;

module.exports = {
    url : '/advertisements.do',
    method : 'get',
    execute : function(req,res){
        var result = null;

        var datas = {};
        datas[env.params.pageNum] = req.query.pageNum || 1;
        datas[env.params.pageSize] = req.query.pageSize || 10;
        http.get(env.url,datas).then(function(advertisements){  // 获取广告列表

            if(advertisements.status != 0){
                throw new Error(advertisements.message,'get_advertisements');
            }

            result = advertisements.result;

            var advertisementsIdArr = [];
            for(var iIndex=0;iIndex<result.result.length;iIndex++){
                var advertisement = result.result[iIndex];
                advertisementsIdArr.push(advertisement.id);
            }

            var userAdvertisementStatusDatas = {};
            userAdvertisementStatusDatas[getUserAdvertisementStatusEnv.params.advertisementIds] = advertisementsIdArr.join(',');
            userAdvertisementStatusDatas[getUserAdvertisementStatusEnv.params.userId] = req.userInfo.id;
            return http.get(getUserAdvertisementStatusEnv.url,userAdvertisementStatusDatas);
        }).then(function(status){       // 获取广告状态

            if(status.status != 0){
                throw new Error(status.message,'get_advertisements_status');
            }

            for(var iIndex=0;iIndex<result.result.length;iIndex++){
                var advertisement = result.result[iIndex];
                var advertisementStatus = status[advertisement.id];
                if(advertisementStatus){    // 状态存在,已经接受的任务,如果无状态,可能返回值里面不包含该任务的状态值
                    advertisement.status = advertisementStatus;
                    result.result[iIndex] = advertisement;
                }
            }

            res.writeJson(res.STATUS.SUCCESS,result,'ok');
        });

    }
};
