module.exports = {
    devServer: {
        hot: true,
        publicPath: '/',
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true,
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}