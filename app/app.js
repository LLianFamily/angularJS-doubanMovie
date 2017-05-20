(function( angular ){
	//主要模块
	var mainModule = angular.module('moviecat', [
		'ngRoute',
		'moviecat.in_theaters',
		'moviecat.coming_soon',
		'moviecat.top250'
	]);
	mainModule.config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters'})
	}])
})(angular)
