<template>
  <div class="reportHouse3">
    <div class="title">
      <h3>{{ titleName }}</h3>
    </div>
    <div class="select">
      <!-- 第一个框 -->
      <template>
        <el-select
          class="select-list"
          v-model="value1"
          placeholder="租房类型"
          size="mini"
          @change="chooseList"
        >
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <!-- 第2个框 -->
      <template>
        <el-select
          v-model="value2"
          class="select-list"
          placeholder="房型"
          size="mini"
          @change="chooseList"
        >
          <el-option
            v-for="item in fxOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <!-- 第3个框 -->
      <template>
        <el-select
          v-model="value3"
          class="select-list"
          placeholder="租金"
          size="mini"
          @change="chooseList"
        >
          <el-option
            v-for="item in zjOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
    </div>
    <div class="house-all">
      <div
        class="house-list"
        @click="handelTo(item.roomSplitedId, item.rentType)"
        v-for="(item, i) in houseList"
        :key="i"
        :class="{ active: index == i }"
      >
        <!-- @click="changes(i, item.id), handelTo(item.roomSplitedId)" -->
        <div class="little-title orange" v-show="item.rentType == 1">
          <span>合租</span>
        </div>
        <div class="little-title blue" v-show="item.rentType == 0">
          <span>整租</span>
        </div>
        <img :src="item.cover" alt="" />
        <div class="list-bottom">
          <div class="bottom-fri">
            <span class="fri-span1" style="margin-top:5px">{{
              item.houseNumber
            }}</span>
            <div>
              <span class="fri-span2">{{ item.monthRent }}</span>
              <span class="sec-span"></span> 元/月
            </div>
          </div>
          <div class="bottom-sec">
            <span class="thr-span"
              >{{ item.roomTypeTitle }}|{{ item.area.toString().substr(0, 2) }}㎡
              </span>

            <div class="list-icon">
              <span
                class="iconfont"
                :class="
                  colList.includes(item.roomSplitedId)
                    ? 'icon-xingxing'
                    : 'icon-xingxing1'
                "
                style=" fontSize:15px"
                @click.stop="colorChange(item.roomSplitedId, item)"
              ></span>
              <span class="clo-icon">收藏</span>
            </div>
            <button
              class="submitList"
              @click.stop="onSubmit(item)"
            >
              选房
            </button>
          </div>
        </div>
      </div>
    </div>

    <el-pagination
      layout="prev, pager, next"
      :total="paginationTotal"
      :pageSize="pageSize"
      :current-page="curPage"
      @current-change="currentChange"
      style="textAlign: right;"
    >
    </el-pagination>
  </div>
</template>

