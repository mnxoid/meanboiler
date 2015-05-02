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
      link: function(scope, element) {

          element[0].childNodes[4].style.height = '90px';
          element[0].childNodes[4].style.width = '90px';
          element[0].childNodes[4].style.display = 'block';
          element[0].childNodes[4].style.margin = 'auto';
      },
      templateUrl: function(elem, attr){
      return attr.src;
    }
    };
  });
