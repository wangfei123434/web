<template>
<!-- 旧版 -->
  <div class="content-wrapper">
    <div class="fri" style="height:150px">
      <img src="../../assets/imgs/newImg/portrait.png" alt="xx" />
      <div class="top-right">
        <p style="margin:0;font-weight:bolder;font-size:16px">
          {{ username }}
        </p>

        <div class="top-box">
          <span class="blue point" @click="handleTo(1)">编辑信息</span>
          <span class="yellow">企业用户</span>
          <span class="yellow" v-show="status == 1">举(推)荐资格认定中</span>
          <span class="green" v-show="status == 2">举(推)荐资格已认定</span>
          <span class="yellow" v-show="status == 3">未获得举(推)荐资格</span>
          <span class="yellow" v-show="status == 4">举(推)荐资格未通过</span>
        </div>
      </div>
      <div class="box-list">
        <a
          :class="{dis: compDistrictName != '青山区'}"
          class="box-lists"
          @click="handleTo2('cylj3,qs_leaders_innovation,qs_leaders_startup')"
          >产业领军人才举(推)荐</a
        >
        <a
        :class="{dis: compDistrictName != '青山区'}"
          class="box-lists"
          @click="
            handleTo2(
              'qs_excellentYouth_doctor,qs_excellentYouth_recommend,qs_excellentYouth_startup'
            )
          "
          >优秀青年人才举(推)荐</a
        >
        <a
        :class="{dis: compDistrictName != '青山区'}"
          class="box-lists"
          @click="handleTo2('qs_qingshanElite_craftsman,lj1')"
          >钢城工匠举(推)荐</a
        >
      </div>
    </div>
    <div class="sco listBox" style="height:180px">
      <div class="title">
        <h2>各区举(推)荐资格认定</h2>

        <div style="display:flex;">
          <span style="width:50px;marginLeft: 20px;">地区：</span>
          <span style="width:200px;">{{ compDistrictName }}</span>
          <!-- <el-select style="width:200px;" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->

          <div style="width:calc(100% - 270px);">
            <div style="display:flex;align-items: center;">
              <div
                :class="{dis: compDistrictName != '青山区'}"
                class="box-lists fri-box point"
                style="margin-left:60px"
                @click="handleTo(3)"
              >
                区级企业信息认定
              </div>
              <span
                class=""
                style="border-top: 1px solid #bfbfbf;width:40px;display:inline-block"
              ></span>
              <div
                v-show="districtStatus != '0'"
                class="box-lists sec-box"
                :class="{
                  grey: districtStatus == null || districtStatus == '1',
                  green: districtStatus == '2',
                  yellow: districtStatus == '3',
                  red: districtStatus == '4'
                }"
              >
                {{ zgBtnText1 }}
              </div>
              <span
                class=""
                style="border-top: 1px solid #bfbfbf;width:40px;display:inline-block"
              ></span>
              <div
                class="box-lists thr-box"
                :class="{ grey: districtAudit == false }"
              >
                青山区人才举(推)荐
              </div>
            </div>

            <div
            :class="{dis: compDistrictName != '青山区'}"
              class="box-lists fou-box point"
              style="margin-left:60px"
              @click="handleTo(4)"
            >
              企业人才情况统计
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thr listBox" style="margin-bottom:60px">
      <div class="title">
        <h2>武汉市黄鹤英才</h2>
      </div>
      <table class="user-table">
        <thead class="user-table-striped-head">
          <tr style="text-align:center;color:#0085C3;height:36px">
            <th width="200px">申请人</th>
            <th width="300px">申请类型</th>
            <th width="300px">创建时间</th>
            <th width="300px">审核状态</th>
            <th width="300px">申请年限</th>
            <th width="300px">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr class="user-list" v-for="(v, i) in cityTalent" :key="i">
            <td style="width:300px">{{ v.name }}</td>
            <td style="width:300px">{{ v.type | applyTypeFR }}</td>
            <td style="width:300px">{{ v.dateCreated | formatDate }}</td>
            <td style="width:300px">{{ v.status | cityStatus }}</td>
            <td style="width:300px">{{ v.applyYear }}</td>
            <td>
              <span class="btn" @click="cityLookList(i)">查看</span>&nbsp;
              <span class="btn" @click="getFeedBack(v)">反馈信息</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="paginationBox">
        <span class="btn" @click="toFirstPage">首页</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, slot, jumper"
          :total="total"
        >
          <span class="btn" @click="toEndPage">尾页</span>
        </el-pagination>
        <span class="">共{{ countPage }}页</span>
        <span class="">每页{{ pageSize }}条</span>
        <span class="">合计{{ total }}条数据</span>
      </div>
    </div>
    <div class="fou listBox">
      <div class="title"><h2>区级优秀人才</h2></div>
      <table class="user-table">
        <thead class="user-table-striped-head">
          <tr style="text-align:center;color:#0085C3;height:36px">
            <th width="200px">申请人</th>
            <th width="300px">申请类型</th>
            <th width="300px">创建时间</th>
            <th width="300px">审核状态</th>
            <th width="300px">申请年限</th>
            <th width="300px">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr class="user-list" v-for="(v, i) in district" :key="i">
            <td style="width:300px">{{ v.name }}</td>
            <td style="width:300px">{{ v.type | applyTypeFR }}</td>
            <td style="width:300px">{{ v.dateCreated | formatDate }}</td>
            <td style="width:300px">{{ v.status | districtStatus }}</td>
            <td style="width:300px">{{ v.applyYear }}</td>
            <td>
              <span class="btn" @click="lookList(i, 'area')">查看</span>&nbsp;
              <span class="btn" @click="getFeedBack(v)">反馈信息</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <el-dialog
      class="custonDialog"
      title="反馈列表"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
    >
      <timeStep :data="feedBackData"></timeStep>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { companyData, getTalentAuditLog } from "@/api/personal";
