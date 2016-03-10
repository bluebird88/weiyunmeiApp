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
            url : '',
            params : {
                loginName : 'loginName',
                password : 'password'
            }
        },
        // 收益相关页面
        getConsumes : {
            // 获取累计收益
            getConsumesCount : {
                url : '',
                params : {
                    id : 'id'
                }
            },
            // 获取昨日收益
            getConsumes4yesterday : {
                url : '',
                params : {
                    id : 'id'
                }
            },
            // 获取今日收益
            getConsumes4today : {
                url : '',
                params : {
                    id : 'id'
                }
            },
            // 获取账户余额
            getMoneyOfAccount : {
                url : '',
                params : {
                    id : 'id'
                }
            }
        },
        // 获取广告数量
        getUserAdvertisementCount : {
            url : '',
            params : {
                status : 'status',
                userId : 'user.id'
            },
            status : {
                complete : ''
            }
        },
        // 获取广告详情
        getAdvertisementDetail : {
            url : '',
            params : {
                id : 'id'
            }
        },
        // 获取用户广告状态
        getUserAdvertisementStatus : {
            url : '',
            params : {
                userId : 'user.id',
                advertisementIds : 'advertisementIds'
            }
        },
        // 获取所有的广告列表
        getAdvertisements : {
            url : '',
            params : {
                pageNum : 'pageNum',
                pageSize : 'pageSize'
            }
        },
        // 获取广告类型列表
        getAdvertisementTypes : {
            url : ''
        },
        // 获取提现明细
        getCashingDetail : {
            url : '',
            params : {
                userId : 'user.id'
            }
        },
        // 获取收益明细
        getConsumeDetails : {
            url : '',
            params : {
                userId : ''
            }
        },
        // 获取粉丝收益
        getConsumeOfFans : {
            url : '',
            params : {
                userId : ''
            }
        },
        // 获取粉丝列表
        getFans : {
            url : '',
            params : {
                userId : ''
            }
        },
        // 完成任务
        putAdvertisementOfComplete : {
            url : '',
            params : {
                userId : '',
                advertisementId : '',
                data : ''       // {name:value,name:value} - base64加密
            }
        },
        // 接受任务
        putAdvertisementOfStart : {
            url : '',
            params : {
                userId : '',
                advertisementId : ''
            }
        },
        // 修改密码
        resetPassword : {
            url : '',
            params : {
                newPassword : '',
                oldPassword : '',
                userId : ''
            }
        },
        // 修改用户资料
        putUserInfo : {
            url : '',
            params : {
                userId : '',
                icon : '',
                name : '',
                sex : '',
                mobile : '',
                birthday : '',
                address : ''
            }
        },
        // 用户注册
        register : {
            url : '',
            params : {
                mobile : '',
                password : ''
            }
        },
        // 微信登录
        loginOfWechat : {
            url : '',
            params : {
                wechatId : '',
                nickname : '',
                sex : '',
                province : '',
                city : '',
                headimgUrl : '',
                userId : ''
            }
        }
    },
    cache : {
        userInfo : 'userInfo'
    }
};