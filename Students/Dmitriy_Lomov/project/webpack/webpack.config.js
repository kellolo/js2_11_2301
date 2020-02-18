const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require ('vue-loader/lib/plugin')

const devMode = process.env.NODE_ENV !== 'production'

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
                test: /\.sass$/,
                use: [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                  },
                  {
                    loader: 'postcss-loader',
                    options:
                      { 
                        sourceMap: true,
                        config: { path: './src/public/js/postcss.config.js' } 
                      }
                  },
                  {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                  }
                ]
          },
          {
            test: /\.(png|jpe?g|gif|ico|svg)$/,
            use: [
                'file-loader?name=./images/[name].[ext]',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        bypassOnDebug: true,
                        disable: true,
                    }
                },
            ]
        }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new VueLoaderPlugin ()
    ]
}