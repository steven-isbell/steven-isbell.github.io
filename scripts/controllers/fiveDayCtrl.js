angular.module('weatherApp')
    .controller('mainCtrl', function($scope, fiveDayService) {

        $scope.getForecast = function(name) {
            $scope.name = "";
            fiveDayService.getForecast(name).then(function(myForecast) {
                $scope.forecast = results;

            });
        };



    });
