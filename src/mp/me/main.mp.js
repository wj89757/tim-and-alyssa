import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import store from '../../store'
import Me from '../../me/Index.vue'
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/(me|index)?',
    name: 'Me',
    component: Me,
  }],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)
  Vue.use(KboneUI)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
