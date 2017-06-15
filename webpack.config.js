'use strict';

require('dotenv').load({path: `${__dirname}/.client.env`});
if (!process.env.API_URL || !process.env.NODE_ENV || !process.env.TITLE){
  console.error('ERROR: ng-template requires .env file');
  process.exit(1);
}

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

console.log('env.TITLE', process.env.TITLE);
let plugins = [
  new ExtractTextPlugin('bundle.css'),
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  new webpack.DefinePlugin({
    //on the front end, have to reference these webpack globals sourced from client.env
    //on the back end refer to process.env
    //when webpack builds, have to explicitly tell
    __API_URL__: JSON.stringify(process.env.API_URL),
    __TITLE__: JSON.stringify(process.env.TITLE),
    __DEBUG__: JSON.stringify(!production),
  }),
];

if (production){
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      },
    }),
    new CleanPlugin(),
  ]);
}

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  devtool: production ? false : 'eval',
  plugins,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        loader: 'url?limit=10000&name=font/[name].[ext]',
      },
      {
        test: /\.(jpg|jpeg|bmp|tiff|gif|png)$/,
        loader: 'url?limit=10000&name=image/[hash].[ext]',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style', use: 'css!resolve-url!sass?sourceMap'}),
      },
    ],
  },
};
