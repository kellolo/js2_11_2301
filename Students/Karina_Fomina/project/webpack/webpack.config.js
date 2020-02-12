
let HtmlPlugin = require ('html-webpack-plugin')
let MiniCssPlugin = require ('mini-css-extract-plugin')

module.exports = {
    // devServer: {
    //     port = 3000,
    //     hot = true
    // },
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
                        loader: MiniCssPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin ({
            template: './src/public/index.html'
        }),
        new MiniCssPlugin ({
            filename: 'style/[name].css',
            chunkFilename: '[id].css',
        })
    ]
}