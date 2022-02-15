<template>
  <div id="app">
    <!-- keep-alive 可以从内存中拿数据不用每次都重新渲染获取数据 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
