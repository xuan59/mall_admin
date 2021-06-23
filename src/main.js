import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import axios from 'axios'
import SlideVerify from 'vue-monoplasty-slide-verify' //滑动验证码
import request from './utils/request'

Vue.use(SlideVerify);
Vue.use(ElementUI);
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:8888/';
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.axios = axios
Vue.prototype.request = request
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
