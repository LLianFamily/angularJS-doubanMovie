(function( angular ){
	//主要模块
	var mainModule = angular.module('moviecat', [
		'ngRoute',
		'moviecat.movie_list',
		'moviecat.directives.auto-focus'
	]);
	mainModule.config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters/1'})
	}]);
	mainModule.controller('searchController', ['$scope','$route', function($scope,$route){
		$scope.input = '';//取文本框的输入
		$scope.search = function(){
			$route.updateParams({category: 'search',q:$scope.input})
		}
	}])
})(angular)
