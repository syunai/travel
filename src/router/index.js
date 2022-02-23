import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      // 将同步加载改成异步加载的形式
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      // component: City
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      // component: Detail
      component: () => import('@/pages/detail/Detail')
    }
  ]
})
