<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
    <HomeRecommend/>
    <HomeWeekend/>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
