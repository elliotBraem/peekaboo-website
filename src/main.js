import './assets/common.scss'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

 
Vue.use(VueRouter)

const routes = [{
  path: '/'
}]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
