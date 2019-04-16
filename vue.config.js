const proxyConfig = require('./proxy.conf')

let proxyObj = {}

for (let key in proxyConfig) {
  proxyObj[key] = {
    target: proxyConfig[key].target,
    changeOrigin: proxyConfig[key].changeOrigin,
    pathRewrite: {
      [`^${key}`]: key
    }
  }
}

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: proxyObj,
    before: app => {}
  }
}
