import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/font/iconfont.css"
import 'element-ui/lib/theme-chalk/display.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.config.productionTip = false  //打包是否提示打包内容

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
