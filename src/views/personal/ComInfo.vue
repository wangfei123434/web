<template>
  <div class="content-wrapper" style="margin-bottom: 50px">
    <div style="height: 40px; border-bottom: 3px solid #00a9ec">
      <h2 style="color: #00a9ec; text-align: left">企业信息</h2>
    </div>

    <el-form
      class="customForm"
      ref="form"
      :model="infoList"
      :rules="rules"
      label-width="200px"
    >
      <el-form-item label="单位类型:" prop="type">
        <el-select v-model="infoList.type" placeholder="请选择单位类型">
          <el-option label="--请选择--" value=""></el-option>
          <el-option label="国有(控股)企业" value="国有(控股)企业"></el-option>
          <el-option label="外资企业" value="外资企业"></el-option>
          <el-option label="合资企业" value="合资企业"></el-option>
          <el-option label="民营(私营)企业" value="民营(私营)企业"></el-option>
          <el-option label="事业单位" value="事业单位"></el-option>
          <el-option
            label="其他"
            value="其他"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="主管部门:" prop="deptName">
        <el-select v-model="infoList.deptName" placeholder="请选择主管部门">
          <el-option
            v-for="(o, i) in deptNameList"
            :key="i"
            :label="o.name"
            :value="o.name"
          ></el-option>
          <!-- <el-option label="--请选择--" value=""></el-option>
          <el-option label="区委组织部" value="区委组织部"></el-option>
          <el-option label="化工园区" value="化工园区"></el-option>
          <el-option label="区教育局" value="区教育局"></el-option>
          <el-option label="区科经局" value="区科经局"></el-option>
          <el-option label="区商务局" value="区商务局"></el-option>
          <el-option label="区卫健局" value="区卫健局"></el-option>
          <el-option label="开发区" value="开发区"></el-option> -->
        </el-select>
      </el-form-item>

      <el-form-item label="单位地址:" prop="address">
        <el-input v-model="infoList.address" placeholder="单位地址"></el-input>
      </el-form-item>

      <el-form-item label="单位联系人:" prop="contactor">
        <el-input
          v-model="infoList.contactor"
          placeholder="单位联系人"
        ></el-input>
      </el-form-item>

      <el-form-item label="单位联系人手机号码:" prop="contactorMobile">
        <el-input
          v-model="infoList.contactorMobile"
          placeholder="单位联系人手机号码"
        ></el-input>
      </el-form-item>

      <el-form-item label="法人代表:" prop="represent">
        <el-input
          v-model="infoList.represent"
          placeholder="法人代表"
        ></el-input>
      </el-form-item>

      <el-form-item label="单位注册时间:" prop="registerDate">
        <el-date-picker
          style="width: 180px"
          type="date"
          placeholder="选择日期"
          v-model="infoList.registerDate"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="实到注册资金:" prop="registerCapitcal">
        <el-input
          style="width: 180px"
          v-model="infoList.registerCapitcal"
          placeholder="实到注册资金"
        ></el-input>
        <span style="marginleft: 10px">万元</span>
      </el-form-item>

      <el-form-item label="是否上市:" prop="isOnsale">
        <el-radio-group v-model="infoList.isOnsale">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否为高新企业或高品备案企业:" prop="isHighTech">
        <el-radio-group v-model="infoList.isHighTech">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="主营业务:" prop="major">
        <!-- <quill-editor
          v-model="infoList.major"
          ref="myQuillEditor1"
          :options="editorOption1"
        >
        </quill-editor> -->
        <el-input
          style="width: 560px"
          rows="3"
          type="textarea"
          v-model="infoList.major"
        ></el-input>
      </el-form-item>

      <!-- 年份: 表格 -->
      <el-form-item label="年份:" class="mergeCol3">
        <!-- <span style="width: 150px">2018年（万元）</span>
        <span style="width: 150px">2019年（万元）</span>
        <span style="width: 150px">截止至 2020年（万元）</span> -->
        <!-- <div v-if="lastUpdated&&lastUpdated == (new Date()).getFullYear()">
          <span style="width: 150px">{{yearFun1()}}年（万元）</span>
          <span style="width: 150px">{{yearFun2()}}年（万元）</span>
          <span style="width: 150px">{{yearFun3()}}年（万元）</span>
        </div> -->
        <div>
          <span
            style="width: 150px"
            v-for="(item, index) in lastUpdatedArr"
            :key="index"
            >{{ item }}年（万元）</span
          >
        </div>
      </el-form-item>
      <el-form-item label="收入:" class="mergeCol3" prop="agoSale">
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.agoSale"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.blastSale"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.lastSale"
        ></el-input>
      </el-form-item>
      <el-form-item label="净利润:" class="mergeCol3" prop="agoProfit">
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.agoProfit"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.blastProfit"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.lastProfit"
        ></el-input>
      </el-form-item>
      <el-form-item label="研发投入:" class="mergeCol3" prop="agoDev">
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.agoDev"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.blastDev"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.lastDev"
        ></el-input>
      </el-form-item>
      <el-form-item label="纳税:" class="mergeCol3" prop="agoTax">
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.agoTax"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.blastTax"
        ></el-input>
        <el-input
          style="width: 150px"
          type="text"
          v-model="infoList.lastTax"
        ></el-input>
      </el-form-item>

      <el-form-item label="单位总人数:" prop="totalCount">
        <el-input
          v-model="infoList.totalCount"
          placeholder="单位总人数"
        ></el-input>
      </el-form-item>

      <!-- 两列合并 -->
      <div class="mergeCol">
        <el-form-item label="本科人数:">
          <el-input
            v-model="infoList.regularCount"
            placeholder="本科人数"
          ></el-input>
        </el-form-item>

        <el-form-item label="硕士人数:" class="marginRight50">
          <el-input
            v-model="infoList.masterCount"
            placeholder="硕士人数"
          ></el-input>
        </el-form-item>
      </div>

      <div class="mergeCol">
        <el-form-item label="博士人数:">
          <el-input
            v-model="infoList.doctorCount"
            placeholder="博士人数"
          ></el-input>
        </el-form-item>

        <el-form-item label="有国外留学或工作经验人数:" class="marginRight50">
          <el-input
            v-model="infoList.abroadCount"
            placeholder="有国外留学或工作经验人数"
          ></el-input>
        </el-form-item>
      </div>

      <div class="mergeCol">
        <el-form-item label="副高以上职称人数:">
          <el-input
            v-model="infoList.senioTitleCount"
            placeholder="副高以上职称人数"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="入选国家、省、市人才计划人数:"
          class="marginRight50"
        >
          <el-input
            v-model="infoList.expertProgramCount"
            placeholder="入选国家、省、市人才计划人数"
          ></el-input>
        </el-form-item>
      </div>

      <el-form-item label="单位简介:" prop="memo">
        <el-input
          style="width: 560px"
          rows="3"
          type="textarea"
          v-model="infoList.memo"
        ></el-input>
        <!-- <quill-editor
          v-model="infoList.memo"
          ref="myQuillEditor2"
          :options="editorOption2"
        >
        </quill-editor> -->
      </el-form-item>

      <el-form-item label="创新实力说明:" prop="idea">
        <el-input
          style="width: 560px"
          rows="5"
          type="textarea"
          v-model="infoList.idea"
        ></el-input>
        <!-- <quill-editor
          v-model="infoList.idea"
          ref="myQuillEditor3"
          :options="editorOption3"
        >
        </quill-editor> -->
      </el-form-item>

      <!-- 附件 -->
      <el-form-item label="营业执照:" class="customUpLoad" prop="yyzz">
        <input
          ref="yyzz_file"
          type="file"
          name=""
          style="width: 470px; display: none"
          @change="yyzzFileChange"
        />
        <el-input
          v-model="infoList.yyzz"
          class="uploadInput"
          @click.prevent="$refs.yyzz_file.click()"
        ></el-input>
        <el-button @click.prevent="$refs.yyzz_file.click()">上传</el-button>
      </el-form-item>

      <el-form-item label="税收证明:" class="customUpLoad" prop="sszm">
        <input
          ref="sszm_file"
          type="file"
          name=""
          style="width: 470px; display: none"
          @change="sszmFileChange"
        />
        <el-input
          v-model="infoList.sszm"
          class="uploadInput"
          @click.prevent="$refs.sszm_file.click()"
        ></el-input>
        <el-button @click.prevent="$refs.sszm_file.click()">上传</el-button>
      </el-form-item>

      <el-form-item
        label="企业举（推）荐意见书:"
        class="customUpLoad"
        prop="qytjyjs"
      >
        <input
          ref="qytjyjs_file"
          type="file"
          name=""
          style="width: 470px; display: none"
          @change="qytjyjsFileChange"
        />
        <el-input
          v-model="infoList.qytjyjs"
          class="uploadInput"
          @click.prevent="$refs.qytjyjs_file.click()"
        ></el-input>
        <el-button @click.prevent="$refs.qytjyjs_file.click()">上传</el-button>
      </el-form-item>

      <!-- 其他附件 -->
      <el-form-item
        label="其他相关证明材料:"
        class="customUpLoad"
        v-for="(otherAttachment, i) in otherAttachmentList"
        :key="i"
        :id="otherAttachment.id"
      >
        <input
          :ref="'otherAttachment_file_' + i"
          type="file"
          :name="'otherAttachment_' + i"
          style="width: 470px; display: none"
          @change="otherAttachmentChange($event, i)"
        />
        <el-input
          :ref="'otherAttachment_input_' + i"
          class="uploadInput"
          :value="otherAttachment.name"
        ></el-input>
        <el-button @click="otherAttachmentClick($event, i)">上传</el-button>
        <span
          class="el-icon-close closeBtn"
          @click="closeOtherAttachment(i)"
        ></span>
      </el-form-item>

      <div
        id="addFuJian"
        ref="addFuJianDom"
        style="text-align: right; width: 75%"
      >
        <span id="add" style="color: blue; cursor: pointer" @click="addFuJian"
          >+添加材料</span
        >
      </div>

      <!-- <div class="foot" v-if="districtStatus != '1' && districtStatus != '2'">
        <el-button @click="save" class="saveBtn">保存</el-button>
        <el-button @click="submit" class="submitBtn">提交</el-button>
      </div>
      <div class="foot" v-else>
        <el-button
          disabled
          class="saveBtn"
          style="background: #ccc; border-color: #ccc"
          >{{ districtStatus | districtStatusName }}</el-button
        >
      </div> -->

      <!-- 2022-05-24修改 currentYear 0表示当年有申报记录  1表示没有 -->
      <div v-if="lastUpdated && lastUpdated == new Date().getFullYear()">
        <div v-if="currentYear == 0">
          <div
            class="foot"
            v-if="districtStatus != '1' && districtStatus != '2'"
          >
            <el-button @click="save" class="saveBtn">保存</el-button>
            <el-button @click="submit" class="submitBtn">提交</el-button>
          </div>
          <div class="foot" v-else>
            <el-button
              disabled
              class="saveBtn"
              style="background: #ccc; border-color: #ccc"
              >{{ districtStatus | districtStatusName }}</el-button
            >
          </div>
        </div>
        <div v-if="currentYear == 1">
          <div class="foot">
            <el-button @click="save" class="saveBtn">保存</el-button>
            <el-button @click="submit" class="submitBtn">提交</el-button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="foot">
          <el-button
            disabled
            class="saveBtn"
            style="background: #ccc; border-color: #ccc"
            >{{ districtStatus | districtStatusName }}</el-button
          >
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import {
  editCompany,
  saveEditCompany,
  getEnterpriseAttachment,
  saveEnterpriseAttachment,
  getDept,
  getQingShanDetail
} from "@/api/personal";
// import uploadFile from './components/uploadFile.vue';
import { getId } from "../../utils/auth";
// import { quillEditor } from "vue-quill-editor"; //调用编辑器
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
export default {
  components: {
    // uploadFile,
    // quillEditor,
  },
  data() {
    return {
      // fileRegular:"image/jpeg,image/png,application/pdf",//上传附件的文件类型
      infoList: {
        type: "",
        deptName: "",
        address: "",
        contactor: "",
        contactorMobile: "",
        represent: "",
        registerDate: "",
        registerCapitcal: "",
        isOnsale: "",
        isHighTech: "",
        major: "",
        agoSale: "",
        blastSale: "",
        lastSale: "",
        agoProfit: "",
        blastProfit: "",
        lastProfit: "",
        agoDev: "",
        blastDev: "",
        lastDev: "",
        agoTax: "",
        blastTax: "",
        lastTax: "",
        totalCount: "",
        regularCount: "",
        masterCount: "",
        doctorCount: "",
        abroadCount: "",
        senioTitleCount: "",
        expertProgramCount: "",
        memo: "",
        idea: "",
        id: "",

        // 上传的文件
        yyzz: "", // 营业执照
        sszm: "", // 税收证明
        qytjyjs: "", // 企业举（推）荐意见书

        districtName: ""
      },
      yyzzData: [],
      sszmData: [],
      qytjyjsData: [],

      otherAttachmentList: [], // 创建其他附件上传dom的数组
      otherAttachmentArr: [], // 其他附件上传 - input 框中的名字

      // 记录回显时 其他附件的id
      delOtherAttachmentArr: [],

      districtStatus: "0", // 判断按钮是否能提交

      deptNameList: null,

      rules: {
        type: [{ required: true, message: "请选择", trigger: "blur" }],
        deptName: [{ required: true, message: "请选择", trigger: "blur" }],
        address: [{ required: true, message: "请输入内容", trigger: "blur" }],
        contactor: [{ required: true, message: "请输入内容", trigger: "blur" }],
        contactorMobile: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        represent: [{ required: true, message: "请输入内容", trigger: "blur" }],
        registerDate: [{ required: true, message: "请选择", trigger: "blur" }],
        registerCapitcal: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        isOnsale: [{ required: true, message: "请输入内容", trigger: "blur" }],
        isHighTech: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        major: [{ required: true, message: "请输入内容", trigger: "blur" }],
        agoSale: [{ required: true, message: "请输入内容", trigger: "blur" }],
        blastSale: [{ required: true, message: "请输入内容", trigger: "blur" }],
        lastDev: [{ required: true, message: "请输入内容", trigger: "blur" }],

        agoProfit: [{ required: true, message: "请输入内容", trigger: "blur" }],
        agoDev: [{ required: true, message: "请输入内容", trigger: "blur" }],
        agoTax: [{ required: true, message: "请输入内容", trigger: "blur" }],
        memo: [{ required: true, message: "请输入内容", trigger: "blur" }],
        idea: [{ required: true, message: "请输入内容", trigger: "blur" }],
        yyzz: [{ required: true, message: "请上传", trigger: "blur" }],
        sszm: [{ required: true, message: "请上传", trigger: "blur" }],
        qytjyjs: [{ required: true, message: "请上传", trigger: "blur" }]
      },
      // editorOption1: { placeholder: "请输入..." },
      // editorOption2: { placeholder: "请输入..." },
      // editorOption3: { placeholder: "请输入..." },
      currentYear: "",
      enterpriseId: "",
      lastUpdated: "",
      lastUpdatedArr: []
    };
  },
  computed: {
    companyId() {
      return this.$route.query.id;
    }
  },
  created() {
    getDept({
      district: "青山区"
    }).then(res => {
      console.log(res);
      if (res?.code == 200) {
        this.deptNameList = res.data.map(e => {
          return {
            name: e.deptName
          };
        });
      }
    });

    this.getEditCompany();
    // this.getAttachment();
  },
  methods: {
    async getEditCompany() {
      // const { data } = await editCompany({
      //   // userId: "01104a9c-0dd8-432f-aef9-4914b483aeb5"
      //   userId: getId(),
      // });
      const { data } = await getQingShanDetail({
        id: this.companyId
      });

      // console.log(data);
      // var [infoList] = data;
      var infoList = data;
      // console.log(infoList);
      (this.infoList.type = infoList.type),
        (this.infoList.deptName = infoList.deptName),
        (this.infoList.address = infoList.address),
        (this.infoList.contactor = infoList.contactor),
        (this.infoList.contactorMobile = infoList.contactorMobile),
        (this.infoList.represent = infoList.represent),
        (this.infoList.registerDate = infoList.registerDate),
        (this.infoList.registerCapitcal = infoList.registerCapitcal),
        (this.infoList.isOnsale = infoList.isOnsale),
        (this.infoList.isHighTech = infoList.isHighTech),
        (this.infoList.major = infoList.major),
        (this.infoList.agoSale = infoList.agoSale),
        (this.infoList.blastSale = infoList.blastSale),
        (this.infoList.lastSale = infoList.lastSale),
        (this.infoList.agoProfit = infoList.agoProfit),
        (this.infoList.blastProfit = infoList.blastProfit),
        (this.infoList.lastProfit = infoList.lastProfit),
        (this.infoList.agoDev = infoList.agoDev),
        (this.infoList.blastDev = infoList.blastDev),
        (this.infoList.lastDev = infoList.lastDev),
        (this.infoList.agoTax = infoList.agoTax),
        (this.infoList.blastTax = infoList.blastTax),
        (this.infoList.lastTax = infoList.lastTax),
        (this.infoList.totalCount = infoList.totalCount),
        (this.infoList.regularCount = infoList.regularCount),
        (this.infoList.masterCount = infoList.masterCount),
        (this.infoList.doctorCount = infoList.doctorCount),
        (this.infoList.abroadCount = infoList.abroadCount),
        (this.infoList.senioTitleCount = infoList.senioTitleCount),
        (this.infoList.expertProgramCount = infoList.expertProgramCount),
        (this.infoList.memo = infoList.memo),
        (this.infoList.idea = infoList.idea);
      this.infoList.id = infoList.id;
      this.infoList.districtName = infoList.districtName;

      this.districtStatus = infoList.districtStatus;

      // 2022-05-24  修改
      // this.currentYear = infoList.currentYear
      this.currentYear = 0;
      if (this.currentYear == 0) {
        console.log("已申报");
        this.getAttachment();
      } else {
        console.log("未申报");
      }

      this.lastUpdated = infoList.lastUpdated.slice(0, 4);
      this.lastUpdatedArr = [
        this.lastUpdated - 3,
        this.lastUpdated - 2,
        this.lastUpdated - 1
      ];
      console.log("lastUpdatedArr", this.lastUpdatedArr);
    },
    getAttachment() {
      getEnterpriseAttachment({
        id: this.companyId
      }).then(res => {
        // console.log(res);
        if (res && res.data) {
          this.yyzzData = [];
          this.sszmData = [];
          this.qytjyjsData = [];
          this.otherAttachmentList = [];
          this.otherAttachmentArr = [];
          this.delOtherAttachmentArr = [];
          res.data.forEach(e => {
            switch (e.type) {
              case "QYZZ":
                this.infoList.yyzz = e.name;
                this.yyzzData.push({
                  ...e
                });
                break;
              case "TAXSTATEMENT":
                this.infoList.sszm = e.name;
                this.sszmData.push({
                  ...e
                });
                break;
              case "RECOMMENDATIONLETTER":
                this.infoList.qytjyjs = e.name;
                this.qytjyjsData.push({
                  ...e
                });
                break;
              case "REPLENISH":
                this.otherAttachmentArr.push(e.name);
                this.otherAttachmentList.push({
                  ...e
                });
                this.delOtherAttachmentArr.push(null);
                break;
            }
          });
        }
      });
    },
    yyzzFileChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.infoList.yyzz = file.name;
      this.yyzzData = [
        {
          file,
          name: file.name,
          time: Date.now()
        }
      ];
    },
    sszmFileChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.infoList.sszm = file.name;
      this.sszmData = [
        {
          file,
          name: file.name,
          time: Date.now()
        }
      ];
    },
    qytjyjsFileChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.infoList.qytjyjs = file.name;
      this.qytjyjsData = [
        {
          file,
          name: file.name,
          time: Date.now()
        }
      ];
    },
    otherAttachmentClick(e) {
      let btn = e.target;
      if (btn.tagName == "SPAN") {
        btn = btn.parentElement;
      }
      let parent = btn.parentElement;
      parent.querySelector("input[type='file']").click();
    },
    closeOtherAttachment(i) {
      let id = this.otherAttachmentList[i].id;

      this.otherAttachmentList.splice(i, 1);

      this.otherAttachmentArr.splice(i, 1);

      id && this.delOtherAttachmentArr.splice(i, 1, id);
    },
    // 新增附件
    addFuJian() {
      this.otherAttachmentList.push({
        id: null
      });
    },
    otherAttachmentChange(e, i) {
      console.log(e, this, i);
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      // this.form.performanceCertificationName = file.name

      this.otherAttachmentArr.push({
        file,
        name: file.name,
        time: Date.now()
      });

      this.$refs["otherAttachment_input_" + i][0].$el.querySelector(
        "input"
      ).value = file.name;
    },
    // 附件信息
    getAttachmentParam() {
      const formData = new FormData();
      formData.append("enterpriseId", this.enterpriseId || this.companyId);
      formData.append(
        "license",
        this.yyzzData[0] && this.yyzzData[0].file ? this.yyzzData[0].file : null
      );
      formData.append(
        "attest",
        this.sszmData[0] && this.sszmData[0].file ? this.sszmData[0].file : null
      );
      formData.append(
        "opinion",
        this.qytjyjsData[0] && this.qytjyjsData[0].file
          ? this.qytjyjsData[0].file
          : null
      );

      this.otherAttachmentArr.forEach((f, i) => {
        formData.append(`otherFiles`, f.file ? f.file : null);
      });
      formData.append(
        "delete",
        this.delOtherAttachmentArr.filter(e => e != null).join(",")
      );

      return formData;
    },
    save() {
      // let param = this.getParam()
      // let param1 = this.getAttachmentParam();
      console.log("this.infoList?.yyzz", this.infoList?.yyzz);
      console.log("this.infoList?.sszm", this.infoList?.sszm);
      console.log("this.infoList?.qytjyjs", this.infoList?.qytjyjs);
      console.log("otherAttachmentArr", this.otherAttachmentArr);
      // return false
      this.$refs.form.validate(valid => {
        if (valid) {
          // 校验附件类型
          if (!this.checkAttaType()) {
            this.$message.warning("当前存在不支持的附件格式，请修改后再提交！");
            return;
          }
          // 2022-05-24  修改  currentYear为1  保存的时候将id置空
          if (this.currentYear == 1) {
            this.infoList.id = "";
          }

          // userId: getId()    新增参数 2022-05-24
          saveEditCompany({
            ...this.infoList,
            userId: getId(),
            districtStatus: "0"
          }).then(res => {
            console.log(res, "base");
            if (res.code == 200) {
              this.enterpriseId = res.data?.id;
              let param1 = this.getAttachmentParam();
              saveEnterpriseAttachment(param1).then(res => {
                console.log(res, "attachment");
                if (res && res.code == 200) {
                  this.$message.success(res.msg);
                  this.$router.push({
                    name: "company"
                  });
                }
              });
            }
          });
        }
      });

      // saveEnterpriseAttachment(param1).then((res) => {
      //   console.log(res, "attachment");
      //   if (res && res.code == 200) {
      //     this.$message.success(res.msg);
      //   }
      // });
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 校验附件类型
          if (!this.checkAttaType()) {
            this.$message.warning("当前存在不支持的附件格式，请修改后再提交！");
            return;
          }

          this.$confirm("是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            // let param1 = this.getAttachmentParam();

            // 2022-05-24  修改  currentYear为1  提交的时候将id置空
            if (this.currentYear == 1) {
              this.infoList.id = "";
            }

            saveEditCompany({
              ...this.infoList,
              districtStatus: "1",
              userId: getId()
            }).then(res => {
              console.log(res, "base");
              if (res.code == 200) {
                this.enterpriseId = res.data?.id;
                let param1 = this.getAttachmentParam();
                saveEnterpriseAttachment(param1).then(res => {
                  console.log(res, "attachment");
                  if (res && res.code == 200) {
                    this.$message.success(res.msg);
                    this.$router.push({
                      name: "company"
                    });
                  }
                });
              }
            });

            // saveEnterpriseAttachment(param1).then((res) => {
            //   console.log(res, "attachment");
            //   if (res && res.code == 200) {
            //     this.$message.success(res.msg);
            //   }
            // });

            // location.reload()
          });
        }
      });
    },
    yearFun1() {
      const bb = new Date();
      bb.setFullYear(bb.getFullYear() - 3);
      let str = bb.toLocaleDateString();
      let year = str.split("/")[0];
      return year;
    },
    yearFun2() {
      const bb = new Date();
      bb.setFullYear(bb.getFullYear() - 2);
      let str = bb.toLocaleDateString();
      let year = str.split("/")[0];
      return year;
    },
    yearFun3() {
      const bb = new Date();
      bb.setFullYear(bb.getFullYear() - 1);
      let str = bb.toLocaleDateString();
      let year = str.split("/")[0];
      return year;
    },
    checkAttaType() {
      let t = ["doc", "jpg", "jpeg", "png", "pdf"];
      let f = true;
      let n = "";

      n = this.infoList?.yyzz?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      n = this.infoList?.sszm?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      n = this.infoList?.qytjyjs?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      for (let i = 0; i < this.otherAttachmentArr.length; i++) {
        if (this.otherAttachmentArr[i].name) {
          console.log(11111111);
          n = this.otherAttachmentArr[i].name.split(".");
          console.log("n", n);
          f = t.includes(n[1]);
          console.log("f", f);
          if (!f) return false;
        } else {
          console.log(2222222222);
          n = this.otherAttachmentArr[i].split(".");
          f = t.includes(n[1]);
          if (!f) return false;
        }
      }

      return f;
    }
  }
};
</script>

