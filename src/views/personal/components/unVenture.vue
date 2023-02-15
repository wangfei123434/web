<template>
  <!-- 非创投机构推荐 -->
  <div class="form">
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
      <el-form-item label="单位性质：" prop="type">
        <el-select
          v-model="form.type"
          placeholder="请选择"
          :disabled="disabled"
        >
          <el-option label="国有(控股企业)" value="国有(控股企业)"></el-option>
          <el-option label="外资企业" value="外资企业"></el-option>
          <el-option label="合资企业" value="合资企业"></el-option>
          <el-option label="民营(私营)企业" value="民营(私营)企业"></el-option>
          <el-option label="事业单位" value="事业单位"></el-option>
          <el-option
            label="其他(市属企事业单位及高校院所)"
            value="其他(市属企事业单位及高校院所)"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="法人代表：">
        <span>{{ form.represent }}</span>
      </el-form-item>
      <el-form-item label="单位地址：" prop="address">
        <el-input :disabled="disabled" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="人事部门负责人：" prop="contactor">
        <el-input :disabled="disabled" v-model="form.contactor"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：" prop="contactorMobile">
        <el-input
          :disabled="disabled"
          v-model="form.contactorMobile"
        ></el-input>
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
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否高新企业：" prop="isHighTech">
        <el-radio-group v-model="form.isHighTech" :disabled="disabled">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
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
        <span style="width: 200px; display: inline-block">2020年（万元）</span>
        <span style="width: 200px; display: inline-block">2021年（万元）</span>
        <span style="width: 200px; display: inline-block"
          >2022年1-7月（万元）</span
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
        <div style="margin-left: 105px; margin-top: 20px; margin-bottom: 20px">
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
          placeholder="请输入200字以内"
        ></el-input>
        <!-- <quill-editor
          v-model="form.memo"
          ref="myQuillEditor2"
          :options="editorOption2"
          class="quill"
        >
        </quill-editor> -->
      </el-form-item>
      <el-form-item label="创新实力：" prop="idea">
        <el-input
          :disabled="disabled"
          type="textarea"
          v-model="form.idea"
          :rows="5"
          placeholder="（单位研发平台建设情况、产学研合作情况、核心技术及市场前景等）"
        ></el-input>
        <!-- <quill-editor
          v-model="form.idea"
          ref="myQuillEditor3"
          :options="editorOption3"
          class="quill"
        >
        </quill-editor> -->
      </el-form-item>

      <!-- <el-form-item label="引进人才工资性年收入（万元）：" prop="talentIncome">
          <el-input :disabled="disabled" v-model="form.talentIncome"></el-input>
        </el-form-item> -->
      <file-upload
        label="研发投入和纳税情况财务报表（经第三方审计）:"
        :disabled="disabled"
        :enterpriseId="componyInfo && componyInfo.id"
        prop="sndqycwbb"
        :model="form.sndqycwbb"
        @fileChange="(e) => fileChange(e, 'sndqycwbb')"
      >
      </file-upload>
      <div class="fileTest" style="color: #999; margin-bottom: 30px">
        注意：上传附件类型支持doc、jpg、png、jpeg、pdf，不支持docx、rar
      </div>
      <div v-if="isShowBtn">
        <div class="foot" v-if="disabled">
          <el-button disabled class="submitBtn">{{
            (componyInfo && componyInfo.status) | cityRecommendStatusName
          }}</el-button>
        </div>
        <div class="foot" v-else>
          <el-button @click="save" class="saveBtn">保存</el-button>
          <el-button @click="submit" class="submitBtn">提交</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FileMixins from "./FileMixins.js";
