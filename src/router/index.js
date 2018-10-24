import Vue from 'vue';
import Router from 'vue-router';

import Homepage from 'pages/Homepage';
import Careers from 'pages/Careers';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/careers',
    component: Careers,
  },
];

export default new Router({
  routes,
});
