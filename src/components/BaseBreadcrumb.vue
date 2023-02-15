<template>
  <div class="base-breadcrumb">
    <div class="base-breadcrumb__inner flex-between">
      <div class="f-1"></div>
      <img :src="homeIcon" class="h-14 w-16 mr-4 mt-2"/>
      当前位置：
      <span v-for="(item,index) in list">
        <router-link v-if="item.href" :to="item.href">
          {{item.name}}
        </router-link>
        <span v-else>
          {{item.name}}
        </span>
        <span class="split" v-if="index<list.length-1">></span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      homeIcon: require('@/assets/imgs/home-icon.png'),
    }
  },
  methods: {
    handleChange(index, tab) {
      this.$emit('change', index, tab)
    }
  }
}
</script>
<style lang="scss" scoped>
.base-breadcrumb {
  background: #f2f2f2;
  .base-breadcrumb__inner {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
  }

  .base-breadcrumb__item {

  }
  .split{
    padding:0 8px;
  }
}
</style>
