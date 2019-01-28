import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
export default router
