const configureWebpack = require('./webpack.config')
const globalVars = require('../src/styles/var')
let publicPath = '/'
module.exports = {
  assetsDir: 'static',
  publicPath,
  productionSourceMap: true,
  configureWebpack: {
    ...configureWebpack
  },
  devServer: {
    progress: false
  },
  css: {
    // modules: true,
    loaderOptions: {
      scss: {
        additionalData: `@import "~@styles/element-variables.scss";`
      },
      less: {
        options: {
          strictMath: false,
          noIeCompat: true
        },
        globalVars: {
          ...globalVars,
          'static': (publicPath + 'static'),
        },
        // modifyVars: {
        //   'primary-color': '#157f6f'
        // },
        // 启用行内Javascript:Inline JavaScript is not enabled. Is it set in your options
        javascriptEnabled: true
      }
    }
  }
}