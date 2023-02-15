<template>
  <!-- 武汉英才 -->
  <div class="content-wrapper" style="margin-top: 50px; margin-bottom: 50px">
    <div class="top">
      <img src="../../assets/imgs/newImg/portrait.png" alt="xx" />
      <div class="top-right">
        <div style="display: flex; align-items: center">
          <p style="margin: 0; font-weight: bolder; font-size: 16px">
            {{ userInfo.companyName }}
          </p>

          <div class="top-box">
            <!-- <span class="blue point" @click="$router.push('editInfo')">编辑信息</span> -->
            <span class="yellow">企业用户</span>
            <span class="red">{{ userInfo.district }}</span>
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
          <span>{{ userInfo.mobile }}</span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="left">
        <ul>
          <li
            :class="{ active: tag == 1 }"
            @click="
              visible = false;
              tag = 1;
              getCompanyData();
            "
          >
            资格认定
          </li>
          <li
            :class="{ active: tag == 2 }"
            @click="
              visible = false;
              tag = 2;
              fetchTalentData();
            "
          >
            人才举（推）荐
          </li>
          <li
            :class="{ active: tag == 3 }"
            @click="
              visible = false;
              tag = 3;
              getDeclarationRecord1();
              getDeclarationRecord2()
            "
          >
            申报记录
          </li>
        </ul>
      </div>
      <div class="right" v-show="tag == 1 && !visible">
        <el-tabs v-model="recommendActive">
          <el-tab-pane label="武汉英才" name="first">
            <table cellspacing="0">
              <thead>
                <tr>
                  <th>年度</th>
                  <th>事项</th>
                  <th>举荐资格认定状态</th>
                  <th>单位类型</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(o, i) in cityRecommendList" :key="i">
                  <td>{{ o.lastUpdated&&o.lastUpdated.slice(0,4) }}</td>
                  <td>{{ o.shixiang }}</td>
                  <td>{{ o.status | cityRecommendStatusName }}</td>
                  <td v-if="o.cityEnterpriseType == 1">
                    {{ o.cityEnterpriseType | cityRecommendTypeName }} -
                    {{ o.representType | cityRecommendTypeName1 }}
                  </td>
                  <td v-else>
                    {{ o.cityEnterpriseType | cityRecommendTypeName }}
                  </td>
                  <td class="btns">
                    <span class="mr20" @click="toRecommend">
                      <span class="btn" v-if="o.status == null">认定</span>
                      <span
                        class="btn"
                        v-else-if="o.status == 0 || o.status == 4"
                        >修改</span
                      >
                      <span class="btn" v-else>查看</span>
                    </span>
                    <span
                      class="btn"
                      v-if="haveFeed"
                      @click.stop="getFeedBack1(o)"
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
            v-if="userInfo && userInfo.district == '青山区'"
          >
            <table cellspacing="0">
              <thead>
                <tr>
                  <th>年度</th>
                  <th>事项</th>
                  <th>举（推）荐资格认定状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(o, i) in areaRecommendList" :key="i">
                  <td>{{ o.lastUpdated&&o.lastUpdated.slice(0,4) }}</td>
                  <!-- <td>{{ o.shixiang }}</td> -->
                  <td>青山英才</td>
                  <td>{{ o.districtStatus | districtStatusName }}</td>
                  <td class="btns">
                    <span class="btn" @click="toDistrictRecommendDetail(o)" v-if="o.lastUpdated&&o.lastUpdated.slice(0,4) == (new Date()).getFullYear()">
                      <!-- {{
                        o.status == null
                          ? "认定"
                          : o.status == 0 || o.status == 4
                          ? "修改222"
                          : "查看"
                      }} -->
                      {{
                        o.districtStatus == 0 || o.districtStatus == 4?"修改":o.districtStatus == 1 || o.districtStatus == 2 || o.districtStatus == 3?"查看":"去认定"
                      }}
                    </span>
                    <span class="btn" @click="toDistrictRecommendDetail(o)" v-else>
                      查看
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right" v-show="tag == 2 && !visible">
        <div class="add-talent-btn-warpper">
          <el-button @click="addTalent" icon="el-icon-plus"></el-button>
        </div>
        <table cellspacing="0">
          <thead>
            <tr>
              <th>举（推）荐时间</th>
              <th>被举（推）荐人</th>
              <th>证件号码</th>
              <th>举（推）荐事项</th>
              <th>举（推）荐类型</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(o, i) in talentRecommendList" :key="i">
              <td>{{ o.dateCreated }}</td>
              <td>{{ o.name }}</td>
              <td>{{ o.identity }}</td>
              <td>{{ o.shixiang }}</td>
              <td>{{ o.type | applyTypeFR }}</td>
              <td class="btns">
                <span class="btn mr20" @click="deleteTalent(o)">删除</span>
                <span class="btn" @click="updateTalent(o)">修改</span>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 人才举荐分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="rcjjCurrentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="rcjjPageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="rcjjTotalCount">
        </el-pagination>
      </div>
      <div class="right" v-show="tag == 3 && !visible">
        <el-tabs v-model="recordActive">
          <el-tab-pane label="武汉英才" name="first">
            <!-- 市级 -->
            <table cellspacing="0">
              <thead>
                <tr>
                  <th>申报时间</th>
                  <th>申报人</th>
                  <th>申报事项</th>
                  <th>申报类型</th>
                  <th>审核状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(o, i) in cityDeclareList" :key="i">
                  <td>{{ o.dateCreated }}</td>
                  <td>{{ o.name }}</td>
                  <td>武汉英才</td>
                  <td>{{ o.type | applyTypeFR }}</td>
                  <td>{{ o.status | cityStatus1 }}</td>
                  <td class="btns">
                    <span class="btn mr20" @click="toCityDeclare(o)">查看</span>
                    <span class="btn" @click="getFeedBack(o)">反馈信息</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 申报记录市级分页 -->
            <el-pagination
              @size-change="handleSizeChangeSJ"
              @current-change="handleCurrentChangeSJ"
              :current-page="sbjlSJCurrentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="sbjlSJPageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="sbjlSJTotalCount">
            </el-pagination>
          </el-tab-pane>
          <el-tab-pane
            label="青山英才"
            name="second"
            v-if="areaDeclareList"
          >
            <!-- 青山 -->
            <table cellspacing="0">
              <thead>
                <tr>
                  <th>申报时间</th>
                  <th>申报人</th>
                  <th>申报事项</th>
                  <th>申报类型</th>
                  <th>审核状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(o, i) in areaDeclareList" :key="i">
                  <td>{{ o.dateCreated }}</td>
                  <td>{{ o.name }}</td>
                  <td>青山英才</td>
                  <td>{{ o.type | applyTypeFR }}</td>
                  <td>{{ o.status | districtStatus }}</td>
                  <td class="btns">
                    <span class="btn mr20" @click="lookList(o)">查看</span>
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
            <!-- 申报记录区级分页 -->
            <el-pagination
              @size-change="handleSizeChangeQJ"
              @current-change="handleCurrentChangeQJ"
              :current-page="sbjlQJCurrentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="sbjlQJPageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="sbjlQJTotalCount">
            </el-pagination>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right" v-show="visible" style="text-align: left">
        <div class="">
          <span class="title">单位情况：</span>
          <span
            >请按要求填写完整、真实信息，若无相关信息，请填写“无”，不得空项、漏项。外国语表述的信息请按惯例翻译成中文</span
          >
        </div>

        <div class="box">
          <el-row>
            <el-col :span="2">
              <div class="label">请选择</div>
            </el-col>
            <el-col :span="22">
              <div class="itemBox">
                <div class="item">
                  <el-radio-group
                    v-model="type"
                    :disabled="disabled"
                    @change="typeChange"
                  >
                    <el-radio label="企事业单位"></el-radio>
                    <el-radio label="重点实验室"></el-radio>
                    <el-radio label="重点高校"></el-radio>
                    <!-- <el-radio label="湖北实验室/国家重点实验室/新型研发机构"></el-radio> -->
                    <el-radio label="湖北实验室/国家重点实验室"></el-radio>
                  </el-radio-group>
                </div>
                <div v-show="type == '企事业单位'" class="item">
                  <el-radio-group v-model="type1" :disabled="disabled">
                    <el-radio label="非创投机构推荐"></el-radio>
                    <el-radio label="创投机构推荐"></el-radio>
                  </el-radio-group>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <hr />
        <unVenture
          v-if="type == '企事业单位' && type1 == '非创投机构推荐'"
          :type="type"
          :type1="type1"
          @recommendSaveEdit="recommendSaveEdit"
        ></unVenture>
        <venture
          :type="type"
          :type1="type1"
          v-else-if="type == '企事业单位' && type1 == '创投机构推荐'"
          @recommendSaveEdit="recommendSaveEdit"
        ></venture>
        <other
          v-else
          :type="type"
          @recommendSaveEdit="recommendSaveEdit"
        ></other>
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
    <el-dialog
      :title="dialogTitle + '被举（推）荐人'"
      :visible.sync="talentDialogVisible"
      width="40%"
      :close-on-click-modal="false"
      class="custonDialog"
    >
      <el-form
        ref="form"
        :model="talent"
        :rules="talentRules"
        label-width="100px"
        label-position="right"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="talent.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="identity">
          <el-input v-model="talent.identity" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="举（推）荐事项" prop="shixiang">
          <el-select
            v-model="talent.shixiang"
            @change="talent.type = ''"
            placeholder="请选择"
          >
            <el-option label="武汉英才" value="武汉英才"></el-option>
            <el-option
              label="青山英才"
              value="青山英才"
              v-if="userInfo.district == '青山区'"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="举（推）荐类型" prop="type">
          <el-select v-model="talent.type" placeholder="请选择">
            <div v-if="talent.shixiang == '武汉英才'">
              <el-option label="产业领军创新类" value="lj1"></el-option>
              <el-option
                label="产业领军创业类"
                value="lj2"
                v-if="componyInfo.representType == 1"
              ></el-option>
              <el-option label="优秀青年人才" value="YXQNRC"></el-option>
            </div>
            <div v-else-if="talent.shixiang == '青山英才'">
              <el-option
                label="优秀青年人才1类"
                value="qs_excellentYouth_doctor"
              ></el-option>
              <el-option
                label="优秀青年人才2类"
                value="qs_excellentYouth_recommend"
              ></el-option>
              <el-option
                label="优秀青年人才3类"
                value="qs_excellentYouth_startup"
              ></el-option>
              <el-option
                label="产业领军人才1类"
                value="qs_leaders_innovation"
              ></el-option>
              <el-option
                label="产业领军人才2类"
                value="qs_leaders_startup"
              ></el-option>
              <el-option label="产业领军人才3类" value="cylj3"></el-option>
              <el-option
                label="钢城工匠1类"
                value="qs_qingshanElite_craftsman"
              ></el-option>
              <el-option label="钢城工匠2类" value="gcjj2"></el-option>
            </div>
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="
            talent.shixiang == '武汉英才' &&
            (talent.type == 'lj1' || talent.type == 'YXQNRC')
          "
          label="引进人才工资性年收入（万元）"
          prop="income"
        >
          <el-input v-model="talent.income" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item
          v-if="talent.shixiang == '武汉英才' && talent.type == 'YXQNRC'"
          label="支持举措"
          prop="support"
        >
          <el-input
            v-model="talent.support"
            placeholder="（入选校级、区级人才计划，提供科研平台方面的情况）"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="talentDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmTalent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  companyData,
  getTalentAuditLog,
  saveEditCompany,
  saveEnterpriseAttachment,
  comListId,
  addAssgin,
  deleteById,
  talentDown,
  getTalentAuditLog1,
  getDeclarationRecordData1,
  getDeclarationRecordData2,
  getCheckUserId,
  getQingShanList
} from "@/api/personal";
import { getId } from "../../utils/auth";
import { mapMutations, mapState } from "vuex";
import timeStep1 from "./components/timeStep1.vue";
import unVenture from "./components/unVenture.vue";
import venture from "./components/venture.vue";
import other from "./components/other.vue";
import moment from "moment";

