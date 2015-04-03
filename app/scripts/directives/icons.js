'use strict';

angular.module('meanApp')
  .directive('house', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../fonts/svg/HOME.svg'
    }
  })
  .directive('glass', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../fonts/svg/MAGNIFYING GLASS.svg'
    }
  })
  .directive('magnet', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../fonts/svg/MAGNET.svg'
    }
  })
  .directive('csvg', function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: function(elem, attr) {
        return attr.src;
      }
    }
  })
