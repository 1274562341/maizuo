<template>
  <div id="app">
    <div id="nav">
      <div class="contain">
        <router-view></router-view>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
}
*{
    margin: 0;
  padding: 0;
}
.contain{
  height: 600px;
  width: 100%;
  overflow-y:auto;
  background-color: #f4f4f4;
}
</style>
