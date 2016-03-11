var stringUtils = require('../utils/string'),
    uuid = require('node-uuid'),
    cache = require('../MapCache'),
    http = require('../utils/http');

var env = require('../env').urls.loginOfWechat,
    weichatEnv = require('../env').wechat.oauth;

var OAuth = require('wechat-oauth');
var Promise = require('bluebird');

var client = Promise.promisifyAll(new OAuth(weichatEnv.appid,weichatEnv.secret));

module.exports = {
    url : '/weichat/login.do',
    method : 'get',
    execute : function(req,res){
        // 获取openId
        var wechatCode = req.query.code;
        client.getUserByCode(wechatCode).then(function(wechatResult){
            var openId = wechatResult.openId;
            datas[env.params.wechatId] = openId;
            datas[env.params.city] = wechatResult.city;
            datas[env.params.headimgUrl] = wechatResult.headimgUrl;
            datas[env.params.nickname] = wechatResult.nickname;
            datas[env.params.province] = wechatResult.province;
            datas[env.params.sex] = wechatResult.sex;
            datas[env.params.userId] = res.userInfo.id; // 如果有用户id,则表示是进行绑定微信操作
            // 远程服务器验证,注册或者登录
            return http.post(env.url,datas);
        }).then(function(response){
            if(response.status != 0){
                throw new Error(response.message,'weichat_login');
            }

            var loginToken = uuid.v4();
            cache.addCache(loginToken,env.cache.userInfo,response.result);  // 缓存用户信息
            res.writeJson(res.STATUS.SUCCESS,{token:loginToken,userInfo:response.result},response.message);

        });

    }
};
