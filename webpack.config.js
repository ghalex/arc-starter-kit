const webpack = require('webpack')
const path = require('path')
const env = require('yargs').argv.env

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  appBuild: path.resolve(__dirname, 'build'),
  appHtml: path.resolve(__dirname, 'src/index.html'),
  appSrc: path.resolve(__dirname, 'src'),
  appModules: path.resolve(__dirname, 'node_modules'),
  appIndex: path.resolve(__dirname, 'src/index.js')
}

let plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({ 'process.env': { ENV: env, NODE_ENV: env } }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'bundle.vendors.js',
    minChunks (module) {
      const context = module.context
      return context && context.indexOf('node_modules') >= 0
    }
  })
]

if (env !== 'production') {
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: paths.appHtml, inject: true})
  ]
}

if (env === 'production') {
  plugins = [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({minimize: true, output: { comments: false }})
  ]
}

module.exports = {
  entry: [
    paths.appIndex
  ],
  devtool: env === 'development' ? 'source-map' : false,
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
        use: ['babel-loader']
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
      paths.appModules,
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
    host: 'localhost'
  }
}
