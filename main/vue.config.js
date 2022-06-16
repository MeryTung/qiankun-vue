const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package').name;
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port:3011,
    client:{
      overlay: {
        warnings: false,
        errors: true
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
  }
})
