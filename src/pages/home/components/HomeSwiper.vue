<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }

    }
  },
  computed: {
    showSwiper () {
      return this.list.length > 0
    }
  }
}
</script>

<style scoped>
.swiper-img {
  width: 100%;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  overflow: hidden;
}

</style>

<style>
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
