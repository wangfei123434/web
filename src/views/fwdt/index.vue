<template>
  <div class="fwdt">
    <div class="banner">
      <img
        class="banner-image"
        src="../../assets/imgs/wfimg/home-banner.png"
        alt=""
      />
    </div>
    <BaseTabs :tab-list="tabList" :active-index="activeIndex" @change="handleIndexChange" />
    <BaseBreadcrumb :list="list"/>
    <div class="content-box">
      <!-- <Rcjh v-if="activeIndex == 0"></Rcjh>
      <Sxfw v-if="activeIndex == 1"></Sxfw> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Rcjh from "./components/Rcjh.vue";
import Sxfw from "./components/Sxfw.vue";

export default {
  name: "Fwdt",
  components: {
    Rcjh,
    Sxfw,
  },
  data() {
    return {
      tabList:[
        {name:'人才计划'},
        {name:'事项服务'},
      ],
      list: [
        // {name: '人才申报'},
        // {name: '事项服务'},
      ],
      activeIndex:0
    };
  },
  created() {
    // this.handleIndexChange(0)
  },
   watch:{
    '$route.query':{
      handler(query){
        this.activeIndex = Number(query.index) || 0;
        this.list = [
          {name: '服务大厅'},
          {name: this.tabList[query.index].name}
        ]
      },
      deep:true,
      immediate:true
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    handleIndexChange(index) {
      this.activeIndex = index;
      this.list = [
        {name: '服务大厅'},
        {name: this.tabList[index].name}
      ]
      if(index == 0){
        this.$router.push({path:"/Rcjh",query:{index:0}});
      }else if(index == 1){
        this.$router.push({path:"/Sxfw",query:{index:1}});
      }
    }
  },
};
</script>

<style lang="less" scoped>
.fwdt{
  position: relative;
  top: -94px;
  .banner{
    width: 100%;
    height: 260px;
    .banner-image{
      width: 100%;
      height: 100%;
    }
  }
  .content-box{

  }
}
</style>
