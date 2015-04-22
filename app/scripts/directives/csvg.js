'use strict';
/**
 * @ngdoc directive
 * @name RHalls.directives:csvg
 * @element csvg
 * @function
 *
 * @description
 * Inserts SVG into the page by given src attribute
 *
 *
 * @example
   <csvg src="path/to/file.svg"> </csvg>
 */
angular.module('RHalls')
  .directive('csvg', function() {
    return {
      templateUrl: function(elem, attr){
      return attr.src;
    }
    };
  });
