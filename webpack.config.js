const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = {
  appBuild: path.resolve(__dirname, 'build'),
  appHtml: path.resolve(__dirname, 'src/index.html'),
  appSrc: path.resolve(__dirname, 'src'),
  appModules: path.resolve(__dirname, 'node_modules'),
  appIndex: path.resolve(__dirname, 'src/index.js')
}

module.exports = {
  entry: {
    bundle: paths.appIndex
  },
  output: {
    path: paths.appBuild,
    filename: 'bundle.js',
    chunkFilename: 'bundle.[name].js',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(paths.appBuild, {}),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: paths.appHtml,
      filename: 'index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    host: 'localhost'
  }
}
