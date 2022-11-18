const configureWebpack = require('./webpack.config')
let { isProd } = require('./generate')
const globalVars = require('../src/styles/var')
let publicPath = '/v2'
module.exports = {
  publicPath,
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    ...configureWebpack
  },
  css: {
    // modules: true,
    loaderOptions: {
      postcss: {
        config: {
          path: './config/postcss.config'
        }
      },
      less: {
        globalVars: {
          ...globalVars,
          'static': (publicPath + 'static'),
        },
        // modifyVars: {
        //   'primary-color': '#157f6f'
        // },
        // 编译打包启用Javascript:Inline JavaScript is not enabled. Is it set in your options
        javascriptEnabled: true
      }
    },
  },
  devServer: {
    progress: false
  }
}