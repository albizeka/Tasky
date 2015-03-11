var app = angular.module('tasky' , ['ui.router']);

'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('login' , {
			url : '/login',
			templateUrl:'public/views/login.html'
		})

});

'use strict';

app.controller('LoginController' , function ($scope){
	$scope.message = "Simple Login";
});

App.controller("RegisterController" , function ($scope){
	$scope.message = "Register";
})