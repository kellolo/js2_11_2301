const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

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
      template: __dirname + '/src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer: {
    contentBase: 'src',
    port: 7000,
  }
}
