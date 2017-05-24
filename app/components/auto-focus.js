
//焦点样式
(function (angular) {
	angular.module('moviecat.directives.auto-focus', [])
	.directive('autoFocus', ['$location', function($location){
		// 拿$location就是为了一开始的时候给选中页面添加active样式
		//获取当前页面的path值
		/*
		这里有个小bug，就是第一次打开的时候会没有焦点状态
		那么思路就是，给$scope添加个监视，只要发生变化就执行一次
		var path = $location.path();
		console.log(path);*/
		return {
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			link: function($scope, iElm, iAttrs, controller) {

				$scope.$location = $location//挂载到$scope
				$scope.$watch('$location.path()',function(now){
					var aLink = iElm.children().attr('href');//li的子元素a的href
					//判断aLink的值和和当前的path值是否匹配，匹配的话就给加active样式
					//用正则匹配path
					var pipei = aLink.replace(/#(\/.+?)\/\d+/,'$1');
					// var replacePath =
					if(now.startsWith(pipei)){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					}
				})

				//点击切换样式
				// iElm.on('click',function(){
				// 	iElm.addClass('active');
				// });
			}
		};
	}]);
})(angular)
