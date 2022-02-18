<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="(imgUrl, index) of imgs"
          :key="index"
        >
          <img class="gallary-img" :src="imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  z-index: 99;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.gallary-img {
  width: 100%;
}
.swiper-pagination {
  color: #fff;
  bottom: -1rem;
}
.swiper-container {
  overflow: inherit;
}
</style>
