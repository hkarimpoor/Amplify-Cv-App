const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'public/img/[name].[ext]'
  },
  module: {
    rules: [
        {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource'
        },
        
        { 
            test: /\.js$/i,
            exclude: /node_modules/
        },
        {
            test:/\.html$/i,
            use: [
            'html-loader'
            ]
        }      
    ]
  },
  devServer: {
    client: {
      overlay: true
    },
    hot: true,
    watchFiles: ['src/*']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/template.html'), // template file
        filename: 'index.html', // output file
      }),
  ]
};