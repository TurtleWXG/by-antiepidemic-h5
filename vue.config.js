const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  publicPath: '/byfy_test',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@api', resolve('./src/api'))
      .set('@assets', resolve('./src/assets'))
      .set('@comp', resolve('./src/components'))
  },
  configureWebpack: {
    name: '白云防疫'
  },
  devServer: {
    proxy: {
      '/byfy': {
        target: 'http://192.168.1.113/',
        ws: true,
        pathRewrite: {
          '^/byfy': '/byfy'
        }
      }
    }
  }
}
