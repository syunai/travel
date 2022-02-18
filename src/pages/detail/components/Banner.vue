<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
    <div class="banner-info">
      <div class="banner-title">故宫博物院(AAAAA景区)</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xeac4;</span>17
      </div>
    </div>
  </div>
  <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"/>
</div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style scoped>
.banner {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 55%;
  position: relative;
}
.banner .banner-img {
  width: 100%
}
.banner .banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: .6rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
}
.banner-info .banner-title {
  flex: 1;
  font-size: .32rem;
  padding: 0 .2rem;
}
.banner-info .banner-number {
  margin-top: .14rem;
  padding: 0 .4rem;
  line-height: .32rem;
  height: .32rem;
  border-radius: .2rem;
  font-size: .24rem;
  background: rgba(0, 0, 0, .8);
}
.banner-icon {
  font-size: .24rem;
}
</style>
