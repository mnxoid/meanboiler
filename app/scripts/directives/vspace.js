'use strict';
/**
 * @ngdoc directive
 * @name RHalls.directives:vspace
 * @element vspace
 * @function
 *
 * @description
 * A simple vertical spacer
 *
 *
 * @example
   <vspace height="70px"/>
 */
angular.module('RHalls')
  .directive('vspace', function() {
    return {
      template: function(elem, attr){
      return "<div style=\"width:100%;margin:0px;height:"+attr.height+";\"></div>";
    }
    };
  });
