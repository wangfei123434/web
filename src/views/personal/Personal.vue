<template>
  <!-- 武汉英才 -->
  <div class="content-wrapper">
    <img  src="../../assets/imgs/bg1.png" class="w-full h-auto"/>
    <div class="w-1200-auto content-wrapper-body">
          <div class="top">
            <div class="top-right">
              <div style="display: flex; align-items: center">
                <p class="username">
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
            </div>
          </div>
      <div class="user-info">
        <div class="user-affairs">
          <h4>个人事项推荐</h4>
          <a @click="jumpTo()">查看更多&gt;&gt;&gt;</a>
        </div>
        <ul>
          <li>
            <img
              src="../../assets/imgs/newImg/dongtaiRed1.png"
              alt="x"
              class="little-img"
            />
            <a href="javascript:;" @click="handleTo(1)"
            >2022年度武汉英才（战略科技人才）邀约指引</a
            >
          </li>
          <li>
            <img
              src="../../assets/imgs/newImg/dongtaiRed1.png"
              alt="x"
              class="little-img"
            />
            <a href="javascript:;" @click="handleTo(2)"
            >2022年度武汉英才（产业领军人才）申报指引</a
            >
          </li>
          <li>
            <img
              src="../../assets/imgs/newImg/dongtaiRed1.png"
              alt="x"
              class="little-img"
            />
            <a href="javascript:;" @click="handleTo(3)"
            >2022年度武汉英才（优秀青年人才）申报指引</a
            >
          </li>
          <li>
            <img
              src="../../assets/imgs/newImg/dongtaiRed1.png"
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
            <li :class="{ active: tag == 1 }" @click="tag = 1">
              <div>我的举荐</div>
            </li>
            <li :class="{ active: tag == 2 }" class="flex-column" @click="tag = 2">
              <div>我的申报<span></span></div>
              <div class="sub-nav-ul">
                <div class="sub-nav-item" @click="recommendActive = 'first'" :class="{'active-nav':recommendActive == 'first'}">武汉英才</div>
                <div class="sub-nav-item" @click="recommendActive = 'second'" :class="{'active-nav':recommendActive == 'second'}">青山英才</div>
              </div>
            </li>
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
                    cityDeclareList.filter((e) => {
                      return e.applyYear === new Date().getFullYear()
                    }).length == 0
                  "
                  @click="backTo(o.type, o.shixiang)"
                >立即申报</span
                >
                <span
                  class="btn"
                  v-if="
                    o.shixiang == '青山英才' &&
                    areaDeclareList &&
                    areaDeclareList.filter((e) => {
                      return e.applyYear === new Date().getFullYear()
                    }).length == 0
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
          <table cellspacing="0" v-if="recommendActive === 'first'">
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
          <table cellspacing="0" v-if="areaDeclareList&&recommendActive === 'second'">
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
  </div>
</template>

<script>

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
      recommendList: [],
      cityDeclareList: [],
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
      this.$router.push("/Sxfw?index=0");
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
        // if (this.cityDeclareList && this.cityDeclareList.length > 0) return;
        let arr = this.cityDeclareList.filter((e) => {
          return e.applyYear === new Date().getFullYear()
        })
        if(this.cityDeclareList && arr.length != 0) return

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
        if (this.areaDeclareList && this.areaDeclareList.filter((e) => {
          return e.applyYear === new Date().getFullYear()
        }).length > 0) return;

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
  &-body{
    z-index:99;
    position: relative;
    margin-top: -210px;
    margin-bottom: 100px;
  }
  .top {
    height: 150px;
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

      & > p {
        text-align: left;
        padding-left: 20px;
      }
      .top-box {
        width: 70px;
        height: 24px;
        background: rgba(255,239,206,0.2000);
        border: 1px solid #FFA454;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        margin-left: 20px;
        & > span {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          color: #FF9D3A;
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
      height: 60px;
      width: 100%;
      background-color: #0A63DD;
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 0 20px ;
      & > img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
      h4 {
        text-align: left;
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
        width: 50%;
        display: flex;
        line-height: 50px;
        min-height: 50px;
        padding: 0 20px;
        align-items: center;
        &:hover{
          color:#0A63DD
        }
        img {
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
        li {
          min-height: 70px;
          line-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          //padding-left: 20px;
          cursor: pointer;
          border: 1px #0A63DD solid;
          color: #273140;
          font-weight: 500;
          &.active {
            background:#0A63DD;
            color: #fff;
            .sub-nav-ul{
              display: block;
            }
          }

          .sub-nav-ul{
            display: none;
            height: 117px;
            margin-bottom: 20px;
            background: rgba(12,112,255);
            color: white;
            opacity: 1;
            border-radius: 4px 0px 0px 4px;
            margin-left: 20px;
            width: calc(100% - 20px);
            .sub-nav-item{
              height: 60px;
              position: relative;
              line-height: 60px;
              &:after{
                position: absolute;
                left: 20px;
                width: 10px;
                height: 10px;
                background: rgba(255,255,255);
                border-radius: 50%;
                transform: translateY(-50%);
                top:50%;
                display: none;
                content: '';
              }
              &.active-nav:after{
                display: block;
              }
            }
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
            line-height: 50px;
          }
        }
        tbody {
          tr {
            height: 72px;
            line-height: 72px;
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
.username{
  font-size: 30px;
  font-weight: 500;
  line-height: 51px;
  color: #0A63DD;
}
</style>