<script>
import {
  houseList,
  collectionOperate,
  collectionHouseList,
  selectHouse
} from "../../../api/house";
import { mapState } from "vuex";
export default {
  data() {
    return {
      typeOptions: [
        {
          value: "0",
          label: "整租"
        },
        {
          value: "1",
          label: "合租"
        }
      ],
      fxOptions: [
        {
          value: "",
          label: "不限"
        },
        {
          value: "1",
          label: "1室"
        },
        {
          value: "2",
          label: "2室"
        },
        {
          value: "3",
          label: "3室"
        },
        {
          value: "4",
          label: "4室"
        },
        {
          value: "5",
          label: "5室"
        },
        {
          value: "6",
          label: "6室"
        },
      ],
      zjOptions: [
        {
          value: "0-1000",
          label: "0-1000元"
        },
        {
          value: "1000-2000",
          label: "1000-2000元"
        },
        {
          value: "2000-4000",
          label: "2000-4000元"
        },
        {
          value: "4000",
          label: "4000元以上"
        }
      ],
      // 查询之后数据发给后端,返回新的列表
      value1: "",
      value2: "",
      // value3: "0-1000",
      value3: "",
      idArr: [],
      loveArr: [],
      // sourceHouseList: [],
      houseList: [
        // {
        //   id: 0,
        //   name: "zz",
        //   img: require("@/assets/imgs/test2.jpg"),
        //   home: "整租",
        //   homeFlag: "1"
        // },
      ],
      index: -1,
      // 收藏列表
      colList: [],
      paginationTotal: 0,
      curPage: 1,
      pageSize: 15
    };
  },
  created() {
    // console.log(this.idArr, 11111111);
    // this.getHouseList();
    this.getCollectionHouseList();
    this.getHouseList(this.value1, this.value2, this.value3, true);
    console.log(this.userInfo, 555555555555555);
  },
  computed: {
    ...mapState(["userInfo"]),
    titleName() {
      let name = ''
      if(this.$route.query.sourceType == 2) {
        name = this.$route.query.villageName
      }else if(this.$route.query.sourceType == 3) {
        name = this.$route.query.projectName
      }
      return name
    }
  },
  methods: {
    // 收藏列表
    async getCollectionHouseList() {
      const { data } = await collectionHouseList({
        phone: this.userInfo.mobile,
        idType: "01",
        idCard: this.userInfo.idNumber,
        currentPage: 1,
        pageSize: 1000
      });
      console.log(data, 233);
      if (data) {
        this.colList = [];
        let d = data.message && data.message.body && data.message.body.RoomList;
        if (d) {
          d.forEach(v => {
            this.colList.push(v.roomSplitedId);
          });
        }
      }
      console.log(this.colList);
    },

    /**
     * isInit  是否是初始请求
     */
    async getHouseList(type, fx, zj, isInit) {
      let arr = zj.split("-");
      let min, max;
      if (arr.length == 2) {
        min = arr[0];
        max = arr[1];
      } else {
        min = arr[0] || "";
        max = "";
      }

      const data = await houseList({
        // phone: "15007160084",
        phone: this.userInfo.mobile,
        idType: "01",
        // idCard: "421023199108244133",
        idCard: this.userInfo.idNumber,
        currentPage: this.curPage,
        pageSize: this.pageSize,
        // sourceType: "3",
        sourceType: this.$route.query.sourceType,
        villageId:
          this.$route.query.sourceType == 2 ? this.$route.query.villageId : "",
        projectId:
          this.$route.query.sourceType == 3 ? this.$route.query.projectId : "",
        rentType: type || "",
        roomType: fx || "",
        minMonthRent: parseInt(min),
        maxMonthRent: parseInt(max)
      });
      // console.log(data.data.message.body.RoomList, 999999999);
      // console.log(data.data.message.body);

      // if (data.code == 500) {
      //   this.$message.error("查询失败");
      //   return;
      // }

      this.houseList = [];
      let RoomList =
        data.data &&
        data.data.message &&
        data.data.message.body &&
        data.data.message.body.RoomList;
      if (RoomList) {
        this.houseList = data.data.message.body.RoomList;
        this.houseList.forEach((v, i) => {
          // this.$set(v, "flag", false);
        });
      } else {
        this.$message.warning("当前可看房源列表为空");
      }

      let body = data.data.message.body;
      if (isInit) {
        this.curPage = 1;
        this.paginationTotal = body.PARM_VALUE || 0;
      }

      if (body && body.RoomList) {
        this.sourceHouseList = data.data.message.body.RoomList;
        this.houseList = this.sourceHouseList.slice(0, this.pageSize);
      } else {
        this.houseList = [];
      }
    },
    chooseList() {
      // value = this.value1;
      this.getHouseList(this.value1, this.value2, this.value3, true);
    },
    // changes(i, id) {
    //   this.index = i;
    //   // console.log(id);
    //   this.idArr.push(id);
    //   // console.log(this.idArr);
    //   this.$router.push("reportHouse4");
    // },
    async colorChange(roomSplitedId, item) {
      // item.flag = !item.flag;
      // const id = this.loveArr.find(v => v == item.roomId);
      // if ((item.flag === true, id == undefined)) {
      //   console.log(222);
      //   this.loveArr.push(item.roomId);
      // }
      // if (item.flag == false) {
      //   let i = this.loveArr.findIndex(e => e == item.roomId);
      //   if (i > -1) {
      //     this.loveArr.splice(i, 1);
      //   }
      // }
      // console.log(this.loveArr, 999999);
      let badd = this.colList.includes(item.roomSplitedId) ? 0 : 1;
      const data = await collectionOperate({
        phone: this.userInfo.mobile,
        idType: "01",
        idCard: this.userInfo.idNumber,
        roomSplitedId: roomSplitedId,
        roomType: 3,
        badd: badd
      });
      console.log(data);
      if (data.code == 200) {
        if (badd == 1) {
          this.$message.success("收藏成功");
        } else {
          this.$message.success("取消收藏成功");
        }
      }

      await this.getCollectionHouseList();
    },

    onSubmit(d) {
      console.log("onSubmit");
      this.$confirm("确认选房后无法选择其他房源，是否确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.getSelectHouse(d);
        })
        .catch(() => {});
    },
    handelTo(id, homeFlag) {
      this.$router.push({
        path: "reportHouse4",
        query: {
          id: id,
          homeFlag: homeFlag
        }
      });
    },
    currentChange(i) {
      this.curPage = i;

      this.getHouseList(this.value1, this.value2, this.value3, false);
    },
    async getSelectHouse(d) {
      const { data } = await selectHouse({
        phone: this.userInfo.mobile,
        idType: "01",
        idCard: this.userInfo.idNumber,
        roomSplitedId: d.roomSplitedId,
        houseInfo: d.villageName,
        "roomId": d.roomId,
        "districtName": d.districtName,
        "govCheckNo": d.govCheckNo,
        "houseNum": d.houseNumber,
        "projectId": d.projectId || d.projectid,
        "projectName": d.projectName,
        "monthRent": d.monthRent,
        sourceType: d.sourceType,
      });

      let msg = data && data.message && data.message.body && data.message.body.SBYY
      if(msg) {
        this.$message.info(msg)
      }
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.el-select .el-input__inner:focus {
  border-color: #c0c4cc;
}
.active {
  border: 2px solid red;
  // overflow: hidden;
  // z-index: 999;
}
.orange {
  background-color: #fe6600;
}
.blue {
  background-color: #329cff;
}
.title {
  text-align: left;
  h3 {
    font-size: 24px;
  }
}
.select {
  /deep/.el-input--mini .el-input__inner {
    width: 140px;
    border-radius: 2px;
  }
  /deep/.el-icon-arrow-up:before {
    color: black;
  }
  display: flex;
  justify-content: flex-start;
  .select-list {
    margin-right: 20px;
  }
}
.house-all {
  margin-top: 5px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;

  .house-list {
    width: 280px;
    height: 210px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 40px;
    margin-right: 20px;
    // overflow: hidden;
    position: relative;

    .little-title {
      position: relative;
      &.orange {
        span{
          background-color: #fe6600;
        }
        &::after {
          border-bottom-color: #CD4800;
        }
        &::before {
          border-bottom-color: #CD4800;
        }
      }
      &.blue {
        span{
          background-color: #329cff;
        }
        &::after {
          border-bottom-color: #0076E4;
        }
        &::before {
          border-bottom-color: #0076E4;
        }
      }
      span {
        position: absolute;
        z-index: 99;
        top: -10px;
        left: 12px;
        width: 40px;
        height: 24px;
        color: white;
        border-radius: 0 0 4px 4px;
        font-size: 6px;
        text-align: center;
        line-height: 24px;
        display: inline-block;
      }
      &::after {
        content: '';
        position: absolute;
        left: 46px;
        top: -10px;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 12px solid red;
      }
      &::before {
        content: '';
        position: absolute;
        left: 6px;
        top: -10px;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 12px solid red;
      }
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 4px;
    }

    .list-bottom {
      width: 100%;
      height: 30%;
      background: #ffffff;
      background-color: rgba(243, 240, 236, 0.7);
      // opacity: 0.5;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      position: absolute;
      // z-index: -1;
      .bottom-fri {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        margin-top: 5px;
        .fri-span1 {
          font-weight: bolder;
        }
        .fri-span2 {
          color: red;
          font-weight: bolder;
        }
      }
      .bottom-sec {
        padding: 0 15px;
        margin-top: 3px;
        display: flex;
        justify-content: space-between;
        position: relative;

        .list-icon {
          width: 60px !important;
          height: 24px;
          background-color: rgba(243, 240, 236, 0.7);
          border-radius: 12px 0 0 12px;
          position: absolute;
          right: 0px;
          bottom: 168px;
          display: flex;
          align-items: center;
          .iconfont {
            // overflow: hidden;
            display: inline-block;
            width: 30px !important;
          }
          .icon-xingxing {
            color: #D10100;
          }
          .clo-icon {
            display: inline-block;
            font-size: 12px;
          }
        }
        .submitList {
          width: 48px;
          height: 20px;
          color: white;
          border: 1px solid transparent;
          border-radius: 4px;
          background-color: #d10100;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 12px;
          font-weight: 600;
          position: absolute;
          right: 15px;
          bottom: -18px;
        }
      }
    }
  }
}
.changeColor {
  background-color: #d10100;
}
.reportHouse3 {
  // min-height: 620px;
}
</style>
