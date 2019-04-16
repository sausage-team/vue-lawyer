import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/router'
import store from '@/stores'
import ElementUI from 'element-ui'
import VueLodash from 'vue-lodash'
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/assets/sass/main.scss'

Vue.use(ElementUI)
Vue.use(VueLodash, { name: 'lodash' })
Vue.use(VueCookies)

Vue.config.productionTip = false

const components = require.context('./components/', true, /\.vue$/)
components.keys().forEach(key => {
  let k = key.split('/')[key.split('/').length - 1].replace(/\.vue/g, '')
  Vue.component(k, components(key).default)
})

const services = require.context('./services', true, /\.js$/)
services.keys().forEach(key => {
  let k = key.split('/')[key.split('/').length - 1].replace(/_service.js/g, 'Service')
  if (k !== './basic_service.js') {
    Vue.prototype[k] = services(key).default
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
