'use strict';

angular.module('RHalls')
  .directive('csvg', function() {
    return {
      templateUrl: function(elem, attr){
      return attr.src;
    }
    };
  })
