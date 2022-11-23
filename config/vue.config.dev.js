const configureWebpack = require('./webpack.config')
const tailwindcss = require('./tailwind-config')
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
            tailwindcss: tailwindcss,
          }
        }
      },
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