import fileUpload from "./fileUpload.vue";
// import { quillEditor } from "vue-quill-editor"; //调用编辑器
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import { getEnterpriseAttachmentCity } from "@/api/personal";
export default {
  mixins: [FileMixins],
  components: {
    fileUpload,
    // quillEditor,
  },
  props: {
    type1: {
      required: true,
    },
    type: {
      required: true,
    },
    isShowBtn:{
      required: true,
    },
    thisFrom: {
      require:true
    }
  },
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
      representType: "",
      cityEnterpriseType: "",
      form: {
        cityEnterpriseType: 1, //市级企业类型  1.企业  2.重点实验室  3.重点高校  4.湖北实验室
        representType: 1, //法人代表类型  1.创投机构  2.非创投机构
        name: "", //单位名称
        type: "", //单位性质    国有(控股企业)  外资企业  合资企业  民营(私营)企业  事业单位  其他(市属企事业单位及高校院所)
        represent: "", //法人代表
        address: "", //单位地址
        contactor: "", //人事部门负责人
        contactorMobile: "", //联系方式
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
        totalCount: "", //单位总人数
        regularCount: "", //本科人数
        masterCount: "", //硕士人数
        doctorCount: "", //博士人数
        abroadCount: "", //有国外留学或工作经验人数人数
        senioTitleCount: "", //副高以上职称人数
        expertProgramCount: "", //入选国家，省，市人才计划人数
        memo: "", //单位简介
        idea: "", //创新实力
        talentIncome: "", //引进人才工资性年收入（万元）
        sndqycwbb: "", // 文件：研发投入和纳税情况财务报表（经第三方审计）
      },
      rules: {
        type: [{ required: true, message: "请选择", trigger: "change" }], //单位性质    国有(控股企业)  外资企业  合资企业  民营(私营)企业  事业单位  其他(市属企事业单位及高校院所)
        address: [{ required: true, message: "请输入", trigger: "blur" }], //单位地址
        contactor: [{ required: true, message: "请输入", trigger: "blur" }], //人事部门负责人
        contactorMobile: [
          { required: true, message: "请输入", trigger: "blur" },
        ], //联系方式
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
        idea: [{ required: true, message: "请输入", trigger: "blur" }], //创新实力
        talentIncome: [{ required: true, message: "请输入", trigger: "blur" }], //引进人才工资性年收入（万元）
        sndqycwbb: [{ required: true, message: "请输入", trigger: "blur" }], //引进人才工资性年收入（万元）

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
      },
      // editorOption1: {
      //   placeholder: `请输入`,
      //   ...modules,
      // },
      // editorOption2: {
      //   placeholder: `请输入200字以内`,
      //   ...modules,
      // },
      // editorOption3: {
      //   placeholder: `（单位研发平台建设情况、产学研合作情况、核心技术及市场前景等）`,
      //   ...modules,
      // },
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          Object.assign(this.form, {
            status: 0,
            representType: this.representType,
            cityEnterpriseType: this.cityEnterpriseType,
          });
          // let attachmentData = this.getAttachmentFormData();
          // this.$emit("recommendSaveEdit", { form: this.form, attachmentData });
          this.$emit("recommendSaveEdit", { form: this.form });
        }
      });
    },
    async fetchAttachmentData() {
      if (this.componyInfo?.id) {
        let resp = await getEnterpriseAttachmentCity({
          id: this.componyInfo?.id,
        });
        let list = resp?.data.map((i) => {
          i.type = i.type.toLowerCase();
          return i;
        });
        list.map((item) => {
          if (this.form.hasOwnProperty(item.type)) {
            this.form[item.type] = item.name;
          }
        });
      }
    },
    checkAttaType() {
      let t = ["doc", "jpg", "jpeg", "png", "pdf"];
      let f = true;
      let n = "";
      n = this.form?.sndqycwbb?.split(".");
      if (n.length < 2) return false;
      f = t.includes(n[n.length - 1]);
      if (!f) return false;

      return f;
    },
    submit() {
      console.log("this.cityEnterpriseType--",this.cityEnterpriseType)
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
  },
  mounted() {
    setTimeout(() => {
      console.log("表单----",this.form)
      let trans = {
        isOnsale: this.componyInfo?.isOnsale ? true : false,
        isHighTech: this.componyInfo?.isHighTech ? true : false,
        // cityEnterpriseType: 1,  //市级企业类型  1.企业  2.重点实验室  3.重点高校  4.湖北实验室
        // representType: 2  //法人代表类型  1.创投机构  2.非创投机构
      };
      Object.assign(this.form, this.componyInfo, trans, {});
      // this.fetchAttachmentData();
    }, 1000);
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
  watch: {
    type1: {
      handler(val) {
        let type = this.type1;
        let map = [
          { type: "非创投机构推荐", representType: 2 },
          { type: "创投机构推荐", representType: 1 },
        ];
        let find = map.find((i) => i.type == type);
        let representType = find ? find.representType : 2;
        this.representType = representType;
      },
      immediate: true,
      deep: true,
    },
    type: {
      handler(val) {
        let type = this.type;
        let map = [
          { type: "企事业单位", cityEnterpriseType: 1 },
          { type: "国家重点实验室以及有国家重点实验室的高校院所", cityEnterpriseType: 2 },
          { type: "湖北实验室", cityEnterpriseType: 3 },
          // { type: '湖北实验室', cityEnterpriseType: 4 }
          { type: "高校科研院所", cityEnterpriseType: 4 },
        ];
        let find = map.find((i) => i.type == type);
        let cityEnterpriseType = find ? find.cityEnterpriseType : 2;
        this.cityEnterpriseType = cityEnterpriseType;
      },
      immediate: true,
      deep: true,
    },
    isShowBtn: {
      handler(val) {
        console.log("isShowBtn---",val)
      },
      immediate: true,
      deep: true,
    },
    thisFrom:{
      handler(val) {
        if(val){
          let obj = {
            sndqycwbb:""
          }
          getEnterpriseAttachmentCity({
            id: this.componyInfo?.id,
          }).then((resp) => {
              let list = resp?.data.map((i) => {
                i.type = i.type.toLowerCase();
                return i;
              });
              if(list.length > 0){
                obj.sndqycwbb = list[0].name;
              }
              this.form = Object.assign(this.form, val, obj)
            });
        }
      },
      immediate: true,
      deep: true,
    }
  },
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
    & /deep/ .el-input__inner {
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
::v-deep .el-input__inner::placeholder {
  color:  #999;
}
::v-deep textarea::-webkit-input-placeholder {
  color: #999;
}
</style>