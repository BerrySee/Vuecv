import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const router = new VueRouter({
  mode: "history",
  routes
});
Vue.use(BootstrapVue);

Vue.use(VueRouter);
new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
