'use strict';

function AuthCtrl ($scope, $session, $auth) {
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.login_info = null;

    $scope.clear_info = function() {
        $scope.login_info = null;
    };

    $scope.login = function() {

        //console.log($scope.credentials);

        if (!$scope.credentials.email || !$scope.credentials.password) {
            console.log('You think you\'re smart?');
            return;
        }

        $auth
            .login($scope.credentials)
            .success(function(res) {
            })
            .error(function(e) {
                $scope.login_info = e.error;
            });
        $scope.loggedIn = $session.get('authenticated');

    };

    $scope.signup = function() {
        $auth.signup($scope.credentials);
    };
}

angular
    .module('RHalls')
    .controller('AuthCtrl', ['$scope', '$session', '$auth', AuthCtrl]);
