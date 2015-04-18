'use strict';

angular
    .module('RHalls')
    .factory('$validator', ['', function() {

        var validate_email =  function(email) {
            var email_re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            return email_re.test(email);
        };

        return {

        }
    }]);
