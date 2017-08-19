module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		filename: 'build.js',
		path: __dirname + '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};
