<template>
  <div class="rczc">
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
      <!-- <Zcwj v-if="activeIndex == 0"></Zcwj>
      <Qywj v-if="activeIndex == 1"></Qywj> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Zcwj from "./components/Zcwj.vue";
import Qywj from "./components/Qywj.vue";

export default {
  name: "Rczc",
  components: {
    Zcwj,
    Qywj,
  },
  data() {
    return {
      tabList:[
        {name:'政策文件'},
        {name:'企业问计'},
      ],
      list:[
        // {name:'政策文件'},
        // {name:'企业问计'},
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
          {name: '人才政策'},
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
        {name: '人才政策'},
        {name: this.tabList[index].name}
      ]
      if(index == 0){
        this.$router.push({path:"/Zcwj",query:{index:0}});
      }else if(index == 1){
        this.$router.push({path:"/Qywj",query:{index:1}});
      }
    }
  }
};
</script>

<style lang="less" scoped>
.rczc{
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
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
