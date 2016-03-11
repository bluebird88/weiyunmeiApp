angular.module('starter.controllers', ['ngCordova'])

/*
    首页
*/
.controller('HomeCtrl', function($scope) {
    function GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        return y+"-"+m+"-"+d;
    }
    $scope.yesterday = GetDateStr(-1);
    $scope.lists = [{name:1},{name:1},{name:1}];
})
/*
    粉丝邀请页
*/
.controller('InviteCtrl', function($scope) {

})
/*
    任务列表
*/
.controller('TaskListCtrl', function($scope) {
    $scope.items = [{name:1},{name:1},{name:1},{name:1}];
    $scope.vm = {
        moredata : true,
        doRefresh : function() {
            $scope.$broadcast('scroll.refreshComplete');
        },
        loadMore : function() {
            var items = [{name:1},{name:1},{name:1}];
            $scope.items = items.concat($scope.items);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };

})
/*
    提现列表
*/
.controller('TiXianCtrl', function($scope) {
    $scope.items = [{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5}];
    $scope.vm = {
        moredata : true,
        doRefresh : function() {
            $scope.$broadcast('scroll.refreshComplete');
        },
        loadMore : function() {
            var items = [{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5},{name:'兑换现金','date':'2016-03-02 18:52:52',money:5}];
            $scope.items = items.concat($scope.items);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };

})
/*
    重置密码
*/
.controller('ResetPassCtrl', function($scope, $ionicPopup) {
    var showAlert = function(_title) {
         var alertPopup = $ionicPopup.alert({
           title: _title+'!'
         });
    };
    $scope.submit = function(user) {
        if ( user.password == '' ) {
            showAlert('请输入旧密码');
        }
        else if ( user.newPassword == '' ) {
            showAlert('请输入新密码');
        }
        else if ( user.newPassword2 == '' ) {
            showAlert('请再次输入新密码');
        }
        else if ( user.newPassword != user.newPassword2 ) {
            showAlert('两次新密码输入不一致!');
        }
        else {
            Data.setPassword(user.password, user.newPassword).then(function(data) {
                if ( data.status == 'success' ) {
                    alert(data.message);
                    $ionicHistory.goBack(undefined);
                }
                else {
                    alert(data.message);
                }
                console.log(data);
                /*if ( data.status == '0' ) {
                    var backCount = undefined;
                    $ionicHistory.goBack(backCount);
                    var query = "update user set password='"+md5(user.newPassword)+"' where id=1";
                    $cordovaSQLite.execute(db, query).then(function(res) {

                    }, function (err) {
                        //console.error(err);
                    });
                }
                else {
                    alert(data.msg);
                }*/
            });
        }
    }
})
/*
    未读消息列表
*/
.controller('UnreadListCtrl', function($scope) {
    $scope.items = [{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'},{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}];
    $scope.vm = {
        moredata : true,
        doRefresh : function() {
            $scope.$broadcast('scroll.refreshComplete');
        },
        loadMore : function() {
            var items = [{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'},{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}];
            $scope.items = items.concat($scope.items);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };
})
/*
    粉丝详情
*/
.controller('FansListCtrl', function($scope) {
    $scope.items = [{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'},{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}];
    $scope.vm = {
        moredata : true,
        doRefresh : function() {
            $scope.$broadcast('scroll.refreshComplete');
        },
        loadMore : function() {
            var items = [{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'},{name:'通知：您于2月13日提交的提现记录成功，请xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}];
            $scope.items = items.concat($scope.items);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };
})
/*
    个人资料
*/
.controller('PersonalCtrl', function($scope, $cordovaDatePicker) {
    var options = {
        date: new Date(),
        mode: 'date', // or 'time'
        minDate: new Date() - 10000,
        allowOldDates: true,
        allowFutureDates: false,
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };

       document.addEventListener("deviceready", function () {

           $cordovaDatePicker.show(options).then(function(date){
               alert(date);
           });

         }, false);
})
/*
    未读消息详情
*/
.controller('UnreadInfoCtrl', function($scope) {
})
/*
    关于我们
*/
.controller('AboutCtrl', function($scope) {

})
/*
    我的
*/
.controller('MeCtrl', function($scope) {
    $scope.exitApp = function() {
        ionic.Platform.exitApp();
    }
});