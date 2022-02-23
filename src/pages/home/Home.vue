<template>
  <div>
    <HomeHeader/>
    <HomeSwiper :list="swiperList"/>
    <HomeIcons :list="iconList"/>
    <HomeRecommend :list="recommendList"/>
    <HomeWeekend :list="weekendList"/>
  </div>
</template>

<script>
// import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader: () => import('./components/HomeHeader'),
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }

  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () {
    // 当页面第一次或以后重新被显示时执行
    if (this.city !== this.lastCity) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  }
}
</script>

<style>
</style>
