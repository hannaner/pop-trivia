var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'usersController'
		})
		.when('/main', {
			templateUrl: 'partials/main.html',
			controller: 'scoreboardController'
		})
		.when('/lets_play', {
			templateUrl: 'partials/play.html',
			controller: 'gameController'
		})
		.when('/new_question', {
			templateUrl: 'partials/question.html',
			controller: 'questionsController'
		})
		.otherwise({
			redirectTo: '/'
		});
		
})