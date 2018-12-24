const webpack = require('webpack');
module.exports = {
    entry: './js/entry.js',//入口文件
    output: {
        publicPath: '/dist',//必须加publicPath
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        host: 'localhost',
        port: 1236,
        inline: true,
        open: true,//自动拉起浏览器
        hot: true,//热加载
        compress: true
    },
    plugins: [
        //热更新插件
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,//找以.css结尾的文件
                use: ['style-loader', 'css-loader']//先用css-loader，在执行style-loader，从后向前执行
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            minimize: true,
                            localIdentName: '[local]_[hash:base64:5]'
                        }
                    },
                    {loader: 'postcss-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}