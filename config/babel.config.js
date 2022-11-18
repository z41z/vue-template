/**
 * Babel配置
 */

let isProduction = process.env.NODE_ENV === 'production'

// 开发环境Babel编译
let options = isProduction ? {
  presets: ['@vue/app']
} : {}
let regx = isProduction ? /(node_modules)/ : /(node_modules)|(pages)|(components)|(api)|(const)/;
module.exports = {
  test: /\.js$/,
  exclude: file => (
    regx.test(file)
  ),
  use: {
    loader: 'babel-loader',
    options: {
      plugins: ['dynamic-import-webpack'],
      ...options
    }
  }

}