<style lang="less" scoped>
.customForm {
  text-align: left;
  width: 880px;
  margin: 20px auto 0;
  & /deep/ .el-select {
    width: 560px;
  }
  & /deep/ .el-input {
    width: 560px;
  }

  .mergeCol {
    display: flex;

    & /deep/ .el-input {
      width: 120px;
    }

    .marginRight50 {
      margin-left: 50px;
    }
  }

  .foot {
    text-align: center;
  }

  .uploadInput {
    width: 470px;
    margin-right: 20px;
  }

  .mergeCol3 {
    & /deep/ .el-input {
      width: 560px;
      margin-right: 20px;
    }
    span {
      margin-right: 20px;
    }
  }

  & /deep/ .el-form-item__label {
    font-size: 15px;
    font-weight: bold;
    color: #333;
  }
}

// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}
input[type="text"] {
  height: 30px;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
input[type="radio"] {
  display: inline-block;
}
span {
  display: inline-block;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
}
.form-group {
  display: flex;
  margin-left: 25%;
  margin-top: 20px;
  .form-text {
    width: 566px;
  }
}
// .form-list {
//   display: flex;
//   justify-content: space-around;
//   width: 786px;
//   margin-top: 20px;
// }

.saveBtn {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
  margin-right: 50px;
}
.submitBtn {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

// .uploadInput {
//   width:480px;
//   margin-right:20px;
// }
button {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  &:hover {
    opacity: 0.8;
  }
}
.closeBtn {
  margin-left: 40px;
  line-height: 40px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
}
// .quill-editor {
//   height: 200px;
//   margin-bottom: 100px;
// }
</style>
