const fs = require('fs')
const chalk = require('chalk')

// 根据化境变量参数判断线上调试
const isProd = process.argv.indexOf('--prod') > -1
let regx = /let isProd = (false|true)/
let replacer = `let isProd = ${isProd}`

// 是否是线上调试并控制台打印
module.exports.isProd = {
  isProd,
  console: () => {
    console.log(chalk.green('<===========') + chalk.bgGreen.black(` 当前环境:${isProd ? '线上调试' : '开发调试'} `) + chalk.green('===========>'), '\n')
  }
}

// 根据当前线上调试参数修改前端配置
module.exports.generateConfig = () => {
  const frontendConfigPath = './src/config/index.js'
  let frontendConfig = fs.readFileSync(frontendConfigPath).toString().replace(regx, replacer)
  fs.writeFileSync(frontendConfigPath, `${frontendConfig}`)
}

// 根据当前线上调试参数修改开发proxy配置
module.exports.generateProxy = () => {
  const proxyConfigPath = `./config/webpack.proxy.js`
  let proxyConfig = fs.readFileSync(proxyConfigPath).toString().replace(regx, replacer)
  fs.writeFileSync(proxyConfigPath, `${proxyConfig}`)
}