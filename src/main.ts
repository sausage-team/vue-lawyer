import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/router'
import store from '@/stores'
import ElementUI from 'element-ui'
import CONSTANT from '@/beans/bean'
import Components from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/assets/sass/main.scss'
import { services } from './services'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.CONSTANT = CONSTANT

Components.init(Vue)

Vue.prototype = Object.assign(Vue.prototype, {
  ...services
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
