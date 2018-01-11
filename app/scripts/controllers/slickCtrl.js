'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

angular.module('testApp')
.controller('SlickCtrl', ["$scope", "RandomImages", "Search", function ($scope, RandomImages, Search) {

	_init();

	function _init(){
		$scope.randomDogImages = RandomImages;
		$scope.$on("NEW-BREED", _setBreed);
		$scope.slickConfig = {"infinite":true, "slidesToShow":3, "slidesToScroll":3, "arrows": true, "autoplay": true, "responsive": [{
			"breakpoint":640,
			"settings": {
					"arrows": false,
					"dots": true,
					"infinite": true,
					"slidesToShow": 1,
					"slidesToScroll": 1,
					"autoplay": true
				}
			}] 
		};
		$scope.showSlick = true;
	}

	function _setBreed(evt, breed){
		$scope.showSlick = false;
		var slick = $("slick");
		slick.slick("unslick");
		Search.getBreedImages(breed.name).then(function(breedImages){
			$scope.showSlick = true;
			breedImages.length = 10;
			$scope.randomDogImages = breedImages;
			slick.slick($scope.slickConfig);
		});
	}

}]);