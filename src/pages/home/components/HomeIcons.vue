<template>
  <div class="icons">
    <swiper v-if="showIcon" :options="swiperOptions">
      <swiper-slide
        v-for="(iconList,index) of pages"
        :key = "index"
      >
        <div
          class="icon"
          v-for="item of iconList"
          :key="item.id"
        >
          <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc ellipsis">{{item.desc}}</p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.list.forEach((value, index) => {
        const pageIndex = Math.floor(index / 8)

        if (!pages[pageIndex]) {
          pages.push([])
        }
        pages[pageIndex].push(value)
      })
      return pages
    },
    showIcon () {
      return this.pages.length > 0
    }
  }
}
</script>

<style scoped>
.icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin-top: .1rem;
}
.icon {
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  float: left;
  overflow: hidden;
  position: relative;
}
.icon .icon-img {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .44rem;
  box-sizing: border-box;
  padding: .1rem;
}
.icon .icon-img .icon-img-content {
  height: 100%;
  display: block;
  margin: 0 auto;
}
.icon .icon-desc {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: .44rem;
  line-height: .44rem;
  color: var(--darkTextColor);
  text-align: center;
}
</style>
<style>
.icons .swiper-container {
  width: 100%;
  padding-bottom: 50%;
  height: 0;
}
</style>
