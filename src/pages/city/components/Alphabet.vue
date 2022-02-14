<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
