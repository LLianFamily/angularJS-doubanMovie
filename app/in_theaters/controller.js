(function(angular) {
	/**
	 * movie.in_theaters Module
	 *
	 * Description
	 */
	var module = angular.module('moviecat.in_theaters', ['ngRoute']);
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/in_theaters', {
			templateUrl: 'in_theaters/view.html',
			controller: 'InTheatersContorller'
		});
	}]);
	module.controller('InTheatersContorller', ['$scope', function($scope) {
		//控制器的编写
		//豆瓣的数据
		var apiData = {
			"count": 1,
			"start": 0,
			"total": 33,
			"subjects": [{
				"rating": {
					"max": 10,
					"average": 9.2,
					"stars": "50",
					"min": 0
				},
				"genres": ["\u5267\u60c5", "\u4f20\u8bb0", "\u8fd0\u52a8"],
				"title": "\u6454\u8de4\u5427\uff01\u7238\u7238",
				"casts": [{
					"alt": "https:\/\/movie.douban.com\/celebrity\/1031931\/",
					"avatars": {
						"small": "http://img3.doubanio.com\/img\/celebrity\/small\/13628.jpg",
						"large": "http://img3.doubanio.com\/img\/celebrity\/large\/13628.jpg",
						"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/13628.jpg"
					},
					"name": "\u963f\u7c73\u5c14\u00b7\u6c57",
					"id": "1031931"
				}, {
					"alt": "https:\/\/movie.douban.com\/celebrity\/1372457\/",
					"avatars": {
						"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1493121366.9.jpg",
						"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1493121366.9.jpg",
						"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1493121366.9.jpg"
					},
					"name": "\u6cd5\u7f07\u739b\u00b7\u8428\u90a3\u00b7\u7eb1\u5361",
					"id": "1372457"
				}, {
					"alt": "https:\/\/movie.douban.com\/celebrity\/1372458\/",
					"avatars": {
						"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1493121856.81.jpg",
						"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1493121856.81.jpg",
						"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1493121856.81.jpg"
					},
					"name": "\u6851\u4e9a\u00b7\u739b\u8377\u5854",
					"id": "1372458"
				}],
				"collect_count": 197740,
				"original_title": "Dangal",
				"subtype": "movie",
				"directors": [{
					"alt": "https:\/\/movie.douban.com\/celebrity\/1366907\/",
					"avatars": {
						"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1484120321.24.jpg",
						"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1484120321.24.jpg",
						"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1484120321.24.jpg"
					},
					"name": "\u6d85\u63d0\u00b7\u8482\u74e6\u91cc",
					"id": "1366907"
				}],
				"year": "2016",
				"images": {
					"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2457983084.webp",
					"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2457983084.webp",
					"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2457983084.webp"
				},
				"alt": "https:\/\/movie.douban.com\/subject\/26387939\/",
				"id": "26387939"
			}],
			"title": "\u6b63\u5728\u4e0a\u6620\u7684\u7535\u5f71-\u5317\u4eac"
		};
		$scope.subjects = apiData.subjects;

	}])
})(angular)
