<template>
<div>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="输入城市名或拼音"
      v-model="keyWords"
    />
  </div>
  <div class="search-content" ref="searchBlock" v-show="keyWords">
    <ul>
      <li
        class="search-item border-bottom"
        v-for="item of list"
        :key="item.id"
      >{{item.name}}</li>
      <li
        class="search-item border-bottom"
        v-show="hasNoList"
      >没有找到匹配数据</li>

    </ul>
  </div>
</div>

</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  computed: {
    hasNoList () {
      return this.list.length === 0
    }
  },
  data () {
    return {
      keyWords: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchBlock)
  },
  watch: {
    keyWords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWords) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          this.cities[key].forEach(value => {
            if (value.spell.indexOf(this.keyWords) > -1 || value.name.indexOf(this.keyWords) > -1) {
              result.push(value)
            }
          }
          )
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style scoped>
.search-content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  background: #eee;

}
.search-item {
  line-height: .62rem;
  padding-left: .2rem;
  color: #666;
  background: #fff;
}
.search {
  height: .72rem;
  padding: 0 .1rem;
  background: var(--themeColor);
}
.search-input {
  box-sizing: border-box;
  width: 100%;
  height: .62rem;
  line-height: .62rem;
  padding: 0 .1rem;
  text-align: center;
  border-radius: .06rem;
  color: #666
}
</style>
