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

> Application Programxxx Interface

> 应用程序编程接口

- 通过WEB方式提供接口叫做webAPI
 + 比如 Math.random() === API
 + 说白了都是函数
- 推荐：测试webAPI的工具： POSTMAN(要翻墙)
- 先在豆瓣api拿到静态数据设计页面结构
