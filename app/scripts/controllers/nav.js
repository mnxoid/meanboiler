'use strict';

function NavCtrl ($scope, $auth, $session) {
    $scope.loggedIn = function() {
        return $session.get('authenticated');
    };
    $scope.getUserName = function() {
        return $session.get('username');
    };
    $scope.logout = function() {
        $auth.logout();
    };
}

angular
    .module('RHalls')
    .controller('NavCtrl', ['$scope', '$auth', '$session', NavCtrl]);
