<template>
  <!-- 武汉英才 -->
  <div class="content-wrapper" style="margin-top: 50px; margin-bottom: 50px">
    <div class="top">
      <img src="../../assets/imgs/newImg/portrait.png" alt="xx" />
      <div class="top-right">
        <div style="display: flex; align-items: center">
          <p style="margin: 0; font-weight: bolder; font-size: 16px">
            {{ username }}
          </p>

          <div class="top-box">
            <span class="yellow">个人用户</span>
            <!-- <span class="grey" v-show="status == 0">信息已保存</span>
            <span class="yellow" v-show="status == 1">信息待审核</span>
            <span class="green" v-show="status == 2">已认证通过</span>
            <span class="red" v-show="status == 3">认证未通过</span> -->
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            margin-top: 20px;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
          "
        >
          <!-- <span>{{ userInfo.mobile }}</span> -->
          <!-- <span style="margin-left: 20px;color: rgb(73, 140, 255);" @click="handelInfo">个人资料</span> -->
        </div>
      </div>
    </div>
    <div class="user-info">
      <div class="user-affairs">
        <h4>个人事项推荐</h4>
        <a @click="jumpTo()" style="margin-right: 50px">查看更多&gt;&gt;&gt;</a>
      </div>
      <ul>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(1)"
            >2021年度武汉英才（战略科技人才）邀约指引</a
          >
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(2)"
            >2021年度武汉英才（产业领军人才）申报指引</a
          >
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(3)"
            >2021年度武汉英才（优秀青年人才）申报指引</a
          >
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(4)">2022年度青山英才申报指引</a>
        </li>
      </ul>
    </div>

    <div class="content">
      <div class="left">
        <ul>
          <li :class="{ active: tag == 1 }" @click="tag = 1">我的举荐</li>
          <li :class="{ active: tag == 2 }" @click="tag = 2">我的申报</li>
        </ul>
      </div>
      <div class="right" v-show="tag == 1">
        <table cellspacing="0">
          <thead>
            <tr>
              <th>举荐时间</th>
              <th>举荐单位</th>
              <th>举荐事项</th>
              <th>举荐类型</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(o, i) in recommendList" :key="i">
              <td>{{ o.dateCreated }}</td>
              <td>{{ o.companyName }}</td>
              <td>{{ o.shixiang }}</td>
              <td>{{ o.type | applyTypeFR }}</td>
              <td class="btns">
                <!-- 市级 -->
                <span
                  class="btn"
                  v-if="
                    o.shixiang == '武汉英才' &&
                    cityDeclareList &&
                    cityDeclareList.length == 0
                  "
                  @click="backTo(o.type, o.shixiang)"
                  >立即申报</span
                >
                <span
                  class="btn"
                  v-if="
                    o.shixiang == '青山英才' &&
                    areaDeclareList &&
                    areaDeclareList.length == 0
                  "
                  @click="backTo(o.type, o.shixiang)"
                  >立即申报</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right" v-show="tag == 2">
        <el-tabs v-model="recommendActive">
          <el-tab-pane label="武汉英才" name="first">
            <!-- 市级 -->
            <table cellspacing="0">
              <thead>
                <tr>
                  <th>申报时间</th>
                  <th>申报单位</th>
                  <th>申报事项</th>
                  <th>申报类型</th>
                  <th>审核状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(o, i) in cityDeclareList" :key="i">
                  <td>{{ o.dateCreated }}</td>
                  <td>{{ o.companyName }}</td>
                  <td>武汉英才</td>
                  <td>{{ o.type | applyTypeFR }}</td>
                  <td>{{ o.status | cityStatus1 }}</td>
                  <td class="btns">
                    <span
                      class="btn mr20"
                      v-if="o.status == 104 || o.status == 0 || o.status == 7"
                      @click="toCityDeclare(o, false)"
                      >修改</span
                    >
                    <span
                      class="btn mr20"
                      v-else
                      @click="toCityDeclare(o, true)"
                      >查看</span
                    >
                    <span
                      class="btn"
                      v-if="o.status == 3 || o.status == 2"
                      @click="cityDownLoad(o)"
                      >下载</span
                    >
                    <span class="btn" v-else @click="getFeedBack(o.id)"
                      >反馈信息</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
          <el-tab-pane
            label="青山英才"
            name="second"
            v-if="areaDeclareList"
          >
            <!-- 青山 -->
            <!-- <table cellspacing="0" style="margin-top: 30px;" v-if="userInfo.district"> -->
            <table cellspacing="0">
              <thead>
                <tr>
                  <th>申报时间</th>
                  <th>申报单位</th>
                  <th>申报事项</th>
                  <th>申报类型</th>
                  <th>审核状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(o, i) in areaDeclareList" :key="i">
                  <td>{{ o.dateCreated }}</td>
                  <td>{{ o.companyName }}</td>
                  <td>青山英才</td>
                  <td>{{ o.type | applyTypeFR }}</td>
                  <td>{{ o.status | districtStatus }}</td>
                  <td class="btns">
                    <span class="btn mr20" @click="qjyxrcCheck(i, 'area')"
                      >查看</span
                    >
                    <span
                      class="btn"
                      v-if="
                        o.status == 3 ||
                        o.status == 1000 ||
                        o.status == 1001 ||
                        o.status == 1002
                      "
                      @click="districtDown(o.id)"
                      >下载</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <el-dialog
      class="custonDialog"
      title="反馈列表"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
    >
      <timeStep1 :data="feedBackData"></timeStep1>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import axios from "axios";
