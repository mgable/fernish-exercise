'use strict';

// product configuration 
angular.module('testApp')
.factory('myHttpInterceptor', function(){
	return {
		// technically not necessary; just a hook for use later
 		request: function(config){
			return config;
		},
		// this will pass a 404 request through to the service
		responseError: function(config){
			return config;
		}
	};
});