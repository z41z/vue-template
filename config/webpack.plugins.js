/**
 * 插件配置
 */

const path = require('path')
const env = process.env.NODE_ENV
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

let plugins = [
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../static'),
      to: '../dist/static',
      ignore: 'root/*.*'
    },
    {
      from: path.resolve(__dirname, '../static/root'),
      to: '../dist/'
    }
  ]),
  new ProgressBarPlugin({
    format: chalk.green('Progressing') + '[:bar]' + chalk.green(':percent') + ' (:elapsed Seconds)',
    clear: false
  })
]

if (env === 'production') {
  plugins.push(new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)())
}

module.exports = plugins