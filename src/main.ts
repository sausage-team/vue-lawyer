import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/router'
import store from '@/stores'
import ElementUI from 'element-ui'
import VueCookies from 'vue-cookies'
import CONSTANT from '@/beans/bean'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/assets/sass/main.scss'

Vue.use(ElementUI)
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.CONSTANT = CONSTANT

const components = require.context('./components/', true, /\.vue$/)
components.keys().forEach((key: string) => {
  const k: string = key.split('/')[key.split('/').length - 1].replace(/\.vue/g, '')
  Vue.component(k, components(key).default)
})

const services = require.context('./services/', true, /\.ts$/)
services.keys().forEach((key: string) => {
  const k: string = key.split('/')[key.split('/').length - 1].replace(/_service.ts/g, 'Service')
  if (k !== './basic_service.js') {
    Vue.prototype[k] = services(key).default
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
