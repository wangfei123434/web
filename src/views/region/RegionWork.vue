<template>
  <div>
    <div class="banner">
      <img class="banner-image" src="../../assets/imgs/banner.gif" alt="" />
      <div class="banner-title">
        <h1 class="cn-text">区级工作</h1>
        <h1 class="en-text">DISTRICT LEVEL WORK</h1>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="breadcrumb">
        当前位置：首页 > 区级工作
      </div>
      <div class="regionList">
        <div
          v-for="(item ,index) in regionList" :key="item.id"
          :class="[activeRegionIndex === index ? 'region active' : 'region']"
          @click="handleRegion(item, index)"
        >{{ item.name }}
        </div>
      </div>
      <div class="main">
        <div class="news-content">
          <div class="more">更多 ></div>
          <div class="tab-list">
            <div
              :class="[newsId === 1 ? 'item active' : 'item']"
              @click="handleChangeNewsId(1)"
            >
              区级动态
            </div>
            <div
              :class="[newsId === 2 ? 'item active' : 'item']"
              @click="handleChangeNewsId(2)"
            >
              通知公告
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
        <div class="policy-content">
          <div class="more">更多 ></div>
          <div class="title-border title">
          <span class="cn-text">
            <b>政策发布</b>
            <i class="border"></i>
          </span>
          </div>
          <div
            v-for="(item, index) in newsList"
            v-bind:key="item.id"
            class="news-item"
          >
            <div class="title">{{ item.title }}</div>
            <div class="date">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="content-wrapper bottom-wrapper">
        <div class="left-part">
          <div class="title-border title">
          <span class="cn-text">
            <b>特色工作</b>
            <i class="border"></i>
          </span>
          </div>
          <div class="special-work-wrapper">
            <div
              class="special-work" v-for="(item, index) in specialWorks" :key="item.id"
              @mouseenter="onWorkHover(item, index)"
              @mouseleave="onWorkLeave(item, index)"
            >
              <transition name="cover-fade">
                <div class="cover" v-if="hoverIndex !== index"></div>
              </transition>
              <img :src="item.img" alt="">
              <div class="info">
                <div>{{ item.name }}</div>
                <transition name="slide-fade">
                  <a href="#" v-if="hoverIndex === index">查看详情</a>
                </transition>
              </div>
            </div>
          </div>
        </div>
        <div class="right-part">
          <div class="title-border title">
          <span class="cn-text">
            <b>业务办理</b>
            <i class="border"></i>
          </span>
          </div>
          <div class="business-list">
            <div
              class="business"
              v-for="item in businessList"
              :key="item.id"
            >
              <img :src="item.img" alt="">
              <div class="business-name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionWork',
  data () {
    return {
      activeRegionIndex: 0,
      newsId: 1,
      regionList: [
        {
          id: 1,
          name: '江岸区',
        },
        {
          id: 2,
          name: '江汉区',
        },
        {
          id: 3,
          name: '武昌区',
        },
        {
          id: 4,
          name: '汉阳区',
        },
        {
          id: 5,
          name: '硚口区',
        },
        {
          id: 6,
          name: '汉南区',
        },
        {
          id: 7,
          name: '青山区',
        },
        {
          id: 8,
          name: '洪山区',
        },
        {
          id: 9,
          name: '黄陂区',
        },
        {
          id: 10,
          name: '新洲区',
        },
        {
          id: 11,
          name: '东西湖区',
        },
        {
          id: 12,
          name: '蔡甸区',
        },
        {
          id: 13,
          name: '江夏区',
        },
        {
          id: 14,
          name: '东湖高新区',
        },
        {
          id: 15,
          name: '东湖生态旅游风景区',
        },
        {
          id: 16,
          name: '东湖生态旅游风景区',
        },
      ],
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
      specialWorks: [
        {
          id: 1,
          name: '特色工作1',
          img: require('../../assets/imgs/test.jpg'),
        },
        {
          id: 2,
          name: '特色工作2',
          img: require('../../assets/imgs/test.jpg'),
        },
        {
          id: 3,
          name: '特色工作3',
          img: require('../../assets/imgs/test.jpg'),
        },
      ],
      hoverIndex: null,
      businessList: [
        {
          id: 1,
          name: '大学生创业工位',
          img: require('../../assets/imgs/base/base_1.png'),
        },
        {
          id: 2,
          name: '大学生主题社区',
          img: require('../../assets/imgs/base/base_2.png'),
        },
        {
          id: 3,
          name: '大学生创业融资',
          img: require('../../assets/imgs/base/base_3.png'),
        },
        {
          id: 4,
          name: '见习基地补贴',
          img: require('../../assets/imgs/base/base_4.png'),
        },
      ],
    }
  },
  methods: {
    handleRegion (region, index) {
      this.activeRegionIndex = index
    },
    handleChangeNewsId (newsId) {
      this.newsId = newsId
    },
    onWorkHover (item, index) {
      this.hoverIndex = index
    },
    onWorkLeave (item, index) {
      this.hoverIndex = null
    },
  },
}
</script>

