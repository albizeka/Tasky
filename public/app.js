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
		.state('home' , {
			url : '/home',
			template : "<h1>home here</h1>"
		})


});

'use strict';

app.controller("LoginController" , function ($scope, $rootScope, LoginService){
	$scope.msgtxt='';
	$scope.login=function(data){
		LoginService.login(data,$scope); //call login service
	};

});


app.controller("RegisterController" , function ($scope){
	$scope.message = "Register";
})

'use strict';

app.factory('LoginService' , function ($http , $location , sessionService){
	return {
		login:function(data,scope){
			var $promise=$http({
				method : "POST",
				url : "backend/index.php/Welcome/login",
				headers : {'Content-Type':'application/json'},
				data: JSON.stringify(data)
			}); //send data to user.php
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid.status == "success"){
					//scope.msgtxt='Correct information';
					sessionService.set('uid',uid);
					$location.path('/home');
					
				}	       
				else  {
					scope.msgtxt='incorrect information';
					$location.path('/login');
				}				   
			});
		},
		logout:function(){
			sessionService.destroy('uid');
			$location.path('/login');
		},
		islogged:function(){
			var $checkSessionServer=$http.post('backend/index.php/Welcome/check');
			return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}
	}
});



'use strict';

app.factory('sessionService', function ($http){
	return{
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get:function(key){
			return sessionStorage.getItem(key);
		},
		destroy:function(key){
			$http.post('backend/index.php/welcome/destroy');
			return sessionStorage.removeItem(key);
		}
	}
});