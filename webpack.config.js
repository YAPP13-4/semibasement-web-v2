/* eslint-disable */
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const join = require('path').join;

dotenv.config();

module.exports = (env, options) => {
  const config = { 
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
          test: /\.(gif|png|jpe?g|svg|jpg|mp4)$/i,
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
          test: /\.(svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 20000, // 20kb
            },
          },
        },
        {
          test: /\.jsx?$/,
          include: /node_modules/,
          use: ['react-hot-loader/webpack'],
        },
      ],
    },
    devServer: {
      contentBase: join(__dirname, 'dist'),
      compress: true,
      port: 3030,
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        domain: join(__dirname, 'src/domain/'),
        assets: join(__dirname, 'src/assets/'),
        presentation: join(__dirname, 'src/presentation/'),
        utils: join(__dirname, 'src/utils/'),
        application: join(__dirname, 'src/'),
        modules: join(__dirname,'src/modules/')
      },
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.EnvironmentPlugin(['CLIENT_KEY'])
      ],
  }

  if(options.mode === 'development') {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
