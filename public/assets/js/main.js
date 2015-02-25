(function() {
  var app = angular.module('workshop', []);
  app.controller('CalculatorController',['$scope', function($scope) {
    $scope.firstNumber = 1;
    $scope.secondNumber = 1;

    $scope.add = function() {
      return $scope.firstNumber + $scope.secondNumber;
    }

    $scope.subtract = function() {
      return $scope.firstNumber - $scope.secondNumber;
    }

    $scope.multiply = function() {
      return $scope.firstNumber * $scope.secondNumber;
    }
   
    $scope.divide = function() {
      return $scope.firstNumber / $scope.secondNumber;
    }

    $scope.modulo = function() {
      return $scope.firstNumber % $scope.secondNumber;
    }
  }]); 
})();