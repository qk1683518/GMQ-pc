// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "./axios";
import cookie from "../static/js/cookie";

import "../static/css/reset.css";
import "../static/css/main.css";

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$cookie = cookie
Vue.prototype.$back = function () {
  router.go(-1)
}
if (process.env.NODE_ENV == 'production') {
  console.log = function () {};
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
