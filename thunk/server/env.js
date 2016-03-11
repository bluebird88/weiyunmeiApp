module.exports = {
    host : '',
    port : 80,
    clientId : '',
    clientKey : '',
    wechat : {
        oauth : {
            appid : 'appid',
            secret : 'secret'
        }
    },
    urls : {
        // 根据用户名和密码获取用户
        findByLoginNameAndPassword : {
            url : '/user.do',
            params : {
                loginName : 'mobile',
                password : 'password'
            }
        },
        // 收益相关页面
        getConsumes : {
            // 获取累计收益
            getConsumesCount : {
                url : '/user/consume/log/count.do',
                params : {
                    id : 'user.id'
                }
            },
            // 获取昨日收益
            getConsumes4yesterday : {
                url : '/user/consume/log/yesterday.do',
                params : {
                    id : 'user.id'
                }
            },
            // 获取今日收益
            getConsumes4today : {
                url : '/user/consume/log/today.do',
                params : {
                    id : 'user.id'
                }
            },
            // 获取账户余额
            getMoneyOfAccount : {
                url : '/user/money/:id.do',
                params : {
                    id : 'id'
                }
            }
        },
        // 获取广告数量
        getUserAdvertisementCount : {
            url : '/user/advertisement/count.do',
            params : {
                status : 'status',
                userId : 'user.id'
            },
            status : {
                end : 2
            }
        },
        // 获取广告详情
        getAdvertisementDetail : {
            url : '/advertisement/:id.do',
            params : {
                id : 'id'
            }
        },
        // 获取用户广告状态
        getUserAdvertisementStatus : {
            url : '/user/advertisement/status.do',
            params : {
                userId : 'user.id',
                advertisementIds : 'advertisementIds'
            }
        },
        // 获取所有的广告列表
        getAdvertisements : {
            url : '/advertisement.do?paging=true',
            params : {
                pageNum : 'pageNum',
                pageSize : 'pageSize'
            }
        },
        // 获取广告类型列表
        getAdvertisementTypes : {
            url : '/advertisement/type.do'
        },
        // 获取提现明细
        getCashingDetail : {
            url : '/user/cashing/log.do',
            params : {
                userId : 'user.id'
            }
        },
        // 获取收益明细
        getConsumeDetails : {
            url : '/user/consume/log.do',
            params : {
                userId : 'user.id'
            }
        },
        // 获取粉丝收益
        getConsumeOfFans : {
            url : '/user/consume/log/fans.do',
            params : {
                userId : 'user.id'
            }
        },
        // 获取粉丝列表
        getFans : {
            url : '/user/:id/fans.do',
            params : {
                userId : 'id'
            }
        },
        // 提交任务
        putAdvertisementOfComplete : {
            url : '/user/advertisement/:userId/:advertisementId.do?status=complete',
            params : {
                userId : 'userId',
                advertisementId : 'advertisementId',
                data : 'data'       // {name:value,name:value} - base64加密
            }
        },
        // 接受任务
        putAdvertisementOfStart : {
            url : '/user/advertisement/:userId/:advertisementId.do?status=start',
            params : {
                userId : 'userId',
                advertisementId : 'advertisementId'
            }
        },
        // 修改密码
        resetPassword : {
            url : '/user/password.do',
            params : {
                newPassword : 'newPassword',
                oldPassword : 'oldPassword',
                userId : 'id'
            }
        },
        // 修改用户资料
        putUserInfo : {
            url : '/user/:id.do',
            params : {
                userId : 'id',
                icon : 'icon',
                name : 'name',
                sex : 'sex',
                mobile : 'mobile',
                birthday : 'birthday',
                address : 'address'
            }
        },
        // 用户注册
        register : {
            url : '/user.do',
            params : {
                mobile : 'mobile',
                password : 'password'
            }
        },
        // 微信登录
        loginOfWechat : {
            url : '/user/wechat.do',
            params : {
                wechatId : 'wechatId',
                nickname : 'nickname',
                sex : 'sex',
                province : 'province',
                city : 'city',
                headimgUrl : 'headimgUrl',
                userId : 'userId'
            }
        }
    },
    cache : {
        userInfo : 'userInfo'
    }
};