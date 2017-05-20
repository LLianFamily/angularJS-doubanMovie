(function( angular ){
	  // 由于默认angular提供的异步请求对象不支持自定义回调函数名
  // angular随机分配的回调函数名称不被豆瓣支持
	var http = angular.module('moviecat.server.http', []);
	http.service('httpServer', ['$document', function($document){
		console.log($document);
		/*
				处理url中的回调
				创建一个script标签
				挂载script标签
				将它append到页面中
		*/

	}])
})( angular )
