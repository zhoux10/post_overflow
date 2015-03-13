(function() {
  var app = angular.module('category', ['categoryServiceModule']);
  app.controller('CategoryController',['$scope', 'categoryService', function($scope, categoryData) {
  $scope.categoryData = categoryData;
  }]);
})();