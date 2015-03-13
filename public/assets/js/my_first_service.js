(function() {
  var app = angular.module('myFirstServiceModule', []);
  app.factory('calculatorService', function() {
    var myServiceInstance = {};
    myServiceInstance.add = function(fNumber,sNumber) {
      return fNumber + sNumber;
    }

    myServiceInstance.subtract = function(fNumber,sNumber) {
      return fNumber - sNumber;
    }

    myServiceInstance.multiply = function(fNumber,sNumber) {
      return fNumber * sNumber;
    }
   
    myServiceInstance.divide = function(fNumber,sNumber) {
      return fNumber / sNumber;
    }

    myServiceInstance.modulo = function(fNumber,sNumber) {
      return fNumber % sNumber;
    }

    return myServiceInstance;
  });
})();