import {
  personalData,
  // collectionOperate,
  selectHouseList,
  talentDown,
  getOneById,
  getTalentAuditLog,
  workPosition,
  trainStu,
} from "../../api/personal";
import { collectionOperate, collectionHouseList } from "../../api/house";
import { getId } from "../../utils/auth";
import { mapMutations, mapState } from "vuex";
import timeStep1 from "./components/timeStep1.vue";
import moment from "moment";

export default {
  data() {
    return {
      tag: 1,
      xfDialogVisible: false,
      isShowXFSB_DESC: true,
      username: "",
      companyName: "",
      dateCreated: "",
      type: "",
      status: "",

      assign: null,
      applyInfor: [],
      cityTalent: [],
      district: [],
      collectionData: [],
      roomSelectData: [],
      recommendList: [
        // {
        //   time: '2021.8.7',
        //   company: '武汉烽火锐拓科技有限公司',
        //   shixiang: '武汉英才',
        //   type: '产业领军人才创新类'
        // }
      ],
      cityDeclareList: [
        // {
        //   time: '2021.8.7',
        //   company: '武汉烽火锐拓科技有限公司',
        //   shixiang: '武汉英才',
        //   type: '产业领军人才创新类',
        //   status: '区级审核中'
        // },
        // {
        //   time: '2021.8.7',
        //   company: '武汉烽火锐拓科技有限公司',
        //   shixiang: '武汉英才',
        //   type: '产业领军人才创新类',
        //   status: '区级退回'
        // },
        // {
        //   time: '2021.8.7',
        //   company: '武汉烽火锐拓科技有限公司',
        //   shixiang: '武汉英才',
        //   type: '产业领军人才创新类',
        //   status: '区级不通过'
        // },
        // {
        //   time: '2021.8.7',
        //   company: '武汉烽火锐拓科技有限公司',
        //   shixiang: '武汉英才',
        //   type: '产业领军人才创新类',
        //   status: '市级通过'
        // }
      ],
      areaDeclareList: [],

      dialogVisible: false,

      feedBackData: [],

      recommendActive: "first",
    };
  },
  components: {
    timeStep1,
  },
  created() {
    this.getPersonal();
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapMutations(["setPersonalInfo"]),
    async getPersonal() {
      if (!getId()) {
        return;
      }
      const data = await personalData({
        userId: getId(),
      });
      console.log(data);
      if (data && data.data) {
        this.username = data.data.personalInfo.username;
        this.status = data.data.personalInfo.status;

        data?.data?.personalInfo &&
          this.setPersonalInfo(data.data.personalInfo);

        let d = data.data;
        this.recommendList = d.assign.map((e) => {
          return {
            ...e,
            shixiang: this.isWuHanTalent(e.type),
          };
        });
        this.cityDeclareList = d.cityTalent.data;
        this.areaDeclareList = d.district.data;
      }
    },
    isWuHanTalent(type) {
      return type == "lj1" || type == "lj2" || type == "YXQNRC"
        ? "武汉英才"
        : "青山英才";
    },
    handelInfo() {
      this.$router.push("personalInfo");
    },
    handleTo(i) {
      if (i == 1) {
        this.$router.push("/zTlent");
      }
      if (i == 2) {
        this.$router.push("/cTlent");
      }
      if (i == 3) {
        this.$router.push("/yTlent");
      }
      if (i == 4) {
        // this.$router.push("/wTlent");
        this.$router.push("/qingshan");
      }

      if (i == 5) {
        this.$router.push("/reportGuide");
      }
      if (i == 6) {
        this.$router.push("/houseMap");
      }
      if (i == 7) {
        this.$router.push("/reportOnlie");
      }
      if (i == 8) {
        this.$router.push("/reportHouse1");
      }
    },
    jumpTo() {
      this.$router.push("/serviceClass");
    },
    jumpTo2(id) {
      this.$router.push({
        path: "/houseChange",
        query: {
          id,
        },
      });
    },
    backTo(t, shixiang) {
      if (shixiang == "武汉英才") {
        // 市
        if (this.cityDeclareList && this.cityDeclareList.length > 0) return;

        let name = "";
        if (t == "YXQNRC") {
          name = "yTlent";
        } else if (t == "lj1" || t == "lj2") {
          name = "cTlent";
        }
        this.$router.push({
          path: name,
          // query: {
          //   type: t
          // }
        });
      } else {
        // 区
        // 如果区级里面有信息，按钮不能点击
        if (this.areaDeclareList && this.areaDeclareList.length > 0) return;

        this.$router.push({
          path: "qingshan",
          query: {
            companyName: this.companyName,
            title: t,
          },
        });
      }
    },
    // 区级优秀人才 -- 查看
    qjyxrcCheck(i, level) {
      let title = "";
      let talentId = "";
      if (level == "city") {
        title = this.cityDeclareList[i].type || "";
        talentId = this.cityDeclareList[i].id || "";
      } else if (level == "area") {
        title = this.areaDeclareList[i].type || "";
        talentId = this.areaDeclareList[i].id || "";
      }

      let name = "";
      if (title == "qs_leaders_innovation" || title == "qs_leaders_startup") {
        name = "qingshan0";
      } else if (title == "cylj3") {
        name = "qingshan1";
      } else if (
        title == "qs_excellentYouth_doctor" ||
        title == "qs_excellentYouth_recommend"
      ) {
        name = "qingshan2";
      } else if (title == "qs_excellentYouth_startup") {
        name = "qingshan3";
      } else if (title == "qs_qingshanElite_craftsman" || title == "gcjj2") {
        name = "qingshan4";
      }

      this.$router.push({
        name: name,
        query: {
          title,
          talentId: talentId,
        },
      });
    },
    getFeedBack(id) {
      // const id = this.district[i].id;
      getTalentAuditLog(id).then((res) => {
        this.dialogVisible = true;
        let d = res.data;
        if (d) {
          this.feedBackData = [];
          d.forEach((e) => {
            this.feedBackData.push({
              date: e.dateCreated,
              auditOrg: e.auditOrg,
              memo: e.memo,
              type: e.type,
            });
          });
        }
      });
    },
    toReportOnlie() {
      this.$router.push("/reportOnlie");
    },
    districtDown(id) {
      talentDown({
        id,
        type: 1,
      }).then((res) => {
        console.log(res);
        const elink = document.createElement("a");
        elink.download = res.fileName;
        elink.style.display = "none";
        elink.href = URL.createObjectURL(res.data);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); // 释放URL 对象
        document.body.removeChild(elink);
      });
    },
    // 市级申报
    cityDownLoad(d) {
      talentDown({
        id: d.id,
        type: 2,
      }).then((res) => {
        console.log(res);
        const elink = document.createElement("a");
        elink.download = res.fileName;
        elink.style.display = "none";
        elink.href = URL.createObjectURL(res.data);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); // 释放URL 对象
        document.body.removeChild(elink);
      });
    },
    // 市级查看
    toCityDeclare(d, readonly) {
      // 判断年限 老数据通过原先的统一的界面去查看
      let t = moment(d.dateCreated).format("YYYY");
      // if (t != moment().format("YYYY")) {
        // 老数据
      if (t == '2019') {
        let title = d.type;
        let talentId = d.id;

        this.$router.push({
          name: "cityTalentReport",
          query: {
            title,
            talentId: talentId,
          },
        });
      } else {
        let name = "";
        let tag = "";
        if (d.type == "YXQNRC") {
          name = "yTlent";
          tag = 1;
        } else if (d.type == "lj1") {
          name = "cTlent";
          tag = 1;
        } else if (d.type == "lj2") {
          name = "cTlent";
          tag = 2;
        }
        this.$router.push({
          path: name,
          query: {
            tag,
            talentId: d.id,
            cityEnterpriseType: d.cityEnterpriseType,
            type: d.type,
            readonly,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
  .top {
    height: 150px;
    background-color: #e3e7f1;
    display: flex;
    // justify-content: left;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
    .top-right {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      & > p {
        text-align: left;
        padding-left: 20px;
      }
      .top-box {
        display: flex;
        // width: 275px;
        // justify-content: space-around;
        margin-top: 5px;
        padding-left: 20px;
        & > span {
          display: inline-block;
          // width: 80px;
          padding: 0 5px;
          margin-right: 10px;
          border-radius: 3px;
          color: white;
        }
        .yellow {
          background-color: #f8b551;
        }
        .green {
          background-color: #00d613;
        }
        .blue {
          background-color: #0d7ef3;
        }
        .grey {
          background-color: #cccccc;
        }
        .red {
          background-color: red;
        }
      }
    }
  }
  .user-info {
    border: 1px solid #e3e7f1;
    margin-top: 20px;
    // height: 162px;
    .little-img {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
    .user-affairs {
      height: 74px;
      width: 100%;
      background-color: #e3e7f1;
      display: flex;
      justify-content: space-between;
      & > img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
      h4 {
        text-align: left;
        padding-left: 20px;
        align-self: center;
      }
      a {
        display: inline-block;
        align-self: center;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: inline-block;
        width: 500px;
        margin-right: 20px;
        margin-top: 10px;
        display: flex;
        //  justify-content: left;
        // padding-left: 20px;
        img {
          // display: inline-block;
          margin-right: 20px;
        }
        a {
          display: inline-block;
        }
      }
    }
  }

  .content {
    display: flex;
    margin-top: 20px;
    .left {
      width: 200px;
      margin-right: 30px;
      ul {
        margin: 0;
        padding: 0;
        background: #eee;
        li {
          height: 70px;
          line-height: 70px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          align-items: center;
          cursor: pointer;
          &.active {
            background: #db0810;
            color: #fff;
          }
          &::before {
            content: "";
            display: block;
            width: 2px;
            height: 15px;
            margin-right: 10px;
            background: #ccc;
          }
        }
      }
    }
    .right {
      width: calc(100% - 230px);
      table {
        width: 100%;
        thead {
          tr {
            background: #eee;
            height: 50px;
          }
        }
        tbody {
          tr {
            height: 40px;
            td {
              &.btns {
                .btn {
                  cursor: pointer;
                  color: rgba(28, 111, 255, 0.8);
                  &.mr20 {
                    margin-right: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
