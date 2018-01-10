'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
 console.info("loaded main.js");
angular.module('testApp')
.controller('MainCtrl', ["$scope", "Search", "BreedList", "$stateParams", "CONFIG", "RandomImage", function ($scope, Search, BreedList, $stateParams, CONFIG, RandomImage) {

	init();

	console.info(BreedList);

	function init(){
		console.info("I have inited!");
		$scope.randomDogImage = RandomImage;
		$scope.breeds = BreedList;

		Search.getRandomImages(3).then(function(response){
			console.info("the iamges");
			console.info(response);
		})
	}

}]);