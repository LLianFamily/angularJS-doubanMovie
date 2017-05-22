(function(angular) {
	/**
	 * movie.in_theaters Module
	 *
	 * Description
	 */
	var module = angular.module('moviecat.in_theaters', [
		'ngRoute'
		,'moviecat.server.http'
		]);
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/in_theaters/:page', {
			templateUrl: 'in_theaters/view.html',
			controller: 'InTheatersContorller'
		});
	}]);
	module.controller('InTheatersContorller', [
		'$scope'
		,'$routeParams'
		,'httpServer'
		, function($scope,$routeParams,httpServer) {
			var page = parseInt($routeParams.page);//获取参数
			var count = 10;//每页多少条
			var start = (page-1)*count;//从哪条开始获取
			//一共需要多少页

			//分页的数据
			$scope.title = '';
			$scope.subjects = [];
			$scope.totalCount = 0;
			$scope.pageCount = 0;
			$scope.loading = true;
			httpServer.jsonp('http://api.douban.com/v2/movie/in_theaters'
				,{
					start:start,
					count:count
				}
				,function( data ){
				$scope.title = data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;//数据总量
				$scope.pageCount = Math.ceil($scope.totalCount/count);//算出总共需要多少页
				//因为是自己写的jsonp，所以要用到$apply
				$scope.loading = false;//mask层
				$scope.$apply();//同步数据
			})
		}])
})(angular)

/*

	module.controller('InTheatersContorller', ['$scope','$http', function($scope,$http) {
		//控制器的编写
		//豆瓣的数据 ajax获取

		ng提供了jsonp的请求方式，奈何豆瓣不支持所以只好自己写jsonp了
		$scope.subjects = [];
		var InTheatersAPI = 'http://api.douban.com/v2/movie/in_theaters';
		$http.jsonp(InTheatersAPI+'?callback:JSON_CALLBACK').then(function( res ){
			$scope.subjects = res.data.subjects;
			console.log(res);
		},function (err) {
			console.log(err);
		})


		先尝试加载本地的文件
		$http.get('/app/data1.json').then(function( res ){
			$scope.subjects = res.data.subjects;
			console.log(res);
		},function (err) {
			console.log(err);
		})
	}])
*/
