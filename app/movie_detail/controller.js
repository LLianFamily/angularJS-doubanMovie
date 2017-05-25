(function(angular) {

	var module = angular.module(
		'moviecat.movie_detail', [
		'ngRoute'
		,'moviecat.server.http'
		]);
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetailContorller'
		});
	}]);
	module.controller('MovieDetailContorller', [
		'$scope'
		,'$route'
		,'$routeParams'
		,'httpServer'
		,'appConfig'
		, function($scope,$route,$routeParams,httpServer,appConfig) {
			$scope.movie = {};
			var id = $routeParams.id;
			var apiAddress = appConfig.detailAPI + id;
			httpServer.jsonp(apiAddress,{},function ( data ) {
				$scope.movie = data;
				$scope.$apply();
			});
		  }
		])
})(angular)
//appContent
