'use strict';

function AuthCtrl ($scope, $session, $auth) {

    $scope.credentials = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        user: ''
    };

    $scope.err_msg_passport = null;

    $scope.clear_err_msg = function() {
        $scope.err_msg_passport = null;
    };

    $scope.login = function(form) {

        if (!form.$valid) {
            console.log('You\'ve bypassed disabled button, huh?\n You shall not pass!');
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
        $auth.login($scope.credentials);
        $scope.loggedIn = $session.get('authenticated');
    };
}

angular
    .module('RHalls')
    .controller('AuthCtrl', ['$scope', '$session', '$auth', AuthCtrl]);
