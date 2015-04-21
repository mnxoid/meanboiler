'use strict';

function NavCtrl ($scope, $auth, $session) {
    $scope.logged_in = function() {
        return $session.get('authenticated');
    };
    $scope.get_username = function() {
        return $session.get('username');
    };
    $scope.logout = function() {
        $auth.logout();
    };
}

angular
    .module('RHalls')
    .controller('NavCtrl', ['$scope', '$auth', '$session', NavCtrl]);
