<template>
  <div class="wrap-box">
    <!-- 事项服务 -->
    <div class="box box1">
      <div class="title1">事项服务</div>
      <div class="title2">EVENT SERVICES</div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList1" :key="index">
          <div class="item-box-l">
            <img :src="item.img" alt="" />
          </div>
          <div class="item-box-m">
            <div class="t">{{ item.t }}</div>
            <div class="b">资格条件及政策指引</div>
          </div>
          <div class="item-box-r" @click="goWz(item.url)">
            在线申报
          </div>
        </div>
      </div>

      <div class="list-box">
        <div class="item-box">
          <div class="item-box-l">
            <img src="../../../assets/imgs/wfimg/sxfu-box1-img2.png" alt="" />
          </div>
          <div class="item-box-m" style="padding:18px 13px">
            <div class="t">大学生就业创业</div>
            <!-- <div class="b">资格条件及政策指引</div> -->
          </div>
          <div class="item-box-r" @click="goRouter">
            立即查看
          </div>
        </div>
      </div>
    </div>
    <!-- 实习见习类 -->
    <!-- <div class="box box2" id="box2">
      <div class="title1">实习见习类</div>
      <div class="title2"></div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList2" :key="index">
          <div class="t">{{ item.t }}</div>
          <div class="btn" @click="goRouter(item.id)">立即查看</div>
        </div>
      </div>
    </div> -->
    <!-- 就业类 -->
    <!-- <div class="box box2" id="box3">
      <div class="title1">就业类</div>
      <div class="title2"></div>
      <div class="list-box">
        <div class="item-box" v-for="(item, index) in navList3" :key="index">
          <div class="t">{{ item.t }}</div>
          <div class="btn" @click="goRouter(item.id)">立即查看</div>
        </div>
      </div>
    </div> -->
    <!-- 创新创业类 -->
    <!-- <div class="box box2" id="box4">
      <div class="title1">创新创业类</div>
      <div class="title2"></div>
      <div class="list-box" style="flex-wrap: wrap;">
        <div class="item-box" v-for="(item, index) in navList4" :key="index">
          <div class="t">{{ item.t }}</div>
          <div class="btn" @click="goRouter(item.id)">立即查看</div>
        </div>
      </div>
    </div> -->

    <!-- <div class="box box2 box4" id="box4">
      <div class="title1">大学生就业创业</div>
      <div class="title2"></div>
      <div class="list-box" style="flex-wrap: wrap;">
        <div class="item-box" v-for="(item, index) in navList5" :key="index">
          <div class="t">{{ item.t }}</div>
          <div class="btn" @click="goRouter(item.id)">立即查看</div>
        </div>
      </div>
    </div> -->
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
          img: require("@/assets/imgs/wfimg/sxfu-box1-img1.png"),
          t: "人才落户",
          url: 'https://wsgaj.chutianyun.gov.cn/#/'
        },
        {
          img: require("@/assets/imgs/wfimg/sxfu-box1-img2.png"),
          t: "人才安居",
          url: 'http://rcaj.whfgxx.org.cn:8081'
        }
      ],
      navList2: [
        {
          t: "大学生就业见习补贴",
          id: '062e1c69-0131-11ea-b44e-e82a444382df'
        },
        {
          t: "大学实习(训)见习岗位",
          id: '062e1c6b-0131-11ea-83e4-e82a444382df'
        }
      ],
      navList3: [
        {
          t: "大学生一次性求职创业补贴申请",
          id: "062e1c6a-0131-11ea-83b6-e82a444382df"
        },
        {
          t: "大学实习(训)灵活就业应届高校毕业生意外伤害保险补助",
          id: "062e1c6c-0131-11ea-b2e2-e82a444382df"
        },
        {
          t: "大学生社会保险补贴申请（灵活就业）",
          id: "062e1c6d-0131-11ea-95f3-e82a444382df"
        },
        {
          t: "小微企业招用大学生社会保险补贴申请",
          id: "062e1c6e-0131-11ea-ade9-e82a444382df"
        }
      ],
      navList4: [
        {
          t: "大学生创业工位",
          id: "062e1c6f-0131-11ea-b592-e82a444382df"
        },
        {
          t: "大学生一次性创业补贴申请",
          id: "062e1c70-0131-11ea-bbf3-e82a444382df"
        },
        {
          t: "武汉市高校毕业生“三大行业”创业补贴申报",
          id: "062e1c71-0131-11ea-af84-e82a444382df"
        },
        {
          t: "大学生创业担保贷款资格申请",
          id: "062e1c72-0131-11ea-9ded-e82a444382df"
        },
        {
          t: "支持申报高新技术企业",
          id: "062e1c73-0131-11ea-94e5-e82a444382df"
        },
        {
          t: "支持申领科技创新劵",
          id: "062e1c74-0131-11ea-8dd0-e82a444382df"
        },
        {
          t: "支持申报市级科技企业孵化器和众创空间认定",
          id: "062e1c75-0131-11ea-96e8-e82a444382df"
        },
        {
          t: "初创企业场租补贴",
          id: "062e1c76-0131-11ea-bb45-e82a444382df"
        }
      ],
      // 2022-07-26  修改  合并
      navList5:[
        {
          t: "大学生就业见习补贴",
          id: '062e1c69-0131-11ea-b44e-e82a444382df'
        },
        {
          t: "大学实习(训)见习岗位",
          id: '062e1c6b-0131-11ea-83e4-e82a444382df'
        },
         {
          t: "大学生一次性求职创业补贴申请",
          id: "062e1c6a-0131-11ea-83b6-e82a444382df"
        },
        {
          t: "大学实习(训)灵活就业应届高校毕业生意外伤害保险补助",
          id: "062e1c6c-0131-11ea-b2e2-e82a444382df"
        },
        {
          t: "大学生社会保险补贴申请（灵活就业）",
          id: "062e1c6d-0131-11ea-95f3-e82a444382df"
        },
        {
          t: "小微企业招用大学生社会保险补贴申请",
          id: "062e1c6e-0131-11ea-ade9-e82a444382df"
        },
        {
          t: "大学生创业工位",
          id: "062e1c6f-0131-11ea-b592-e82a444382df"
        },
        {
          t: "大学生一次性创业补贴申请",
          id: "062e1c70-0131-11ea-bbf3-e82a444382df"
        },
        {
          t: "武汉市高校毕业生“三大行业”创业补贴申报",
          id: "062e1c71-0131-11ea-af84-e82a444382df"
        },
        {
          t: "大学生创业担保贷款资格申请",
          id: "062e1c72-0131-11ea-9ded-e82a444382df"
        },
        {
          t: "支持申报高新技术企业",
          id: "062e1c73-0131-11ea-94e5-e82a444382df"
        },
        {
          t: "支持申领科技创新劵",
          id: "062e1c74-0131-11ea-8dd0-e82a444382df"
        },
        {
          t: "支持申报市级科技企业孵化器和众创空间认定",
          id: "062e1c75-0131-11ea-96e8-e82a444382df"
        },
        {
          t: "初创企业场租补贴",
          id: "062e1c76-0131-11ea-bb45-e82a444382df"
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {this.getLocal()})
  },
  computed: {},
  mounted() {},
  methods: {
    goWz (link) {
      window.open(link)
    },
    goRouter () {
      // this.$router.push({ path: 'bwdxs', query: { id: id } })
      this.$router.push('bwdxsList')
    },
    getLocal(){
      let select = this.$route.query.id
      console.log("select",select);
      let elm =  document.getElementById(select)
      if(select){
        elm.scrollIntoView(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wrap-box {
  padding: 20px 0;
  .box {
    width: 1260px;
    margin: 0 auto;
    margin-bottom: 30px;
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
      margin: 20px 0 10px 0;
    }
    .list-box {
      display: flex;
    }
  }
  .box1 {
    margin-bottom: 40px;
    .list-box {
      justify-content: space-between;
      .item-box {
        width: 573px;
        height: 200px;
        background: url("../../../assets/imgs/wfimg/sxfu-box1-bg.png") no-repeat;
        background-size: 100%, 100%;
        padding: 40px 40px 40px 55px;
        display: flex;
        text-align: left;
        .item-box-l {
          width: 112px;
          height: 112px;
        }
        .item-box-m {
          padding: 18px;
          .t {
            font-size: 22px;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 40px;
            color: #000000;
          }
          .b {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 40px;
            color: #999999;
          }
        }
        .item-box-r {
          width: 122px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: rgba(10, 99, 221, 0.03);
          border: 1px solid #0962dd;
          color: #0962dd;
          cursor: pointer;
          margin: 30px;
          &:hover {
            background: #0962dd;
            color: #fff;
          }
        }
      }
    }
  }
  .box2 {
    width: 1200px;
    .title2 {
      width: 40px;
      height: 8px;
      background: rgba(10, 99, 221, 1);
      margin: 20px auto 50px auto;
    }
    .list-box {
      .item-box {
        width: 240px;
        height: 167px;
        border: 4px solid #ffffff;
        background: linear-gradient(180deg, #f2f5f8 0%, #fffefe 100%);
        box-shadow: 0px 4px 24px rgba(1, 56, 131, 0.16);
        opacity: 1;
        border-radius: 4px;
        margin-right: 60px;
        padding-top: 10px;
        margin-bottom: 40px;
        .t {
          height: 70px;
          font-size: 18px;
          font-family: PingFangSC-Medium;
          color: #000000;
          font-weight: bold;
        }
        .btn {
          width: 122px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: rgba(10, 99, 221, 0.03);
          border: 1px solid #0962dd;
          color: #0a63dd;
          margin: 30px auto;
          cursor: pointer;
          &:hover{
            background:#0a63dd ;
            color: #fff;
          }
        }
      }
    }
  }
  .box4{
    width: 1260px;
    .list-box{
      .item-box{
        margin: 37px;
      }
    }
  }
}
</style>
