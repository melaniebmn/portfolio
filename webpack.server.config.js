var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'server.js'),
  output: {
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
      { test: /\.png$/, loader: "url-loader?limit=10000&name=public/assets/img-loaders/[name].[ext]" },
      { test: /\.jpg$/, loader: "file-loader?name=public/assets/img-loaders/[name].[ext]" }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./public/style.css', { allChunks: true })
  ]
}