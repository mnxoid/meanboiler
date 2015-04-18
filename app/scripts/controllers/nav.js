'use strict';

function NavCtrl ($scope, $session) {
    $scope.getUserName = function() {
        return $session.get('username');
    };
}

angular
    .module('RHalls')
    .controller('NavCtrl', ['$scope', '$session', NavCtrl]);
