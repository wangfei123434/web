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
    <!-- 创新 -->
    <div class="box" v-else>
      <div class="explain">
        <p>填写要求：</p>
        <p>
          1、请按要求填写完整、真实信息，若无相关信息，请填写“无”，不得空项、漏项。
        </p>
        <p>2、外国语表述的信息请按惯例翻译成中文。</p>
        <p>
          3、申报书请用A4纸正反打印，一式6份；其他附件材料请装订成册，报送1份。
        </p>
      </div>
      <hr />
      <el-form
        class="form"
        ref="form"
        :model="form"
        label-width="180px"
        :rules="rules"
      >
        <!-- 个人图像 -->
        <div class="personImg">
          <div class="customUpLoad">
            <el-form-item prop="header">
              <input
                ref="personImg_file"
                type="file"
                name="personImg"
                style="width: 100%; display: none"
                @change="personImgChange"
              />
              <img :src="form.header" alt="" />
              <div
                @click.prevent="$refs.personImg_file.click()"
                class="uploadBtn"
              >
                点击更换
              </div>
            </el-form-item>
          </div>
        </div>
        <el-form-item label="姓名">
          <span>{{ form.name }}</span>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="form.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="国籍" prop="nationality">
          <el-input v-model="form.nationality" style="width: 220px"></el-input>
        </el-form-item>
        <el-form-item label="出生年月" prop="birthday">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politic">
          <el-input v-model="form.politic"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <span>{{ form.idNumber }}</span>
        </el-form-item>
        <el-form-item label="联系电话">
          <span>{{ form.mobile }}</span>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校" prop="school">
          <el-input v-model="form.school"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="field">
          <el-input v-model="form.field"></el-input>
        </el-form-item>
        <!-- <el-form-item label="学位" prop="education">
            <el-select v-model="form.education" placeholder="请选择">
                <el-option label="中专" value="中专"></el-option>
                <el-option label="大专" value="大专"></el-option>
                <el-option label="本科" value="本科"></el-option>
                <el-option label="硕士研究生" value="硕士研究生"></el-option>
                <el-option label="博士研究生" value="博士研究生"></el-option>
            </el-select>
        </el-form-item> -->
        <el-form-item label="学位" prop="degree">
          <el-select v-model="form.degree" placeholder="请选择">
            <el-option label="无" value="无"></el-option>
            <el-option label="学士学位" value="学士学位"></el-option>
            <el-option label="硕士学位" value="硕士学位"></el-option>
            <el-option label="博士学位" value="博士学位"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="技术职称" prop="techTitle">
          <el-input v-model="form.techTitle"></el-input>
        </el-form-item>
        <el-form-item label="现任职务" prop="post">
          <el-input v-model="form.post"></el-input>
        </el-form-item>
        <el-form-item label="任职时间" prop="currentPostDate">
          <el-date-picker
            v-model="form.currentPostDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="产业领域" prop="industry">
          <el-select
            v-model="form.industry"
            placeholder="请选择"
            style="margin-right: 20px"
            @change="industryChange"
          >
            <el-option
              v-for="(o, i) in industryList"
              :key="i"
              :label="o.label"
              :value="o.value"
            ></el-option>
          </el-select>
          <el-input
            v-if="form.industry == '其他'"
            v-model="form.industry1"
            style="width: 250px"
            placeholder="请输入"
            @blur="industryTextBlur"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="产业领域" prop="industry1">
            <el-select 
            v-model="form.industry1" 
            placeholder="请选择" 
            style="margin-right: 20px;"
            @change="industry1Change"
            >
                <el-option v-for="(o,i) in industry1List" :key="i" :label="o.label" :value="o.value"></el-option>
            </el-select>
            <el-select v-model="form.industry2" placeholder="请选择" @change="industry2Change">
                <el-option v-for="(o,i) in industry2List" :key="i" :label="o.label" :value="o.value"></el-option>
            </el-select>
        </el-form-item> -->
        <el-form-item label="教育经历" prop="edu">
          <!-- <quill-editor
            v-model="form.edu"
            ref="myQuillEditor1"
            :options="editorOption1"
          >
          </quill-editor> -->
          <el-input
            type="textarea"
            v-model="form.edu"
            :rows="5"
            placeholder="（按时间顺序，从本科填起，包括“时间、国家、院校、专业、学位”）
