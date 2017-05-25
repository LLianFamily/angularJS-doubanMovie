(function(angular) {
	/**
	 * movie.in_theaters Module
	 *
	 * Description
	 */
	var module = angular.module('moviecat.movie_list', [
		'ngRoute'
		,'moviecat.server.http'
		]);
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListContorller'
		});
	}]);
	module.controller('MovieListContorller', [
		'$scope'
		,'$route'
		,'$routeParams'
		,'httpServer'
		, function($scope,$route,$routeParams,httpServer) {
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
			$scope.currentPage = page;//当前页数
			httpServer.jsonp(
				'https://api.douban.com/v2/movie/'+$routeParams.category
				,{
					start:start,
					count:count,
				//$routeParams的数据来源：1你自己定义了，2取?后面的参数
					q:$routeParams.q
				}
				,function( data ){
				$scope.title = data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;//数据总量
				$scope.pageCount = Math.ceil($scope.totalCount/count);//算出总共需要多少页
				//因为是自己写的jsonp，所以要用到$apply
				$scope.loading = false;//mask层
				$scope.$apply();//同步数据
			});
			//暴露翻页行为
			$scope.paging = function( page ){
				/*
				参数是页码，你传进来第几页我就跳第几页
				要用更新url地址里面的参数$route模块的updataParams()
				*/
				//合法化判断
				if(page>=1&&page<=$scope.pageCount)
				$route.updateParams({page:page})

			}
		}])
})(angular)
