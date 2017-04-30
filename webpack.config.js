var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "emoji-picker": "./src/index",
    "emoji-picker.min": "./src/index",
  },
  output: {
    path: __dirname,
    filename: "lib/js/[name].js",
    libraryTarget: 'var',
    library: 'EmojiPicker'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')},
      {test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=10000','img-loader']}
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new ExtractTextPlugin("lib/css/emoji.css")
  ]
};
