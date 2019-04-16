/* eslint import/no-commonjs: "off", import/no-extraneous-dependencies: "off" */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsplugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
    notFound: './src/404.jsx',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsplugin({}),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      hash: true,
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['notFound'],
      hash: true,
      template: './src/404.html',
      filename: '404.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
};
