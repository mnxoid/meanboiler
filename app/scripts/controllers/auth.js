'use strict';

function AuthCtrl ($scope, $auth) {
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.login = function() {
        $auth
            .login($scope.credentials)
            .success(function(data) {
                console.log(data);
               // TODO: redirect to dashboard
            });
    };

    $scope.signup = function() {

        //console.log($scope.credentials);

        $auth.signup($scope.credentials);
    }
}

angular
    .module('RHalls')
    .controller('AuthCtrl', ['$scope', '$auth', AuthCtrl]);
