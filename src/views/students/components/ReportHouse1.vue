<template>
  <div>
    <div class="main" id="reportHouse1Main">
      <a
        v-for="(d, i) in projectData"
        :key="i"
        class="main-list"
        @click="handelTo(d.regionName)"
      >
        <div class="list-top">{{ d.regionName }}</div>
        <div class="list-box">
          <div class="item">
            <span class="key">项目</span>
            <span class="val">{{ d.childData && d.childData.length }}</span>
          </div>
          <div class="item">
            <span class="gap">|</span>
          </div>
          <div class="item">
            <span class="key">房源(套)</span>
            <span class="val">{{ d.count }}</span>
          </div>
           <div class="item">
            <span class="gap">|</span>
          </div>
          <div class="item">
            <span class="key">可入住(人)</span>
            <span class="val">{{ d.count }}</span>
          </div>
           <div class="item">
            <span class="gap">|</span>
          </div>
          <div class="item">
            <span class="key">当前可供(套)</span>
            <span class="val">{{ d.count }}</span>
          </div>
           <div class="item">
            <span class="gap">|</span>
          </div>
          <div class="item">
            <span class="key">可入住(人)</span>
            <span class="val">{{ d.count }}</span>
          </div>
        </div>
        <!-- <div class="list-box">
          <div class="list-mid">
            <table>
              <tr>
                <td style="width:50px;text-align:center">
                  <span>{{ d.childData && d.childData.length }} </span>
                </td>
                <td style="width:115px;text-align:center">
                  <span>{{ d.count }}</span>
                </td>
                <td style="width:50px;text-align:center">
                  <span>{{ d.count }}</span>
                </td>
                <td style="width:150px;text-align:center">
                  <span>{{ d.count }}</span>
                </td>
                <td style="width:55px;text-align:center">
                  <span>{{ d.count }}</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="list-bottom">
            <span>项目(个)</span>
            <span>房源(套)</span>
            <span>可入住(套)</span>
            <span>当前可供(套)</span>
            <span>可入住(人)</span>
          </div>
        </div> -->
      </a>
    </div>
  </div>
</template>

<script>
import {
  houseList,
  communiteList,
  projectList,
  countHouseForMap,
  countHouseForMap3,
  getStudentStatus2,
} from "@/api/house.js";
import { getId } from "../../../utils/auth";
import { mapState } from "vuex";
export default {
  data() {
    return {
      projectData: []
    };
  },
  mounted() {
    if(!this.userInfo) {
      this.$confirm('当前用户还未登录，请先登录', '提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        type: 'warning'
      }).then(() => {
        this.$router.push({
          name: 'login',
          query: {
            redirect: 'reportHouse1'
          }
        })
      }).catch(() => {

      })
    }else{
      // 资格查询  未完成
      getStudentStatus2({
        studentId: getId()
      }).then(res => {
        if(res.code != 200) {
          this.$confirm(res.msg, '提示', {
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
          }).then(() => {
            if(res.code == 201) {
              this.$router.push('/reportOnlie')
            }
          }).catch(() => {

          })
        }else if(res.code == 200) {
          this.getData();
        }
      })
    }

    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight()
    }, 500)
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight
      let elHeaderH = document.querySelector('.el-header').clientHeight

      document.querySelector('#reportHouse1Main').style.height = (h - headH - footH - elHeaderH - 2) + 'px'
    },
    getData() {
      // countHouseForMap({}).then(res => {
      countHouseForMap3({}).then(res => {
        let d = res.data;
        if (d) {
          this.projectData = d;
        }
      });
    },
    handelMap() {
      this.$router.push("houseMap");
    },
    handelTo(area) {
      this.$router.push({
        path: "reportHouse2",
        query: {
          area
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.checkMap {
  width: 80px;
  height: 32px;
  margin-left: 735px;
  display: block;
  text-align: center;
  line-height: 32px;
  background-color: red;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 12px;
}
.main {
  display: flex;
  flex-wrap: wrap;
  // min-height: 644px;
  .main-list {
    display: block;
    margin-right: 10px;
    margin-top: 20px;
    background-color: #f7f7f7;
    width: 880px;
    height: 120px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    .list-top {
      margin-top: 30px;
      margin-bottom: 15px;
      height: 12px;
      width: 110px;
      text-align: center;
      line-height: 1px;
      border-radius: 0px 6px 6px 0px;
      background-color: #ffcfcf;
      font-weight: bolder;
      font-size: 20px;
      color: #333;
    }
    .list-box {
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 30px;
      .item {
        .key{
          font-size: 12px;
          color: #666666;
          margin-right: 10px;
        }
        .val{
          font-size: 20px;
          font-weight: bold;
          color: #333333;
        }
        .gap {
          color: #E5E5E5;
        }
      }
    }
    // .list-box {
    //   .list-mid {
    //     display: flex;
    //     span {
    //       display: inline-block;
    //       font-weight: bolder;
    //       font-size: 20px;
    //       color: #333;
    //     }
    //   }
    //   .list-bottom {
    //     display: flex;
    //     justify-content: space-around;
    //     margin-right: -30px;
    //     span {
    //       display: inline-block;
    //       margin-right: 30px;
    //       font-size: 12px;
    //       color: #666;
    //     }
    //   }
    // }
  }
}
</style>
