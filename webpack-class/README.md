# webpack-classcode

### 项目介绍
webpack的基本使用代码
4版本以上


###打包
webpack ./js/entry.js -o bundle.js --mode development

###处理css

#####1.安装

cnpm install style-loader css-loader -D

#####2.配置
 module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
    
###处理less

#####1.安装

cnpm install less-loader  less -D

#####2.配置

{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader']
},

###处理sass

#####1.安装

cnpm install less-loader  less -D

#####2.配置

{
    test: /\.scss$/,
    use:[ 'style-loader','css-loader','sass-loader'],
}

###自动打包

1.webpack -p会进行代码压缩，产生环境下的编译打包

2.webpack -w监听文件的改动，自动编译

3.webpack -d开启source maps(在chrome中能看到编译过程，方便调试)
  	（cnpm install source-map）
  	在配置文件里添加"devtool":"source-map"
  	
###将ES6转化为ES5用到babel配置

#####1.安装
4版本以上【（cnpm install babel-core babel-loader babel-plugin-transform-runtime babel-preset-env -D）
 	
 	1.{
        "devDependencies": {
          "babel-core": "^6.26.3",
          "babel-loader": "^7.1.5",
          "babel-plugin-transform-runtime": "^6.23.0",
          "babel-preset-env": "^1.7.0",
          "webpack": "^4.15.1"
        },
        "dependencies": {
          "babel-polyfill": "^6.26.0",
          "babel-runtime": "^6.26.0"
        }
      }
 	 
	2.单独建文件.babelrc写入：
	{
      "presets": [
        [
          "env",
          {
            "targets": {
              "browsers": ["last 2 versions"]
            }
          }
        ]
      ],
      "plugins": ["transform-runtime"]
    }
	
	3.在webpack.config.js中添加：{test: /\.js$/,exclude: /(node_modules)/,use: {loader: "babel-loader"}}
	
	4.在入口文件中(entry.js)编写import "babel-polyfill";

    5.建一个js文件导出模块(export default{})，并在entry.js中引入该模块(import 名字 from 模块路径)
】

####使用webpack搭建服务器

#####1.安装

cnpm install webpack-dev-server -g



