<template>
<div>
  <div class="recommend-title">热门推荐</div>
  <ul>
    <li
      class="item border-bottom"
      v-for="recommendItem of recommendList"
      :key="recommendItem.id"
    >
      <img class="item-img" :src="recommendItem.imgUrl"/>
      <div class="item-info">
        <p class="item-title ellipsis">{{recommendItem.title}}</p>
        <p class="item-desc ellipsis">{{recommendItem.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2101/c1/c1d3c7a78d2cfef3a3.img.png_250x250_220b3378.png',
          title: '热市云顶温泉旅游度假区',
          desc: '热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2101/c1/c1d3c7a78d2cfef3a3.img.png_250x250_220b3378.png',
          title: '热市云顶温泉旅游度假区',
          desc: '热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2101/c1/c1d3c7a78d2cfef3a3.img.png_250x250_220b3378.png',
          title: '热市云顶温泉旅游度假区',
          desc: '热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区'
        }
      ]
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
