const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new ExtractTextWebpackPlugin('style.css'),
		new UglifyJSPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: [{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						}
					]
				}) 
			}
		]
	}
})