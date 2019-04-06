const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const join = require('path').join;

module.exports = {
	entry: './src/index',
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js)?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[path]_[local]',
							sourceMap: true,
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(gif|png|jpe?g|svg|jpg)$/i,
				use: 'file-loader',
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]?[hash]',
						publicPath: './dist/',
						limit: 20000, // 20kb
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new BundleAnalyzerPlugin(),
	],
	devServer: {
		contentBase: join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		historyApiFallback: true,
	},
	resolve: {
		alias: {
			domain: join(__dirname, 'src/domain/'),
			assets: join(__dirname, 'src/assets/'),
			presentation: join(__dirname, 'src/presentation/'),
			utils: join(__dirname, 'src/utils/'),
			application: join(__dirname, 'src/'),
		},
		modules: ['node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
	},
};
