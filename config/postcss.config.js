module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: [
        'advanced',
        { zindex: false } //取消CSS z-index自动计算
      ]
    }
  }
}
