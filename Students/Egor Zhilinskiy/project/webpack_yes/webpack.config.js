let HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin ({
            template: './src/public/index.html'
        })
    ]
}