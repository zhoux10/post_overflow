(function() {
  var app = angular.module('questionServiceModule', []);
  app.factory('questionService',['$location', '$http', function($location, $http) {
    var questionData = {};
    var questionsURL = '/questions.json';
    questionData.questions = [];

    // Alternative syntax
    // promise = call get 
    // $http.get('/questions.json').success(function(data){myServiceInstance.questions=data}).error(console.log('error'))

    $http({
      method: 'get',
      url:  questionsURL,
      headers: { 'Content-Type': 'application/json' }
      }).success(function(data) {
        questionData.questions = data;
      });

    return questionData;
  }]);
})();
