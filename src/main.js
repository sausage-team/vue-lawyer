import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/router'
import store from '@/stores'
import './registerServiceWorker'
import '@/assets/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
