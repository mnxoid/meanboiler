angular.module('RHalls')
    .directive('scroll', function($window) {
        return function(scope, element, attrs) {
            var initial = 0;

            angular.element($window).bind("scroll", function(e) {

                var current = this.pageYOffset;

                if (current >= initial) {
                    scope.boolChangeClass = true;
                } else {
                    scope.boolChangeClass = false;
                }

                initial = this.pageYOffset;
                scope.$apply();

            });
        };
    });