如：
19XX年9月-19XX年7月 中国 XX大学XX学院XX专业信息技术学士
20XX年9月-20XX年X月 美国XX大学XX学院XX专业信息技术硕士"
          ></el-input>
        </el-form-item>
        <el-form-item label="工作经历" prop="work">
          <!-- <quill-editor
            v-model="form.work"
            ref="myQuillEditor2"
            :options="editorOption2"
          >
          </quill-editor> -->
          <el-input
            type="textarea"
            v-model="form.work"
            :rows="5"
            placeholder="（按时间顺序，包括“时间、国家、单位、职务”，不超过5项，兼职请注明）
如：
20XX年7月-20XX年X月 中国 XXXX有限公司XX部门XX项目组负责人"
          ></el-input>
        </el-form-item>
        <el-form-item label="成果荣誉" prop="honor">
          <!-- <quill-editor
            v-model="form.honor"
            ref="myQuillEditor3"
            :options="editorOption3"
          >
          </quill-editor> -->
          <el-input
            type="textarea"
            v-model="form.honor"
            :rows="5"
            placeholder="1、主要成果
（代表性论著<论文>、专利、产品或服务，每类不超过5项）
2、主要荣誉（包括但不限于市级以上创业大赛获奖等荣誉）"
          ></el-input>
        </el-form-item>

        <el-form-item
          class="rowLabel"
          prop="hasOtherAgreement"
          label="您是否存在知识产权纠纷、竞业禁止、保密约定等情况，如有，请列出："
        >
          <el-radio-group v-model="form.hasOtherAgreement" class="customRow">
            <el-radio :label="false">无</el-radio>
            <el-radio :label="true">有</el-radio>

            <el-input
              v-if="form.hasOtherAgreement"
              v-model="form.otherAgreement"
              placeholder="请输入"
              style="width: 300px; margin-right: 20px"
            ></el-input>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="有效身份证件复印件:"
          class="customUpLoad"
          prop="cardAtta"
        >
          <el-button
            @click.prevent="$refs.card_file.click()"
            type="primary"
            class="uploadBtn1"
            >上传</el-button
          >
          <input
            ref="card_file"
            type="file"
            name="diploma"
            style="width: 100%; display: none"
            @change="cardChange"
            accept="application/msword, image/jpeg, image/png, application/pdf"
          />
          <el-input
            v-model="form.cardAtta"
            class="uploadInput"
            placeholder="有效身份证件复印件"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="学历和学位证书:"
          class="customUpLoad"
          prop="diplomaAtta"
        >
          <el-button
            @click.prevent="$refs.diploma_file.click()"
            type="primary"
            class="uploadBtn1"
            >上传</el-button
          >
          <input
            ref="diploma_file"
            type="file"
            name="diploma"
            style="width: 100%; display: none"
            @change="diplomaChange"
            accept="application/msword, image/jpeg, image/png, application/pdf"
          />
          <el-input
            v-model="form.diplomaAtta"
            class="uploadInput"
            placeholder="留学回国人员须提供教育部认证的留学回国人员学历认证书"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="主要成果:"
          class="customUpLoad customUpLoad1"
          prop="cgzmAtta"
        >
          <el-button
            @click.prevent="$refs.performanceCertification_file.click()"
            class="uploadBtn1"
            type="primary"
            >上传</el-button
          >
          <input
            ref="performanceCertification_file"
            type="file"
            name="performanceCertification"
            style="width: 100%; display: none"
            @change="performanceCertificationChange"
            accept="application/msword, image/jpeg, image/png, application/pdf"
          />
          <el-input
            v-model="form.cgzmAtta"
            class="uploadInput"
            placeholder="代表性论著、专利证书、产品证书等复印件或证明材料"
          ></el-input>
        </el-form-item>
        <div class="fileTest" style="color: #ccc; margin-bottom: 30px">
          注意：上传附件类型支持doc、jpg、png、jpeg、pdf，不支持docx、rar
        </div>

        <div class="foot">
          <el-button @click="save(0)" class="saveBtn">保存</el-button>
          <el-button @click="submit()" class="submitBtn">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getTalentData } from "@/api/personal";
