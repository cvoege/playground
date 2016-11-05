'use strict';
/* global require module __dirname process */

const webpack = require('webpack');
const path = require('path');

module.exports = function getConfig({ outputDir }) {
  const APP_DIR = path.resolve(__dirname, 'src');

  const config = {
    entry: {
      app: `${APP_DIR}/app.js`,
      common: ['react', 'react-dom']
    },
    output: {
      path: `${outputDir}/`,
      filename: '[name].js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.js?$/,
          loaders: ['babel?cacheDirectory'],
          include: [APP_DIR]
        }
        // ,
        // {
        //   test: /\.json?$/,
        //   loaders: ['json']
        // }
      ]
    },
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  };

  if (process.env.NODE_ENV === 'production') {
    config.output.filename = '[name]-[hash].js';
    config.devtool = 'source-map';
    config.plugins = config.plugins.concat([
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'libs', /* filename= */'common-[hash].js'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]);
  }
  else if (process.env.NODE_ENV === 'development') {
    // dev
    config.devtool = 'eval';
    config.plugins = config.plugins.concat([
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'libs', /* filename= */'common.js')
    ]);
  }
  else {
    // test
    config.devtool = 'cheap-module-source-map';
    config.plugins = config.plugins.concat([
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'libs', /* filename= */'common.js')
    ]);
  }
  return config;
};
