import Vue from 'vue'
import Vuex from 'vuex'

const context = require.context('./modules/', true, /\.js$/)
const modules = {}

context.keys().forEach(item => {
  const tmpKey = item.replace(/.\//g, '').replace(/.js/g, '')
  modules[tmpKey] = context(item).default
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
