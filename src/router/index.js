import Vue from 'vue'
import VueRouter from 'vue-router'
import AddMovie from '../views/AddMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AddMovie',
    component: AddMovie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