import { getId } from "../../utils/auth";
import timeStep from "./components/timeStep.vue";
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      enterpriseId: "",
      status: 0, // 用户头像旁的第三个按钮 

      // 各区资格认定
      districtStatus: "0", // 按钮2状态 -- 对应表格中提交按钮是否能提交
      districtAudit: "0", // 按钮3状态

      compDistrictName: '青山区',

      dialogVisible: false,
      // options: [
      //   {
      //     value: "青山区",
      //     label: "青山区"
      //   }
      // ],
      // value: "青山区",
      username: "",
      companyName: "",
      cityTalent: [],
      totalCityTalent: [],
      district: [],
      currentPage: 1,
      pageSize: 1,
      total: 0,
      countPage: 1, // 总共页数

      feedBackData: []
    };
  },
  computed: {
    // 举(推)荐资格文字
    zgBtnText1() {
      let res = "";
      switch (this.districtStatus) {
        case null:
          res = "举(推)荐资格未提交";
          break;
        case "0":
          res = "";
          break;
        case "1":
          res = "举(推)荐资格认定中";
          break;
        case "2":
          res = "举(推)荐资格已认定";
          break;
        case "3":
          res = "未获得举(推)荐资格";
          break;
        case "4":
          res = "举(推)荐资格未通过";
          break;
      }
      return res;
    },
    // status 是否未认证
    isUnAuthentication() {
      // return this.status == 1 || this.status == 2 || this.status == 3 || this.status == 4 ? false : true 
      return this.districtStatus == 2 ? false : true 
    }
  },
  created() {
    this.getCompanyData();
  },
  components: {
    timeStep
  },
  methods: {
    ...mapMutations([
      'setComponyInfo',
    ]),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.cityTalent = this.totalCityTalent.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    handleTo(i) {
      if (i == 1) {
        this.$router.push("editInfo");
      }else{
        if(this.compDistrictName !== '青山区') {
          // this.$message.warning('目前只有青山区能操作该功能！')
          return
        }

        if (i == 3) {
          this.$router.push({
            name: "comInfo",
            query: {
              id: this.enterpriseId
            }
          });
        }
        if (i == 4) {
          // this.$router.push("comTalent");
          // this.enterpriseId
          this.$router.push({
            name: 'comTalent',
            query: {
              id: this.enterpriseId
            }
          });
        }
      }
    },
    handleTo2(val) {
      if(this.isUnAuthentication) {
        this.$message.warning('请先编辑企业资料，选择主管部门，并提交企业资料！')
        return
      }

      if(this.compDistrictName !== '青山区') {
        // this.$message.warning('目前只有青山区能操作该功能！')
        return
      }

      this.$router.push({
        path: "comList",
        query: {
          val
        }
      });
    },
    async getCompanyData() {
      const data = await companyData({
        userId: getId()
      });
      console.log(data);

      if (data && data.code == 200) {
        let d = data.data;

        this.username = d.personalInfo.username;
        this.companyName = d.personalInfo.companyName;
        this.district = d.district.data;
        // 市级表格
        this.totalCityTalent = d.cityTalent.data;
        if (this.totalCityTalent) {
          this.total = this.totalCityTalent.length;
          this.cityTalent = this.totalCityTalent.slice(
            this.pageSize * (this.currentPage - 1),
            this.pageSize * this.currentPage
          );
          this.countPage = Math.ceil(this.total / this.pageSize);
        }

        if (d.enterprise) {
          this.status = d.enterprise.status || 0;
          this.districtStatus = d.enterprise.districtStatus || 0;
          this.districtAudit = d.enterprise.districtAudit || 0;

          this.enterpriseId = d.enterprise.id;

          this.setComponyInfo(d.enterprise)
        }

        this.compDistrictName = d.personalInfo.district ? d.personalInfo.district : '无'
      }
    },
    cityLookList(i){
      let title = "";
      let talentId = ""
      title = this.cityTalent[i].type || "";
      talentId = this.cityTalent[i].id || "";


      this.$router.push({
        name: 'cityTalentReport',
        query: {
          title,
          talentId: talentId
        }
      });
    },
    lookList(i, level) {
      // this.$router.push("operation");
      let title = "";
      let talentId = ""
      if (level == "city") {
        title = this.cityTalent[i].type || "";
        talentId = this.cityTalent[i].id || "";
      } else if (level == "area") {
        title = this.district[i].type || "";
        talentId = this.district[i].id || "";
      }

      let name = ''
      if(title == 'qs_leaders_innovation' || title == 'qs_leaders_startup') {
        name = 'qingshan0'
      }else if(title == 'cylj3') {
        name = 'qingshan1'
      }else if(title == 'qs_excellentYouth_doctor' || title == 'qs_excellentYouth_recommend'){
        name = 'qingshan2'
      }else if(title == 'qs_excellentYouth_startup') {
        name = 'qingshan3'
      }else if(title == 'qs_qingshanElite_craftsman' || title == 'gcjj2'){
        name = 'qingshan4'
      }

      this.$router.push({
        name: name,
        query: {
          title,
          talentId: talentId
        }
      });
    },
    toFirstPage() {
      this.currentPage = 1;
      this.cityTalent = this.totalCityTalent.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    toEndPage() {
      this.currentPage = this.countPage;
      this.cityTalent = this.totalCityTalent.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    async getFeedBack(v) {
      let id = v.id || "";

      let res = await getTalentAuditLog(id);
      this.dialogVisible = true;
      let d = res.data;
      if (d) {
        this.feedBackData = [];
        d.forEach(e => {
          this.feedBackData.push({
            date: e.lastUpdated,
            auditOrg: e.auditOrg,
            memo: e.memo
          });
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}
.title {
  height: 74px;
  background-color: #e3e7f1;
  line-height: 74px;
  text-align: left;
}
.fri {
  background-color: #e3e7f1;

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

    & > p {
      text-align: left;
      padding-left: 20px;
    }
    .top-box {
      // width: 275px;
      display: flex;
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
    }
  }
  .box-list {
    display: flex;
    flex-direction: column;
    margin-left: 550px;
  }
}
.box-lists {
  display: inline-block;
  color: white;
  background-color: #2b99ff;
  width: 140px;
  height: 40px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
}
.sco {
  position: relative;
  .fri-box {
    // position: absolute;
  }
  .sec-box {
    // position: absolute;
  }
  .thr-box {
    // position: absolute;
  }
  .fou-box {
    position: absolute;
    top: 142px;
  }
  .fri-line {
    position: absolute;
    top: 117px;
    left: 460px;
  }
  .sec-line {
    position: absolute;
    top: 117px;
    left: 640px;
  }
}
.user-table-striped-head {
  background-color: rgba(92, 179, 228, 0.1);
  color: #0085c3;
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
  cursor: not-allowed;
}
.red {
  background-color: red;
}
.point {
  cursor: pointer;
}

.listBox {
  .title {
    h2 {
      font-size: 16px;
      margin-left: 20px;
      color: #333333;
      font-weight: 600;
    }
  }
}

.user-table {
  border: 1px solid #d1d5e3;
  margin-bottom: 20px;
  border-spacing: 0;
  border-collapse: collapse;
  td {
    height: 50px;

    .btn {
      cursor: pointer;
      color: #00a9ec;
    }
  }
}

.paginationBox {
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    padding: 0 10px;
    vertical-align: top;
    display: inline-block;
    font-size: 14px;
    min-width: 36px;
    min-height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    background-color: #ffffff;
    color: #606266;
    border-radius: 6px;
    margin: 0 1px;
    border: 1px solid #ebebeb;
    height: 30px;
    &:hover {
      transform: scale(1.1);
      background-color: #f4f6f8;
    }
    & /deep/ .el-pager li {
      border: 1px solid #ebebeb;
      border-radius: 5px;
      margin-right: 5px;
      &.active {
        background: #98a6ad;
        color: white;
        cursor: not-allowed;
      }
    }
    & /deep/ .el-pagination button {
      border: 1px solid #ebebeb;
      border-radius: 5px;
      margin-right: 5px;
    }
    & > span {
      font-size: 14px;
      margin-right: 10px;
    }
  }

  .custonDialog {
    & /deep/ .el-dialog__header {
      text-align: left;
    }
    & /deep/ .el-dialog__header {
      border-bottom: 1px solid #e5e5e5;
    }
    & /deep/ .el-dialog__footer {
      border-top: 1px solid #e5e5e5;
    }
    & /deep/ .el-dialog__body {
      padding-bottom: 14px;
    }
  }
}

.dis {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
