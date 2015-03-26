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