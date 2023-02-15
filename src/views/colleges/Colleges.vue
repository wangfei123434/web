<template>
  <div>
    <div class="banner">
      <img class="banner-image" src="../../assets/imgs/banner.gif" alt="" />
      <div class="banner-title">
        <h1 class="cn-text">高校</h1>
        <h1 class="en-text">UNIVERSITIES</h1>
      </div>
    </div>
    <div class="content-wrapper main">
      <div class="news-content">
        <div class="more">更多 ></div>
        <div class="tab-list">
          <div
            :class="[newsId === 1 ? 'item active' : 'item']"
            @click="handleChangeNewsId(1)"
          >
            高校动态
          </div>
          <div
            :class="[newsId === 2 ? 'item active' : 'item']"
            @click="handleChangeNewsId(2)"
          >
            媒体聚焦
          </div>

        </div>
        <div v-if="newsId === 1" class="news-item-wrapper">
          <div
            v-for="(item, index) in newsList"
            v-bind:key="item.id"
            class="news-item"
          >
            <div class="circle"></div>
            <div class="title">{{ item.title }}</div>
            <div class="date">{{ item.date }}</div>
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="more">更多 ></div>
        <div class="title-border title">
          <span class="cn-text">
            <b>校友风采</b>
            <i class="border"></i>
          </span>
        </div>
        <div
          v-for="(item, index) in personList"
          v-bind:key="item.id"
          class="person-item"
        >
          <img :src="item.img" alt="">
          <div style="width: 392px">
            <div class="name">{{ item.name }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>

        </div>
      </div>
    </div>
    <div class="service">
      <div class="content-wrapper">
        <div class="more">
          <h3>大美校园</h3>
          <div>更多 ></div>
        </div>
        <div class="service-list">
          <div class="swiper-container">
            <swiper ref="mySwiper" :options="swiperOption">
              <swiper-slide v-for="item in slideList" :key="item.id">
                <div class="service-item">
                  <img :src="item.img" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Colleges',
  components: {
    swiper,
    swiperSlide,
  },
  data () {
    return {
      newsId: 1,
      newsList: [
        {
          id: 1,
          date: '1-10',
          year: 2021,
          title: '我市启动2020年大学生留汉就业空中招聘系列活动,我市启动2020年大学生留汉就业空中招聘系列活动',
        },
        {
          id: 2,
          date: '1-6',
          year: 2021,
          title: '市委组织部、市国资委积极推进央企支持大学生留汉就业工作',
        },
        {
          id: 3,
          date: '1-10',
          year: 2021,
          title: '我市启动2020年大学生留汉就业空中招聘系列活动',
        },
        {
          id: 4,
          date: '1-6',
          year: 2021,
          title: '市委组织部、市国资委积极推进央企支持大学生留汉就业工作',
        },
        {
          id: 5,
          date: '1-10',
          year: 2021,
          title: '我市启动2020年大学生留汉就业空中招聘系列活动',
        },
        {
          id: 6,
          date: '1-6',
          year: 2021,
          title: '市委组织部、市国资委积极推进央企支持大学生留汉就业工作',
        },
      ],
      serviceList: [
        {
          id: 1,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_1.png'),
        },
        {
          id: 2,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_2.png'),
        },
        {
          id: 3,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_3.png'),
        },
        {
          id: 4,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_4.png'),
        },
        {
          id: 5,
          name: '更多',
          img: require('../../assets/imgs/base/base_5.png'),
        },
        {
          id: 6,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_2.png'),
        },
        {
          id: 7,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_3.png'),
        },
        {
          id: 8,
          name: '学子留汉',
          img: require('../../assets/imgs/base/base_4.png'),
        },
        {
          id: 9,
          name: '更多',
          img: require('../../assets/imgs/base/base_5.png'),
        },
      ],
      personList: [
        {
          id: 1,
          name: '罗俊',
          title: '中山大学校长、中国科学院院士',
          desc: '湖北仙桃人。引力物理专家，中国科学院院士，中山大学校长、 党委副书记，华中科技大学物理学院引力中心教授、引力与量',
          img: require('../../assets/imgs/logo.png'),
        },
        {
          id: 2,
          name: '邓晓芒',
          title: '华中科技大学哲学系教授、《德国哲学德国哲学德国哲学德国哲学》主编',
          desc: '湖北仙桃人。引力物理专家，中国科学院院士，中山大学校长、 党委副书记，华中科技大学物理学院引力中心教授、引力与量',
          img: require('../../assets/imgs/logo.png'),
        },
      ],
      slideList: [
        {
          id: 1,
          img: require('../../assets/imgs/slide_1.jpg'),
        },
        {
          id: 2,
          img: require('../../assets/imgs/slide_2.jpg'),
        },
        {
          id: 3,
          img: require('../../assets/imgs/slide_3.jpg'),
        },
        {
          id: 4,
          img: require('../../assets/imgs/slide_1.jpg'),
        },
        {
          id: 5,
          img: require('../../assets/imgs/slide_2.jpg'),
        },
        {
          id: 6,
          img: require('../../assets/imgs/slide_3.jpg'),
        },
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        // loopedSlides: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  swiper () {
    return this.$refs.mySwiper.swiper
  },
  methods: {
    handleChangeNewsId (newsId) {
      this.newsId = newsId
    },

  },
}
</script>

<style scoped lang="less">
.banner {
  position: relative;
  //padding-left: 100px;
  height: 400px;
  overflow: hidden;

  .banner-image {
    display: block;
    width: 100%;
    height: 400px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .banner-title {
    color: #FFFFFF;
    font-weight: bold;
    text-align: left;
    position: relative;
    width: 1150px;
    margin: 64px auto 0;

    .cn-text {
      font-size: 30px;
      margin: 0;
    }

    .en-text {
      font-size: 36px;
      opacity: 0.1;
      margin: -10px 0 0;
    }
  }
}

.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}

.title-border {
  color: rgba(51, 51, 51, 1);
  position: relative;
  text-align: left;

  .cn-text {
    font-size: 20px;
    position: relative;

    b {
      position: relative;
      z-index: 999;
    }

    .border {
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, #FF1600, #FF9D00);
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      z-index: 0;
      left: 0;
    }
  }
}

.main {
  display: flex;
  margin: 48px auto 120px;
  border: 1px solid #F2F2F5;
  border-radius: 6px;

  .news-content {
    width: 650px;
    padding: 24px 40px 10px 20px;
    position: relative;

    .more {
      position: absolute;
      right: 40px;
      top: 20px;
      color: #999999;
      font-size: 14px;
    }

    .news-item-wrapper {
      padding-top: 32px;

      .news-item {
        display: flex;
        align-items: center;
        margin-bottom: 26px;

        .circle {
          width: 10px;
          height: 10px;
          background: #EEEEF3;
          border-radius: 50%;
          margin-right: 8px;
        }

        .title {
          //width: 407px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
          flex: 1 0 0;
          font-size: 16px;
        }

        .date {
          width: 48px;
          margin-left: 20px;
          color: #333333;
          font-size: 12px;
        }
      }
    }
  }

  .right-content {
    width: 550px;
    background: #f6f6f8;
    padding: 24px 20px 10px 23px;
    position: relative;

    .more {
      position: absolute;
      right: 20px;
      top: 20px;
      color: #999999;
      font-size: 14px;
    }

    .person-item {
      display: flex;
      margin: 20px 0;
      align-items: center;
      text-align: left;

      .name {
        font-weight: bold;
        font-size: 16px;
      }

      img {
        display: block;
        width: 100px;
        height: 100px;
        margin-right: 16px;
      }

      .title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        margin: 10px 0 20px;
      }

      .desc {
        font-size: 14px;
        color: #666666;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}

.service {
  background: #FAFAFD;
  position: relative;
  padding: 160px 0 100px;

  .content-wrapper {
    display: flex;
    //justify-content: flex-end;
    position: absolute;
    top: -60px;
    border-radius: 6px;
    overflow: hidden;
    right: 50%;
    margin-right: -600px;

    .more {
      width: 160px;
      height: 210px;
      background: #D20715;
      box-shadow: 0 10px 20px 0 rgba(179, 19, 0, 0.2);
      color: #fff;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      text-align: left;
      padding: 0 16px;
      font-size: 14px;
      //margin-left: -60px;

      h3 {
        padding-top: 60px;
        margin: 0 0 16px;
        font-size: 22px;
      }
    }
  }
}

.service-list {

  //width: 1140px;
  //display: flex;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(189, 189, 194, 0.2);
  //padding: 0 66px 0 124px;

  .service-item {
    width: 100%;
    //margin-right: 40px;

    img {
      display: block;
      height: 210px;
      width: 100%;
    }
  }

}

.tab-list {
  display: flex;
  //justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeef3;

  .item {
    font-size: 20px;
    color: #666666;
    //padding: 8px 0;
    //margin-left: 50px;
    margin-right: 32px;
    border-bottom: 4px solid transparent;
    border-radius: 2px;
    cursor: pointer;
  }

  .item.active {
    color: #333;
    font-weight: 700;
    border-bottom: 4px solid #FF1600;
  }
}

.swiper-container {
  //width: 960px;
  width: 1040px;

  .swiper-slide {
    width: 240px !important;
    background: black;
    opacity: .3;
  }

  //.swiper-slide-duplicate-prev, .swiper-slide-duplicate-next {
  //  width: 240px !important;
  //}
  //
  .swiper-slide-active {
    //width: 320px !important;
    opacity: 1;
  }
}
</style>
