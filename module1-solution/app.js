(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.lunchText = "";
  $scope.message = "Please enter data first";

  $scope.countLunchItems = function () {
   var lunchItems = $scope.lunchText;
   var arrayOfLunchItems = lunchItems.split(',');
   if(lunchItems == "") {
     $scope.message = "Please enter data first";
   }
   else if(arrayOfLunchItems.length < 4) {
     $scope.message = "Enjoy!";
   }
   else {
     $scope.message = "Too much!";
   }
 };
}
})();
