var path = require('path');
var ROOT = path.resolve(__dirname);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');

// 链接（https://doc.webpack-china.org/guides/hmr-react/）

const config = {

    entry: [
        // // 这个顺序很重要
        // 'react-hot-loader/patch',
        //  // 开启 React 代码的模块热替换(HMR)

        // 'webpack-dev-server/client?http://localhost:8080',
        // // 为 webpack-dev-server 的环境打包代码
        // // 然后连接到指定服务器域名与端口

        // 'webpack/hot/only-dev-server',
        // // 为热替换(HMR)打包好代码
        // // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

        path.join(ROOT,'./client/index.jsx'),
        // 入口文件
        
    ],

    output: {
        filename: 'bundle.js',
        path: path.join(ROOT,'./build'),

        // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: ['babel-loader?presets[]=es2015&presets[]=react',],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules', ],
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=8192'],
            },
        ]
    },

    devtool: 'inline-source-map',

    plugins: [

        new HtmlWebpackPlugin({
            title: 'myApp',
            favicon: './favicon.ico'
        }),

        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        //只在生产环境下进行如下配置。如果开发模式下配置下面的会导致一些有用的警告不会输出，并且增加build时间
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin()

        // new webpack.HotModuleReplacementPlugin(),
        // // 开启全局的模块热替换(HMR)

        // new webpack.NamedModulesPlugin(),
        // // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

    ],

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080,
        //热模块替换功能
        hot: true
    }

};

module.exports = config;