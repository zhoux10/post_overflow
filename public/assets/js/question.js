(function() {
  var app = angular.module('question', ['questionServiceModule']);
  app.controller('QuestionController',['$scope', 'questionService', function($scope, questionData) {
  $scope.questionData = questionData;
}]);
})();
