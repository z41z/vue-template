/**
 * 开发Webpack配置
 */
const babel = require('./babel.config')
const alias = require('./webpack.alias')
const proxy = require('./webpack.proxy')
const plugins = require('./webpack.plugins')
const splitChunks = require('./webpack.splitChunks')
const externals = require('./webpack.externals')
module.exports = {
  devServer: {
    proxy
  },
  module: {
    rules: [
      babel
    ]
  },
  optimization: {
    splitChunks
  },
  plugins,
  resolve: {
    alias
  },
  externals
}