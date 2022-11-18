module.exports = {
  postcssOptions: {
    plugins: [
      require('postcss-pxtorem')({
        rootValue: 37.5,
        minPixelValue: 2,
        propList: ['*'],
      })
    ]
  }
}
