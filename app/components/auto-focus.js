
//焦点样式
(function (angular) {
	angular.module('moviecat.directives.auto-focus', [])
	.directive('autoFocus', ['$location', function($location){
		// 拿$location就是为了一开始的时候给选中页面添加active样式
		var path = $location.path();//获取当前页面的path值
		console.log(path);
		return {
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			link: function($scope, iElm, iAttrs, controller) {
				var aLink = iElm.children().attr('href');//li的子元素a的href
				//判断aLink的值和和当前的path值是否匹配，匹配的话就给加active样式
				//用正则匹配path
				var pipei = aLink.replace(/#(\/.+?)\/\d+/,'$1');
				// var replacePath =
				console.log(aLink);
				if(path.startsWith(pipei)){
					iElm.addClass('active');
				}
				//点击切换样式
				iElm.on('click',function(){
					iElm.parent().children().removeClass('active');
					iElm.addClass('active');
				});
			}
		};
	}]);
})(angular)
