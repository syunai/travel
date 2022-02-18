<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  components: {
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  // activated 与 deactivated 只有在keepalive管理的组件才有这个生命周期函数
  // 页面展示时
  // activated () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // // 页面消失时
  // deactivated () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面消失时
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset

      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style scoped>

.header-abs {
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  border-radius: .4rem;
  background: rgba(0, 0, 0, .8);
  line-height: .8rem;
  text-align: center;
}
.header-abs-back {
  color: #fff;
  font-size: .4rem;
}

.header-fixed {
  height: var(--HeaderHeight);
  line-height: var(--HeaderHeight);
  text-align: center;
  color: #fff;
  background: var(--themeColor);
  font-size: .32rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
}
.header-fixed .header-fixed-back {
  width: .64rem;
  font-size: .4rem;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
}

</style>
