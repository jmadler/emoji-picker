module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "lib/js/emoji-picker.js",
    libraryTarget: 'var',
    library: 'EmojiPicker'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['.js']
  },
};
