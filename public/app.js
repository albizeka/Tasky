var app = angular.module('tasky' , ['ui.router']);

'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('login' , {
			url : '/login',
			templateUrl:'public/views/login.html'
		})
		.state('register' , {
			url : '/register',
			template : "<h1>Register here</h1>"
		})

});

'use strict';

app.controller('LoginController' , function ($scope){
	
});

App.controller("RegisterController" , function ($scope){
	$scope.message = "Register";
})