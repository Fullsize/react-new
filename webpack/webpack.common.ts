import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const styleLoader = process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
export default {
	entry: {
		app: path.resolve(__dirname, "../src/main.tsx"),
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: "[name].[hash].bundle.js"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [{
			test: /\.(tsx|jsx)$/,
			loader: ['babel-loader', 'ts-loader'],
			exclude: /node_modules/,
		}, {
			test: /\.(css)$/,
			loader: [styleLoader, 'css-loader']
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new webpack.EnvironmentPlugin(["NODE_ENV"]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			inject: 'body',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
	],
}