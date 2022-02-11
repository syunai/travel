// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 样式重置
import '@/assets/styles/reset.css'
// 1像素边框解决样式
import '@/assets/styles/border.css'
// 解决移动端点击可能会出现延迟的问题
import fastClick from 'fastclick'

//  加入快速点击
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
