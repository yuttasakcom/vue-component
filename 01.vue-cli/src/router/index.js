import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
