module.exports = {
  publicPath : './',
  devServer: {
    port: 7529,
  },
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
    }
  }
}