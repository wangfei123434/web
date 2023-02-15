<template>
  <div class="base-title flex-column flex-center">
    <div class="base-title__text">{{title}}</div>
    <div class="base-title__sub-text">{{subTitle}}</div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: Array,
    },
    subTitle: {
      type: String,
    }
  },
}
</script>
<style lang="scss" scoped>
.base-title {
  width: 100%;
  margin-bottom: 50px;
  font-family: Source Han Sans CN;
  .base-title__text{
    font-size: 34px;
    font-weight: bold;
    color: #0A63DD;
    letter-spacing: 4px;
  }
  .base-title__sub-text{
    font-size: 18px;
    font-weight: 400;
    color: #DCDCDC;
    letter-spacing: 4px;
    opacity: 1;
    margin-top: 20px;
  }
}
</style>
