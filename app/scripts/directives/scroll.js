angular
    .module('RHalls')
    .directive('scroll', function($window) {
        return function($scope, element, attrs) {

            // initial offset value; stores precedent offset when compared with current
            var prior = 0;
            // threshold when scrolling up
            var threshold = 0;

            angular.element($window).bind("scroll", function() {

                var current = this.pageYOffset;

                if (current === 0) {
                    $scope.shrink_nav = false;
                } else if (current >= prior) {
                    threshold = 0;
                    $scope.shrink_nav = true;
                } else {
                    threshold++;
                    console.log(threshold);
                    if (threshold >= 10) {
                        $scope.shrink_nav = false;
                        threshold = 0;
                    }
                }

                prior = this.pageYOffset;
                $scope.$apply();

            });
        };
    });
