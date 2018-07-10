import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/common.scss'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [{
  path: '/'
}]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
