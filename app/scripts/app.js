'use strict';

/**
 * @ngdoc overview
 * @name supplyhubApp
 * @description
 * # supplyhubApp
 *
 * Main module of the application.
 */
 angular
 .module('testApp', [
 	'ui.router',
 	'ngSanitize',
 	'ui.bootstrap',
 	'slickCarousel'
 	])
 .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

 	$urlRouterProvider.otherwise('/');

 	$stateProvider
 	.state('Home',{
 		url: '/',
 		views: {
 			'container': {
 				templateUrl: 'views/main.html',
 				controller: 'MainCtrl',
 			},
 			'slick': {
 				templateUrl: 'views/slick.html',
 				controller: 'SlickCtrl',
 			}
 		},
 		resolve: {
			"RandomImages": function(Search){ return Search.getRandomImages(10);},
			"BreedList": function(Search){ return Search.getBreeds();},
		}
 	})
	 .state('Breed', {
	 	url: '/:breed',
	 	templateUrl: 'views/breed.html',
	 	controller: 'BreedCtrl',
	 	reloadOnSearch: false
	 })
  // .state('Categories', {
  //   url: '/search',
  //   templateUrl: 'views/categories.html',
  // })
  // .state('Search', {
  //   url: '/search/:category?page&query&order&fuzzy&exact',
  //   templateUrl: 'views/search.html',
  //   controller: 'SearchCtrl',
  //   resolve: {
  //     "Indexes": function(AppData){return AppData.getItem("Indexes");}
  //   },
  //   reloadOnSearch : false
  // })
  // .state('Articles', {
  //   url: '/articles',
  //   templateUrl: 'views/articles.html',
  //   controller: 'MainCtrl',
  // })
  // .state('Item', {
  //   url: '/:category/:itemId/:title/:mode',
  //   templateUrl: 'views/item.html',
  //   controller: 'ItemCtrl',
  //   resolve: {
  //     "Item": function(FetchData, $stateParams){ return FetchData.getActiveItem($stateParams.category, $stateParams.itemId);},
  //     "Category": function($stateParams){ return $stateParams.category;},
  //     "Indexes": function(AppData){return AppData.getItem("Indexes");}
  //   }
  // });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
})