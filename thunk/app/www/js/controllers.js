angular.module('starter.controllers', [])

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
    列表
*/
.controller('taskListCtrl', function($scope) {
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
    我的
*/
.controller('meCtrl', function($scope) {


});