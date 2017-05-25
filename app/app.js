(function( angular ){
	//主要模块
	var mainModule = angular.module('moviecat', [
		'ngRoute',
		'moviecat.movie_detail',
		'moviecat.movie_list',
		'moviecat.directives.auto-focus'
	]);
	mainModule.constant('appConfig',{
		pageSize:10,
		APIAddress:'https://api.douban.com/v2/movie/',
		//搜索地址
		detailAPI:'https://api.douban.com/v2/movie/subject/'
	})
	mainModule.config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters/1'})
	}]);
	mainModule.controller('searchController', [
		'$scope'
		,'$route'
		, function($scope,$route){
		$scope.input = '';//取文本框的输入
		$scope.search = function(){
			$route.updateParams({category: 'search',q:$scope.input})
		}
	}])
})(angular)
