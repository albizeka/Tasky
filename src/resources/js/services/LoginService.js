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