<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
.header {
  display: flex;

  background: var(--themeColor);

  line-height: 0.86rem;

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
  width: 1.24rem;

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
