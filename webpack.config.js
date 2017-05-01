const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProductionBuild = process.env.NODE_ENV === "production";


let plugins = [
  new ExtractTextPlugin("lib/css/emoji.css"),
];

if (isProductionBuild) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  );
}

module.exports = {
  entry: "./src/index",
  output: {
    path: __dirname,
    filename: isProductionBuild ? 'lib/js/emoji-picker.min.js' : 'lib/js/emoji-picker.js',
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
  plugins: plugins
};
