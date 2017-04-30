var webpack = require("webpack");

module.exports = {
  entry: {
    "emoji-picker": "./src/index.js",
    "emoji-picker.min": "./src/index.js",
  },
  output: {
    path: __dirname,
    filename: "lib/js/[name].js",
    libraryTarget: 'var',
    library: 'EmojiPicker'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015'}
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
