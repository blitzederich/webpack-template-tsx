/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge').merge;

const isProduction = process.env.NODE_ENV === 'production';

const config = {
	entry: './src/webpack-template.js',
	output: {
		path: path.resolve('dist'),
		filename: 'js/[name].js?[fullhash]'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html'
	})]
};

const devConfig = {
	mode: 'development'
};

const prodConfig = {
	mode: 'production'
};

module.exports = isProduction 
	? merge(config, prodConfig)
	: merge(config, devConfig);

module.exports = config;	