/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const devConfig = {
	mode: 'development',
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
			},
			{
				test: /\.(jpeg|jpg|png|gif|woff|svg|otf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'static/',
					name: '[name].[ext]'
				}
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html'
	})],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		open: true,
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	}
};

const prodConfig = {
	mode: 'production',
	entry: './src/webpack-template.js',
	output: {
		path: path.resolve('dist'),
		filename: 'js/[name].js?[contenthash]'
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
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(jpeg|jpg|png|gif|woff|svg|otf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'static/',
					name: '[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css?[contenthash]'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	}
};

module.exports = isProduction 
	? prodConfig
	: devConfig;