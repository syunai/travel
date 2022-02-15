// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 样式重置
import '@/assets/styles/reset.css'
// 1像素边框解决样式
import '@/assets/styles/border.css'
// 解决移动端点击可能会出现延迟的问题   使用了另外的方法，实在html中加入一个属性解决的在reset.css中touch-action: manipulation;
// import fastClick from 'fastclick'

// 全局引入图标字体样式
import '@/assets/styles/iconfont.css'
// 我的全局样式变量引入
import '@/assets/styles/variables.css'
// 引入轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
// 引入mixin css
import '@/assets/styles/mixin.css'
// 引入使用vuex构造的sotre
import store from '@/store'

Vue.use(VueAwesomeSwiper)

//  加入快速点击
// fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
