import Vue from 'vue';
import Router from 'vue-router';

import Homepage from 'pages/Homepage';
import Careers from 'pages/Careers';

Vue.use(Router);

const routes = [
  {
    path: '*', // This may stop /careers from working
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
