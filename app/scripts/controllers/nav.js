'use strict';

function NavCtrl ($scope, $auth, $session) {


    $scope.popover = {
        "avatar": 'Profile',
        "content": "Hello Popover<br /><img src='http://netgon.ru/upload/avatars/default-avatar-male.png'> <br> <a href='#' ng-click='logout()'>Log out</a>"
    };
    $scope.navlinks = [
        {
            nghr: "/",
            uisr: "home",
            text: "Home"
        },
        {
            nghr: "/about",
            uisr: "about",
            text: "About"
        },
        {
            nghr: "/contact",
            uisr: "contact",
            text: "Contact"
        },
        {
            nghr: "/todo",
            uisr: "todo",
            text: "Todo"
        },
        {
            nghr: "/test",
            uisr: "test",
            text: "Test"
        }
    ];

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
    .controller('NavCtrl', ['$scope', '$auth', '$session', NavCtrl]);
