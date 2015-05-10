angular
    .module('RHalls')
    .directive('scroll', function($window) {
        return function($scope, element, attrs) {

            // initial offset value; stores precedent offset when compared with current
            var prior = 0;
            // threshold when scrolling up
            var threshold_up = 0;
            var threshold_down = 0;
            var threshold_up_limit = 10;
            var threshold_down_limit = 10;

            angular.element($window).bind("scroll", function() {

                var current = this.pageYOffset;

                if (!current) {
                    $scope.shrink_nav = false;
                } else if (current >= prior) {
                    threshold_up = 0;
                    threshold_down++;
                    if (threshold_down >= threshold_down_limit) {
                        $scope.shrink_nav = true;
                        threshold_down = 0;
                    }
                } else {
                    threshold_down = 0;
                    threshold_up++;
                    if (threshold_up >= threshold_up_limit) {
                        $scope.shrink_nav = false;
                        threshold_up = 0;
                    }
                }

                prior = this.pageYOffset;
                $scope.$apply();

            });
        };
    });
