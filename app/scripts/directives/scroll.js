angular.module('RHalls')
    .directive('scroll', function($window) {
        return function(scope, element, attrs) {

            angular.element($window).bind("scroll", function() {
                //TODO: on scroll down -> add class, on scroll up -> remove
                if (this.pageYOffset >= 50) {
                    scope.boolChangeClass = true;
                } else {
                    scope.boolChangeClass = false;
                }
                scope.$apply();
            });
        };
    });
