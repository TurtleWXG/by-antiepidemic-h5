import Vue from 'vue'
import VueRouter from 'vue-router'
import DataVisualization from '../views/DataVisualization/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DataVisualization',
    component: DataVisualization
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/list.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
