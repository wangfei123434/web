<template>
  <div class="base-tabs flex-center">
    <div class="base-tabs__inner flex-center">
      <div v-for="(tab,index) in tabList" :key="tab.name" class="base-tabs-item flex-center" :class="{active:index === activeIndex}" @click="handleChange(index,tab)">
        <span>{{tab.name}}</span>
        <span class="line"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    tabList: {
      type: Array,
      default: []
    },
    activeIndex: {
      type: Object,
      default: []
    }
  },
  data() {
    return {
    }
  },
  methods:{
    handleChange(index,tab){
      this.$emit('change',index,tab)
    }
  }
}
</script>
<style lang="scss" scoped>
.base-tabs {
  background: white;
  height: 70px;
  position: relative;
  .base-tabs__inner{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .base-tabs-item{
      width: 240px;
      height: 70px;
      margin: 0 20px;
      .line{
        display: none;
      }
      &.active,&:hover{
        background: #0A63DD;
        color: white;
        height: 100px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        margin-top: -30px;
        cursor: pointer;
        flex-direction: column;
        transition: all 0.3s;
        .line{
          width: 34px;
          height: 1px;
          background: #FFFFFF;
          content: '';
          display: block;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
