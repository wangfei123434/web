<template>
  <div class="con">
    <!--头部查询 -->
    <el-form
      v-if="initPage"
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="ID">
        <el-input v-model="formInline.id" placeholder="请输入ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 非创投机构推荐 -->
    <div class="form" v-else>
      <el-form
        class="form"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="200px"
      >
        <el-form-item label="单位名称：">
          <span>{{ form.name }}</span>
        </el-form-item>
        <el-form-item
          label="推荐创投机构（知名创业投资人）："
          prop="investName"
        >
          <el-input :disabled="disabled" v-model="form.investName"></el-input>
        </el-form-item>
        <el-form-item label="法人代表：">
          <span>{{ form.represent }}</span>
        </el-form-item>
        <el-form-item label="单位地址：" prop="address">
          <el-input :disabled="disabled" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="单位注册时间：" prop="registerDate">
          <el-date-picker
            :disabled="disabled"
            v-model="form.registerDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="实到注册资金（万元）：" prop="registerCapitcal">
          <el-input
            :disabled="disabled"
            v-model="form.registerCapitcal"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否上市：" prop="isOnsale">
          <el-radio-group v-model="form.isOnsale" :disabled="disabled">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否高新企业：" prop="isHighTech">
          <el-radio-group v-model="form.isHighTech" :disabled="disabled">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="主营业务：" prop="major">
          <el-input
            :disabled="disabled"
            type="textarea"
            v-model="form.major"
            :rows="5"
            placeholder="请输入..."
          ></el-input>
          <!-- <quill-editor
            v-model="form.major"
            ref="myQuillEditor1"
            :options="editorOption1"
            class="quill"
          >
          </quill-editor> -->
        </el-form-item>

        <el-form-item label="经营情况:" class="mergeCol3">
          <span style="width: 200px; display: inline-block"
            >2019年（万元）</span
          >
          <span style="width: 200px; display: inline-block"
            >2020年（万元）</span
          >
          <span style="width: 200px; display: inline-block"
            >2021年--申报当月（万元）</span
          >
        </el-form-item>
        <el-form-item label="主营业务收入:" class="mergeCol3" prop="agoSale">
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.agoSale"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.blastSale"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.lastSale"
            placeholder="0"
          ></el-input>
        </el-form-item>
        <el-form-item label="净利润:" class="mergeCol3" prop="agoProfit">
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.agoProfit"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.blastProfit"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.lastProfit"
            placeholder="0"
          ></el-input>
        </el-form-item>
        <el-form-item label="研发投入:" class="mergeCol3" prop="agoDev">
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.agoDev"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.blastDev"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.lastDev"
            placeholder="0"
          ></el-input>
        </el-form-item>
        <el-form-item label="其他成本:" class="mergeCol3" prop="agoOthers">
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.agoOthers"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.blastOthers"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.lastOthers"
            placeholder="0"
          ></el-input>
        </el-form-item>
        <el-form-item label="纳税:" class="mergeCol3" prop="agoTax">
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.agoTax"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.blastTax"
            placeholder="0"
          ></el-input>
          <el-input
            :disabled="disabled"
            style="width: 200px"
            type="text"
            v-model="form.lastTax"
            placeholder="0"
          ></el-input>
        </el-form-item>

        <div>
          <div
            style="margin-left: 105px; margin-top: 20px; margin-bottom: 20px"
          >
            人才规模
          </div>
          <el-form-item label="单位总人数：" prop="totalCount">
            <el-input
              :disabled="disabled"
              v-model.number="form.totalCount"
            ></el-input>
          </el-form-item>
          <el-form-item label="本科人数：" prop="regularCount">
            <el-input
              :disabled="disabled"
              v-model.number="form.regularCount"
            ></el-input>
          </el-form-item>
          <el-form-item label="硕士人数：" prop="masterCount">
            <el-input
              :disabled="disabled"
              v-model.number="form.masterCount"
            ></el-input>
          </el-form-item>
          <el-form-item label="博士人数：" prop="doctorCount">
            <el-input
              :disabled="disabled"
              v-model.number="form.doctorCount"
            ></el-input>
          </el-form-item>
          <el-form-item label="有国外留学或工作经验人数：" prop="abroadCount">
            <el-input
              :disabled="disabled"
              v-model.number="form.abroadCount"
            ></el-input>
          </el-form-item>
          <el-form-item label="副高以上职称人数：" prop="senioTitleCount">
            <el-input
              :disabled="disabled"
              v-model.number="form.senioTitleCount"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="入选国家，省，市人才计划人数："
            prop="expertProgramCount"
          >
            <el-input
              :disabled="disabled"
              v-model.number="form.expertProgramCount"
            ></el-input>
          </el-form-item>
        </div>

        <el-form-item label="单位简介：" prop="memo">
          <el-input
            :disabled="disabled"
            maxlength="200"
            type="textarea"
            v-model="form.memo"
            :rows="5"
            placeholder="（包括企业主营业务、主要产品，相关知识产权及权益归属情况，市场竞争优势分析等）"
          ></el-input>
          <!-- <quill-editor
            v-model="form.memo"
            ref="myQuillEditor2"
            :options="editorOption2"
            class="quill"
          >
          </quill-editor> -->
        </el-form-item>
        <el-form-item label="知名投资机构A轮投资情况：" prop="ainvest">
          <el-input
            :disabled="disabled"
            type="textarea"
            v-model="form.ainvest"
            :rows="5"
            placeholder="（获得哪些知名投资机构A轮投资、投资时间、投资额等）"
          ></el-input>
          <!-- <quill-editor
            v-model="form.ainvest"
            ref="myQuillEditor3"
            :options="editorOption3"
            class="quill"
          >
          </quill-editor> -->
        </el-form-item>
        <el-form-item label="团队核心成员情况：" prop="team">
          <el-input
            :disabled="disabled"
            type="textarea"
            v-model="form.team"
            :rows="5"
            placeholder="（核心团队成员基本情况及主要业绩）"
          ></el-input>
          <!-- <quill-editor
            v-model="form.team"
            ref="myQuillEditor3"
            :options="editorOption3"
            class="quill"
          >
          </quill-editor> -->
        </el-form-item>
        <el-form-item label="资本构成和股权结构：" prop="struct">
          <el-input
            :disabled="disabled"
            type="textarea"
            v-model="form.struct"
            :rows="5"
            placeholder="（列明包括申报人在内的主要股东、资本、股权份额等）"
          ></el-input>
          <!-- <quill-editor
            v-model="form.struct"
            ref="myQuillEditor3"
            :options="editorOption4"
            class="quill"
          >
          </quill-editor> -->
        </el-form-item>
        <el-form-item
          label="2019年以来投资机构投资实际到位资金（万元）："
          prop="talentIncome"
        >
          <el-input :disabled="disabled" v-model="form.talentIncome"></el-input>
        </el-form-item>
        <file-upload
          label="创办企业证明材料（营业执照复印件、验资证明、股权构成证明）:"
          :disabled="disabled"
          :enterpriseId="componyInfo && componyInfo.id"
          prop="founderproof"
          :model="form.founderproof"
          @fileChange="(e) => fileChange(e, 'founderproof')"
        >
        </file-upload>
        <file-upload
          label="工商局出具的创投机构（投资基金）为公司股东的相关证明:"
          :disabled="disabled"
          :enterpriseId="componyInfo && componyInfo.id"
          prop="gdzm"
          :model="form.gdzm"
          @fileChange="(e) => fileChange(e, 'gdzm')"
        >
        </file-upload>
        <file-upload
          label="经第三方审计的上年度企业财务报表（资产负债表、损益表、现金流量表等）:"
          :disabled="disabled"
          :enterpriseId="componyInfo && componyInfo.id"
          prop="sndqycwbb"
          :model="form.sndqycwbb"
          @fileChange="(e) => fileChange(e, 'sndqycwbb')"
        >
        </file-upload>
        <file-upload
          label="投资机构（知名创业投资人）推荐函:"
          :disabled="disabled"
          :enterpriseId="componyInfo && componyInfo.id"
          prop="tzjgtjh"
          :model="form.tzjgtjh"
          @fileChange="(e) => fileChange(e, 'tzjgtjh')"
        >
        </file-upload>
        <div class="fileTest" style="color: #ccc; margin-bottom: 30px">
          注意：上传附件类型支持doc、jpg、png、jpge、pdf，不支持docx、rar
        </div>
        <div class="foot">
          <el-button @click="save" class="saveBtn">保存</el-button>
          <el-button @click="submit" class="submitBtn">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getTalentData, saveEditCompany1 } from "@/api/personal";
