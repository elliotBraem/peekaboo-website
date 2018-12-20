import Vue from 'vue';
import Router from 'vue-router';

import Homepage from 'pages/Homepage';
import Careers from 'pages/Careers';
import Ashimkus from 'components/Biographies/ashimkus';
import Lblanke from 'components/Biographies/lblanke';
import Ngreen from 'components/Biographies/ngreen';
import Lcronin from 'components/Biographies/lcronin';
import Ldato from 'components/Biographies/ldato';
import Astober from 'components/Biographies/astober';

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
  {
    path: '/about/amanda-shimkus',
    component: Ashimkus,
  },
  {
    path: '/about/lindsey-blanke',
    component: Lblanke,
  },
  {
    path: '/about/nicole-green',
    component: Ngreen,
  },
  {
    path: '/about/libby-cronin',
    component: Lcronin,
  },
  {
    path: '/about/lara-dato',
    component: Ldato,
  },
  {
    path: '/about/amanda-stober',
    component: Astober,
  },
];

export default new Router({
  routes,
});
