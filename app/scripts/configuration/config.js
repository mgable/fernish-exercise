'use strict';

// product configuration 
angular.module('testApp')
.constant('CONFIG', {
	api: {
		domain: "https://dog.ceo/api/",
	}
});

// 404 interceptor
angular.module('testApp')
.config(function($httpProvider){
	$httpProvider.interceptors.push('myHttpInterceptor');
});