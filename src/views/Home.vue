<template>
  <div class="home">
    <div class="banner">
      <img
        class="banner-image"
        src="../assets/imgs/wfimg/home-banner.png"
        alt=""
      />
    </div>
    <!-- 通知公告 -->
    <div class="notice-box">
      <div class="notice-l">
        <div class="txt">
          <img
            class="banner-image"
            src="../assets/imgs/wfimg/horn.png"
            alt=""
          />
          通知公告
        </div>
        <div class="icon"></div>
      </div>
      <div class="notice-r">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in announcementsList"
              :key="index"
            >
              <div class="txt" style="text-align: left;" @click="goOpen(item)">
                <span>{{ item.dateCreated }}</span> {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notice-more" @click="$router.push('/Tzgg?index=3')">查看更多 ></div>
    </div>
    <!-- 资讯中心 -->
    <div class="information-box">
      <div class="information-box-c">
        <div class="titleImg-box">
          <img src="../assets/imgs/wfimg/zxzx-t-img.png" alt="" />
        </div>
        <div class="information-box-list">
          <dir class="information-item" v-for="(item, index) in newsData.rcywData" :key="index">
            <img :src="item.image?item.image.replace('/home/image','/images'):rcyw001" alt="" />
            <div class="item-box1">
              {{item.title}}
            </div>
            <div class="item-box2">
              <div class="item-box2-l">{{item.dateCreated&&item.dateCreated.substring(0,11)}}</div>
              <div class="item-box2-r" @click="$router.push('/zxzxDetail?index=0&id='+item.id)">了解详情 ></div>
            </div>
            <div class="item-box3">
              {{item.subTitle?item.subTitle:item.title}}
            </div>
            <div class="icon-box">{{ informationList[0] }}</div>
          </dir>
          <dir class="information-item" v-for="(item, index) in newsData.gzdtData" :key="index">
            <img :src="item.image?item.image.replace('/home/image','/images'):gzdt001" alt="" />
            <div class="item-box1">
              {{item.title}}
            </div>
            <div class="item-box2">
              <div class="item-box2-l">{{item.dateCreated&&item.dateCreated.substring(0,11)}}</div>
              <div class="item-box2-r" @click="$router.push('/zxzxDetail?index=1&id='+item.id)">了解详情 ></div>
            </div>
            <div class="item-box3">
              {{item.subTitle?item.subTitle:item.title}}
            </div>
            <div class="icon-box">{{ informationList[1] }}</div>
          </dir>
          <dir class="information-item" v-for="(item, index) in newsData.rchdData" :key="index">
            <img :src="item.image?item.image.replace('/home/image','/images'):rchd001" alt="" />
            <div class="item-box1">
              {{item.title}}
            </div>
            <div class="item-box2">
              <div class="item-box2-l">{{item.dateCreated&&item.dateCreated.substring(0,11)}}</div>
              <div class="item-box2-r" @click="$router.push('/zxzxDetail?index=2&id='+item.id)">了解详情 ></div>
            </div>
            <div class="item-box3">
              {{item.subTitle?item.subTitle:item.title}}
            </div>
            <div class="icon-box">{{ informationList[2] }}</div>
          </dir>
        </div>
      </div>
    </div>
    <!-- 人才政策 -->
    <div class="rczc-box">
      <div class="box-c">
        <div class="titleImg-box">
          <img src="../assets/imgs/wfimg/rczc-t-img.png" alt="" />
        </div>
        <div class="line-box"></div>
        <div class="more-box" @click="$router.push('/Zcwj?index=0')">查看更多 ></div>
        <div class="list-box">
          <div class="item-box" v-for="(item,index) in newsData.rczcData.slice(0,4)" :key="index" @click="$router.push('/rczcDetail?index=0&id='+item.id)">
            <div class="item-box-l">
              <div class="l1">{{item.dateCreated&&item.dateCreated.substring(0,7)}}</div>
              <div class="l2">{{item.dateCreated&&item.dateCreated.substring(8,11)}}</div>
            </div>
            <div class="item-box-r">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 人才申报 -->
    <div class="rcsb-box">
      <div class="box-c">
        <div class="titleImg-box">
          <img src="../assets/imgs/wfimg/rcsb-t-img.png" alt="" />
        </div>
        <div class="line-box"></div>
        <div class="more-box" @click="$router.push('/Rcjh?index=0')">查看更多 ></div>
        <div class="list-box">
          <div class="item-box" v-for="(item,index) in rcsbNavList" :key="index" @click="goOpen(item)">
            <img :src="item.img" alt="" srcset="">
            <div class="t">{{item.t}}</div>
            <div class="c">{{item.c}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 人才礼遇 -->
     <div class="rcly-box">
      <div class="box-c">
        <div class="titleImg-box">
          <img src="../assets/imgs/wfimg/rcly-t-img.png" alt="" />
        </div>
        <div class="line-box"></div>
        <div class="more-box" @click="$router.push('/Sxfw?index=1')">查看更多 ></div>
        <div class="list-box">
          <div class="item-box" v-for="(item,index) in rclyNavList" :key="index" @click="goOpen(item)">
            <img :src="item.img" alt="">
            <span>{{item.t}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact-us-box">
      <div class="titleImg-box">
        <img src="../assets/imgs/wfimg/lxwm-t-img.png" alt="" />
      </div>
      <div class="map-box">
        <div class="map-box-l">
          <div>
            <img src="../assets/imgs/wfimg/dz-icon.png" alt="" />
            <span>地址</span>
          </div>
          <p>武汉市江岸区劳动街办事处惠济路39号杨森公馆</p>
          <div style="margin-top:30px">
            <img src="../assets/imgs/wfimg/dz-icon.png" alt="" />
            <span>联系电话</span>
          </div>
          <p>027-82267029</p>
        </div>
        <div class="map-box-r">
          <img src="../assets/imgs/wfimg/map-img.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 通知栏 -->
    <!-- <div ref="popUpDom" class="popUpBox">
      <div class="title">
        <div class="leftD">最新消息</div>
        <div class="rightD" @click="isHidePop">
          <span></span>
        </div>
      </div>
      <div class="messageContent">
        <div class="t">尊敬的人才服务网用户您好！</div>
        <div class="c">
          人才安居服务系统已于近期更新完成，用户可通过原账号直接登录。大学生就业创业类服务事项可在服务大厅相应栏目查看。
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { homeData } from "../api/home";

export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      rcyw001: require("@/assets/imgs/wfimg/rcyw001.png"),
      gzdt001: require("@/assets/imgs/wfimg/gzdt001.png"),
      rchd001: require("@/assets/imgs/wfimg/rchd001.png"),
      announcementsList: [
        {
          title: '2022年度武汉英才（优秀青年人才）申报指引',
          url: '/yTlent',
          dateCreated: '2022-09-13'
        },
        {
          title: '2022年度武汉英才（战略科技人才）邀约指引',
          url: '/zTlent',
          dateCreated: '2022-09-13'
        },
        {
          title: '2022年度武汉英才（产业领军人才）申报指引',
          url: '/cTlent',
          dateCreated: '2022-09-13'
        },
        {
          title: '2022年度江汉英才申报指引',
          url: '/jianghan',
          dateCreated: '2022-06-15'
        },
        {
          title: '2022年度青山英才申报指引',
          url: '/qingshan',
          dateCreated: '2022-06-15'
        },
      ], //通知公告列表
      mySwiper: "",
      informationList: ["人才要闻", "工作动态", "人才活动"],
      rcsbNavList:[
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-zlkjrc.png"),
          t:'武汉英才',
          c:"战略科技人才",
          url: '/zTlent'
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-cyljrc.png"),
          t:'武汉英才',
          c:'产业领军人才',
          url: '/cTlent'
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-yxqnrc.png"),
          t:'武汉英才',
          c:'优秀青年人才',
          url: '/yTlent'
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-zygcsrc.png"),
          t:'武汉英才',
          c:"卓越工程师人才",
          url: ''
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-pyzczx.png"),
          t:'武汉英才',
          c:"培育支持专项",
          url: '/Rcjh?index=0'
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-tszx.png"),
          t:'武汉英才',
          c:"特色专项",
          url: '/Rcjh?index=0'
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcsb-rcjh.png"),
          t:'3551光谷',
          c:"人才计划",
          url: 'https://www.3551.org.cn/'
        }
      ],
      rclyNavList: [
        {
          img: require("@/assets/imgs/wfimg/home-rcly-rclh.png"),
          t:'人才落户',
          url: 'https://wsgaj.chutianyun.gov.cn/#/'
        },
        {
          img: require("@/assets/imgs/wfimg/home-rcly-rcaj.png"),
          t:'人才安居',
          url: 'http://rcaj.whfgxx.org.cn:8081'
        },
        // {
        //   img: require("@/assets/imgs/wfimg/home-rcly-sxjx.png"),
        //   t:'实习见习',
        //   url: '/Sxfw?index=1&&id=box2'
        // },
        // {
        //   img: require("@/assets/imgs/wfimg/home-rcly-jyfw.png"),
        //   t:'就业服务',
        //   url: '/Sxfw?index=1&&id=box3'
        // },
        // {
        //   img: require("@/assets/imgs/wfimg/home-rcly-cxcy.png"),
        //   t:'创新创业',
        //   url: '/Sxfw?index=1&&id=box4'
        // },
        {
          img: require("@/assets/imgs/wfimg/home-rcly-cxcy.png"),
          t:'大学生就业创业',
          url: '/Sxfw?index=1&&id=box4'
        },
      ],
      newsData: {
        rcywData:[],
        gzdtData:[],
        rchdData:[],
        rczcData:[],
      },
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.initSwiper();
    // setTimeout(() => {
    //   document.querySelector(".popUpBox").classList.add("showPop");
    //   setTimeout(() => {
    //     this.isHidePop()
    //   },5000)
    // }, 2000);
    this.getHomeData();
  },
  methods: {
    // swiper初始化
    initSwiper() {
      this.mySwiper = new Swiper(".swiper", {
        direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true
      });
    },
    // 右下角弹窗关闭
    // isHidePop() {
    //   this.$refs.popUpDom.classList.remove("showPop");
    // },

    async getHomeData() {
      const data = await homeData();
      console.log(data);
      this.newsData.rcywData.push(data.data.人才新闻[0])
      this.newsData.gzdtData.push(data.data.工作动态[0])
      this.newsData.rchdData.push(data.data.人才活动[0])
      this.newsData.rczcData = data.data.政策文件
      console.log(this.newsData);
    },
    goOpen (item) {
      if (item.url === '') {
        return
      }
      if (item.url.indexOf('http') >= 0) {
        window.open(item.url)
      } else {
        this.$router.push(item.url)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  top: -94px;
}
.banner {
  width: 100%;
  height: 259px;
  .banner-image {
    display: block;
    width: 100%;
    height: 260px;
  }
}

.notice-box {
  width: 100%;
  display: flex;
  height: 70px;
  .notice-l {
    width: 30%;
    background: #0a63dd;
    position: relative;
    .txt {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: 800;
      color: #ffffff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 29px;
      img {
        width: 26px;
        height: 22px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .icon {
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid #eaeaef;
      border-bottom: 10px solid transparent;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .notice-r {
    width: 50%;
    background: #e8f0fb;
    display: flex;
    line-height: 70px;
    cursor: pointer;
    overflow: hidden;
    padding-left: 20px;
    font-size: 18px;
    span {
      // font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      // color: #999999;
      margin-left: 30px;
      margin-right: 20px;
    }
  }
  .notice-more {
    width: 24%;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #0a63dd;
    background: #e8f0fb;
    text-align: left;
    line-height: 70px;
    cursor: pointer;
  }
}
.aboutus-box {
  width: 1201px;
  height: 281px;
  background: #e8f0fb;
  border: 1px solid #ffffff;
  margin: 85px auto;
  text-align: left;
  padding: 30px 46px;
  background: url("../assets/imgs/wfimg/aboutus-box-bg.png") no-repeat;
  background-size: 100% 100%;
  .box1 {
    font-size: 34px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #0a63dd;
  }
  .box2 {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #999999;
    margin: 12px 0;
  }
  .box3 {
    width: 800px;
    font-size: 14px;
    line-height: 25px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
  }
  .box4 {
    width: 90px;
    height: 30px;
    line-height: 30px;
    background: #0a63dd;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
  }
}
.information-box {
  width: 100%;
  height: 630px;
  background: #fff;
  .information-box-c {
    width: 1201px;
    margin: 0 auto;
    padding: 48px 0 40px 0;
    .titleImg-box{
      width: 376px;
      height: 46px;
      margin: 0 auto 30px auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .information-box-list {
      display: flex;
      justify-content: space-between;
      .information-item {
        width: 381px;
        padding: 0;
        margin: 0;
        position: relative;
        img {
          width: 100%;
          height: 241px;
          border-radius: 6px;
        }
        .item-box1 {
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 18px 0;
          text-align: left;
        }
        .item-box2 {
          display: flex;
          justify-content: space-between;
          .item-box2-l {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
          }
          .item-box2-r {
            width: 80px;
            height: 24px;
            line-height: 24px;
            background: #c9e0ff;
            border-radius: 6px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #0a63dd;
            cursor: pointer;
          }
        }
        .item-box3 {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-top: 25px;
          line-height: 25px;
          text-align: left;
        }
        .icon-box {
          position: absolute;
          left: 20px;
          top: -5px;
          width: 80px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          background: linear-gradient(60deg, #006cff, #00aeff);
          box-shadow: 0px 4px 8px 0px rgba(10, 99, 221, 0.5);
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
  }
}
.rczc-box,.rcsb-box,.rcly-box{
  width: 100%;
  .box-c {
    width: 1201px;
    margin: 0 auto;
    padding: 48px 0 40px 0;
    .titleImg-box{
      width: 325px;
      height: 47px;
      margin: 0 auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .line-box{
      width: 25px;
      height: 2px;
      background: #0A63DD;
      margin: 25px auto;
    }
    .more-box{
      text-align: center;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #0A63DD;
      cursor: pointer;
      margin-bottom: 54px;
    }
    .list-box{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item-box{
        width: 581px;
        height: 81px;
        background: #FFFFFF;
        border: 1px solid #0A63DD;
        border-radius: 10px;
        margin-bottom: 30px;
      }
    }
  }
}
.rczc-box{
  height: 487px;
  background: url("../assets/imgs/wfimg/home-rczc-bg.png") no-repeat;
  background-size: 100% 100%;
  .box-c{
    .list-box{
      .item-box{
        display: flex;
        cursor: pointer;
        .item-box-l{
          width: 85px;
          height: 80px;
          background: #0A63DD;
          border-radius: 10px 0px 0px 10px;
          color: #FFFFFF;
          padding: 10px;
          .l1{
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
          }
          .l2{
            font-size: 30px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
          }
        }
        .item-box-r{
          width: 490px;
          height: 65px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #333333;
          padding: 20px;
          text-align: left;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
}
.rcsb-box{
  height: 540px;
  background: url("../assets/imgs/wfimg/home-rcsb-bg.png") no-repeat;
  background-size: 100% 100%;
  .box-c {
    .titleImg-box{
      width: 371px;
      height: 43px;
    }
    .line-box{
      background: #fff;
    }
    .more-box{
      color: #fff;
    }
    .list-box{
      flex-wrap: nowrap;
      .item-box{
        cursor: pointer;
        width: 159px;
        height: 220px;
        background: linear-gradient(-45deg, #E2EBF7, #F3F6FB);
        border: 2px solid #FFFFFF;
        box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.3000);
        border-radius: 10px;
        img{
          margin-top: 20px;
        }
        .t{
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #333333;
          font-size: 20px;
          margin: 5px 0 8px 0;
        }
        .c{
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #333333;
          font-size: 16px;
        }
      }
    }
  }
}
.rcly-box{
  height: 486px;
  background: url("../assets/imgs/wfimg/home-rcly-bg.png") no-repeat;
  background-size: 100% 100%;
  .box-c {
    .titleImg-box{
      width: 298px;
      height: 44px;
    }
    .list-box{
      .item-box{
        // width: 210px;
        // height: 120px;
        width: 345px;
        height: 145px;
        position: relative;
        cursor: pointer;
        border-radius: 15px;
        img{
          width: 100%;
          height: 100%;
        }
        span{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #FFFFFF;
          text-shadow: 0px 3px 12px rgba(0,0,0,0.3000);
        }
      }
    }
  }
}

.contact-us-box {
  width: 1201px;
  margin: 0 auto;
  padding: 55px 0 40px 0;
  .titleImg-box{
    width: 210px;
    height: 48px;
    margin: 0 auto 50px auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .map-box {
    display: flex;
    border-radius: 10px;
    .map-box-l {
      width: 436px;
      height: 230px;
      background: #0a63dd;
      border-radius: 10px 0px 0px 10px;
      text-align: left;
      padding: 45px;
      div {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 10px;
        img {
          width: 17px;
          height: 22px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      p {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        padding-left: 25px;
      }
    }
    .map-box-r {
      width: 760px;
      height: 230px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
// 右侧底部弹窗
.popUpBox {
  width: 600px;
  height: 300px;
  padding: 20px;
  box-shadow: -5px -5px 5px #fbfbfb;
  background-color: #fff;
  bottom: -500px;
  position: fixed;
  right: 0;
  bottom: -20px;
  transform: translateY(100%);
  transition: 3s;
  z-index: 999;
  .title {
    font-weight: bold;
    font-size: 14px;
    height: 30px;
    width: 100%;
    overflow: hidden;
    .leftD {
      float: left;
    }
    .rightD {
      float: right;
      cursor: pointer;
      width: 30px;
      height: 30px;
      > span {
        display: inline-block;
        width: 10px;
        height: 3px;
        background: #000;
        margin-left: 10px;
      }
    }
  }
  .messageContent {
    width: 100%;
    div {
      margin: 20px;
    }
    .t {
      text-align: center;
    }
    .c {
      text-indent: 2em;
      text-align: left;
      line-height: 30px;
    }
  }
}
.showPop {
  transform: translateY(0);
}

.words {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

</style>