import FileMixins from "./FileMixins.js";
import fileUpload from "./fileUpload.vue";
// import { quillEditor } from "vue-quill-editor"; //调用编辑器
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
export default {
  mixins: [FileMixins],
  components: {
    fileUpload,
    // quillEditor,
  },
  props: {},
  data() {
    let that = this;
    const agoSaleValidator = (rule, value, callback) => {
      let { agoSale, blastSale, lastSale } = that.form;
      if (agoSale === "" || blastSale === "" || lastSale === "") {
        callback(new Error("请输入"));
      } else {
        if (
          parseFloat(agoSale) == agoSale &&
          parseFloat(blastSale) == blastSale &&
          parseFloat(lastSale) == lastSale
        ) {
          callback();
        } else {
          callback(new Error("请输入数字"));
        }
      }
    };
    const agoProfitValidator = (rule, value, callback) => {
      let { agoProfit, blastProfit, lastProfit } = that.form;
      if (agoProfit === "" || blastProfit === "" || lastProfit === "") {
        callback(new Error("请输入"));
      } else {
        if (
          parseFloat(agoProfit) == agoProfit &&
          parseFloat(blastProfit) == blastProfit &&
          parseFloat(lastProfit) == lastProfit
        ) {
          callback();
        } else {
          callback(new Error("请输入数字"));
        }
      }
    };
    const agoDevValidator = (rule, value, callback) => {
      let { agoDev, blastDev, lastDev } = that.form;
      if (agoDev === "" || blastDev === "" || lastDev === "") {
        callback(new Error("请输入"));
      } else {
        if (
          parseFloat(agoDev) == agoDev &&
          parseFloat(blastDev) == blastDev &&
          parseFloat(lastDev) == lastDev
        ) {
          callback();
        } else {
          callback(new Error("请输入数字"));
        }
      }
    };
    const agoTaxValidator = (rule, value, callback) => {
      let { agoTax, blastTax, lastTax } = that.form;
      if (agoTax === "" || blastTax === "" || lastTax === "") {
        callback(new Error("请输入"));
      } else {
        if (
          parseFloat(agoTax) == agoTax &&
          parseFloat(blastTax) == blastTax &&
          parseFloat(lastTax) == lastTax
        ) {
          callback();
        } else {
          callback(new Error("请输入数字"));
        }
      }
    };
    const agoOthersValidator = (rule, value, callback) => {
      let { agoOthers, blastOthers, lastOthers } = that.form;
      if (agoOthers === "" || blastOthers === "" || lastOthers === "") {
        callback(new Error("请输入"));
      } else {
        if (
          parseFloat(agoOthers) == agoOthers &&
          parseFloat(blastOthers) == blastOthers &&
          parseFloat(lastOthers) == lastOthers
        ) {
          callback();
        } else {
          callback(new Error("请输入数字"));
        }
      }
    };
    // const modules = {
    //   modules: {
    //     toolbar: [
    //       ["bold", "italic", "underline"],
    //       [{ header: 1 }, { header: 2 }],
    //       [{ list: "ordered" }, { list: "bullet" }],
    //       [{ script: "sub" }, { script: "super" }],
    //       [{ size: ["small", false, "large", "huge"] }],
    //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //       [{ color: [] }, { background: [] }],
    //     ],
    //   },
    // };
    return {
      initPage: true,
      representType: "",
      cityEnterpriseType: "",
      formInline: {
        id: "",
      },
      form: {
        cityEnterpriseType: 1, //市级企业类型  1.企业  2.重点实验室  3.重点高校  4.湖北实验室
        representType: 1, //法人代表类型  1.创投机构  2.非创投机构
        name: "", //单位名称
        investName: "", //推荐创投机构（知名创业投资人）
        represent: "", //法人代表
        address: "", //单位地址
        registerDate: "", //注册时间
        registerCapitcal: "", //实到注册资金（万元）
        isOnsale: "", //是否上市  0否1是
        isHighTech: "", //是否高新企业  0否1是
        major: "", //主营业务
        agoSale: "", //主营业务收入-2019
        blastSale: "", //主营业务收入-2020
        lastSale: "", //主营业务收入-2021
        agoProfit: "", //净利润-2019
        blastProfit: "", //净利润-2020
        lastProfit: "", //净利润-2021
        agoDev: "", //研发投入-2019
        blastDev: "", //研发投入-2020
        lastDev: "", //研发投入-2021
        agoTax: "", //纳税-2019
        blastTax: "", //纳税-2020
        lastTax: "", //纳税-2021
        agoOthers: "",
        blastOthers: "",
        lastOthers: "",
        totalCount: "", //单位总人数
        regularCount: "", //本科人数
        masterCount: "", //硕士人数
        doctorCount: "", //博士人数
        abroadCount: "", //有国外留学或工作经验人数人数
        senioTitleCount: "", //副高以上职称人数
        expertProgramCount: "", //入选国家，省，市人才计划人数
        memo: "", //单位简介
        ainvest: "", //知名投资机构A轮投资情况
        team: "", //团队核心成员情况
        struct: "", //资本构成和股权结构
        talentIncome: "", //2019年以来投资机构投资实际到位资金（万元）
        founderproof: "", //文件：创办企业证明材料（营业执照复印件、验资证明、股权构成证明）
        gdzm: "", // 文件： 工商局出具的创投机构（投资基金）为公司股东的相关证明
        sndqycwbb: "", //文件：经第三方审计的上年度企业财务报表（资产负债表、损益表、现金流量表等）
        tzjgtjh: "", //文件：投资机构（知名创业投资人）推荐函
      },
      rules: {
        investName: [{ required: true, message: "请输入", trigger: "blur" }], //推荐创投机构（知名创业投资人）
        address: [{ required: true, message: "请输入", trigger: "blur" }], //单位地址
        registerDate: [
          { required: true, message: "请选择", trigger: "change" },
        ], //注册时间
        registerCapitcal: [
          { required: true, message: "请输入", trigger: "blur" },
        ], //实到注册资金（万元）
        isOnsale: [{ required: true, message: "请选择", trigger: "change" }], //是否上市  0否1是
        isHighTech: [{ required: true, message: "请选择", trigger: "change" }], //是否高新企业  0否1是
        major: [{ required: true, message: "请输入", trigger: "blur" }], //主营业务
        totalCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //单位总人数
        regularCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //本科人数
        masterCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //硕士人数
        doctorCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //博士人数
        abroadCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //有国外留学或工作经验人数人数
        senioTitleCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //副高以上职称人数
        expertProgramCount: [
          { required: true, message: "请输入", trigger: "blur" },
          { type: "number", message: "必须为数字值" },
        ], //入选国家，省，市人才计划人数
        memo: [{ required: true, message: "请输入", trigger: "blur" }], //单位简介
        ainvest: [{ required: true, message: "请输入", trigger: "blur" }], //知名投资机构A轮投资情况
        team: [{ required: true, message: "请输入", trigger: "blur" }], //团队核心成员情况
        struct: [{ required: true, message: "请输入", trigger: "blur" }], //资本构成和股权结构
        talentIncome: [{ required: true, message: "请输入", trigger: "blur" }], //2019年以来投资机构投资实际到位资金（万元）
        founderproof: [{ required: true, message: "请输入", trigger: "blur" }],
        gdzm: [{ required: true, message: "请输入", trigger: "blur" }],
        sndqycwbb: [{ required: true, message: "请输入", trigger: "blur" }],
        tzjgtjh: [{ required: true, message: "请输入", trigger: "blur" }],

        agoSale: [
          { required: true, validator: agoSaleValidator, trigger: "blur" },
        ],
        agoProfit: [
          { required: true, validator: agoProfitValidator, trigger: "blur" },
        ],
        agoDev: [
          { required: true, validator: agoDevValidator, trigger: "blur" },
        ],
        agoTax: [
          { required: true, validator: agoTaxValidator, trigger: "blur" },
        ],
        agoOthers: [
          { required: true, validator: agoOthersValidator, trigger: "blur" },
        ],
      },
      // editorOption1: {
      //   placeholder: `请输入`,
      //   ...modules,
      // },
      // editorOption2: {
      //   placeholder: `（包括企业主营业务、主要产品，相关知识产权及权益归属情况，市场竞争优势分析等）`,
      //   ...modules,
      // },
      // editorOption3: {
      //   placeholder: `（获得哪些知名投资机构A轮投资、投资时间、投资额等）`,
      //   ...modules,
      // },
      // editorOption4: {
      //   placeholder: `（核心团队成员基本情况及主要业绩）`,
      //   ...modules,
      // },
    };
  },
  methods: {
    // 查询
    onSubmit() {
      this.queryData(this.formInline.id);
      this.initPage = false;
    },
    async save() {
      let form = Object.assign(this.form, {
        status: 0,
        representType: this.representType,
        cityEnterpriseType: this.cityEnterpriseType,
      });
      let saveResp;
      if (form) {
        saveResp = await saveEditCompany1(form);
        if (saveResp.code != 200) return;
      }
      this.$message.success(saveResp?.msg);
    },
    checkAttaType() {
      let t = ["doc", "jpg", "jpeg", "png", "pdf"];
      let f = true;
      let n = "";
      n = this.form?.founderproof?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      n = this.form?.gdzm?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      n = this.form?.sndqycwbb?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      n = this.form?.tzjgtjh?.split(".");
      f = t.includes(n[1]);
      if (!f) return false;

      return f;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 校验附件类型
          if (!this.checkAttaType()) {
            this.$message.warning("当前存在不支持的附件格式，请修改后再提交！");
            return;
          }

          Object.assign(this.form, {
            status: 1,
            representType: this.representType,
            cityEnterpriseType: this.cityEnterpriseType,
          });
          let attachmentData = this.getAttachmentFormData();
          this.$emit("recommendSaveEdit", { form: this.form, attachmentData });
        }
      });
    },
    queryData(id) {
      let that = this;
      // let id = this.$route.query.talentId;
      let f = this.form;
      if (!id) {
        let { name, mobile, idNumber } = this.userInfo;
        f.name = name;
        f.mobile = mobile;
        f.idNumber = idNumber;

        // this.companyName = this.$route.query.name;
        // this.org = this.$route.query.districtName;

        this.$nextTick(() => {
          this.$refs.form.resetFields();
        });
        return;
      }
      let url = `/gateway/accountserver/frontend/db/enterpriseCount/getCompanyById?id=${id}`;
      getTalentData(url).then((res) => {
        console.log(res);
        that.form = res;
      });
    },
  },
  created() {
    let trans = {
      isOnsale: this.componyInfo?.isOnsale ? 1 : 0,
      isHighTech: this.componyInfo?.isHighTech ? 1 : 0,
      // cityEnterpriseType: 1,  //市级企业类型  1.企业  2.重点实验室  3.重点高校  4.湖北实验室
      // representType: 1  //法人代表类型  1.创投机构  2.非创投机构
    };
    Object.assign(this.form, this.componyInfo, trans, {});
  },
  computed: {
    ...mapState(["componyInfo"]),
    disabled() {
      let status = this.componyInfo?.status;
      let disabledStatusArr = ["1", "2", "3"];
      let isDisabled = disabledStatusArr.includes(status);
      return isDisabled;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.form {
  .mergeCol3 {
    & /deep/ .el-input {
      width: 560px;
      margin-right: 20px;
    }
    span {
      margin-right: 20px;
    }
  }

  // .customUpLoad {
  .uploadInput {
    width: 500px;

    input {
      border: none;
    }
  }
  .uploadBtn {
    color: #00a9ec;
    margin-top: 5px;

    cursor: pointer;
  }
  .uploadBtn1 {
    margin-left: 20px;
  }
  // }

  .foot {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .saveBtn {
      color: #fff;
      background-color: #f0ad4e;
      border-color: #eea236;
    }
    .submitBtn {
      color: #fff;
      background-color: #5bc0de;
      border-color: #46b8da;
    }
  }
}
.demo-form-inline {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form {
  width: 900px;
  margin: 0 auto;
}
/deep/.el-form-item__content {
  text-align: left !important;
}
</style>