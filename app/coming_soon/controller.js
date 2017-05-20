(function( angular ){
	/**
	* movie.coming_soon Module
	*
	* Description
	*/
	var module = angular.module('moviecat.coming_soon', ['ngRoute']);
	module.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/coming_soon',{
			templateUrl:'coming_soon/view.html',
			controller:'ComingSoonContorller'
		});
	}]);
	module.controller('ComingSoonContorller', ['$scope', function($scope){

	}])
})(angular)
