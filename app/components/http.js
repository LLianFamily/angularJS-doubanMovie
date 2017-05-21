// (function(window, document, undefined) {
// 	var jsonp = function(url, data, callback) {

// 		/*
// 		挂载回调函数
// 		将传过来的数据转换成字符串的格式
// 		处理url中的回调
// 		创建一个script标签
// 		将它append到页面中
// 		*/
// 		// 挂载回调函数
// 		var cbFn = 'cb_jsonp' + Math.random().toString().replace('.', '');
// 		window[cbFn] = callback;
// 		/*
// 			=window.cb_jsonp1324681235 = callback
// 			相当于给window对象附了一个方法，可以通过window全局调用
// 		*/
// 		// 将传过来的数据转换成字符串的格式
// 		var query = url.indexOf('?')==-1?'?' : '&';
// 		//判断一下有没有？ 如果传过来的url有？的话就用&代替
// 		for (var key in data) {
// 			query += key + '=' + data[key] + '&';
// 			//query = ?name=1&
// 		}
// 		// 处理url中的回调
// 		query += 'callback=' + cbFn;
// 		//query = ?name=1&cb_jsonp1324681235

// 		// 创建一个script标签
// 		var scriptTag = document.createElement('script');
// 		scriptTag.src = url + query;
// 		//将它append到页面中
// 		document.body.appendChild(scriptTag);
// 		/*
// 			代码执行到这里 script 标签会自动执行链接的地址
// 		*/
// 	};
// 	window.$jsonp = jsonp;
// 	//写在自执行函数中 ，给他暴露在全局中
// })(window, document)



(function( angular ){
	  // 由于默认angular提供的异步请求对象不支持自定义回调函数名
  // angular随机分配的回调函数名称不被豆瓣支持
	var http = angular.module('moviecat.server.http', []);
	http.service('httpServer', ['$window','$document', function($window,$document){
		this.jsonp = function(url, data, callback) {

		/*
		挂载回调函数
		将传过来的数据转换成字符串的格式
		处理url中的回调
		创建一个script标签
		将它append到页面中
		*/
		// 挂载回调函数
		var cbFn = 'cb_jsonp' + Math.random().toString().replace('.', '');
		$window[cbFn] = callback;
		/*
			=window.cb_jsonp1324681235 = callback
			相当于给window对象附了一个方法，可以通过window全局调用
		*/
		// 将传过来的数据转换成字符串的格式
		var query = url.indexOf('?')==-1?'?' : '&';
		//判断一下有没有？ 如果传过来的url有？的话就用&代替
		for (var key in data) {
			query += key + '=' + data[key] + '&';
			//query = ?name=1&
		}
		// 处理url中的回调
		query += 'callback=' + cbFn;
		//query = ?name=1&cb_jsonp1324681235

		// 创建一个script标签
		var scriptTag = $document[0].createElement('script');
		scriptTag.src = url + query;
		//将它append到页面中
		$document[0].body.appendChild(scriptTag);
		/*
			代码执行到这里 script 标签会自动执行链接的地址
		*/
	};

	}])
})( angular )
