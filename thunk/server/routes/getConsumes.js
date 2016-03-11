var http = require('../utils/http'),
    consumesEnv = require('../env').urls.getConsumes;

/**
 * 获取收益信息
 * - 昨日收益
 * - 今日收益
 * - 累计收益
 * - 账户余额
 */
module.exports = {
    url : '/consumes.do',
    method : 'get',
    execute : function(req,res){

        var result = {
            consumesCount : 0,      // 累计收益
            consumes4yesterday : 0, // 昨日收益
            consumes4today : 0,     // 今日收益
            moneyOfAccount : 0      // 账户余额
        };

        var responseCount = 0;

        var response = function(){
            if(responseCount == 4){
                res.writeJson(res.STATUS.SUCCESS,result,'收益信息获取成功');
            }
        };


        // 获取累计收益
        var consumesCountDatas = {};
        consumesCountDatas[consumesEnv.getConsumesCount.params.id] = req.userInfo.id;
        http.get(consumesEnv.getConsumesCount.url,consumesCountDatas).then(function(consumesCount){
            // 抛出错误异常
            if(consumesCount.status != 0){
                throw new Error(consumesCount.message,'get_consumes_count');
            }

            responseCount++;
            result.consumesCount = consumesCount.result;
            response();
        });


        // 获取昨日收益
        var consumes4yesterdayDatas = {};
        consumes4yesterdayDatas[consumesEnv.getConsumes4yesterday.params.id] = req.userInfo.id;
        http.get(consumesEnv.getConsumes4yesterday.url,consumes4yesterdayDatas).then(function(consumes4yesterday){

            if(consumes4yesterday.status != 0){
                throw new Error(consumes4yesterday.message,'get_consumes_4_yesterday');
            }

            responseCount++;
            result.consumes4yesterday = consumes4yesterday.result;
            response();
        });


        // 获取今日收益
        var consumes4todayDatas = {};
        consumes4todayDatas[consumesEnv.getConsumes4today.params.id] = req.userInfo.id;
        http.get(consumesEnv.getConsumes4today.url,consumes4todayDatas).then(function(consumes4today){
            if(consumes4today.status != 0){
                throw new Error(consumes4today.message,'get_consumes_4_today');
            }

            responseCount++;
            result.consumes4today = consumes4today.result;
            response();
        });

        // 获取账户余额
        var moneyOfAccountDatas = {};
        moneyOfAccountDatas[consumesEnv.getMoneyOfAccount.params.id] = req.userInfo.id;
        http.get(consumesEnv.getMoneyOfAccount.url,moneyOfAccountDatas).then(function(moneyOfAccount){
            if(moneyOfAccount.status != 0){
               throw new Error(moneyOfAccount.message,'get_money_of_account');
            }

            responseCount++;
            result.moneyOfAccount = moneyOfAccount.result;
            response();
        });

    }
};