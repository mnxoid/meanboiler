'use strict';

angular
  .module('RHalls')
  .factory('$session', [function () {
    return {
      set: function(key, val) {
        return sessionStorage.setItem(key, val);
      },
      get: function(key) {
        return sessionStorage.getItem(key);
      },
      unset: function(key) {
        return sessionStorage.removeItem(key)
      }
    }
  }]);
