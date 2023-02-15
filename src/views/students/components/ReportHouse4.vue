<template>
  <div>
    <h3 style="text-align:left;margin-left:30px;font-size:30px">
      {{ houseProduce.villageName }}
    </h3>
    <div class="box">
      <div class="box-left">
        <img :src="imgArr[i]" alt="xx" class="bigImg" />
        <div class="img-bottom">
          <div class="recommendPage">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(v, i) in imgArr" :key="i">
                <img :src="v" alt="" class="smaImg" @click="changeImg(i)"
              /></swiper-slide>
              <div class="swiper-button-prev" slot="button-prev">
                <img
                  src="../../../assets/imgs/newImg/jiantou0.png"
                  style="width:13px;height:20px;margin-top:40px"
                  alt=""
                />
              </div>

              <div class="swiper-button-next" slot="button-prev">
                <img
                  src="../../../assets/imgs/newImg/jiantou.svg"
                  style="width:25px;height:30px;margin-top:40px"
                  alt=""
                />
              </div>
            </swiper>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="right-fri">
          <div class="fri-top">
            <span class="text-mid" style="font-size:20px">{{
              houseProduce.houseNumber
            }}</span>

            <!-- 待定  目前是死数据先注释 -->
            <div
              class="little-title"
              :class="$route.query.homeFlag == 1 ? 'orange' : 'blue'"
            >
              {{ $route.query.homeFlag == 1 ? "合租" : "整租" }}
            </div>
          </div>
          <div class="fri-bottom">
            <p>{{ houseProduce.maxMonthRent }}</p>
            <span class="text-mid">元/月</span>
            <div class="collection" v-show="showFlag == 1">
              <img
                src="../../../assets/imgs/houseList/shoucang1.png"
                alt="xx"
                @click="changeFlag"
              /><span
                class="text-little"
                :class="showFlag == 1 ? 'orange1' : ''"
                >已收藏</span
              >
            </div>
            <div class="collection" v-show="showFlag == 0">
              <img
                src="../../../assets/imgs/houseList/shoucang.png"
                alt="xx"
                @click="changeFlag"
              /><span class="text-little">收藏房源</span>
            </div>
          </div>
        </div>
        <div class="right-sec">
          <div>
            <span class="text-little" style="margin-left:-30px">户型</span
            ><span class="text-big">{{ houseProduce.roomTypeTitle }}</span>
          </div>
          <div style="margin-left:100px">
            <span class="text-little" style="margin-left:-20px">面积</span
            ><span class="text-big"
              >{{ houseProduce.area.toString().slice(0, 2) }}m<sup>2</sup></span
            >
          </div>
          <div style="margin-left:100px">
            <span class="text-little">朝向</span
            ><span class="text-big">{{ houseProduce.towardName }}</span>
          </div>
        </div>
        <div class="right-thr">
          <span class="text-little tip" style="font-size:15px"
            ><span>楼层:</span> {{ houseProduce.floor }}</span
          >
          <span class="text-little tip" style="font-size:15px"
            ><span>装修：</span> {{ houseProduce.tag }}</span
          >
          <span class="text-little tip" style="font-size:15px"
            ><span>类型：</span> {{ houseProduce.resType }}</span
          >
          <span class="text-little tip" style="font-size:15px"
            ><span>房屋编码：</span> {{ houseProduce.govCheckNo }}</span
          >
        </div>
        <div class="right-for" style="text-align:left;padding:20px 0">
          <span class="text-little" style="font-size:15px">房屋配套</span>
          <div class="ico-img">
            <div class="ico-imgs" v-for="v in facility" :key="v.name">
              <img :src="v.src" alt="" />
              <span class="text-little">{{ v.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      style="backgroundColor:#D10100;width:120px;height:40px;color:white;border-radius:5px;margin-bottom:50px;border:none;cursor:pointer;font-size:19px"
      @click="getSelectHouse()"
    >
      提交选房
    </button>
  </div>
</template>

<script>
import Swiper from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import tv from "../../../assets/imgs/houseList/电视.png";
import kt from "../../../assets/imgs/houseList/空调.png";
import rsq from "../../../assets/imgs/houseList/热水器.png";
import c from "../../../assets/imgs/houseList/床.png";
import xyj from "../../../assets/imgs/houseList/洗衣机.png";
import bx from "../../../assets/imgs/houseList/冰箱.png";
import wsj from "../../../assets/imgs/houseList/卫生间.png";
import dyg from "../../../assets/imgs/houseList/大衣柜.png";
import kd from "../../../assets/imgs/houseList/宽带.png";
import sf from "../../../assets/imgs/houseList/沙发.png";
import dt from "../../../assets/imgs/houseList/电梯.png";
import trq from "../../../assets/imgs/houseList/天然气.png";
import rq from "../../../assets/imgs/houseList/暖气.png";
import { mapState } from "vuex";
import {
  houseDetail,
  collectionOperate,
  selectHouse
} from "../../../api/house";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      homeFlag: 1, // 1和'1'都可以
      home: "整租",
      showFlag: "",
      houseProduce: {
        villageName: "",
        houseNumber: "",
        area: "",
        cover: "",
        roomTypeTitle: "",
        govCheckNo: "",
        towardName: "",
        maxMonthRent: "",
        floor: "",
        tag: "",
        resType: ""
      },
      facility: [],
      roomSplitedId: "",
      imgArr: [],
      i: 0,
      sourceData: null
    };
  },
  created() {
    this.getHouseDetail();
  },
  computed: {
    ...mapState(["userInfo"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    changeImg(i) {
      this.i = i;
      console.log(i);
    },
    changeFlag() {
      this.showFlag = !this.showFlag;
      console.log(this.showFlag);
      this.getCollectionOperate();
    },
    async getHouseDetail() {
      const data = await houseDetail({
        // phone: "15007160084",
        // idType: "01",
        // idCard: "421023199108244133",
        // roomSplitedId: "39f94e44-46c6-d92c-6eb7-b4089d6a06a9"
        phone: this.userInfo.mobile,
        idType: "01",
        idCard: this.userInfo.idNumber,
        roomSplitedId: this.$route.query.id
      });
      if (data && data.data && data.data.message && data.data.message.body) {
        this.sourceData = data.data.message.body;

        // villageName  houseNumber  area cover roomTypeTitle govCheckNo
        this.houseProduce.villageName = data.data.message.body.villageName;
        this.houseProduce.houseNumber = data.data.message.body.houseNumber;
        this.houseProduce.area = data.data.message.body.area;
        this.houseProduce.cover = data.data.message.body.cover;
        this.houseProduce.towardName = data.data.message.body.towardName;
        this.houseProduce.maxMonthRent = data.data.message.body.maxMonthRent;
        this.houseProduce.floor = data.data.message.body.floor;
        this.houseProduce.tag = data.data.message.body.tag;
        this.houseProduce.resType = data.data.message.body.resType;

        var newList = JSON.parse(data.data.message.body.images);
        // console.log(newList);
        for (var i in newList) {
          // console.log(newList[i].url);
          this.imgArr.push(newList[i].url);
        }
        // console.log(this.imgArr);

        // this.imgArr.push(data.data.message.body.cover);
        this.houseProduce.roomTypeTitle = data.data.message.body.roomTypeTitle;
        this.houseProduce.govCheckNo = data.data.message.body.govCheckNo;
        // 右下小图片
        let facility = data.data.message.body.facility;
        if (facility) {
          let facility = JSON.parse(data.data.message.body.facility);
          this.facility = facility.map(e => {
            return {
              ...e,
              src: this.getImgSrc(e.title)
            };
          });
        }
      }
    },
    getImgSrc(title) {
      let res;
      switch (title) {
        case "电视":
          res = tv;
          break;
        case "空调":
          res = kt;
          break;
        case "热水器":
          res = rsq;
          break;
        case "床":
          res = c;
          break;
        case "洗衣机":
          res = xyj;
          break;
        case "冰箱":
          res = bx;
          break;
        case "卫生间":
          res = wsj;
          break;
        case "大衣柜":
        case "衣柜":
          res = dyg;
          break;
        case "宽带":
          res = kd;
          break;
        case "沙发":
          res = sf;
          break;
        case "电梯":
          res = dt;
        case "天然气":
          res = trq;
          break;
        case "暖气":
          res = rq;
          break;
      }
      return res;
    },
    async getCollectionOperate() {
      const data = await collectionOperate({
        phone: this.userInfo.mobile,
        idType: "01",
        idCard: this.userInfo.idNumber,
        roomSplitedId: this.$route.query.id,
        roomType: 3,
        badd: this.showFlag ? 1 : 0
      });

      if (data.code == 200) {
        if (this.showFlag == 1) {
          this.$message.success("收藏成功");
        } else {
          this.$message.success("取消收藏成功");
        }
      }
    },

    getSelectHouse() {
      this.$alert("确认选房后无法选择其他房源，是否确认", "提示", {
        confirmButtonText: "确定"
      })
        .then(async () => {
          const { data } = await selectHouse({
            phone: this.userInfo.mobile,
            idType: "01",
            idCard: this.userInfo.idNumber,
            roomSplitedId: this.$route.query.id,
            // houseInfo: this.houseProduce.villageName,

            houseInfo: this.sourceData.villageName,
            roomId: this.sourceData.roomId,
            districtName: this.sourceData.districtName,
            govCheckNo: this.sourceData.govCheckNo,
            houseNum: this.sourceData.houseNumber,
            projectId: this.sourceData.projectId || this.sourceData.projectid,
            projectName: this.sourceData.projectName,
            monthRent: this.sourceData.monthRent,
            sourceType: this.sourceData.sourceType
          });

          let msg =
            data && data.message && data.message.body && data.message.body.SBYY;
          if (msg) {
            this.$message.info(msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
#arrow {
  background-color: #666666;
  height: 107px;
  width: 26px;
  left: -27px;
  // position: absolute;
  border-radius: 6px;
}
#arrow2 {
  background-color: #666666;
  height: 107px;
  width: 26px;
  right: -27px;
  // position: absolute;
  border-radius: 6px;
}
.recommendPage .swiper-container {
  // position: relative;
  width: 480px;
  padding-left: 29px;
  padding-right: 30px;
  height: 107px;
  // margin-left: -20px;
  // background: pink;
}
.swiper-slide {
  width: 140px !important;
  padding-right: 1px;
}
.box-left .img-bottom .smaImg {
  width: 130px !important;
}

.swiper-button-prev {
  position: absolute;
  margin-left: -8px;
  height: 102px;
  margin-top: -52px;
  // background-image: url("../../../assets/imgs/newImg/jiantou.svg");
  // transform: rotate(-180deg);
  background-color: #666666;
  border-radius: 6px;
}
.swiper-button-next {
  // position: absolute;
  margin-right: -7px;
  height: 102px;
  margin-top: -52px;
  // background-image: url("../../../assets/imgs/newImg/jiantou.svg");
  background-color: #666666;
  border-radius: 6px;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: none !important;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: none !important;
}
.orange {
  background-color: #fe6600;
}
.orange1 {
  color: #fe6600;
}
.blue {
  background-color: #329cff;
}
.text-big {
  display: inline-block;
  font-weight: bolder;
  font-size: 18px;
}
.text-mid {
  display: inline-block;
  font-weight: bolder;
  font-size: 15px;
}
.text-little {
  display: inline-block;
  font-size: 11px;
}

.box {
  display: flex;
  margin-bottom: 50px;
  .box-left {
    width: 60%;
    .bigImg {
      width: 480px;
      height: 360px;
      border-radius: 5px;
    }
    .img-bottom {
      width: 480px;
      display: flex;
      margin-left: 30px;
      .smaImg {
        width: 144px;
        height: 108px;
        // margin-right: 24px;
        display: inline-block;
        border-radius: 5px;
      }
    }
  }
  .box-right {
    width: 40%;
    display: flex;
    flex-direction: column;
    .right-fri {
      height: 20%;
      border-bottom: 1px solid #e6e6e6;

      .fri-top {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .little-title {
          width: 40px;
          height: 24px;
          color: white;
          border-radius: 4px;
          font-size: 6px;
          text-align: center;
          line-height: 24px;
          margin-left: 20px;
        }
      }
      .fri-bottom {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        p {
          color: red;
          font-size: 28px;
          font-weight: bolder;
        }
        .collection {
          margin-left: 170px;
          display: flex;
          align-items: center;
        }
      }
    }
    .right-sec {
      height: 20%;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      & > div {
        display: flex;
        flex-direction: column;
        span {
          margin-top: 10px;
        }
      }
    }
    .right-thr {
      height: 30%;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      flex-direction: column;
      // justify-content: space-around;

      text-align: left;
      .tip {
        margin-top: 10px;
        color: #333333;
      }
    }
    .right-for {
      flex: 1;
      border-bottom: 1px solid #e6e6e6;
      .ico-img {
        display: flex;
        flex-wrap: wrap;

        .ico-imgs {
          margin-right: 25px;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          img {
            display: inline-block;
            width: 26px;
            height: 26px;
          }
          span {
            display: inline-block;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
