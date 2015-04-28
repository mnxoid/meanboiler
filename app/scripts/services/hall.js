'use strict';

angular
  .module('RHalls')
  .factory('$hall', ['$http', function($http) {
      return {
        get: function() {
          return $http.get('/api/halls');
        },
        create: function(data) {
          return $http.post('/api/halls/', data);
        },
        delete: function(id) {
          return $http.delete('/api/halls/' + id);
        },
        getCities: function(country) {
          return $http.get('/api/halls/cities/' + country);
        },
      }
  }]);
