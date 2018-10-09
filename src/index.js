import Vue from 'vue';
import router from './router';
import App from './App';

import 'assets/css/main.css';

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
