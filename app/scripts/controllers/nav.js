'use strict';

function NavCtrl ($scope, $auth, $session, ngDialog) {

    $scope.popover = {
        "avatar": 'Profile',
        "content": "Hello Popover<br /><img src='http://netgon.ru/upload/avatars/default-avatar-male.png'> <br> <a href='#' ng-click='logout()'>Log out</a>"
    };

    $scope.open_login = function() {
        ngDialog.open({ template: 'views/login.html',
                        controller: 'AuthCtrl',
                        className: 'ngdialog-theme-plain',
                        overlay: false
        });
    };

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
    .controller('NavCtrl', ['$scope', '$auth', '$session', 'ngDialog', NavCtrl]);
