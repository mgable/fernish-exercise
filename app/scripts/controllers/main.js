'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

angular.module('testApp')
.controller('MainCtrl', ["$scope", "$rootScope", "BreedList", function ($scope, $rootScope, BreedList) {

	_init();

	function _init(){
		$scope.displayText = "Random"
		$scope.alphaBreedsList = _.groupBy(_.map(BreedList, function(val, key){
			return {name: key, subbreeds: val}
		}), function(item){
			return item.name.charAt(0);
		});

		$scope.setBreed = function(breed){
			$rootScope.$broadcast("NEW-BREED", {name: breed});
			$scope.displayText = breed;
		}

		console.info($scope.alphaBreedsList);
	}

}]);