<style lang="less" scoped>
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

.breadcrumb {
  font-size: 14px;
  color: #666666;
  text-align: left;
  padding: 20px 0 30px;
}

.regionList {
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  margin-bottom: 40px;

  .region {
    margin-top: 20px;
    margin-right: 20px;
    padding: 2px 6px;
    cursor: pointer;

    &.active {
      background: #F9EBEC;
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
  margin: 48px auto 40px;
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

  .policy-content {
    width: 550px;
    background: #f6f6f8;
    padding: 24px 20px 10px 40px;
    position: relative;

    .more {
      position: absolute;
      right: 20px;
      top: 20px;
      color: #999999;
      font-size: 14px;
    }

    .news-item {
      display: flex;
      margin: 20px 0;

      .title {
        width: 407px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        flex: 1 0 0;
        font-size: 16px;
      }

      .date {
        margin-left: 35px;
        color: #333333;
        font-size: 12px;
      }
    }
  }
}

.bottom {
  background: #FAFAFD;
  margin-bottom: 80px;

  .bottom-wrapper {
    display: flex;
    padding: 40px 0;

    .special-work-wrapper {
      margin-top: 34px;
      display: flex;

      .special-work {
        width: 170px;
        height: 170px;
        border-radius: 6px;
        position: relative;
        margin-right: 30px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        .slide-fade-enter-active, .slide-fade-leave-active {
          transition: all .3s;
        }

        .cover-fade-enter-active, .cover-fade-leave-active {
          transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)
        }

        .slide-fade-enter {
          opacity: 0;
        }

        .slide-fade-enter-to {
          opacity: 1;
        }

        .slide-fade-leave {
          opacity: 1;
        }

        .slide-fade-leave-to {
          opacity: 0;
        }

        .cover-fade-enter {
          opacity: 1;
        }

        .cover-fade-enter-to {
          opacity: .7;
        }

        .cover-fade-leave {
          opacity: .7;
        }

        .cover-fade-leave {
          opacity: 1;
        }

        .cover {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0);
          width: 100%;
          height: 100%;
          opacity: 0.7;
          z-Index: 999;
        }

        .info {
          position: relative;
          z-index: 1000;
          color: #fff;
          font-size: 24px;

          a {
            font-size: 12px;
            width: 70px;
            height: 24px;
            background: #D20715;
            border-radius: 6px;
            padding: 4px 6px;
          }
        }

        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 998;
        }
      }
    }

    .right-part {
      margin-left: 40px;
      width: 510px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 0 20px 0 rgba(189, 189, 194, 0.2);
      padding: 17px 22px 60px;

      .business-list {
        display: flex;
        justify-content: space-around;

        .business {
          font-size: 14px;

          img {
            display: block;
            width: 70px;
            height: 70px;
            border-radius: 6px;
            margin: 30px auto 10px;
          }

          .business-name {
            width: 56px;
          }
        }
      }
    }
  }
}
</style>
