const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 与业务代码共用同一份路径的配置表
const output = path.resolve(__dirname,'./app/dll/manifest.json');
function postcss() {
  var precss = require('precss');
  var autoprefixer = require('autoprefixer');
    return [precss, autoprefixer({
      remove: false,
      browsers: ['ie >= 8', '> 1% in CN'],
    })];
};
module.exports = {
  output: {
    path: path.resolve(__dirname,'./app/dll'),
    filename: '[name].js',
    library: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  entry: require('./otherLib.js'),
  plugins: [
    new webpack.DllPlugin({
      path: output, 
      name: '[name]',  
      context: __dirname 
    }),
  
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new ExtractTextPlugin('[name].css'), 
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: postcss
        }
    })
  ],
  module:require('./webpack-config/module.config.js'),
  resolve:require('./webpack-config/resolve.config.js'),
};
