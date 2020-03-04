import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
const router = new VueRouter({
  mode: 'history',
  routes
});
Vue.use(Chartkick.use(Chart));

Vue.use(VueRouter);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
