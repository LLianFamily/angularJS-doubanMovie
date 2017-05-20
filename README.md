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
