(function(){
  var hello = angular.module('hello', []);
  hello.controller("stringGameController", ['$scope', function($scope) {
  // body...
    $scope.firstName = 'Kerry';
    $scope.lastName = 'Rosado';
    $scope.firstHidden = false;
    $scope.firstButtonText = "Hide";

    $scope.add = function() {
      return $scope.firstName + ' ' + $scope.lastName;
    };

    $scope.hideFirst = function () {
      $scope.firstHidden = !$scope.firstHidden;
      if ($scope.firstHidden) {
        $scope.firstButtonText = "Hide";
      } else {
        $scope.firstButtonText = "Show";
      }
    };
  }]);

  hello.controller('stringGameControllerNew', ["$scope", function ($scope) {
    $scope.className = "Biology";
    $scope.credits = 1;
    $scope.secondHidden = false;
    $scope.secondButtonText = "Hide";

    $scope.hideSecond = function () {
      $scope.secondHidden = !$scope.secondHidden;
      if ($scope.secondHidden) {
        $scope.secondButtonText = "Hide";
      } else {
        $scope.secondButtonText = "Show";
      }
    };
  }]);
})();
