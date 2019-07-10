module.exports = {
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        ws: true,
        pathRewrite: {'^/api' : '/'}, // 重写路径
        changeOrigin: true
      },
      '/foo': {
        target: 'https://api.shenjian.io/',
        pathRewrite: {'^/foo' : '/'}, // 重写路径
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}
