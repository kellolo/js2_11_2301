const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const VueLoaderPlugin = require ('vue-loader/lib/plugin')

module.exports = {
  entry: [
    '@babel/polyfill',
    'fetch-polyfill',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
    }),
    new VueLoaderPlugin ()
  ],
  devServer: {
    contentBase: 'src/public/',
    port: 7000,
    proxy: {
      '/api': {
        target: 'http://localhost:7001/',
        pathRewrite: { '/api': '' },
        secure: false,
        changeOrigin: true,
      }
    }
  }
}