export default {
  data() {
    return {
      talentDialogVisible: false, //人才举荐弹窗显示状态
      talent: {
        name: "", //姓名
        identity: "", //证件号码
        shixiang: "", //被举荐事项（只有青山区才有青山英才）
        type: "", //被举荐类型
      }, //弹窗展示的人才举荐对象
      talentRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        income: [
          {
            required: true,
            message: "请输入引进人才工资性年收入",
            trigger: "blur",
          },
        ],
        support: [
          { required: true, message: "请输入支持举措", trigger: "blur" },
        ],
        identity: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          // {
          //   validator: (rule, value, callback) => {
          //     let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
          //     if (reg.test(value)) {
          //       callback();
          //     } else {
          //       callback(new Error('请输入正确的身份证号'));
          //     }
          //   },
          //   trigger: 'blur'
          // }
        ],
        shixiang: [
          { required: true, message: "请选择被举荐事项", trigger: "change" },
        ],
        type: [
          { required: true, message: "请选择被举荐类型", trigger: "change" },
        ],
      }, //人才举荐对象字段校验
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
      cityRecommendList: [],
      areaRecommendList: [],
      talentRecommendList: [],
      cityDeclareList: [],
      areaDeclareList: [],

      dialogVisible: false,

      feedBackData: [],

      visible: false,
      type: "企事业单位",
      type1: "非创投机构推荐",

      recommendActive: "first",
      recordActive: "first",

      dialogTitle: "添加",
      year: new Date().getFullYear(),

      // 人才举荐分页
      rcjjPageSize:10,
      rcjjCurrentPage:1,
      rcjjTotalCount:0,
      // 申报记录市级
      sbjlSJPageSize:10,
      sbjlSJCurrentPage:1,
      sbjlSJTotalCount:0,
      // 申报记录区级
      sbjlQJPageSize:10,
      sbjlQJCurrentPage:1,
      sbjlQJTotalCount:0,
    };
  },
  components: {
    timeStep1,
    other,
    venture,
    unVenture,
  },
  // mounted() {
  //   this.getCompanyData();
  // },
  watch : {
   'recommendActive':function(val) { //监听切换状态-计划单
      if(val == 'second'){
        this.inspectionFun()
      }
   },
  },
  created() {
    this.getCompanyData();
  },
  computed: {
    ...mapState(["userInfo", "componyInfo"]),
    disabled() {
      let status = this.componyInfo?.status;
      let disabledStatusArr = ["1", "2", "3"];
      let isDisabled = disabledStatusArr.includes(status);
      return isDisabled;
    },
    haveFeed() {
      let status = this.componyInfo.status;
      let disabledStatusArr = ["1", "2", "3", "4"];
      let have = disabledStatusArr.includes(status);
      return have;
    },
  },
  methods: {
    ...mapMutations(["setComponyInfo"]),
    typeChange(e) {
      console.log(e, this);
      if (e == "企事业单位") {
        if (this.componyInfo.representType == 2) {
          this.type1 = "非创投机构推荐";
        } else {
          this.type1 = "创投机构推荐";
        }
      }
    },
    toRecommend() {
      this.visible = true;
    },
    // 获取公司数据
    async getCompanyData() {
      const data = await companyData({
        userId: getId(),
      });
      if (data && data.code == 200) {
        let d = data.data;
        let enterprise = d.enterprise;
        if (enterprise) {
          if (!enterprise?.name) {
            enterprise.name = this.userInfo.companyName;
          }
          if (!enterprise?.represent) {
            enterprise.represent = this.userInfo.name;
          }
          if (!enterprise?.contactorMobile) {
            enterprise.contactorMobile = this.userInfo.mobile;
          }

          this.setComponyInfo(enterprise);
          this.cityRecommendList = [
            Object.assign({ shixiang: "武汉英才" }, enterprise),
          ];
          // this.areaRecommendList = [
          //   Object.assign({ shixiang: "青山英才" }, enterprise),
          // ];

          // this.areaDeclareList = d.district?.data || [];
          // this.cityDeclareList = d.cityTalent?.data || [];

          let cityEnterpriseType = enterprise?.cityEnterpriseType;
          let representType = enterprise?.representType;
          if (cityEnterpriseType == 1) {
            this.type = "企事业单位";
            this.type1 = representType == 1 ? "创投机构推荐" : "非创投机构推荐";
          } else if (cityEnterpriseType == 2) {
            this.type = "重点实验室";
            this.type1 = "";
          } else if (cityEnterpriseType == 3) {
            this.type = "重点高校";
            this.type1 = "";
          } else if (cityEnterpriseType == 4) {
            this.type = "湖北实验室/国家重点实验室";
            this.type1 = "";
          }
        }
      }
    },
    // 举荐保存/提交
    async recommendSaveEdit({ form, attachmentData }) {
      let saveResp;
      let attachmentResp;
      if (form) {
        saveResp = await saveEditCompany(form);
        if (saveResp.code != 200) return;
      }

      // if(attachmentData) {
      //   attachmentResp = await saveEnterpriseAttachment(attachmentData);
      // }

      this.$message.success(saveResp?.msg);
      this.visible = false;
      this.tag = 1;
      this.getCompanyData();
      this.fetchTalentData();
    },
    // 获取人才举荐数据
    async fetchTalentData() {
      let params = {
        pageSize:this.rcjjPageSize,
        currentPage:this.rcjjCurrentPage,
        companyId: this.componyInfo.id,
        // types: ''
        types: `YXQNRC,lj1,lj2,qs_excellentYouth_doctor,qs_excellentYouth_recommend,qs_excellentYouth_startup,qs_leaders_innovation,qs_leaders_startup,cylj3,qs_qingshanElite_craftsman,gcjj2`,
        // types: `YXQNRC,lj1,lj2,qs_excellentYouth_doctor,qs_excellentYouth_recommend,qs_excellentYouth_startup,
        // qs_leaders_innovation,qs_leaders_startup,cylj3,qs_qingshanElite_craftsman,gcjj2`
        // types: `YXQNRC,lj1,lj2,qs_excellentYouth_doctor,qs_excellentYouth_recommend,qs_excellentYouth_startup,
        // qs_leaders_innovation,qs_leaders_startup,cylj3,qs_qingshanElite_craftsman,gcjj2`
        // types: `qs_leaders_startup,qs_leaders_innovation,YXQNRC,lj1,lj2,qs_excellentYouth_doctor,qs_excellentYouth_recommend,qs_excellentYouth_startup,
        // cylj3,qs_qingshanElite_craftsman,gcjj2`
      };
      let resp = await comListId(params);
      let cityArr = ["YXQNRC", "lj1", "lj2"];
      let list = resp.data.list.map((item) => {
        item.shixiang = cityArr.includes(item.type) ? "武汉英才" : "青山英才";
        return item;
      });
      this.talentRecommendList = list;
      this.rcjjTotalCount = resp.data.totalCount
    },
    // 新增人才举荐
    addTalent() {
      this.dialogTitle = "添加";
      this.talent = {
        name: "", //姓名
        identity: "", //证件号码
        shixiang: "", //被举荐事项（只有青山区才有青山英才）
        type: "", //被举荐类型
      }; //弹窗展示的人才举荐对象;
      this.talentDialogVisible = true;

      this.$nextTick(() => {
        this.$refs.form.resetFields();
      });
    },
    // 修改人才举荐
    updateTalent(item) {
      this.dialogTitle = "修改";
      this.talent = Object.assign({}, item, {});
      this.talentDialogVisible = true;
    },
    // 删除人才举荐
    deleteTalent(item) {
      let self = this;
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let resp = await deleteById({ ids: item.id });
          if (resp.code == 200) {
            self.$message.success("操作成功");
            self.fetchTalentData();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 人才举荐弹窗-确认事件
    confirmTalent() {
      let company = this.componyInfo;
      let self = this;
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let params = {
            companyId: company.id,
            companyName: company.name,
            ...this.talent,
          };
          let resp = await addAssgin(params);
          if (resp.code == 200) {
            self.talentDialogVisible = false;
            self.$message.success(resp.msg);
            self.fetchTalentData();
          }
        }
      });
    },
    // 跳转区级举荐详情
    toDistrictRecommendDetail(item) {
      this.$router.push({
        name: "comInfo",
        query: {
          id: item.id,
        },
      });
    },
    async getFeedBack(v) {
      let id = v.id || "";

      let res = await getTalentAuditLog(id);
      this.dialogVisible = true;
      let d = res.data;
      if (d) {
        this.feedBackData = [];
        d.forEach((e) => {
          this.feedBackData.push({
            date: e.dateCreated,
            auditOrg: e.auditOrg,
            type: e.type,
            memo: e.memo,
          });
        });
      }
    },
    async getFeedBack1(v) {
      let id = v.id || "";

      let res = await getTalentAuditLog1(id);
      this.dialogVisible = true;
      let d = res.data;
      if (d) {
        this.feedBackData = [];
        d.forEach((e) => {
          this.feedBackData.push({
            date: e.dateCreated,
            auditOrg: e.auditOrg,
            type: e.type,
            memo: e.memo,
          });
        });
      }
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
    // 区 查看
    lookList(d) {
      let title = d.type;
      let talentId = d.id;

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
    isWuHanTalent(type) {
      return type == "lj1" || type == "lj2" || type == "YXQNRC"
        ? "武汉英才"
        : "青山英才";
    },
    // 市级查看
    toCityDeclare(d) {
      // 判断年限 老数据通过原先的统一的界面去查看
      let t = moment(d.dateCreated).format("YYYY");
      if (t == '2019') {
        // 老数据
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
            readOnly: true,
            type: d.type,
          },
        });
      }
    },
    // 人才举荐分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.rcjjPageSize = val
      this.fetchTalentData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.rcjjCurrentPage = val
      this.fetchTalentData();
    },
    // 申报记录分页
    // 市级
    async getDeclarationRecord1(){
      let params = {
        pageSize:this.sbjlSJPageSize,
        currentPage:this.sbjlSJCurrentPage,
        companyName: this.componyInfo.name,
      };
      let resp = await getDeclarationRecordData1(params);
      this.sbjlSJTotalCount = resp.data.totalCount
      this.cityDeclareList = resp.data.list || []
    },
     handleSizeChangeSJ(val) {
      console.log(`每页 ${val} 条`);
      this.sbjlSJPageSize = val
      this.getDeclarationRecord1();
    },
    handleCurrentChangeSJ(val) {
      console.log(`当前页: ${val}`);
      this.sbjlSJCurrentPage = val
      this.getDeclarationRecord1();
    },
    // 区级
    async getDeclarationRecord2(){
      let params = {
        pageSize:this.sbjlQJPageSize,
        currentPage:this.sbjlQJCurrentPage,
        companyName: this.componyInfo.name,
      };
      let resp = await getDeclarationRecordData2(params);
      this.sbjlQJTotalCount = resp.data.totalCount
      this.areaDeclareList = resp.data.list || []
    },
     handleSizeChangeQJ(val) {
      console.log(`每页 ${val} 条`);
      this.sbjlQJPageSize = val
      this.getDeclarationRecord2();
    },
    handleCurrentChangeQJ(val) {
      console.log(`当前页: ${val}`);
      this.sbjlQJCurrentPage = val
      this.getDeclarationRecord2();
    },
    // 青山英才校验
    async inspectionFun(){
      const data = await getCheckUserId({
        userId: getId(),
      });
      if(data.code == 200){
        this.getQingshanListFun()
      }
    },
    async getQingshanListFun(){
      const res = await getQingShanList({
        userId: getId(),
      });
      console.log("list",res)
      if(res.code == 200){
        this.areaRecommendList = res.data
      }
    }
  },
};
</script>

<style lang="less" scoped>
.mr20 {
  margin-right: 20px;
}
// 添加人才举荐按钮
.add-talent-btn-warpper {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}
& /deep/ .el-select {
  width: 100%;
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
        .point {
          cursor: pointer;
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
      .box {
        margin-top: 20px;
        .itemBox {
          .item {
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
}

.el-pagination{
  float: right;
  margin-top: 30px;
}

& /deep/ .el-tabs__content{
  min-height: 500px;
}
</style>
