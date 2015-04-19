'use strict';

function AuthCtrl ($scope, $session, $auth) {

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.err_msg_passport = null;

    $scope.clear_err_msg = function() {
        $scope.err_msg_passport = null;
    };

    $scope.login = function() {

        if (!$scope.credentials.email || !$scope.credentials.password) {
            console.log('You think you\'re smart?');
            return;
        }

        $auth
            .login($scope.credentials)
            .success(function(res) {
            })
            .error(function(e) {
                $scope.err_msg_passport = e.error;
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
