// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import moment from 'moment'

import PostList from './components/PostList'
// this 'post-list' selector can be used in the whole application now (Global Component)
Vue.component('post-list', PostList);

Vue.config.productionTip = false

// make axios work
Vue.prototype.$http = axios;
// this.$http.get

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  /** workaround the limitations of template (like needing to be a string)
   *  renders the compiled Javascript instead! Yay :)
	 **/
  render: h => h(App)
})

