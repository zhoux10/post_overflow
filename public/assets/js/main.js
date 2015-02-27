(function() {
  var app = angular.module('workshop', []);
  app.controller('CalculatorController',['$scope', function($scope) {
    $scope.firstNumber = 1;
    $scope.secondNumber = 1;
    $scope.firstHidden = false;
    $scope.firstButtonText = 'Hide Me';

    $scope.add = function() {
      return $scope.firstNumber + $scope.secondNumber;
    };

    $scope.subtract = function() {
      return $scope.firstNumber - $scope.secondNumber;
    };

    $scope.multiply = function() {
      return $scope.firstNumber * $scope.secondNumber;
    };

    $scope.divide = function() {
      return $scope.firstNumber / $scope.secondNumber;
    };

    $scope.modulo = function() {
      return $scope.firstNumber % $scope.secondNumber;
    };

    $scope.hideFirst = function() {
      $scope.firstHidden = !$scope.firstHidden;
      if ($scope.buttonText == 'Hide Me') {
        $scope.buttonText = 'Show Me';
      } else {
        $scope.buttonText = 'Hide Me';
      }
    };
  }]);

  app.controller('AlternateCalculateController',function() {
    this.firstNumber = 1;
    this.secondNumber = 1;
    this.secondHidden = false;
    this.secondButtonText = 'Hide Me';

    this.add = function() {
      return this.firstNumber + this.secondNumber;
    };

    this.subtract = function() {
      return this.firstNumber - this.secondNumber;
    };

    this.multiply = function() {
      return this.firstNumber * this.secondNumber;
    };

    this.divide = function() {
      return this.firstNumber / this.secondNumber;
    };

    this.modulo = function() {
      return this.firstNumber % this.secondNumber;
    };

    this.hideSecond = function() {
      this.secondHidden = !$scope.firstHidden;
      if ($scope.buttonText == 'Hide Me') {
        this.buttonText = 'Show Me';
      } else {
        this.buttonText = 'Hide Me';
      }
    };
  });
})();
