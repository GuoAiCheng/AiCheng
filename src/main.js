import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

import './assets/css/bootstrap.css'
import './index.css'

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios'

import $ from 'jquery';
Vue.prototype.$ = $

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.use(Avue,{axios})
Vue.use(Avue);