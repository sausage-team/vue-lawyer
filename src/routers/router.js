import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Layout = () => import('@/views/layout')
const Container = () => import('@/views/container')
const Button = () => import('@/views/button')
const Form = () => import('@/views/form')
const Radio = () => import('@/views/form/radio')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/container',
      name: 'container',
      component: Container
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      children: [
        {
          path: 'radio',
          name: 'radio',
          component: Radio
        }
      ]
    }
  ]
})
