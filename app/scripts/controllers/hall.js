'use strict';

function HallCtrl ($scope, $rootScope, $location, $hall) {
    var hall_id = $location.path().split("/"); //.split("/").pop();
    console.log(hall_id);
}

angular
    .module('RHalls')
    .controller('HallCtrl', ['$scope', '$rootScope', '$location', '$hall', HallCtrl]);
