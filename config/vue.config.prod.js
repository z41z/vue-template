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
        postcssOptions: {
          plugins: {
            autoprefixer: {},
            cssnano: {
              preset: [
                'advanced',
                { zindex: false } //取消CSS z-index自动计算
              ]
            },
            tailwindcss: { config: './config/tailwind-config.js' },
          }
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