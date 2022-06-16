const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const packageName = require('./package').name;

function resolve(dir){
  return  path.join(__dirname,dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: '//localhost:3013',
  devServer:{
    port:3013,
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
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      library: `sub-app2`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
  }
})
