<template>
<!-- 旧版 -->
  <div class="content-wrapper" style="margin-top:50px;margin-bottom:50px">
    <div class="top">
      <img src="../../assets/imgs/newImg/portrait.png" alt="xx" />
      <div class="top-right">
        <p style="margin:0;font-weight:bolder;font-size:16px">{{ username }}</p>

        <div class="top-box">
          <span class="yellow">个人用户</span>
          <span class="grey" v-show="status == 0">信息已保存</span>
          <span class="yellow" v-show="status == 1">信息待审核</span>
          <span class="green" v-show="status == 2">已认证通过</span>
          <span class="red" v-show="status == 3">认证未通过</span>
          <!-- <span class="blue" style="cursor:pointer" @click="handelInfo">{{ (status == 1 || status == 2) ? '查看' : '编辑' }}个人信息</span> -->
          <span class="blue" style="cursor:pointer" @click="handelInfo">{{
            status == 1 || status == 2 ? "查看" : "编辑"
          }}</span>
        </div>
      </div>
    </div>
    <div class="user-info">
      <div class="user-affairs">
        <h4>个人事项推荐</h4>
        <a @click="jumpTo()" style="margin-right:50px">查看更多&gt;&gt;&gt;</a>
      </div>
      <ul>
        <!-- <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(6)">人才留汉-房源查看</a>
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(7)">人才留汉-人才租赁房申请</a>
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(8)">人才留汉-在线选房</a>
        </li> -->

        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(1)"
            >2019年度武汉黄鹤英才（战略科技人才）邀约指引</a
          >
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(2)"
            >2019年度武汉黄鹤英才（产业领军人才）申报指引</a
          >
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(3)"
            >2019年度武汉黄鹤英才（优秀青年人才）申报指引</a
          >
        </li>
        <li>
          <img
            src="../../assets/imgs/newImg/dongtaiRed.png"
            alt="x"
            class="little-img"
          />
          <a href="javascript:;" @click="handleTo(4)">青山英才申报指引</a>
        </li>
      </ul>
    </div>

    <!-- 人才安居 -->
    <!-- <div class="user-logistics">
      <div class="user-head user-inBox">
        <h4>人才安居</h4>
      </div>
      <div class="user-head user-inBox user-inBox1" @click="selectTabRCAJ">
        <div
          class="headItem"
          v-for="(rcaj, i) in rcajHeadList"
          :key="i"
          :class="{ select: rcaj.value == curRCAJ }"
          :data-val="rcaj.value"
        >
          {{ rcaj.label }}
        </div>
      </div>
      <div class="user-body" v-if="curRCAJ == 'rcaj'">
        <div class="head user-bottom">
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >创建时间</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >意向区域</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >审核状态</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >操作</span
          >
        </div>
        <div class="body">
          <table>
            <tr v-for="(v, i) in rcajTableData" :key="i">
              <td style="width:300px">{{ v.createTime | formatDate }}</td>
              <td style="width:300px">{{ v.area | idToAreaName }}</td>
              <td style="width:300px">{{ v.status }}</td>
              <td style="width:300px" v-if="v.status == '已保存' || v.status == ''">
                <span class="btn mr20" @click="toReportOnlie">修改</span>
              </td>
              <td style="width:300px" v-else-if="v.status == '审核中'"></td>
              <td style="width:300px" v-else-if="v.status == '通过'">
                <span class="btn" @click="roomSelectOnLine">在线选房</span>
              </td>
              <td style="width:300px" v-else-if="v.status == '不通过'">
                <span class="btn" @click="toReportOnlie">修改</span>
              </td>
            </tr>
            <tr v-if="rcajTableData[0].status != '通过'">
              <td></td>
              <td></td>
              <td
                class="xfsbInfo"
                :class="{ xfsbInfo_hh: isShowXFSB_DESC }"
                @click="isShowXFSB_DESC = !isShowXFSB_DESC"
                :title="rcajTableData[0].finallyOpinion"
              >
                {{ rcajTableData[0].finallyOpinion }}
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="user-body" v-else-if="curRCAJ == 'sc'">
        <div class="user-bottom">
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:400px;"
            >创建时间</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:400px;"
            >收藏房源</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:400px;"
            >操作</span
          >
        </div>
        <div class="body">
          <table>
            <tr v-for="(v, i) in collectionData" :key="i">
              <td style="width:400px">{{ v.scDate }}</td>
              <td style="width:400px">{{ v.scfy }}</td>
              <td style="width:400px">
                <span class="btn" @click="delSCFY(v.roomSplitedId)">取消收藏</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="user-body" v-else-if="curRCAJ == 'xf'">
        <div class="user-bottom">
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >创建时间</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >选择房源</span
          >
          <span
            style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
            >状态</span
          >
          <span style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;">操作</span>
        </div>
        <div class="body">
          <table>
            <tr v-for="(v, i) in roomSelectData" :key="i">
              <td style="width:300px">{{ v.createdDate }}</td>
              <td style="width:300px">{{ v.districtName + "-" + v.houseInfo + "-" + v.houseNum }}</td>
              <td style="width:300px">
                {{ v.selectStatus | personSelectStatus }}
              </td>
              <td style="width:300px">
                <span class="btn" v-if="v.selectStatus == '1'" @click="lookPZTZS(v)">查看配租通知书</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div> -->

    <div class="user-logistics">
      <div class="user-inBox">
        <h4>举(推)荐我的</h4>
      </div>
      <div class="user-bottom">
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >举(推)荐单位</span
        >
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >举(推)荐时间</span
        >
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >举(推)荐类型</span
        >
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >操作</span
        >
      </div>
      <table>
        <tr class="user-list" v-for="(v, i) in assign" :key="i">
          <td style="width:300px">{{ v && v.companyName }}</td>
          <td style="width:320px">{{ v && v.dateCreated | formatDate }}</td>
          <td style="width:360px">{{ v && v.type | applyTypeFR }}</td>
          <td style="width:170px">
            <a @click="backTo(v.type)" style="color:#498cff">申报</a>
          </td>
        </tr>
      </table>
    </div>

    <div class="user-logistics">
      <div class="user-inBox">
        <h4>武汉市黄鹤英才</h4>
      </div>
      <div class="user-bottom">
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px;"
          >申请类型</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:200px;"
          >创建时间</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:200px;"
          >审核状态</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:200px;"
          >申请年限</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >操作</span
        >
      </div>
      <table>
        <tr class="user-list" v-for="(v, i) in cityTalent" :key="i">
          <td style="width:300px">{{ v.type | applyTypeFR }}</td>
          <td style="width:200px">{{ v.dateCreated | formatDate }}</td>
          <td style="width:200px">{{ v.status | cityStatus }}</td>
          <td style="width:200px">{{ v.applyYear }}</td>
          <td style="width:300px">
            <!-- <span class="btn mr20" @click="qjyxrcCheck(i, 'city')">查看</span> -->
            <span class="btn mr20" @click="cityTalentReportCheck(i)">查看</span>
            <span class="btn mr20" @click="qjyxrcFeedback(i)">反馈信息</span>
            <!-- <span class="btn" v-if="v.status == 3">下载</span> -->
          </td>
        </tr>
      </table>
    </div>

    <div class="user-logistics">
      <div class="user-inBox">
        <h4>区级优秀人才</h4>
      </div>
      <div class="user-bottom">
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >申请类型</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:200px"
          >创建时间</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:200px"
          >审核状态</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:200px"
          >申请年限</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >操作</span
        >
      </div>

      <table>
        <tbody>
          <tr class="user-list" v-for="(v, i) in district" :key="i">
            <td style="width:300px">{{ v.type | applyTypeFR }}</td>
            <td style="width:200px">{{ v.dateCreated | formatDate }}</td>
            <td style="width:200px">{{ v.status | districtStatus }}</td>
            <td style="width:200px">{{ v.applyYear }}</td>
            <td style="width:300px">
              <span class="btn mr20" @click="qjyxrcCheck(i, 'area')">查看</span>
              <span class="btn mr20" @click="qjyxrcFeedback(i)">反馈信息</span>
              <span class="btn" v-if="v.status == 3 || v.status == 1000 || v.status == 1001 || v.status == 1002" @click="districtDown(v.id)">下载</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="user-logistics">
      <div class="user-inBox">
        <h4>
          大学毕业生租赁户在线申请
        </h4>
      </div>
      <div class="user-bottom">
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >创建时间</span
        >
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >审核状态</span
        >
        <span style="color:#3e8ec5;font-size:17px;font-weight:bolder"
          >操作</span
        >
      </div>
      <table>
        <tr class="user-list" v-for="(v, i) in applyInfor" :key="v.id">
          <td style="width:400px">{{ v.applyDate }}</td>
          <td style="width:400px">{{ v.status }}</td>
          <td style="width:400px">申报</td>
        </tr>
      </table>
    </div>-->

    <!-- <div class="user-logistics">
      <div class="user-inBox">
        <h4>大学生实习（训）见习岗位</h4>
      </div>
      <div class="user-bottom">
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >申请类型</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >创建时间</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >审核状态</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >操作</span
        >
      </div>
      <table>
        <tbody>
          <tr class="user-list" v-for="(v, i) in trainStuData" :key="i">
            <td style="width:300px">{{ v.type | applyTypeFR }}</td>
            <td style="width:300px">{{ v.applyDate | formatDate }}</td>
            <td style="width:300px">{{ v.status }}</td>
            <td style="width:300px">
              <span class="btn mr20" @click="toTrainStuPage">修改</span>
              <span class="btn" @click="toTrainStuPage">提交审核</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <!-- <div class="user-logistics">
      <div class="user-inBox">
        <h4>大学生创业工位</h4>
      </div>
      <div class="user-bottom">
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >申请类型</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >创建时间</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >审核状态</span
        >
        <span
          style="color:#3e8ec5;font-size:17px;font-weight:bolder;width:300px"
          >操作</span
        >
      </div>
      <table>
        <tbody>
          <tr class="user-list" v-for="(v, i) in workPositionData" :key="i">
            <td style="width:300px">{{ v.type }}</td>
            <td style="width:300px">{{ v.applyDate | formatDate }}</td>
            <td style="width:300px">{{ v.status }}</td>
            <td style="width:300px">
              <span class="btn mr20" @click="toWorkPositionPage">修改</span>
              <span class="btn" @click="toWorkPositionPage">提交审核</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

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

    <el-dialog
      class="acajtzs"
      title=""
      :visible="xfDialogVisible"
      width="50%"
      :show-close="false"
    >
      <div slot="title" class="title">
        人才安居租赁房配租通知书
        <span @click="acajtzsDownLoad">下载</span>
      </div>

      <div class="box">
        <div class="head">日期: {{ '2021-7-7' }}</div>
        <div class="content">
          <el-row>
            <el-col :span="8">
              项目名称：<span>{{ '梁头时代1' }}</span>
            </el-col>
            <el-col :span="8">
              出租面积（平方）：<span>{{ '61' }}</span>
            </el-col>
            <el-col :span="8">
              租金（元/月）：<span>{{ '1500' }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              项目地址：<span>{{ '武昌临江大道' }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              姓名：<span>{{ '梁头时代1' }}</span>
            </el-col>
            <el-col :span="8">
              证件号码：<span>{{ '61' }}</span>
            </el-col>
            <el-col :span="8">
              联系电话：<span>{{ '1500' }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              资格类型：<span>{{ '武昌临江大道' }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              注意事项：请在3个工作日内与区租赁房运营管理中心签订租赁合同并网上备案，否则过期视为作废。
            </el-col>
          </el-row>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="xfDialogVisible = false">关闭</el-button>
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
import {
  collectionOperate,
  collectionHouseList,
} from "../../api/house";
import { getId } from "../../utils/auth";
import { mapMutations, mapState } from "vuex";
import timeStep from "./components/timeStep.vue";

export default {
  data() {
    return {
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
      curRCAJ: "rcaj",
      rcajHeadList: [
        {
          label: "资格申报",
          value: "rcaj"
        },
        {
          label: "我的收藏",
          value: "sc"
        },
        {
          label: "我的选房",
          value: "xf"
        }
      ],
      rcajTableData: [
        {
          createTime: "",
          area: "",
          status: "",
          finallyOpinion: "",
          id: ""
        }
      ],
      collectionData: [
        // {
        //   createTime: "2020-9-20  08:03",
        //   resources: "武昌区-联投时代中心-501"
        // },
        // {
        //   createTime: "2020-9-20  08:03",
        //   resources: "武昌区-联投时代中心-501"
        // }
      ],
      roomSelectData: [
        // {
        //   createTime: "2020-9-20  08:03",
        //   resources: "武昌区-联投时代中心-501",
        //   status: "成功"
        // },
        // {
        //   createTime: "2020-9-20  08:03",
        //   resources: "武昌区-联投时代中心-501",
        //   status: "成功"
        // }
      ],

      dialogVisible: false,

      feedBackData: [],

      workPositionData: [],
      trainStuData: [],
    };
  },
  components: {
    timeStep
  },
  created() {
    this.getPersonal();
    // this.getOneById();
    // this.getWorkPosition();
    // this.getTrainStu();
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapMutations(["setPersonalInfo"]),
    cityTalentReportCheck(i) {
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
    getWorkPosition() {
      workPosition({
        studentId: getId()
      }).then(res => {
        console.log(res);
        if(res && res.code == 200) {
          let d = res.data
          if(d) {
            this.workPositionData = [
              {
                type: '创业工位',
                applyDate: d.applyDate || '',
                status: d.status || ''
              }
            ]
          }
        }
      })
    },
    getTrainStu() {
      trainStu({
        id: getId()
      }).then(res => {
        console.log(res);
        if(res && res.code == 200) {
          let d = res.data
          if(d) {
            this.trainStuData = [
              {
                type: d.jobType == 1 ? '见习' : '实习（训）',
                applyDate: d.applyDate || '',
                status: d.status || ''
              }
            ]
          }
        }
      })
    },
    getOneById() {
        getOneById({id: getId()}).then(res => {
          const d = res.data;
          if (d) {
            this.rcajTableData = [
              {
                createTime: d.applyDate,
                area: d.leaseIntentionArea,
                status: d.status,
                finallyOpinion: d.finallyOpinion || "",
                id: d.id || ""
              }
            ];
          }
        });
    },
    async getPersonal() {
      if (!getId()) {
        return;
      }
      const data = await personalData({
        userId: getId()
      });
      console.log(data);
      if (data && data.data) {
        this.username = data.data.personalInfo.username;
        this.status = data.data.personalInfo.status;
        if (data.data.assign) {
          this.companyName = data.data.assign.companyName || "";
          this.dateCreated = data.data.assign.dateCreated || "";
          this.type = data.data.assign.type || "";

          this.assign = data.data.assign;
        }

        this.applyInfor = data.data.applyInfor.data;

        // 全市和区域先使用测试数据
        this.cityTalent = data.data.cityTalent.data;
        this.district = data.data.district.data;

        data &&
          data.data &&
          data.data.personalInfo &&
          this.setPersonalInfo(data.data.personalInfo);
      }
    },
    async getCollectionHouseList() {
      if (!this.userInfo) return;
      collectionHouseList({
        currentPage: 1,
        idCard: this.userInfo.idNumber,
        idType: "01",
        pageSize: 100,
        phone: this.userInfo.mobile
      }).then(data => {
        if (data.code == 204) {
          // this.$message.error(data.msg)
          // console.log(data.msg);
          return;
        }

        let d = data.data.message.body.RoomList;
        this.collectionData = [];
        if (d) {
          d.forEach(e => {
            this.collectionData.push({
              scDate: e.scDate || "",
              scfy: e.districtName + "-" + e.villageName + "-" + e.houseNumber,
              roomSplitedId: e.roomSplitedId
            });
          });
        }
      });
    },
    async getSelectHouseList() {
      const { data } = await selectHouseList({
        pageSize: 100,
        currentPage: 1,
        idCard: this.userInfo.idNumber
      });
      console.log(data);
      this.roomSelectData = data.list;
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
        this.$router.push("/wTlent");
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
          id
        }
      });
    },
    backTo(t) {
      // 如果区级里面有信息，按钮不能点击
      if(this.district && this.district.length > 0) return

      this.$router.push({
        path: "qingshan",
        query: {
          companyName: this.companyName,
          title: t
        }
      });
    },
    selectTabRCAJ(e) {
      const val = e.target.dataset.val;
      if (val && this.curRCAJ != val) {
        this.curRCAJ = val;

        if (val == "rcaj") {
          this.getOneById();
        } else if (val == "sc") {
          this.getCollectionHouseList();
        } else if (val == "xf") {
          this.getSelectHouseList();
        }
      }
    },
    roomSelectOnLine() {
      this.$router.push("reportHouse1");
    },
    // 区级优秀人才 -- 查看
    qjyxrcCheck(i, level) {
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
    qjyxrcFeedback(i) {
      const id = this.district[i].id;

        getTalentAuditLog(id)
        .then(res => {
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
        });
    },
    toReportOnlie() {
      this.$router.push("/reportOnlie");
    },
    delSCFY(roomSplitedId){
      collectionOperate({
        phone: this.userInfo.mobile,
        idType: "01",
        idCard: this.userInfo.idNumber,
        roomSplitedId: roomSplitedId,
        roomType: 3,
        badd: 0
      }).then(data => {
        if(data.code == 200) {
          this.$message.success('取消收藏成功')

          this.getCollectionHouseList()
        }
      })
    },
    districtDown(id) {
      // talentDown({talentId:id}).then(res => {
      talentDown({
        id,
        type: 1
      }).then(res => {
        console.log(res);
        const elink = document.createElement("a");
        elink.download = res.fileName;
        elink.style.display = "none";
        elink.href = URL.createObjectURL(res.data);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); // 释放URL 对象
        document.body.removeChild(elink);
      })
    },
    lookPZTZS(d) {
      this.xfDialogVisible = true
      // todo ...
    },
    acajtzsDownLoad() {
      this.xfDialogVisible = false
      // todo ...
    },
    toTrainStuPage() {
      this.$router.push('trainStu')
    },
    toWorkPositionPage() {
      this.$router.push('workPosition')
    },
  }
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
  .user-logistics {
    margin-top: 20px;
    border: 1px solid #d1d5e3;
    .user-inBox {
      height: 74px;
      background-color: #e3e7f1;
      text-align: left;
      padding-left: 15px;
      display: flex;
      h4 {
        align-self: center;
      }
      &.user-inBox1 {
        height: 40px;
      }
    }
    .user-bottom {
      height: 36px;
      background-color: #eef7fc;
      display: flex;
      justify-content: space-around;
      span {
        display: inline-block;
        line-height: 36px;
      }
    }
    .user-list {
      display: flex;
    }

    .user-head {
      padding-left: 15px;
      display: flex;
      align-items: center;
      .headItem {
        padding-right: 20px;
        cursor: pointer;
        &.select {
          color: rgb(62, 142, 197);
          font-weight: bold;
        }
      }
    }
    .user-body {
      .head {
        height: 36px;
        background-color: #eef7fc;
        display: flex;
        justify-content: space-around;
      }
      .body {
        table {
        }
      }
    }
    .btn {
      cursor: pointer;
      color: rgba(28, 111, 255, 0.8);
      &.mr20 {
        margin-right: 20px;
      }
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

  .xfsbInfo {
    text-overflow: ellipsis;
    width: 300px;
    max-width: 300px;
    cursor: pointer;
  }
  .xfsbInfo_hh {
    overflow: hidden;
    white-space: nowrap;
  }

  .acajtzs {
    & /deep/ .el-dialog__body {
      padding: 0;

      .content {
        padding: 0 40px;
        text-align: left;

        .el-row {
          line-height: 35px;
        }
      }

    }
    .title {
      position: relative;
      span {
        position: absolute;
        right: 20px;
        color: rgb(73, 140, 255);
        cursor: pointer;
      }
    }
  }
}
</style>
