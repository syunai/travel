<template>
<div>
  <div class="recommend-title">热门推荐</div>
  <ul>
    <!-- 就上tag后router-link就被渲染成li标签，而不是a -->
    <router-link
      tag="li"
      :to="'/detail/' + item.id"
      class="item border-bottom"
      v-for="item of list"
      :key="item.id"
    >
      <img class="item-img" :src="item.imgUrl"/>
      <div class="item-info">
        <p class="item-title ellipsis">{{item.title}}</p>
        <p class="item-desc ellipsis">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </router-link>
  </ul>
</div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.recommend-title {
  line-height: .8rem;
  background: #ccc;
  text-indent: .2rem;
  margin-top: .2rem;
}

.item {
  height: 1.9rem;
  display: flex;
  overflow: hidden;
}
.item-img {
  height: 1.7rem;
  width: 1.7rem;
  padding: .1rem;
}
.item-info {
  flex: 1;
  padding: .1rem;
  min-width: 0;
}
.item-title {
  line-height: .54rem;
  font-size: .32rem;
}
.item-desc {
  line-height: .4rem;
  color: #ccc;
}
.item-button {
  line-height: .44rem;
  margin-top: .16rem;
  padding: 0 .2rem;
  background: #ff9300;
  border-radius: .03rem;
  margin-top: .2rem;
  color: #fff;
}
</style>
