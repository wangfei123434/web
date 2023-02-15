<template>
  <div class="wrap-box">
    <!-- 武汉英才计划 -->
    <div class="box box1">
      <div class="title1">武汉英才计划</div>
      <div class="title2">WUHAN TALENT PLAN</div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList1" :key="index">
          <img :src="item.img" alt="">
          <div class="t">{{item.t}}</div>
          <div class="c">资格条件及政策指引</div>
          <div class="btn"  @click="goWz(item.url)">{{item.btnTxt}}</div>
        </div>
      </div>
    </div>
    <!-- 培育支持专项 -->
    <div class="box box2">
      <div class="title1">培育支持专项</div>
      <div class="title2"></div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList2" :key="index">{{item}}</div>
      </div>
    </div>
     <!-- 培育支持专项 -->
    <div class="box box2">
      <div class="title1">特色专项</div>
      <div class="title2"></div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList3" :key="index" @click="goOpen(item)">{{item.name}}</div>
      </div>
    </div>
    <!-- 3551光谷人才计划 -->
    <div class="box box4">
      <div class="title1">3551光谷人才计划</div>
      <div class="title2">3551 OPTICS VALLEY TALENT PLAN</div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList4" :key="index">
          <img :src="item.img" alt="">
          <h2>{{item.t}}</h2>
          <div>申报指南</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zxzx",
  components: {},
  data() {
    return {
      navList1: [
        {
          img: require("@/assets/imgs/wfimg/rcjh-box1-img1.png"),
          t:"战略科技人才",
          btnTxt:"立即查看",
          url: '/zTlent'
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box1-img2.png"),
          t:"产业领军人才",
          btnTxt:"立即查看",
          url: '/cTlent'
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box1-img3.png"),
          t:"优秀青年人才",
          btnTxt:"在线申报",
          url: '/yTlent'
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box1-img4.png"),
          t:"卓越工程师人才",
          btnTxt:"在线申报",
          url: ''
        },
      ],
      // navList2:["先进制造人才","科技创新人才","技能工匠人才","医疗卫生人才","现代服务人才","城市建设人才","教育人才","现代农业人才","社会工作人才","文化体育旅游人才"],
      navList2:["建设中…"],
      // navList3:["车谷人才","金山人才","江岸人才","江汉人才","硚口人才","知音人才","武昌人才","青山人才","洪山人才","江夏人才","蔡甸人才","木兰人才","问津人才"],
      navList3:[
        {
          name: "江汉人才",
          url: "http://www.whzc.gov.cn/jianghan/index"
        },
        {
          name: "青山人才",
          url: "/qingshan"
        },
      ],
      navList4: [
        {
          img: require("@/assets/imgs/wfimg/rcjh-box4-img1.png"),
          t:"顶尖科学家"
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box4-img2.png"),
          t:"领军人才"
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box4-img3.png"),
          t:"高层次人才"
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box4-img4.png"),
          t:"高端服务人才"
        },
        {
          img: require("@/assets/imgs/wfimg/rcjh-box4-img5.png"),
          t:"优秀青年人才"
        },
      ]
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    goWz(link){
      this.$router.push(link);
    },
    goOpen(item){
      if (item.name === '青山人才'){
        this.goWz(item.url)
      } else {
        window.open(item.url);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.wrap-box {
  padding: 20px 0;
  .box {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 80px;
    .title1 {
      font-size: 34px;
      font-family: PingFang SC;
      font-weight: 600;
      line-height: 40px;
      color: #0a63dd;
      margin-top: 20px;
    }
    .title2 {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 40px;
      color: #c4c4c4;
      margin: 20px 0 50px 0;
    }
    .list-box {

      .item-box {
        width: 240px;
        height: 273px;
      }
    }
  }
  .box1 {
    .list-box {
      display: flex;
      justify-content: space-between;
      .item-box {
        background: linear-gradient(180deg, #f2f5f8 0%, #fffefe 100%);
        box-shadow: 0px 4px 24px rgba(1, 56, 131, 0.16);
        border-radius: 4px;
        .t{
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 600;
          color: #000000;
        }
        .c{
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #000000;
          margin: 10px 0 20px 0;
        }
        .btn{
          width: 122px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: rgba(10,99,221,0.0300);
          border: 1px solid #0962DD;
          color: #0A63DD;
          margin: 0 auto;
          cursor: pointer;
          &:hover{
            background: #0A63DD;
            color: #fff;
          }
        }
      }
    }
  }
  .box2 {
    .title2 {
      width: 40px;
      height: 8px;
      background: rgba(10, 99, 221, 1);
      margin: 20px auto 50px auto;
    }
    .list-box {
      // flex-wrap: wrap;
      // display: flex;
      // justify-content: space-between;
      margin: 0 -40px;
      overflow: hidden;
      .item-box {
        background: #f5f5f5;
        height: 72px;
        line-height: 72px;
        margin:10px 40px;
        float: left;
        font-size: 20px;
        font-family: PingFangSC-Medium;
        color: #000000;
        cursor: pointer;
        &:hover{
          background: #0A63DD;
          color: #fff;
        }
      }
    }
  }
  .box4{
    width: 1284px;
    .list-box {
      flex-wrap: wrap;
      display: flex;
      .item-box {
        width: 416px;
        height: 254px;
        position: relative;
        margin-right: 12px;
        h2{
          position: absolute;
          font-size: 24px;
          font-family: SourceHanSansCN-Bold;
          line-height: 40px;
          color: #000000;
          top: 82px;
          left: 50%;
          transform: translateX(-50%);
        }
        div{
          width: 122px;
          height: 40px;
          line-height: 40;
          text-align: center;
          background: #fff;
          font-size: 16px;
          font-family: PingFangSC-Medium;
          line-height: 40px;
          color: #0A63DD;
          position: absolute;
          bottom: 84px;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          &:hover{
            background: #0A63DD;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
