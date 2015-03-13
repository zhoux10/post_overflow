(function() {
  var app = angular.module('workshop-2', ['myFirstServiceModule']);
  app.controller('CalculatorController',['$scope', 'calculatorService', function($scope, calcService) {
    $scope.firstNumber = 1;
    $scope.secondNumber = 1;
    $scope.firstHidden = false;
    $scope.buttonText = 'Hide Me';

    $scope.add = function() {
      return calcService.add($scope.firstNumber,$scope.secondNumber);
    }

    $scope.subtract = function() {
      return calcService.subtract($scope.firstNumber,$scope.secondNumber);
    }

    $scope.multiply = function() {
      return calcService.multiply($scope.firstNumber,$scope.secondNumber);
    }
   
    $scope.divide = function() {
      return calcService.divide($scope.firstNumber,$scope.secondNumber);
    }

    $scope.modulo = function() {
      return calcService.modulo($scope.firstNumber,$scope.secondNumber);
    }

    $scope.hideFirst = function() {
      $scope.firstHidden = !$scope.firstHidden
      if ($scope.buttonText == 'Hide Me') {
        $scope.buttonText = 'Show Me';
      } else {
        $scope.buttonText = 'Hide Me'
      }
    }
  }]);

  app.controller('AlternateCalculateController',['calculatorService', function(calcService) {
    this.firstNumber = 1;
    this.secondNumber = 1;

    this.add = function() {
      return calcService.add(this.firstNumber,this.secondNumber);
    }

    this.subtract = function() {
      return calcService.subtract(this.firstNumber,this.secondNumber);
    }

    this.multiply = function() {
      return calcService.multiply(this.firstNumber,this.secondNumber);
    }
   
    this.divide = function() {
      return calcService.divide(this.firstNumber,this.secondNumber);
    }

    this.modulo = function() {
      return calcService.modulo(this.firstNumber,this.secondNumber);;
    }
  }]); 
})();