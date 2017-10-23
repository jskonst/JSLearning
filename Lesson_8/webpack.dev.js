const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    	new webpack.NamedModulesPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'] 
			}
		]
	},
	devServer: {
		port: 8888,
		open: true,
		hot: true,
		stats: 'errors-only',
		openPage: '',
		contentBase: './src'
	}
});