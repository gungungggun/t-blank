module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 't-blank.js',
    path: __dirname + '/dist/',
    library: "TBlank",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
