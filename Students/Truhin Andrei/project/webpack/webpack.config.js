const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require ('vue-loader/lib/plugin');

module.exports = {
  devServer: {
    port: 3000,
    proxy: {
        '/api': {
            target: 'http://localhost:8080/',
            pathRewrite: { '^/api': '' },
            secure: false,
            changeOrigin: true,
        }
    }
},
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

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
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin ()
  ]
};