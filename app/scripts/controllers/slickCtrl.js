'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
 console.info("loaded slick.js");
angular.module('testApp')
.controller('SlickCtrl', ["$scope", "RandomImages", function ($scope, RandomImages) {

	init();

	function init(){
		console.info("I have slick inited!");
		$scope.randomDogImages = RandomImages;
	}

}]);