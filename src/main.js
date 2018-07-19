// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Bootstrap
// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true;

//Jquery
// import JQuery from 'jquery'
// Vue.use(JQuery);
//Vue-crop
// import vuecrop from 'vue-crop'
// Vue.use(vuecrop);

// Cookie -- Require dependencies
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);
//Axios

import axios from 'axios'
import qs from 'qs'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(config.method === "post"){
    config.data = qs.stringify(config.data);
    config.headers["csrf-token"] = VueCookie.get("csrf-token");
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.prototype.$axios = axios;
// Vue.$route.path = "http://localhost:8080/api"

/* eslint-disable no-new */

// router.beforeEach((to, from, next) => {
//   console.log(to.path, from.path);
//   if(to)){
//     to.hash = from
//   }
//
//   next();
// })

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',

});
