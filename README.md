# 豆瓣电影列表检索案例

## step-01 构建项目结构

- 克隆项目骨架

```bash
$ git clone --depth=1 https://github.com/Micua/angular-boilerplate.git moviecat
$ cd moviecat
从github中克隆在moviecat文件夹中
```

- 安装项目依赖

```bash
$ bower install bootstrap --save
```

```
.bowerrc 配置bower安装包安装到哪个路径
.editorconfig -- 统一不同开发者的不同开发工具的不同开发配置
在Sublime中使用需要安装一个EditorConfig的插件
.gitattributes 所有git开头的都是git配置文件，此文件负责设置文件的编码，比较少用
```

- 为NG做一个项目骨架的目的是为了快速开始一个新的项目
- angular-seed

- npm 在 package.json中的script节点中可以定义脚本任务.
```
    "scripts": {
    "e":"echo hellow",
    "postinstall": "bower install",
    "prestart": "npm install",
    "start": "./node_modules/.bin/hs -a localhost -p 9000 -o"
  }
  比如我定义了一个e脚本，只要输入 npm run e 他就会自动执行echo hellow;
```
- 配置完成后你可以通过 npm run start 或者 npm start 运行起来这个骨架
## 构建视图
- 简单的使用了bootstrap中的样式
 + 起步
 + 实例精选
 + 封面视图
 + 根据自己喜好进行修改样式，原则是要有三个li来装三个模块，一个搜索框，右侧一个视图
### 分析模块
- 正在热映 即将上映 豆瓣电影TOP250 搜索框 详细内容 一共是需要五个模块，那么就在项目文件夹中建五个view
- 对应好我们需要跳转的锚点名字，每个view文件中有两个文件：html和控制器的js
- 回到index.html引进
### 视图绑定
```
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" ng-view>

```
- 给右侧的内容区域盒子绑定上ng-view
 + 此指令是用于切换控制器视图;
### 编写正在上映的控制器
1. 暴露数据
2. 暴露行为
- 调用豆瓣的api
 + https://developers.douban.com/wiki/?title=guide
#### API的概念：

> Application Program Interface

> 应用程序编程接口

- 通过WEB方式提供接口叫做webAPI
 + 比如 Math.random() === API
 + 说白了都是函数
- 推荐：测试webAPI的工具： POSTMAN(要翻墙)
- 先在豆瓣api拿到静态数据设计页面结构
#### 通过angular给我们的ajax服务请求数据 $http
- 模版
```
		$http.get('data.json').then(function(data){
			//成功
		}).function (err) {
			console.log(err);
		}
```
- 最好写绝对路径，在执行ajax的时候angular可能已经执行完了，所以要先在函数外头写上一个空数组来装数据模型；
```	
		$scope.subjects = [];
		$http.get('/app/data1.json').then(function( res ){
			$scope.subjects = res.data.subjects;
			console.log(res);
		},function (err) {
			console.log(err);
		})

```
- 谷歌不支持file写一下的ajax请求，火狐可以
 + 最好架在服务器上弄
#### 获取真实数据
- 会设计到跨域问题，那么就要用到jsonp
 + $http.jsonp();
- 由于XMLHTTPRequest这个对象不支持跨域请求
- angular中将所有的jsonp的callbask挂在了angular.callbacks这个对象上面；
 + 这么做是为了不污染全局变量 
- 然而豆瓣的api不支持angular的方法
- ng中要使用jsonp的方式做跨域，就要给当前地址加上参数；参数名无所谓，参数值必须是： JSON_CALLBACK
```
	你的地址+'?callback:JSON_CALLBACK'
	//但是豆瓣不支持ng的这种方式，没给回调函数，而是直接给了数据
```
### 自己写jsonp
- 设想一下jsonp的方法需要什么参数(抽象一下)
```
		(function(){
			jsonp(
				'http://api.douban.com/v2/movie/in_theaters'
				,{
					count:10,
					start:5
				}
				,function ( data ) {

				}
			)
		})()
```
- 完整思路如下
```
var jsonp = function(url, data, callback) {

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

```
- 但是这个时候你仍然无法绑定数据
 + 官方文档中，如果你使用的是第三方的库调用的XHR方法，需要用到$apply通知ng重新绑定文件。
```
	module.controller('InTheatersContorller', [
		'$scope'
		,'httpServer'
		, function($scope,httpServer) {
			$scope.subjects = [];
			$scope.count = 0;
			$scope.loading = true;
			httpServer.jsonp('http://api.douban.com/v2/movie/in_theaters',{},function( data ){
				$scope.subjects = data.subjects;
				$scope.count = data.total;
				//因为是自己写的jsonp，所以要用到$apply
				$scope.loading = false;//mask层
				$scope.$apply();//同步数据
			})
		}])
```
#### jsonp的tips
- 支持跨域的有:
 + <img /> 可以拿，但是拿不到数据
 + <iframe></iframe> 可以拿，但是太复杂
 + <link rel="stylesheet" type="text/css"> 只有rel是stylesheet才能跨，而且js执行的时候会报错
 + a标签不行
 + 最终还是script标签适合跨域
