'use strict';

angular.module('meanApp')
  .directive('csvg', function() {
    return {
      templateUrl: function(elem, attr){
      return attr.src;
    }
    };
  })
