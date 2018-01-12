'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

angular.module('testApp')
.controller('BreedCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {

	function _init(){
		console.info($stateParams);
		// Search.getBreeds().then(function(response){
		// 	console.info(response);
		// })
	}

	_init();

}]);
 
