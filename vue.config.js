const { defineConfig } = require('@vue/cli-service')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,

  configureWebpack: config => {
    // 配置打包的进度条
    config.plugins.push(
      new ProgressBarPlugin({
        format: ' build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      })
    )
  },

  chainWebpack: config => {
    // 定义一些别名
    config.resolve.alias.set('@', resolve('src'))
      .set('@router', resolve('src/router'))
      .set('@views', resolve('src/views'))
      .set('@style', resolve('src/style'))
  },
})
