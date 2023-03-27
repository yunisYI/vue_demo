const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    proxy: {
      '/api/cart': {
        target: 'http://127.0.0.1:3001/cart',
        ws: false,
        changeOrigin: true,
        pathRewrite: { '/api/cart': '' },
      },
      '/api/my': {
        target: 'http://127.0.0.1:3001/my',
        ws: false,
        changeOrigin: true,
        pathRewrite: { '/api/my': '' },
      },
      '/api': {
        target: 'http://127.0.0.1:3001/api',
        ws: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    }
  }
})
