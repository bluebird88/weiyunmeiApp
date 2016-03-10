var express = require('express');
var router = express.Router();

/* 用户登录 */
var login = require('./login');
router[login.method](login.url,login.execute);

/* 获取收益信息 - 昨日收益,累计收益,今日收益,账户余额 */
var consumes = require('./getConsumes');
router[consumes.method](consumes.url,consumes.execute);

/* 获取已完成的广告总数 */
var getAdvertisementCountOfComplete = require('./getAdvertisementCountOfComplete');
router[getAdvertisementCountOfComplete.method](getAdvertisementCountOfComplete.url,getAdvertisementCountOfComplete.execute);

/* 获取广告详情 */
var getAdvertisementDetail = require('./getAdvertisementDetail');
router[getAdvertisementDetail.method](getAdvertisementDetail.url,getAdvertisementDetail.execute);

/* 获取广告列表 */
var getAdvertisements = require('./getAdvertisements');
router[getAdvertisements.method](getAdvertisements.url,getAdvertisements.execute);

/* 获取所有的广告类型 */
var getAdvertisementTypes = require('./getAdvertisementTypes');
router[getAdvertisementTypes.method](getAdvertisementTypes.url,getAdvertisementTypes.execute);

/* 获取提现明细 */
var getCashingDetail = require('./getCashingDetail');
router[getCashingDetail.method](getCashingDetail.url,getCashingDetail.execute);

/* 获取收益明细 */
var getConsumeDetails = require('./getConsumeDetails');
router[getConsumeDetails.method](getConsumeDetails.url,getConsumeDetails.execute);

/* 获取粉丝收益 */
var getConsumeOfFans = require('./getConsumeOfFans');
router[getConsumeOfFans.method](getConsumeOfFans.url,getConsumeOfFans.execute);

/* 获取粉丝列表 */
var getFans = require('./getFans');
router[getFans.method](getFans.url,getFans.execute);

/* 用户提现 */
var postCashing = require('./postCashing');
router[postCashing.method](postCashing.url,postCashing.execute);

/* 提交任务 */
var putAdvertisementOfComplete = require('./putAdvertisementOfComplete');
router[putAdvertisementOfComplete.method](putAdvertisementOfComplete.url,putAdvertisementOfComplete.execute);

/* 接受任务 */
var putAdvertisementOfStart = require('./putAdvertisementOfStart');
router[putAdvertisementOfStart.method](putAdvertisementOfStart.url,putAdvertisementOfStart.execute);

/* 修改密码 */
var putOfPassword = require('./putOfPassword');
router[putOfPassword.method](putOfPassword.url,putOfPassword.execute);

/* 修改用户资料 */
var putUserInfo = require('./putUserInfo');
router[putUserInfo.method](putUserInfo.url,putUserInfo.execute);

/* 用户注册 */
var postRegister = require('./postRegister');
router[postRegister.method](postRegister.url,postRegister.execute);

/* 微信登录 */
var wechatLogin = require('./wechatLogin');
router[wechatLogin.method](wechatLogin.url,wechatLogin.execute);

module.exports = router;
