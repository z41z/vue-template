/**
 * 根据pages目录下内容动态分割JS和CSS
 */

const fs = require('fs')
const pagesPath = './src/pages'
const componentsPath = './src/components'
const constPath = './src/const'
let splitPages = {}
let files = fs.readdirSync(pagesPath)
let components = fs.readdirSync(componentsPath)
let consts = fs.readdirSync(constPath)

// 页面优先级高于组件以减小打包大小
// 页面
files.forEach((item, index) => {
  let stats = fs.statSync(`${pagesPath}/${item}`);
  if (stats.isDirectory()) {
    splitPages[`page${item}`] = {
      name: `page-${item}`,
      test: RegExp(`${item}.*.vue$`),
      chunks: 'all',
      minChunks: 1,
      reuseExistingChunk: true, // 复用代码块
      enforce: true,
      priority: 20 + index
    }
  }
  else {
    let itemName = item.split('.')[0]
    splitPages[`page${itemName}`] = {
      name: `page-${itemName}`,
      test: RegExp(`${item}$`),
      chunks: 'all',
      minChunks: 1,
      reuseExistingChunk: true,
      enforce: true,
      priority: 20 + index
    }
  }
})

// 组件
components.forEach((item, index) => {
  let stats = fs.statSync(`${componentsPath}/${item}`);
  if (stats.isDirectory()) {
    splitPages[`com${item}`] = {
      name: `com-${item}`,
      test: RegExp(`[\\\\/]components[\\\\/]${item}[\\\\/]`),
      chunks: 'all',
      minChunks: 1,
      reuseExistingChunk: true,
      enforce: true,
      priority: 10 + index
    }
  }
})

// 常量
consts.forEach((item, index) => {
  let stats = fs.statSync(`${constPath}/${item}`);
  let itemName = stats.isDirectory() ? item : item.split('.')[0]
  splitPages[`data${itemName}`] = {
    name: `data-${itemName}`,
    test: RegExp(`[\\\\/]const[\\\\/]${itemName}`),
    chunks: 'all',
    minChunks: 1,
    reuseExistingChunk: true,
    enforce: true,
    priority: 30 + index
  }
})

// 配置
let splitConfig = {
  chunks: 'all',
  cacheGroups: {
    ...splitPages,
    ui: {
      name: 'chunk-ui',
      priority: 40,
      test: /(element\-ui)/
    },
    libs: {
      name: 'chunk-libs',
      test: /[\\/]node_modules[\\/]/,
      priority: 10,
      chunks: 'initial',
      minChunks: 1,
    },
    core: {
      name: 'chunk-core',
      priority: 50,
      test: /(core-js)|(corejs)/
    },
    third: {
      name: 'chunk-third',
      priority: 40,
      test: /[\\/]node_modules[\\/](nprogress)|(node-libs)|(path-)|(lodash)/
    },
    vue: {
      name: 'chunk-vue',
      priority: 30,
      test: /[\\/]node_modules[\\/]vue/ig
    },
    axios: {
      name: 'chunk-axios',
      priority: 40,
      test: /axios/
    },
    v3: {
      name: 'chunk-v3',
      priority: 40,
      test: /api/
    },
    mix: {
      name: 'chunk-mix',
      priority: 40,
      test: /mixins/
    },
    image: {
      name: 'chunk-image',
      priority: 40,
      chunks: 'all',
      minChunks: 1,
      reuseExistingChunk: true,
      enforce: true,
      test: /[\\/]images[\\/]/
    }
  }
}

module.exports = splitConfig