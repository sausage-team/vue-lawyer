import Vue from 'vue'
import Vuex from 'vuex'

const context = require.context('./modules/', true, /\.ts$/)
const modules: any = {}

context.keys().forEach((item: string) => {
  const tmpKey: string = item.replace(/.\//g, '').replace(/.ts/g, '')
  modules[tmpKey] = context(item).default
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
