<template>
  <div class="zxzx">
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
      <!-- <Rcyw v-if="activeIndex == 0"></Rcyw>
      <Gzdt v-if="activeIndex == 1"></Gzdt>
      <Rchd v-if="activeIndex == 2"></Rchd>
      <Tzgg v-if="activeIndex == 3"></Tzgg>
      <Detail v-if="detailIsShow"></Detail> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Rcyw from "./components/Rcyw.vue";
import Gzdt from "./components/Gzdt.vue";
import Rchd from "./components/Rchd.vue";
import Tzgg from "./components/Tzgg.vue";
import Detail from "./detailPage/Detail.vue"

export default {
  name: "Zxzx",
  components: {
    Rcyw,
    Gzdt,
    Rchd,
    Tzgg,
    Detail
  },
  data() {
    return {
      tabList:[
        {name:'人才要闻'},
        {name:'工作动态'},
        {name:'人才活动'},
        {name:'通知公告'},
      ],
      list:[
        // {name:'人才要闻'},
        // {name:'工作动态'},
        // {name:'人才活动'},
        // {name:'通知公告'},
      ],
      activeIndex:0,
      detailIsShow:false
    };
  },
  created() {
    // console.log("index",this.$route.query.index);

    // console.log("activeIndex",this.activeIndex)
  },
  watch:{
    '$route.query':{
      handler(query){
        this.activeIndex = Number(query.index) || 0;
        this.list = [
          {name: '资讯中心'},
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
        {name: '资讯中心'},
        {name: this.tabList[index].name}
      ]
      if(index == 0){
        this.$router.push({path:"/Rcyw",query:{index:0}});
      }else if(index == 1){
        this.$router.push({path:"/Gzdt",query:{index:1}});
      }else if(index == 2){
        this.$router.push({path:"/Rchd",query:{index:2}});
      }else if(index == 3){
        this.$router.push({path:"/Tzgg",query:{index:3}});
      }
    },
  }
};
</script>

<style lang="less" scoped>
.zxzx{
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
