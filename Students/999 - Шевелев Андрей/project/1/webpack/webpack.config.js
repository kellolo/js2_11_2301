let HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['css-loader'],
        }, ],
    },
    plugins: [
        new HtmlPlugin({
            template: './src/public/index.html'
        }, ),

    ],
};