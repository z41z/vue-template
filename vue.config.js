/**
 * Vue-cli 配置
 */
let { isProd, generateConfig, generateProxy } = require('./config/generate')

isProd.console()
// 根据当前内外网参数修改前端配置
generateConfig()
// 根据当前内外网参数修改开发proxy配置
generateProxy()
// 内存泄露
require('events').EventEmitter.defaultMaxListeners = 100;

// 开发配置
const dev = require('./config/vue.config.dev.js')
// 部署配置
const prod = require('./config/vue.config.prod')
// 是否是生产环境
const { NODE_ENV } = process.env
const isProduction = NODE_ENV === 'production'
const CDN_SERVER = {
  production: '',
  development: ''
}
const CDN_URL = CDN_SERVER[NODE_ENV]
const config = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0] = {
          template: './static/index.html',
          head: `
                <link rel='shortcut icon' type='image/ico' href='/favicon.ico'>
                <link rel="stylesheet" href="/static/css/loading.css">
                `,
          // 通用script
          common: `
                <script>
                   let OLD_VERSION = localStorage.APP_VERSION;
                   let CURRENT_VERSION = ${(new Date).getTime()};
                   if(OLD_VERSION!=CURRENT_VERSION){
                     localStorage.clear();
                     localStorage.clear();
                     localStorage.APP_VERSION = CURRENT_VERSION;
                     console.log('新版本发布');
                   }
                   </script> `
        }
        return args
      })
    // if (!isProduction) {
    //   config.module
    //     .rule('images')
    //     .use("url-loader")
    //     .loader("url-loader")
    //     .options({
    //       limit: 10
    //     })
    //     .end();
    // }
  }
}

module.exports = isProduction ? { ...config, ...prod } : { ...config, ...dev }