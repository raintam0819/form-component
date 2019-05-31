import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/form',
      component: () => import('./views/test-form.vue')
    },
    {
      path: '/display',
      component: () => import('./views/display.vue')
    },
    {
      path: '/table-render',
      component: () => import('./components/table-slot/table-slot.vue')
    },
    {
      path: '/tree',
      component: () => import('./components/tree/demo.vue')
    }
  ]
})