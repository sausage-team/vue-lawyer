import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Home.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
