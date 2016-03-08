/*
    获取任务类型
 */
var http = require('../utils/http'),
    env = require('../env').urls.getAdvertisementTypes;

module.exports = {
    url : '/advertisement/type.do',
    method : 'get',
    execute : function(req,res){

        http.get(env.url).then(function(advertisementTypes){

            if(advertisementTypes.status != 0){
                throw new Error(advertisementTypes.message,'get_advertisements');
            }

            res.writeJson(res.STATUS.SUCCESS,advertisementTypes.result,'ok');

        });

    }
};