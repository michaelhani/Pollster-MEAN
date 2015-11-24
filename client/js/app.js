var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/main', {
		templateUrl: '/partials/main.partial.html'
	})
	.when('/newsurvey', {
		templateUrl: '/partials/newsurvey.partial.html'
	})
	.when('/login', {
		templateUrl: '/partials/login.partial.html'
	})
	.when('/survey', {
		templateUrl: '/partials/survey.partial.html'
	})
	.otherwise('/login');
});