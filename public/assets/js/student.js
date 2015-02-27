(function(){
  var hello = angular.module('hello', []);
  hello.controller("stringGameController", ['$scope', function($scope) {
  // body...
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.firstHidden = false;
    $scope.firstButtonText = "Hide";

    $scope.reading = function() {
      if ($scope.firstName && $scope.lastName) {
        return $scope.capitalize($scope.firstName) + ' ' + $scope.capitalize($scope.lastName);
      }
    };

    $scope.forms = function() {
      if ($scope.firstName && $scope.lastName) {
        return $scope.capitalize($scope.lastName) + ', ' + $scope.capitalize($scope.firstName);
      }
    };

    $scope.hideFirst = function () {
      $scope.firstHidden = !$scope.firstHidden;
      if ($scope.firstHidden) {
        $scope.firstButtonText = "Show";
      } else {
        $scope.firstButtonText = "Hide";
      }
    };

    $scope.capitalize = function (string) {
      return string[0].toUpperCase() + string.slice(1);
    };
  }]);

  hello.controller('stringGameControllerNew', ["$scope", function ($scope) {
    $scope.className = "";
    $scope.credits = null;
    $scope.secondHidden = false;
    $scope.secondButtonText = "Hide";

    $scope.hideSecond = function () {
      $scope.secondHidden = !$scope.secondHidden;
      if ($scope.secondHidden) {
        $scope.secondButtonText = "Show";
      } else {
        $scope.secondButtonText = "Hide";
      }
    };

    $scope.classParse = function () {
      if ($scope.className && $scope.credits) {
        return $scope.className + " has " + $scope.credits;
      }
    };
  }]);
})();
