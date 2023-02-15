<template>
  <div class="container">
    <div class="banner">
      <img class="banner-image" src="../../assets/imgs/banner.gif" alt="" />
      <div class="banner-title">
        <h1 class="cn-text">用人单位</h1>
        <h1 class="en-text">EMPLOYER</h1>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="service">
        <div class="serviceClassify-wrapper">
          <div v-for="(item, index) in serviceList" :key="item.id" class="service-wrapper">
            <div
              @click="handleClassify(item, index)"
              :class="[activeIndex === index ? 'serviceClassify active' : 'serviceClassify']"
            >
              <!--              <img :src="item.img" alt="">-->
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="right-part">
          <div v-show="activeIndex=== 0" class="basicInfo">
            <h3>
              <img :src="basicInfo.img" alt="">
              {{ basicInfo.title }}
            </h3>
            <div class="info">
              <div class="info-row">
                <div class="info-key">统一社会信用代码</div>
                <div class="info-value">{{ basicInfo.no }}</div>
              </div>
              <div class="info-row">
                <div class="info-key">法人</div>
                <div class="info-value">{{ basicInfo.person }}</div>
              </div>
              <div class="info-row">
                <div class="info-key">注册地址</div>
                <div class="info-value">{{ basicInfo.address }}</div>
              </div>
              <div class="info-row">
                <div class="info-key">办公地址</div>
                <div class="info-value">{{ basicInfo.companyAddress }}</div>
              </div>
              <div class="info-row">
                <div class="info-key">联系人</div>
                <div class="info-value">{{ basicInfo.contact }}</div>
              </div>
              <div class="info-row">
                <div class="info-key">联系方式</div>
                <div class="info-value">{{ basicInfo.phone }}</div>
              </div>
              <div class="info-row">
                <div class="info-key">企业介绍</div>
                <div :class="['info-value info-desc', { 'over-hidden': !unfold }]" ref="textBox">
                  <span ref="spanBox">{{ basicInfo.desc }}</span>
                </div>
                <span class="btn" v-if="ifOver" @click="unfold = !unfold">{{ unfold ? '收起' : '展开' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Employer',
  data () {
    return {
      activeIndex: 0,
      ifOver: false, // 文本是否超出三行，默认否
      unfold: false, // 文本是否是展开状态 默认为收起
      serviceList: [
        {
          id: 1,
          name: '基本信息',
          img: require('../../assets/imgs/base/base_1.png'),
          children: [
            {
              id: 11,
              name: '普通高校大学生落户',
            },
            {
              id: 12,
              name: '大学毕业生租赁房',
            },
            {
              id: 13,
              name: '大学生主题社区',
            },
            {
              id: 14,
              name: '见习基地补贴',
            },
            {
              id: 15,
              name: '大学生创业工位',
            },
            {
              id: 16,
              name: '基层就业',
            },
          ],
        },
        {
          id: 2,
          name: '企业申报',
          img: require('../../assets/imgs/base/base_2.png'),
          children: [
            {
              id: 21,
              name: '123',
            },
            {
              id: 22,
              name: '456',
            },
          ],
        },
        {
          id: 3,
          name: '人才举荐',
          img: require('../../assets/imgs/base/base_3.png'),
        },
        {
          id: 4,
          name: '政策直播',
          img: require('../../assets/imgs/base/base_4.png'),
        },
        {
          id: 5,
          name: 'HR讨论圈',
          img: require('../../assets/imgs/base/base_5.png'),
        },
        {
          id: 6,
          name: '考试测评',
          img: require('../../assets/imgs/base/base_5.png'),
        },
        {
          id: 7,
          name: '问卷调查',
          img: require('../../assets/imgs/base/base_5.png'),
        },
        {
          id: 8,
          name: '企业周/月报',
          img: require('../../assets/imgs/base/base_5.png'),
        },
        {
          id: 8,
          name: '在线咨询',
          img: require('../../assets/imgs/base/base_5.png'),
        },
      ],
      basicInfo: {
        img: require('../../assets/imgs/base/base_1.png'),
        title: '武汉明辉医药发展有限公司',
        no: 'A645488231119498AG1121',
        person: '廖安军',
        address: '武汉经济技术开发区33MD地块仓库二层西街',
        companyAddress: '',
        contact: '',
        phone: '027-84756675',
        desc: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介',
      },
    }
  },
  computed: {},
  mounted () {
    // 判断是否显示展开收起按钮
    this.ifOver = this.$refs.spanBox.offsetHeight > this.$refs.textBox.offsetHeight
  },
  methods: {
    handleClassify (item, index) {
      // console.log(item)
      this.activeIndex = index
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  background: #FAFAFD;
}

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
  //overflow: hidden;
  padding: 30px 0;
}

.service {
  background: #fff;
  //padding: 0 15px 0 0;
  border-radius: 4px;
  //margin: 20px 0 30px;
  display: flex;

  .service-wrapper {
    display: flex;

    &:first-child {
      .serviceClassify {
        border-radius: 6px 6px 0 0;
      }
    }

    &:last-child {
      .serviceClassify {
        border-radius: 0 0 6px 6px;
      }
    }

    .serviceClassify {
      padding: 20px;
      width: 170px;
      background: #F1F1F4;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;

      &.active {
        width: 178px;
        color: #FFFFFF;
        background: linear-gradient(120deg, #E71120, #FF8A00);
        box-shadow: 0 0 20px 0 rgba(179, 19, 0, 0.2);
        border-radius: 4px;
        position: relative;
        margin-left: -5px;
      }

      img {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
    }
  }

  .right-part {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 0 0 0 70px;

    .basicInfo {
      h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 48px 0 50px;
        text-align: left;

        img {
          display: inline-block;
          width: 23px;
          height: 28px;
          margin-right: 15px;
        }
      }

      .info {
        border-radius: 6px;
        overflow: hidden;

        .info-row {
          display: flex;
          //align-items: flex-start;
          text-align: left;
          font-size: 16px;
          border: 1px solid #F1F1F4;

          .info-key {
            width: 150px;
            padding: 10px;
            //border: 1px solid #F1F1F4;
            background: #FAFAFD;
            border-right: 1px solid #F1F1F4;

          }

          .info-value {
            flex: 1;
            width: 710px;
            padding: 10px;
            //border-top: 1px solid #F1F1F4;
            //border-right: 1px solid #F1F1F4;
            &.info-desc {
              padding: 0;
              margin: 10px;
            }

            &.over-hidden {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }

          .btn {
            color: #0080E8;
            align-self: flex-end;
            padding-bottom: 10px;
            padding-right: 10px;
          }
        }
      }
    }
  }
}
</style>
