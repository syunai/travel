<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped>
.header {
  height: var(--HeaderHeight);
  line-height: var(--HeaderHeight);
  text-align: center;
  overflow: hidden;
  color: #fff;
  background: var(--themeColor);
  font-size: .32rem;
  position: relative;
}
.header-back {
  width: .64rem;
  font-size: .4rem;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
}
</style>
