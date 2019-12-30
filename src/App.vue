/**
  顶级组件
 */
<template>
  <div id="app">
    <!-- 路由出口  -->
    <router-view/>
  </div>
</template>

<style lang="less">


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
