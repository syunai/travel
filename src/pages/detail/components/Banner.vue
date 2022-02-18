<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" />
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xeac4;</span>{{this.gallaryImgs.length}}
      </div>
    </div>
  </div>
  <CommonGallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"/>
</div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
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
