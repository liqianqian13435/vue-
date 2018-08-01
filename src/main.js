import Vue from 'vue'
import App from './App'
import router from './router'


// 引入懒加载模块
import VueLazyload from 'vue-lazyload'


// 配置模块的参数
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 请求出错加载默认图片
  error: require('../static/images/timg.jpg'),
  // 正在请求时加载loading图片
  loading:require('../static/images/timg.gif'),
  attempt: 1
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
 