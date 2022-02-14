<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped>
.list {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.58rem;
  width: .4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item {
  line-height: .4rem;
  text-align: center;
  color: var(--themeColor);
}
</style>
