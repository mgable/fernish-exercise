'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

 console.info("loaded breed.js");
angular.module('testApp')
.controller('BreedCtrl', ["$scope", "Search", "$location", "$stateParams", "CONFIG", "$q", function ($scope, Search, $location, $stateParams, CONFIG, $q) {

	init();

	function init(){
		console.info("I have Breed inited!");
		console.info($stateParams);
		// Search.getBreeds().then(function(response){
		// 	console.info(response);
		// })
	}

}]);
 
