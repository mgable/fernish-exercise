'use strict';

/**
 * @ngdoc function
 * @name testApp.service.Search
 * @description
 * # Search Service
 * Service of the testApp
 */
 angular.module('testApp')
 .service('Search',["$http", "CONFIG", function ($http, CONFIG) {
 	var domain = CONFIG.api.domain;


 	function getBreeds(){
 		return _http("breeds/list/all", {}).then(function(response){
 			return response.message;
 		});
 	}

 	function getRandomImage(){
 		return _http("breeds/image/random", {}).then(function(response){
 			return response.message;
 		});
 	}

 	function getBreedImages(breed){
 		return _http("breed/" + breed + "/images", {}).then(function(response){
 			return response.message;
 		});
 	}

 	function _http(endpoint, params){
 		return $http.get(domain + endpoint, {params:params}).then(function(response){
 			return response.data
 		});
 	}

 	function getRandomImages(howMany){

 		return new Promise(function(resolve, reject){
 			_getImage(howMany, []);

	 		function _getImage(howMany, promises){
		 		if (howMany--){
					promises.push(getRandomImage());
					setTimeout(_getImage(howMany, promises), 250);
				} else {
					Promise.all(promises).then(function(response){
						resolve(response);
					});
				}
		 	}
		});
 	}

 	this.getBreeds = getBreeds;
 	this.getRandomImage = getRandomImage;
 	this.getRandomImages = getRandomImages;
 	this.getBreedImages = getBreedImages;

 }]);
