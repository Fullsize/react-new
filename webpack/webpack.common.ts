import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
export default {
	entry: {
		app: path.resolve(__dirname, "../src/main.tsx"),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
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
			loader: ['style-loader','css-loader'
				// {
				// 	loader: 'css-loader',
				// 	options: {
				// 		modules: {
				// 			localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
				// 		},
				// 		importLoaders: 1,
				// 		import: true,
				// 		sourceMap: true
				// 	}
				// }
			]
		}]
	},
	plugins: [
		new webpack.EnvironmentPlugin(["NODE_ENV"]),
		// new CleanWebpackPlugin(),
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
		})
	],

}