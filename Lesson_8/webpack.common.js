const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Sea battle'
		}),
		new CleanWebpackPlugin(['dist']),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.(jpe?g|png)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './img/[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {}
					}
				]
			},
			{
				test: /\.mp3/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}