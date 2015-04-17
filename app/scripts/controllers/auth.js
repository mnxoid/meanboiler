'use strict';

function AuthCtrl ($scope, $auth) {
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.login_info = null;

    $scope.clear_info = function() {
        $scope.login_info = null;
    };

    $scope.login = function() {
        $auth
            .login($scope.credentials)
            .success(function(res) {
            })
            .error(function(e) {
                $scope.login_info = e.error;
            })
    };

    $scope.signup = function() {
        $auth.signup($scope.credentials);
    };
}

angular
    .module('RHalls')
    .controller('AuthCtrl', ['$scope', '$auth', AuthCtrl]);
