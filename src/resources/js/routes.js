'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('login' , {
			url : '/login',
			templateUrl:'public/views/login.html'
		})

});