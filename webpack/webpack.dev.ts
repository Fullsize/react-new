import path from 'path';
import webpack from 'webpack';
import common from './webpack.common'
import merge from 'webpack-merge';
export default merge(common,{
	devServer:{
		host: "0.0.0.0", //地址
		port: 3000, //端口
		inline: true, // 实时刷新
		open: false, //自动打开浏览器
		hot: true,
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true
	},
})