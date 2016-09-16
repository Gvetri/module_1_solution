(function() {
    'use strict';
    angular.module('LunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.food_s = "";
        $scope.status = "";

        $scope.splitter = function() {
          //If the string is empty split the string and check his length
            if ($scope.food_s != "") {
                var arrayOfStrings = $scope.food_s.split(",");

                if (arrayOfStrings.length <= 3) {
                    $scope.status = "Enjoy!";
                } else {
                    $scope.status = "Too much!";
                }
            } else{
              $scope.status = "Please enter data first!";
            }


        };

    }



})();