import { citySave, citySelfSave } from "@/api/city.js";
import { mapState } from "vuex";
import head from "@/assets/imgs/head.jpg";
import { getId } from "@/utils/auth";
// import { quillEditor } from "vue-quill-editor"; //调用编辑器
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
export default {
  data() {
    let that = this;
    const industryVal = (rule, value, callback) => {
      if (that.form.industry2) {
        callback();
      } else {
        callback(new Error("请选择"));
      }
    };
    const industryVal1 = (rule, value, callback) => {
      if (value && value != "其他") {
        callback();
      } else {
        if (!value || value == "") {
          callback(new Error("请选择"));
        }
        if (
          (value == "其他" && !that.form.industry1) ||
          that.form.industry1 == ""
        ) {
          callback(new Error("请填写"));
        } else {
          callback();
        }
      }
    };
    return {
      initPage: true,
      form: {
        name: "",
        gender: "male",
        nationality: "",
        birthday: "",
        politic: "",
        idNumber: "",
        mobile: "",
        email: "",
        school: "",
        field: "",
        degree: "",
        techTitle: "",
        post: "",
        currentPostDate: "",

        industry: "", // 产业领域
        industry1: "", // 产业领域
        industry2: "", // 产业领域

        edu: "",
        work: "",
        honor: "",
        hasOtherAgreement: "",
        otherAgreement: "",

        // 附件
        cardAtta: "",
        diplomaAtta: "",
        cgzmAtta: "",
        header: "",
      },
      formInline: {
        id: "",
      },
      personImgData: null,

      cardAttaData: null,
      diplomaAttaData: null,
      cgzmAttaData: null,

      industry1List: [
        { label: "集成电路产业", value: "1" },
        { label: "光电子信息产业", value: "2" },
        { label: "汽车产业", value: "3" },
        { label: "大健康产业", value: "4" },
        { label: "数字产业", value: "5" },
        { label: "航空航天", value: "6" },
        { label: "智能制造及高端装备", value: "7" },
        { label: "新能源与新材料", value: "8" },
        { label: "节能环保", value: "9" },
        { label: "现代服务业", value: "10" },
        { label: "其他", value: "11" },
      ],

      delArr: [],
      status: 0,
      cityEnterpriseType: 0, // 企业类型
      org: "", // 企业区
      companyName: "", // 企业名称

      rules: {
        header: [{ required: true, message: "请上传头像" }],
        gender: [{ required: true, message: "请输入内容", trigger: "blur" }],
        birthday: [{ required: true, message: "请选择", trigger: "blur" }],
        nationality: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        politic: [{ required: true, message: "请输入内容", trigger: "blur" }],
        email: [{ required: true, message: "请输入内容", trigger: "blur" }],
        school: [{ required: true, message: "请输入内容", trigger: "blur" }],
        field: [{ required: true, message: "请输入内容", trigger: "blur" }],
        degree: [{ required: true, message: "请选择", trigger: "blur" }],
        techTitle: [{ required: true, message: "请输入内容", trigger: "blur" }],
        post: [{ required: true, message: "请输入内容", trigger: "blur" }],
        currentPostDate: [
          { required: true, message: "请选择", trigger: "blur" },
        ],
        edu: [{ required: true, message: "请输入内容", trigger: "blur" }],
        work: [{ required: true, message: "请输入内容", trigger: "blur" }],
        honor: [{ required: true, message: "请输入内容", trigger: "blur" }],
        hasOtherAgreement: [
          { required: true, message: "请选择", trigger: "blur" },
        ],
        // industry1: [{ required: true, validator: industryVal, trigger: 'change'}],
        industry: [
          { required: true, trigger: "change", validator: industryVal1 },
        ],

        cardAtta: [{ required: true, message: "请上传文件", trigger: "blur" }],
        diplomaAtta: [
          { required: true, message: "请上传文件", trigger: "blur" },
        ],
        cgzmAtta: [{ required: true, message: "请上传文件", trigger: "blur" }],
        workAtta: [{ required: true, message: "请上传文件", trigger: "blur" }],
        otherAtta: [{ required: true, message: "请上传文件", trigger: "blur" }],
        dwtjhAtta: [{ required: true, message: "请上传文件", trigger: "blur" }],
      },

      industryList: [
        {
          label: '"光芯屏端网"新一代信息技术',
          value: '"光芯屏端网"新一代信息技术',
        },
        { label: "汽车制造和服务", value: "汽车制造和服务" },
        { label: "大健康和生物技术", value: "大健康和生物技术" },
        { label: "高端装备制造", value: "高端装备制造" },
        { label: "智能建造", value: "智能建造" },
        { label: "商贸物流", value: "商贸物流" },
        { label: "现代金融", value: "现代金融" },
        { label: "绿色环保", value: "绿色环保" },
        { label: "文化旅游", value: "文化旅游" },
        { label: "网络安全", value: "网络安全" },
        { label: "航空航天", value: "航空航天" },
        { label: "空天信息", value: "空天信息" },
        { label: "人工智能", value: "人工智能" },
        { label: "数字创意", value: "数字创意" },
        { label: "氢能", value: "氢能" },
        { label: "其他", value: "其他" },
      ],
      //       editorOption1: {
      //         placeholder: `（按时间顺序，从本科填起，包括“时间、国家、院校、专业、学位”）
      // 如：
      // 19XX年9月-19XX年7月 中国 XX大学XX学院XX专业信息技术学士
      // 20XX年9月-20XX年X月 美国XX大学XX学院XX专业信息技术硕士`,
      //       },
      //       editorOption2: {
      //         placeholder: `（按时间顺序，包括“时间、国家、单位、职务”，不超过5项，兼职请注明）
      // 如：
      // 20XX年7月-20XX年X月 中国 XXXX有限公司XX部门XX项目组负责人`,
      //       },
      //       editorOption3: {
      //         placeholder: `1、主要成果
      // （代表性论著<论文>、专利、产品或服务，每类不超过5项）
      // 2、主要荣誉（包括但不限于市级以上创业大赛获奖等荣誉）`,
      //       },
    };
  },
  components: {
    // quillEditor,
  },
  // created() {
  //   this.queryData();
  // },
  computed: {
    ...mapState(["userInfo"]),
    industry2List() {
      let res;
      if (this.form?.industry1 == "1") {
        res = [
          { label: "芯片设计" },
          { label: "芯片制造" },
          { label: "封装测试与材料业" },
        ];
      } else if (this.form?.industry1 == "2") {
        res = [
          {
            label:
              "新一代信息技术（光通信、新型显示、人工智能、智能终端、5G通信、量子通信）",
          },
          {
            label:
              "地球空间信息（地球空间信息平台建设、地球空间信息产品开发、地球空间信息应用服务）",
          },
        ];
      } else if (this.form?.industry1 == "3") {
        res = [
          { label: "新能源汽车" },
          { label: "智能网联汽车（无人驾驶汽车）" },
        ];
      } else if (this.form?.industry1 == "4") {
        res = [
          {
            label:
              "生物产业（生物制药、高性能医疗器械、精准诊疗、脑科学、生物农业）",
          },
          { label: "康养产业（健康服务、医养融合、文化体育旅游、健康食品）" },
        ];
      } else if (this.form?.industry1 == "5") {
        res = [
          { label: "数字基础设施" },
          { label: "数字共享" },
          { label: "数字应用示范" },
          { label: "网络安全" },
        ];
      } else if (this.form?.industry1 == "6") {
        res = [{ label: "航空装备" }, { label: "航天装备" }];
      } else if (this.form?.industry1 == "7") {
        res = [
          { label: "D打印与激光加工装备" },
          { label: "机器人" },
          { label: "智能装备" },
          { label: "高技术船舶与海洋工程装备" },
          { label: "轨道交通装备" },
        ];
      } else if (this.form?.industry1 == "8") {
        res = [
          { label: "新能源利用" },
          { label: "海洋核能" },
          { label: "先进电力装备和智能电网" },
          { label: "石墨烯" },
          { label: "新型功能材料高性能复合材料" },
        ];
      } else if (this.form?.industry1 == "9") {
        res = [
          { label: "节能技术与装备" },
          { label: "环保材料及药剂" },
          { label: "大气污染治理" },
          { label: "污水处理" },
          { label: "固废处理" },
          { label: "环境监测设备" },
          { label: "生态修复" },
        ];
      } else if (this.form?.industry1 == "10") {
        res = [
          { label: "软件" },
          { label: "文创设计" },
          { label: "金融" },
          { label: "物流" },
          { label: "会展" },
          { label: "商贸" },
          { label: "全域旅游" },
        ];
      } else if (this.form?.industry1 == "11") {
        res = [{ label: "其他" }];
      }
      return res?.map((e) => {
        return {
          label: e.label,
          value: e.label,
        };
      });
    },
    btnDis() {
      return (
        (this.$route.query.readOnly ? true : false) ||
        (this.status != 0 && this.status != 104 && this.status != 7)
      );
    },
    cityEnterpriseType1() {
      return this.$route.query.cityEnterpriseType || this.cityEnterpriseType;
    },
  },
  methods: {
    // 查询
    onSubmit() {
      this.queryData(this.formInline.id);
      this.initPage = false;
    },
    industryTextBlur(e) {
      this.$refs.form.validateField("industry");
    },
    industryChange(e) {
      this.form.industry1 = "";
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
      let url = `gateway/talentserver/talent/get/${id}`;
      getTalentData(url).then((res) => {
        console.log(this);
        if (res?.code == 200) {
          that.form = res.data;

          that.status = res.data.status;

          that.$set(that.form, "industry1", "");
          let industry = res.data.industry && res.data.industry.split("&");
          if (industry.length == 2) {
            that.form.industry = industry[0];
            that.form.industry1 = industry[1];
          }

          // 附件
          let attachment = res.data.attachmentReqDTOS;
          if (attachment) {
            attachment.forEach((e) => {
              let type = e.type.toLowerCase();
              switch (type) {
                case "header":
                  that.$set(that.form, "header", e.url);
                  that.personImgData = e;
                  break;
                case "idcard":
                  that.$set(that.form, "cardAtta", e.name);
                  that.cardAttaData = e;
                  break;
                case "xlhxwzh":
                  that.$set(that.form, "diplomaAtta", e.name);
                  that.diplomaAttaData = e;
                  break;
                case "cgzm":
                  that.$set(that.form, "cgzmAtta", e.name);
                  that.cgzmAttaData = e;
                  break;
                case "gzhtgrsdszm":
                  that.$set(that.form, "workAtta", e.name);
                  that.workAttaData = e;
                  break;
                case "otherreward":
                  that.$set(that.form, "otherAtta", e.name);
                  that.otherAttaData = e;
                  break;
                case "dwtjh":
                  that.$set(that.form, "dwtjhAtta", e.name);
                  that.dwtjhAttaData = e;
                  break;
              }
            });
          }

          this.delArr = [];

          this.$nextTick(() => {
            this.$refs.form.clearValidate("industry1");
          });
        }
      });
    },
    industry1Change(e) {
      this.$set(this.form, "industry2", "");
    },
    industry2Change(e) {
      this.form.industry2 = e;
      this.form.industry = `${this.form.industry1}&${this.form.industry2}`;
    },
    personImgChange(e) {
      const input = e.target;
      const [file] = input.files;
      var oFReader = new FileReader();
      oFReader.readAsDataURL(file);
      let that = this;
      oFReader.onloadend = function (oFRevent) {
        var src = oFRevent.target.result;
        that.$set(that.form, "header", src);
      };

      let id = this.personImgData && this.personImgData.id;
      id && this.delArr.push(id);

      this.personImgData = {
        file,
        name: file.name,
        time: Date.now(),
      };
    },
    cardChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.$set(this.form, "cardAtta", file.name);

      let id = this.cardAttaData?.id;
      id && this.delArr.push(id);

      this.cardAttaData = {
        file,
        name: file.name,
        time: Date.now(),
      };

      this.$refs.form.clearValidate("cardAtta");
    },
    diplomaChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      // this.form.diplomaAtta = file.name
      this.$set(this.form, "diplomaAtta", file.name);

      let id = this.diplomaAttaData?.id;
      id && this.delArr.push(id);

      this.diplomaAttaData = {
        file,
        name: file.name,
        time: Date.now(),
      };

      this.$refs.form.clearValidate("diplomaAtta");
    },
    performanceCertificationChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      // this.form.cgzmAtta = file.name
      this.$set(this.form, "cgzmAtta", file.name);

      let id = this.cgzmAttaData?.id;
      id && this.delArr.push(id);

      this.cgzmAttaData = {
        file,
        name: file.name,
        time: Date.now(),
      };

      this.$refs.form.clearValidate("cgzmAtta");
    },
    getParam(operationType) {
      let formData = new FormData();

      this.form?.id
        ? formData.append("id", this.form?.id)
        : formData.append("id", this.$route.query?.talentId || "");
      formData.append("userId", getId());
      formData.append("operationType", operationType);
      formData.append("delete", this.delArr.join(","));

      let {
        name,
        gender,
        nationality,
        birthday,
        politic,
        idNumber,
        mobile,
        email,
        school,
        field,
        degree,
        techTitle,
        post,
        currentPostDate,
        industry,
        industry1,
        edu,
        work,
        honor,
        hasOtherAgreement,
        otherAgreement,
      } = this.form;
      formData.append("name", name);
      formData.append("gender", gender);
      formData.append("nationality", nationality);
      formData.append("birthday", birthday);
      formData.append("politic", politic);
      formData.append("idNumber", idNumber);
      formData.append("mobile", mobile);
      formData.append("email", email);
      formData.append("school", school);
      formData.append("field", field);
      formData.append("degree", degree);
      formData.append("techTitle", techTitle);
      formData.append("post", post);
      formData.append("currentPostDate", currentPostDate);
      // formData.append("industry", industry);
      formData.append("edu", edu);
      formData.append("work", work);
      formData.append("honor", honor);
      if (hasOtherAgreement != null) {
        formData.append("hasOtherAgreement", hasOtherAgreement);
      }
      formData.append("otherAgreement", otherAgreement);

      formData.append("cityEnterpriseType", this.cityEnterpriseType1);
      formData.append("type", this.$route.query.type);

      if (!this.$route.query.talentId) {
        // 第一次需要存
        formData.append("companyName", this.companyName);
        formData.append("org", this.org);
      }

      if (industry == "其他") {
        formData.append("industry", `${industry}&${industry1}`);
      } else {
        formData.append("industry", industry);
      }

      this.cardAttaData?.file &&
        formData.append("idcard", this.cardAttaData.file);
      this.diplomaAttaData?.file &&
        formData.append("xlhxwzh", this.diplomaAttaData.file);
      this.cgzmAttaData?.file &&
        formData.append("cgzm", this.cgzmAttaData.file);
      this.personImgData?.file &&
        formData.append("header", this.personImgData.file);

      return formData;
    },
    save(operationType) {
      let param = this.getParam(operationType);
      citySelfSave(param).then((res) => {
        console.log(res);
        if (res?.code == 200) {
          let t;
          if (operationType == 0) {
            t = "保存成功";
          } else {
            t = "提交成功";
          }
          this.$confirm(t, "消息", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "success",
          }).then(() => {
            this.$router.push("/personal");
          });
        }
      });
    },
    checkAttaType() {
      let t = ["doc", "jpg", "jpeg", "png", "pdf"];
      let f = true;
      let n = "";
      n = this.cardAttaData?.name.split(".");
      if (n.length < 2) return false;
      f = t.includes(n[n.length - 1]);
      if (!f) return false;

      n = this.diplomaAttaData?.name.split(".");
      if (n.length < 2) return false;
      f = t.includes(n[n.length - 1]);
      if (!f) return false;

      n = this.cgzmAttaData?.name.split(".");
      if (n.length < 2) return false;
      f = t.includes(n[n.length - 1]);
      if (!f) return false;

      return f;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        console.log(valid);
        debugger;
        if (valid) {
          // 校验附件类型
          if (!this.checkAttaType()) {
            this.$message.warning("当前存在不支持的附件格式，请修改后再提交！");
            return;
          }

          let operationType = 1;
          let cityEnterpriseType = this.cityEnterpriseType1;
          // if(cityEnterpriseType && (cityEnterpriseType == 3 || cityEnterpriseType == 4)) {
          if (cityEnterpriseType && cityEnterpriseType == 4) {
            operationType = 2;
          }
          this.save(operationType);
        } else {
          console.log("base error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  .form {
    position: relative;
  }

  .rowLabel {
    & /deep/ .el-form-item__label {
      text-align: center;
      width: 100% !important;
    }
  }

  .foot {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .saveBtn {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
    &.is-disabled {
      background: #ccc;
      border-color: #ccc;
    }
  }
  .submitBtn {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
    &.is-disabled {
      background: #ccc;
      border-color: #ccc;
    }
  }

  .personImg {
    position: absolute;
    right: 40px;
    top: 0;
    z-index: 10;
    img {
      width: 130px;
      height: 188px;
      margin-bottom: 5px;
      padding: 4px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
}
.customUpLoad {
  .uploadInput {
    width: 500px;
    & /deep/ .el-input__inner {
      border: none !important;
    }
  }
  .uploadBtn {
    color: #00a9ec;
    margin-top: -5px;
    cursor: pointer;
    line-height: 20px;
  }
  .uploadBtn1 {
    margin-left: 20px;
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