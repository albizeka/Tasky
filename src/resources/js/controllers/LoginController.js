'use strict';

app.controller("LoginController" , function ($scope, $rootScope, LoginService){
	$scope.msgtxt='';
	$scope.login=function(data){
		LoginService.login(data,$scope); //call login service
	};

});
