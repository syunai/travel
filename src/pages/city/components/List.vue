<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>

      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      const elem = this.$refs[this.letter][0]
      this.scroll.scrollToElement(elem)
    }
  },
  methods: {
    handleCityClick (cityName) {
      // this.$store.dispatch('changeCity', cityName)
      // this.$store.commit('changeCity', cityName)
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style scoped>
.title {
  line-height: .54rem;
  background: #eee;
  padding-left: .2rem;
  color: #666;
  font-size: .26rem;
}
.border-topbottom::before,
.border-topbottom::after,
.border-bottom::before {
  border-color: #ccc;
}
.button-list {
  overflow: hidden;
  padding: .1rem .6rem .1rem .1rem;
}
.button-wrapper {
  width: 33%;
  float: left;
}
.button {
  padding: .1rem;
  margin: .1rem ;
  padding: .1rem 0;
  text-align: center;
  border: .02rem solid #ccc;
  border-radius: .06rem;
}
.item {
  line-height: .76rem;
  padding-left: .2rem;
}
.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
