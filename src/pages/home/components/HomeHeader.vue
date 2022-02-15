<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>

  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
  },
  computed: {
    // 将store中的state中的city映射到计算属性city。
    ...mapState(['city'])
  }
}
</script>

<style scoped>
.header {
  display: flex;

  background: var(--themeColor);

  line-height: var(--HeaderHeight);

  color: #fff;
}
.header-left {
  width: 0.64rem;
}
.header-input {
  flex: 1;

  margin-top: .12rem;
  margin-left: .2rem;
  padding-left: .2rem;

  height: .62rem;
  line-height: .62rem;
  border-radius: .1rem;

  background: #fff;
  color: #ccc;
}
.header-right {
  min-width: 1.04rem;
  padding: 0 .1rem;
  color: #fff;
  text-align: center;
}

.back-icon {
  font-size: .4rem;
  text-align: center;
}
.arrow-icon {
  font-size: .24rem;

  margin-left: -.04rem;
}
</style>
