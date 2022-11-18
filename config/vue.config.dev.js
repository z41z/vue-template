const configureWebpack = require('./webpack.config')
const globalVars = require('../src/styles/var')
const postcss = require('./postcss.config')
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
      postcss,
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