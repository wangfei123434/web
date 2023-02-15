<template>
  <div class="content-wrapper">
    <img :src="bgImg" class="w-full h-auto"/>
    <BaseTabs :tab-list="tabList" :active-index="activeIndex" @change="handleIndexChange"/>
    <BaseBreadcrumb :list="list"/>
<!--    <Introduce v-if="activeIndex === 0" />-->
    <!-- <ContactUS v-if="activeIndex === 0" /> -->
    <!-- <InteractiveCommunication v-if="activeIndex === 1" /> -->
    <router-view></router-view>
  </div>
</template>

<script>

import Introduce from "@/views/gywm/components/Introduce";
import ContactUS from "@/views/gywm/components/ContactUS";
import InteractiveCommunication from "@/views/gywm/components/InteractiveCommunication";
export default {
  components: {InteractiveCommunication, ContactUS, Introduce},
  data() {
    return {
      tabList: [
        // {name: '人才工作局简介'},
        {name: '联系我们'},
        {name: '互动交流'},
      ],
      list: [
        // {name: '人才工作局简介'},
        // {name: '联系我们'},
        // {name: '互动交流'},
      ],
      activeIndex: 0,
      // bgImg: require('./images/bg.png')
      bgImg: require('../../assets/imgs/wfimg/home-banner.png')
    }
  },
  created(){
    // this.handleIndexChange(0)
  },
   watch:{
    '$route.query':{
      handler(query){
        this.activeIndex = Number(query.index) || 0;
        this.list = [
          {name: '关于我们'},
          {name: this.tabList[query.index].name}
        ]
      },
      deep:true,
      immediate:true
    }
  },
  methods: {
    handleIndexChange(index) {
      this.activeIndex = index;
      this.list = [
        {name: '关于我们'},
        {name: this.tabList[index].name}
      ]
      if(index == 0){
        this.$router.push({path:"/lxwm",query:{index:0}});
      }else if(index == 1){
        this.$router.push({path:"/hdjl",query:{index:1}});
      }
    }
  }
}
</script>

<style scoped lang="less">
.content-wrapper{
position: relative;
  top: -94px;
}
.bg-box-wrapper {
  position: relative;

  .bg-box-inner {
    position: absolute;
    align-items: center;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
  }
}

.content-inner {
  width: 1200px;
  margin: 0 auto;
  margin-top: -30px;
  z-index: 999;
  position: relative;
}

.list1 {
  .list1-header {
    height: 60px;
    background: rgba(10, 99, 221);
    border-radius: 4px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
  }

  .list1-body {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 50%;
      flex: 0 0 50%;
      min-height: 40px;
      padding: 12px 30px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 24px;
      color: #333333;
      opacity: 1;
      text-align: left;
    }
  }
}
</style>
