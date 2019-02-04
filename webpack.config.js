const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    filename: 't-blank.js',
    path: __dirname + '/dist/',
    library: "TBlank",
    libraryTarget: "umd"
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
