'use strict';

function AuthCtrl ($scope, $auth) {
    $scope.credentials = {};
    $scope.login = function() {
        $auth
            .login($scope.credentials)
            .success(function() {
                console.log("Auth successful");
               // TODO: redirect to dashboard
            });
    }
}

angular
    .module('RHalls')
    .controller('AuthCtrl', AuthCtrl);
