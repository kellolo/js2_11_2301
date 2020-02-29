module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:8080',
          pathRewrite: { '^/api': '' },
          ws: true,
          secure: false,
          changeOrigin: true
        },
        '^/foo': {
          target: '<other_url>'
        }
      }
    }
  }