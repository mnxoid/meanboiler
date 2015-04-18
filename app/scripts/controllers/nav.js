'use strict';

function NavCtrl ($scope, $auth) {
    $scope.getUserName = function() {
        //console.log($auth.user())
        return $auth.user().user.local.email;
    };
}

angular
    .module('RHalls')
    .controller('NavCtrl', ['$scope', '$auth', NavCtrl]);
