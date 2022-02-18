<template>
  <div id="app">
    <!-- keep-alive 可以从内存中拿数据不用每次都重新渲染获取数据 -->
    <!-- name 为 Detail的组件不会缓存
      export default {
      name: 'Detail',
     -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  // 这个name 在 keepalive exclude使用，在递归组件时使用， 在vuedevtool中显示为组件的名称
  name: 'App'
}
</script>

<style>

</style>
