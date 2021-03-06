import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "./assets/font/iconfont.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './permissions'

import {format} from "timeago.js";
// use
Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.config.productionTip = false  //打包是否提示打包内容
Vue.filter('formatTime', function(val) {
  let date = new Date(val)
  return format(date, 'zh_CN')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
