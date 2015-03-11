'use strict';

var app = angular.module('tasky' , ['ui.router']);

app.controller('LoginController' , function ($scope){
	$scope.message = "Simple Login";
});

'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('login' , {
			url : '/login',
			templateUrl:'public/views/login.html'
		})

});