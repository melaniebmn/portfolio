var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
  entry: './app/main.js',
  output: { path: __dirname, filename: './public/main.min.js' },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
      { test: /\.png$/, loader: "url-loader?limit=10000&name=public/assets/img-loaders/[name].[ext]" },
      { test: /\.jpg$/, loader: "file-loader?name=public/assets/img-loaders/[name].[ext]" }
    ]
  },
  plugins: [
    new ExtractTextPlugin('/public/style.css', { allChunks: true })
  ]
};