'use strict';

function AuthCtrl ($scope, $auth) {
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.login = function() {
        $auth.login($scope.credentials);
    };

    $scope.signup = function() {
        $auth.signup($scope.credentials);
    };
}

angular
    .module('RHalls')
    .controller('AuthCtrl', ['$scope', '$auth', AuthCtrl]);
