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
.controller('MainCtrl', ["$scope", "BreedList", "RandomImages", function ($scope, BreedList, RandomImages) {

	init();


	function init(){
		console.info("I have inited!");
		$scope.randomDogImages = RandomImages;
		$scope.alphaBreedsList = _.groupBy(_.map(BreedList, function(val, key){
			return {name: key, subbreeds: val}
		}), function(item){
			return item.name.charAt(0);
		})

		// Search.getRandomImages(3).then(function(response){
		// 	console.info("the iamges");
		// 	console.info(response);
		// })

		console.info($scope.alphaBreedsList);
		console.info($scope.randomDogImages);
	}

}]);