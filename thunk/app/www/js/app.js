// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    /*
        首页内容
    */
    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/home/home.html',
                controller: 'HomeCtrl'
            }
        }
    })
    /*
        粉丝邀请页
    */
    .state('tab.invite', {
        url: '/invite',
        views: {
            'tab-home': {
                templateUrl: 'templates/home/invite-fans.html',
                controller: 'InviteCtrl'
            }
        }
    })

    /*
        任务列表
    */
    .state('tab.taskList', {
        url: '/taskList',
        views: {
            'tab-task': {
                templateUrl: 'templates/task/task-list.html',
                controller: 'TaskListCtrl'
            }
        }
    })
    /*
        我的
    */
    .state('tab.me', {
        url: '/me',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/me.html',
                controller: 'MeCtrl'
            }
        }
    })
    /*
        重置密码
    */
    .state('tab.resetPass', {
        url: '/resetPass',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/reset-pass.html',
                controller: 'ResetPassCtrl'
            }
        }
    })
    /*
        关于我们
    */
    .state('tab.about', {
        url: '/about',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/about.html',
                controller: 'AboutCtrl'
            }
        }
    })
    /*
        未读消息
    */
    .state('tab.unread', {
        url: '/unread',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/unread-list.html',
                controller: 'UnreadListCtrl'
            }
        }
    })
    /*
        未读消息详情
    */
    .state('tab.unreadInfo', {
        url: '/unreadInfo',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/unread-info.html',
                controller: 'UnreadInfoCtrl'
            }
        }
    })
    /*
        粉丝详情
    */
    .state('tab.fansList', {
        url: '/fansList',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/fans-list.html',
                controller: 'FansListCtrl'
            }
        }
    })
    /*
        个人资料
    */
    .state('tab.personal', {
        url: '/personal',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/personal.html',
                controller: 'PersonalCtrl'
            }
        }
    })
    /*
        提现
    */
    .state('tab.tixian', {
        url: '/tixian',
        views: {
            'tab-me': {
                templateUrl: 'templates/me/tixian-list.html',
                controller: 'TiXianCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');
});