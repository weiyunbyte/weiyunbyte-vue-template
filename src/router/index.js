import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/notFound.vue')
  },
  {
    path: '*',    // 此处需特别注意至于最底部
    redirect: '/404'
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({x: 0, y: 0 }),
  routes
})

export default router
