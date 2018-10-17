import Vue from 'vue';
import router from './router';
import App from './App';

import 'assets/css/main.styl';
import 'assets/css/fonts.styl';

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
