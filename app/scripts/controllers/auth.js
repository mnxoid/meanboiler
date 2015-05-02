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
    $scope.is_email_err = false;
    $scope.is_pswd_err = false;

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
                console.log(e);
                $scope.err_msg_passport = e.error.errmsg;
                $scope.is_email_err = (e.error.code === 0) ? 1 : 0;
                $scope.is_pswd_err = (e.error.code === 1) ? 1 : 0;
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
