<template>
<div>
  <div class="recommend-title">周末去哪儿</div>
  <ul>
    <li
      class="item border-bottom"
      v-for="recommendItem of recommendList"
      :key="recommendItem.id"
    >
      <div class="item-img-wrapper">
        <img class="item-img" :src="recommendItem.imgUrl"/>
      </div>
        <div class="item-info">
          <p class="item-title ellipsis">{{recommendItem.title}}</p>
          <p class="item-desc ellipsis">{{recommendItem.desc}}</p>
        </div>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/2b/d4ebbd8337f1ac.jpg_r_640x214_2d4332c1.jpg',
          title: '热市云顶温泉旅游度假区',
          desc: '热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/2b/d4ebbd8337f1ac.jpg_r_640x214_2d4332c1.jpg',
          title: '热市云顶温泉旅游度假区',
          desc: '热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区热市云顶温泉旅游度假区'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/2b/d4ebbd8337f1ac.jpg_r_640x214_2d4332c1.jpg',
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

.item-img-wrapper {
  width: 100%;
  padding-bottom: 33.9%;
  height: 0;
  overflow: hidden;
}

.item-img {
  width: 100%;
}
.item-info {
  padding: .1rem;
}
.item-title {
  line-height: .54rem;
  font-size: .32rem;
}
.item-desc {
  line-height: .4rem;
  color: #ccc;
}
</style>
