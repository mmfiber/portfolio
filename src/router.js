import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Languages from './views/Languages.vue'
import Works from './views/Works.vue'

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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/languages',
      name: 'languages',
      component: Languages
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
  ]
})
