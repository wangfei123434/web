<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Source Han Sans CN;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1200px;
}
.ql-editor {
  min-height: 200px;
}
.w-1200-auto{
  width: 1200px!important;
  margin-left: auto;
  margin-right: auto;
}
</style>
<style lang="scss">
@import "./styles/atom.scss";
@import "./styles/reset.css";
</style>
