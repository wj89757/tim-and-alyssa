import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const Side = () => import(/* webpackChunkName: "Home" */'@/side/Index.vue')
const Me = () => import(/* webpackChunkName: "Home" */'@/me/Index.vue')
const Memory = () => import(/* webpackChunkName: "Home" */'@/memory/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
      path: '/(side|index)?',
      name: 'Side',
      component: Side,
  },  {
      path: '/(memory|index)?',
      name: 'Memory',
      component: Memory,
  },{
      path: '/(me|index)?',
      name: 'Me',
      component: Me,
  },{
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }],
})
