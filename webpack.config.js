'use strict'

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const path = require('path')

// Plugins
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  appBuild: path.resolve(__dirname, 'build'),
  appHtml: path.resolve(__dirname, 'src/index.html'),
  appSrc: path.resolve(__dirname, 'src'),
  appModules: path.resolve(__dirname, 'node_modules'),
  appIndex: path.resolve(__dirname, 'src/index.js')
}

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'bundle.vendors.js',
    minChunks (module) {
      const context = module.context
      return context && context.indexOf('node_modules') >= 0
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      ENV: JSON.stringify(process.env.NODE_ENV),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HappyPack({
    loaders: [ 'babel-loader' ],
    threads: 4
  }),
  new HtmlWebpackPlugin({template: paths.appHtml, inject: true})
]

module.exports = {
  entry: [
    'babel-polyfill',
    paths.appIndex
  ],
  devtool: 'source-map',
  output: {
    path: paths.appBuild,
    filename: 'bundle.js',
    publicPath: '/',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['happypack/loader']
      },
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        use: ['json-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      paths.appSrc
    ],
    alias: {
      moment$: 'moment/moment.js'
    }
  },
  plugins: plugins,
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    host: 'localhost',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: true,
      timings: true,
      version: false,
      warnings: true
    }
  }
}
