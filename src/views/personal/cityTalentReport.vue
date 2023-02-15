<template>
<!-- 市级人才申报 -->
  <div class="content-wrapper">
    <div class="main">
      <div class="head">
        {{ title | applyTypeFR }}-在线申报
      </div>
      <div class="body">
        <div class="left">
          <ul class="tab" @click="selectTab">
            <li :class="{ select: curTab == 1 }" data-key="1">
              <img
                v-if="curTab == 1"
                src="../../assets/imgs/houseList/shenbao_ed.png"
                alt=""
                srcset=""
              />
              <img
                v-else
                src="../../assets/imgs/houseList/shenbao.png"
                alt=""
                srcset=""
              />
              申报条件
            </li>
            <li :class="{ select: curTab == 2 }" data-key="2">
              <img
                v-if="curTab == 2"
                src="../../assets/imgs/houseList/shenbaoren_ed.png"
                alt=""
                srcset=""
              />
              <img
                v-else
                src="../../assets/imgs/houseList/shenbaoren.png"
                alt=""
                srcset=""
              />
              申报人情况
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="tabContent" v-if="curTab == 1">
            <div class="tle" style="text-align: center;margin-top: 10px;">
              <h4 style="margin:0;padding:0;">填写须知</h4>
            </div>

            <cityTalentReportText :type="title"></cityTalentReportText>
            
            <hr />
            <div class="foot">
              <div class="btn" @click="curTab = 2">下一步</div>
            </div>
          </div>
          <div class="tabContent tabContent2" v-else-if="curTab == 2">
            <el-form
              :model="form"
              label-width="180px"
              :rules="rules"
              ref="qjyxrcRuleForm"
            >
              <!-- 个人图像 -->
              <div class="personImg">
                <div class="customUpLoad">
                  <input
                    ref="personImg_file"
                    type="file"
                    name="personImg"
                    style="width:100%;display: none;"
                    @change="personImgChange"
                  />
                  <img :src="header" alt="" />
                  <div
                    @click.prevent="$refs.personImg_file.click()"
                    class="uploadBtn"
                  >
                    点击更换
                  </div>
                </div>
              </div>

              <el-form-item label="申报人:" prop="name">
                <el-input v-model="form.name" class="width360" disabled></el-input>
              </el-form-item>
              <el-form-item label="性别:" prop="gender">
                <el-radio-group v-model="form.gender">
                  <el-radio label="male">男</el-radio>
                  <el-radio label="female">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="出生日期:" prop="birthDate">
                <el-date-picker
                  v-model="form.birthDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <!-- <el-form-item label="国籍:" prop="nationality">
                <el-input
                  v-model="form.nationality"
                  class="width360"
                ></el-input>
              </el-form-item>
              <el-form-item label="政治面貌:" prop="politic">
                <el-input v-model="form.politic" class="width360"></el-input>
              </el-form-item> -->
              <el-form-item label="证件类型:" prop="idType">
                <div class="customRow">
                  <el-radio-group v-model="form.idType">
                    <el-radio label="身份证"></el-radio>
                    <el-radio label="护照"></el-radio>
                    <el-radio label="其他"></el-radio>
                  </el-radio-group>
                  <el-input
                    v-show="form.idType == '其他'"
                    v-model="form.idTypeText"
                    style="width: 180px;margin-left: 20px;"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item label="证件编号:" prop="idCode">
                <el-input v-model="form.idCode"  disabled></el-input>
              </el-form-item>
              <el-form-item label="本人手机:" prop="mobile">
                <el-input v-model="form.mobile" disabled></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱:" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="毕业院校:" prop="school">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
              <el-form-item label="毕业时间:" prop="graduationDate">
                <el-date-picker
                  v-model="form.graduationDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="最高学历:" prop="education">
                <el-select
                  v-model="form.education"
                  placeholder="请选择活动区域"
                >
                  <el-option label="--请选择--" value=""></el-option>
                  <el-option label="大专" value="大专"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                  <el-option label="硕士研究生" value="硕士研究生"></el-option>
                  <el-option label="博士研究生" value="博士研究生"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="最高学位:" prop="degree">
                <el-select v-model="form.degree" placeholder="请选择活动区域">
                  <el-option label="--请选择--" value=""></el-option>
                  <el-option label="无" value="无"></el-option>
                  <el-option label="学士学位" value="学士学位"></el-option>
                  <el-option label="硕士学位" value="硕士学位"></el-option>
                  <el-option label="博士学位" value="博士学位"></el-option>
                </el-select>
              </el-form-item>
              
              <el-form-item label="专业:" prop="major">
                <el-input v-model="form.major"></el-input>
              </el-form-item>
              <el-form-item label="专业技术职务:" prop="technicalPosition">
                <el-input v-model="form.technicalPosition"></el-input>
              </el-form-item>
              <el-form-item label="社会兼职:" prop="socialPosition">
                <el-radio-group v-model="form.socialPosition" class="customRow">
                  <el-radio label="无">无</el-radio>
                  <el-radio label="有">有</el-radio>
                  <el-input
                    v-show="form.socialPosition == '有'"
                    v-model="form.socialPositionText"
                    style="width:180px;margin-right:20px;"
                  ></el-input>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="岗位性质:" prop="postNature">
                <el-radio-group v-model="form.postNature" class="customRow">
                  <el-radio label="核心技术骨干">核心技术骨干</el-radio>
                  >
                  <el-radio label="高级管理人员">高级管理人员 </el-radio>
                  <!-- <el-radio label="高级管理人员">高级管理人员 </el-radio> -->
                </el-radio-group>
              </el-form-item>
              <el-form-item label="任职方式:" prop="appointment">
                <el-radio-group v-model="form.appointment" class="customRow">
                  <el-radio label="全职">全职 </el-radio>

                  <el-radio label="专职">专职</el-radio>
                  <el-radio label="兼职">兼职</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="现任职务:" prop="post">
                <el-input v-model="form.post"></el-input>
              </el-form-item>
              <el-form-item label="任职时间:" prop="currentPostDate">
                <el-date-picker
                  v-model="form.currentPostDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="产业领域:" prop="industry">
                <el-select v-model="form.industry" placeholder="请选择活动区域">
                  <el-option label="--请选择--" value=""></el-option>
                  <el-option label="钢铁" value="钢铁"></el-option>
                  <el-option label="石化" value="石化"></el-option>
                  <el-option label="新材料" value="新材料"></el-option>
                  <el-option
                    label="高端设备制造"
                    value="高端设备制造"
                  ></el-option>
                  <el-option label="生命健康" value="生命健康"></el-option>
                  <el-option label="节能环保" value="节能环保"></el-option>
                  <el-option
                    label="高品质服务业"
                    value="高品质服务业"
                  ></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="教育经历(从本科填起):"
                prop="educationalExperience"
              >
                <el-input
                  type="textarea"
                  v-model="form.educationalExperience"
                  :rows="5"
                  placeholder="按时间顺序，从本科填起，包括“时间、国家、院校、专业、学位”
如：
19XX年9月-19XX年7月 中国 XX大学XX学院XX专业计算机硕士"
                ></el-input>
              </el-form-item>
              <el-form-item label="工作经历:">
                <el-input
                  type="textarea"
                  v-model="form.workExperience"
                  :rows="5"
                  placeholder="按时间顺序，包括“时间、国家、单位、职务”，兼职请注明
如：
19XX年7月-20XX年X月 中国 XXXX有限公司XX部门XX项目组负责人"
                ></el-input>
              </el-form-item>
              <el-form-item label="主持（参与）过的主要项目:">
                <el-input
                  type="textarea"
                  v-model="form.project"
                  :rows="5"
                  placeholder="项目起止时间、性质和来源、经费总额、参与人数、申报人作用贡献等"
                ></el-input>
              </el-form-item>
              <el-form-item label="主要成果:" prop="contrib">
                <el-input
                  type="textarea"
                  v-model="form.contrib"
                  :rows="5"
                  placeholder="代表性论文、专利、产品或服务，每类不超过5项"
                ></el-input>
              </el-form-item>

              <!-- 公司情况  不能编辑 -->
              <el-form-item label="工作单位:" prop="company">
                <el-input v-model="form.company"  placeholder="工作单位"></el-input>
              </el-form-item>
              <el-form-item label="工作单位地址:" prop="companyAddress">
                <el-input v-model="form.companyAddress"  placeholder="工作单位地址"></el-input>
              </el-form-item>
              <el-form-item label="单位电话:" prop="companyTel">
                <el-input v-model="form.companyTel"  placeholder="单位电话"></el-input>
              </el-form-item>
              <el-form-item label="单位传真:">
                <el-input v-model="form.companyFax"  placeholder="单位传真"></el-input>
              </el-form-item>
            <el-form-item label="申报是否取得所在单位同意:" prop="isAgree">
                <el-radio-group v-model="form.isAgree" class="customRow">
                  <el-radio label="是">是</el-radio>
                  <el-radio label="否">否</el-radio>
                </el-radio-group>
              </el-form-item>
            

              <!-- 附件 -->
                <el-form-item v-for="(o,i) in attachmentReqDTOS" :key="i" :label="o.label" class="customUpLoad customUpLoad1">
                    <el-input
                        :value="o.value"
                        class="uploadInput"
                    ></el-input>
                    <el-button type="primary" class="uploadBtn1"
                    >上传</el-button
                    >
                </el-form-item>

              <div class="foot">
                <el-button @click="curTab = 1">上一步</el-button>
                <el-button @click="save(0)" class="saveBtn" id="saveBtn" disabled>保存</el-button>
                <el-button @click="submit(1)" class="submitBtn" disabled>提交</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { personalInfo, getTalentData, saveCYLJ } from "@/api/personal";
import { getId } from "@/utils/auth";
import { mapState } from 'vuex';
import head from '@/assets/imgs/head.jpg';
import cityTalentReportText from './cityTalentReportText.vue'

export default {
  components: { cityTalentReportText },
  data() {
    return {
      curTab: 2,
      form: {
        name: "",
        gender: "",
        birthDate: "",
        nationality: "",
        politic: "",
        // telephone: "",
        idType: "",
        idTypeText: "",
        idCode: "",
        education: "",
        degree: "",
        school: "",
        graduationDate: "",
        major: "",
        technicalPosition: "",
        socialPosition: "无",
        socialPositionText: "",
        mobile: "",
        email: "",
        company: "",
        companyAddress: "",
        companyTel: "",
        companyFax: "",
        post: "",
        educationalExperience: "",
        workExperience: "",
        project: "",
        contrib: "",
        householdRegisterName: "",
        diplomaName: "",
        degreeCertificateName: "",
        verificationReportName: "",
        performanceCertificationName: "",
        laborContractName: "",
        postNature: "",
        appointment: "",
        currentPostDate: "",
        industry: "",
        hasOtherAgreement: false,
        otherAgreement: "",

        companyId: "",
        isAgree: "",

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
        memo: "",
        idea: "",
      },
      // 头像
      header: head,
      personImgData: null,

      rules: {
        name: [{ required: true, message: "请输入内容", trigger: "blur" }],
        gender: [{ required: true, message: "请选择", trigger: "blur" }],
        birthDate: [{ required: true, message: "请选择", trigger: "blur" }],
        nationality: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        politic: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // telephone: [{ required: true, message: "请输入内容", trigger: "blur" }],
        idType: [{ required: true, message: "请选择", trigger: "blur" }],
        idCode: [{ required: true, message: "请输入内容", trigger: "blur" }],
        education: [{ required: true, message: "请输入内容", trigger: "blur" }],
        degree: [{ required: true, message: "请输入内容", trigger: "blur" }],
        school: [{ required: true, message: "请输入内容", trigger: "blur" }],
        graduationDate: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        major: [{ required: true, message: "请输入内容", trigger: "blur" }],
        technicalPosition: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        socialPosition: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        mobile: [{ required: true, message: "请输入内容", trigger: "blur" }],
        email: [{ required: true, message: "请输入内容", trigger: "blur" }],
        company: [{ required: true, message: "请输入内容", trigger: "blur" }],
        companyAddress: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        companyTel: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        post: [{ required: true, message: "请输入内容", trigger: "blur" }],
        educationalExperience: [
          { required: true, message: "请输入内容", trigger: "blur" }
        ],
        contrib: [{ required: true, message: "请输入内容", trigger: "blur" }],
        postNature: [{ required: true, message: "请输入内容", trigger: "blur" }],
        appointment: [{ required: true, message: "请输入内容", trigger: "blur" }],
        currentPostDate: [{ required: true, message: "请输入内容", trigger: "blur" }],
        industry: [{ required: true, message: "请输入内容", trigger: "blur" }],
        hasOtherAgreement: [{ required: true, message: "请输入内容", trigger: "blur" }],

        householdRegisterName: [
          { required: true, message: "请上传资料", trigger: "blur" }
        ],
        diplomaName: [
          { required: true, message: "请上传资料", trigger: "blur" }
        ],
        degreeCertificateName: [
          { required: true, message: "请上传资料", trigger: "blur" }
        ],
        verificationReportName: [
          { required: true, message: "请上传资料", trigger: "blur" }
        ],
        performanceCertificationName: [
          { required: true, message: "请上传资料", trigger: "blur" }
        ],
        laborContractName: [
          { required: true, message: "请上传资料", trigger: "blur" }
        ]
      },

      attachmentReqDTOS: null,

      delArr: [], // 附件有被替换 id

      status: '', // 按钮状态
    };
  },
  created() {
    this.queryData();
  },
  computed: {
    ...mapState(["personalInfo", "userInfo"]),
    title() {
      return this.$route.query.title;
    },
  },
  methods: {
    queryData() {
      let id = this.$route.query.talentId
      if(!id) {
        console.log(this);
        let f = this.form
        
        f.name = this.userInfo.name
        f.gender = this.userInfo.gender || 'male'
        f.mobile = this.userInfo.mobile
        f.idType = this.userInfo.idType || '身份证'
        f.idCode = this.userInfo.idNumber

        f.company =  this.$route.query.companyName
        f.companyId =  this.$route.query.companyId
        return 
      }
    //   let url = `gateway/talentserver/talent/` + item + id;
      let url = `gateway/talentserver/talent/get/${id}`
      getTalentData(url).then(res => {
        let d = res.data;
        let f = this.form
        f.name = this.userInfo.name
        f.gender = this.userInfo.gender || 'male'
        f.mobile = this.userInfo.mobile
        f.idType = this.userInfo.idType || '身份证'
        f.idCode = this.userInfo.idNumber

        this.delArr = []
        if (d) {
          this.sourceData = d;
          let attachmentReqDTOS = d.attachmentReqDTOS;


          f.name = d.name || this.userInfo.name
          f.gender = d.gender || this.userInfo.gender
          f.mobile = d.mobile || this.userInfo.mobile
          f.idType = d.idType || this.userInfo.idType || '身份证'
          f.idCode = d.idNumber || this.userInfo.idNumber

          f.birthDate =  d.birthday
          f.nationality =  d.nationality
          f.politic =  d.politic
          f.idTypeText = f.idType == '其他' ?  d.other : ''
          f.education =  d.education
          f.degree =  d.degree
          f.school =  d.school
          f.graduationDate =  d.graduationDate
          f.major =  d.field
          f.technicalPosition =  d.techPosition
          f.socialPosition =  d.techTitle == '无' ? '无' : '有'
          f.socialPositionText =  d.techTitle
          f.postNature =  d.postNature
          f.appointment =  d.appointment
          f.post =  d.post
          f.currentPostDate =  d.currentPostDate
          f.industry =  d.industry
          f.email =  d.email

          f.company =  d.companyName
          f.companyAddress =  d.address
          f.companyTel =  d.mobile
          f.isAgree =  d.isAgree == '1' ? '是' : '否'


          f.hasOtherAgreement =  d.hasOtherAgreement
          f.otherAgreement =  d.otherAgreement

          f.educationalExperience =  d.edu
          f.workExperience =  d.work
          f.project =  d.project
          f.contrib =  d.contrib
          
          this.status = d.status

          if(attachmentReqDTOS) {
            this.attachmentReqDTOS = attachmentReqDTOS.filter(e => e.type != 'HEADER').map(e => {
                return {
                    ...e,
                    label: this.translateAttachType(e.type),
                    value: e.name
                }
            })
  
            let headAtta = attachmentReqDTOS.filter(e => e.type == 'HEADER')
            if(headAtta.length > 0) {
              this.header = headAtta[0].url
              this.personImgData = headAtta[0]
            }
          }
        }
      });
    },
    translateAttachType: function(v) {
      let res = "";
      switch (v) {
        case "HEADER":
          res = "头像";
          break;
        case "FRONT":
          res = "身份证前面";
          break;
        case "BACK":
          res = "身份证背面";
          break;
        case "DIPLOMA":
          res = "最高学历证书";
          break;
        case "QUALIFICATIONS":
          res = "最高学位证书";
          break;
        case "CERTIFICATE":
          res = "学历验证报告";
          break;
        case "REPLENISH":
          res = "附件";
          break;
        case "QYZZ":
          res = "营业执照";
          break;
        case "GDZM":
          res = "股东证明";
          break;
        case "JYZM":
          res = "就业证明";
          break;
        case "SBZM":
          res = "社保证明";
          break;
        case "CGZM":
          res = "成果证明";
          break;
        case "YJZM":
          res = "业绩证明";
          break;
        case "SJRYZM":
          res = "省级荣誉证明";
          break;
        case "BDZM":
          res = "人才榜单证明";
          break;
        case "HJZM":
          res = "创业赛事获奖证明";
          break;
        case "LDZM":
          res = "获奖项目落地证明";
          break;
        case "RKZM":
          res = "团队成员认可证明";
          break;
        case "RZZM":
          res = "融资证明";
          break;
        case "SNDQYCWBB":
          res = "上年度企业财务报表";
          break;
        case "TZJGTJH":
          res = "投资机构推荐函";
          break;
        case "TZJGZM":
          res = "创业投资机构证明";
          break;
        case "XMJJ":
          res = "项目简介";
          break;
        case "PUBLICINSTITUTION":
          res = "市属企事业单位及高校院所证明";
          break;
        case "AFS":
          res = "上年度企业财务报表";
          break;
        case "SHAREHOLDINGSTRUCT":
          res = "股东结构证明";
          break;
        case "FOUNDERPROOF":
          res = "创办企业证明";
          break;
        case "TAXSTATEMENT":
          res = "在汉连续缴纳6个月社保或个人所得税证明";
          break;
        case "ADDITIONAL":
          res = "其他";
          break;
        case "RECOMMENDATIONLETTER":
          res = "企业举（推）荐意见书";
          break;
        case "NVQ":
          res = "国家职业资格证书";
          break;
        case "SDTQKZM":
          res = "师带徒情况证明";
          break;
        case "HKB":
          res = "户口本";
          break;
        case "CONTRACT":
          res = "劳动合同";
          break;
        default:
            res = v;
            break;
      }
      return res;
    },
    selectTab(e) {
      let key = e.target.dataset.key;
      if (key && key != this.curTab) {
        this.curTab = key;
      }
    },
    personImgChange(e) {
      const input = e.target;
      const [file] = input.files;
      var oFReader = new FileReader();
      oFReader.readAsDataURL(file);
      let that = this;
      oFReader.onloadend = function(oFRevent) {
        var src = oFRevent.target.result;
        that.header = src;
      };

      let id = this.personImgData && this.personImgData.id
      id && this.delArr.push(id)

      this.personImgData = {
        file,
        name: file.name,
        time: Date.now()
      };
    },
    getParam(operationType) {
      let formData = new FormData()
      //test
      // formData.append("userId", '5c82f47c-062f-4e19-94be-89cb26c24547');
      // formData.append("id", '0b5112f1-e8e4-4d64-bc49-3320c79f380b');
      // formData.append("operationType", operationType);
      
      formData.append("userId", getId());
      formData.append("id", this.$route.query.talentId ? this.$route.query.talentId : '');
      formData.append("operationType", operationType);
      formData.append("type", this.$route.query.title);

      // 基本信息
      formData.append("name", this.form.name);
      formData.append("gender", this.form.gender);
      formData.append("mobile", this.form.mobile);
      formData.append("idType", this.form.idType);
      formData.append("idNumber", this.form.idCode);

      formData.append("birthday", this.form.birthDate);
      formData.append("nationality", this.form.nationality);
      formData.append("politic", this.form.politic);
      formData.append("other", this.form.idTypeText);
      formData.append("education", this.form.education);
      formData.append("degree", this.form.degree);
      formData.append("school", this.form.school);
      formData.append("graduationDate", this.form.graduationDate);
      formData.append("field", this.form.major);
      formData.append("techPosition", this.form.technicalPosition);
      formData.append("techTitle", this.form.socialPosition == '有' ? this.form.socialPositionText : this.form.socialPosition);
      formData.append("postNature", this.form.postNature);
      formData.append("appointment", this.form.appointment);
      formData.append("post", this.form.post);
      formData.append("currentPostDate", this.form.currentPostDate);
      formData.append("industry", this.form.industry);
      formData.append("email", this.form.email);
      formData.append("hasOtherAgreement", this.form.hasOtherAgreement);
      formData.append("otherAgreement", this.form.otherAgreement);
      formData.append("edu", this.form.educationalExperience);
      formData.append("work", this.form.workExperience);
      formData.append("project", this.form.project);
      formData.append("contrib", this.form.contrib);

      // 公司
      formData.append("companyName", this.form.company);
      formData.append("companyReqDTOs[0].name", this.form.company);
      formData.append("companyReqDTOs[0].id", this.form.companyId);

      // 附件
      (this.personImgData && !this.personImgData.id) && formData.append("header", this.personImgData.file);
      let formData1 = this.$refs.attachmentRef.getParam(formData)

      formData.append("delete", this.delArr.join(','));

      return formData1
    },
    save(operationType) {
      console.log("save");
      let param = this.getParam(operationType)

      saveCYLJ(param).then(res => {
        if(res.code == 200) {
          this.$confirm('保存成功', '提示', {
            showCancelButton: false,
            type: 'success'
          }).then(() => {
            this.$router.push('personal')
          }).catch(err => {})
          // this.$message.success('保存成功')
        }
      })
    },
    submit(operationType) {
      this.$refs.qjyxrcRuleForm.validate(valid => {
        if (valid) {
          this.$refs.attachmentRef.check()

        } else {
          console.log("base error submit!!");
          return false;
        }
      });
    },
    setDelArr(id) {
      this.delArr.push(id)
    },
    attackCheck(operationType) {
      let param = this.getParam(operationType)

      saveCYLJ(param).then(res => {
        if(res.code == 200) {
          this.$confirm('提交成功', '提示', {
            showCancelButton: false,
            type: 'success'
          }).then(() => {
            this.$router.push('personal')
          }).catch(err => {})
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.content-wrapper {
  padding: 30px 0px 50px 0px;
  width: 100%;
  .main {
    width: 1100px;
    margin: auto;
    .head {
      text-align: left;
      color: #00a9ec;
      margin-left: 15px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #00a9ec;
      font-size: 24px;
    }
    .body {
      display: flex;
      .left {
        ul {
          padding: 0;
          margin: 0 15px;
          list-style: none;
          // height: 500px;
          width: 150px;
          color: #999999;
          background-color: #ecf6ff;
          min-height: 500px;
          li {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              background-color: #00a9ec;
              color: white;
            }
            &.select {
              background-color: #00a9ec;
              color: white;
            }
          }
        }
      }
      .right {
        margin: 0 15px;
        width: 890px;
        // height: 600px;
        border: 1px solid #dcdcdc;
        .tabContent {
          .content {
            p {
              margin: 0;
              padding: 0;
              margin-top: 10px;
              margin-left: 20px;
            }
          }
          hr {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
          }
          .foot {
            margin: 10px 20px;
            .btn {
              padding: 10px 16px;
              font-size: 18px;
              line-height: 1.3333333;
              border-radius: 6px;
              color: #333;
              background-color: #fff;
              border: 1px solid #ccc;
              margin-bottom: 0;
              font-weight: 400;
              line-height: 1.42857143;
              text-align: center;
              white-space: nowrap;
              vertical-align: middle;
              -ms-touch-action: manipulation;
              touch-action: manipulation;
              cursor: pointer;
              display: inline-block;
              &:hover {
                color: #333;
                background-color: #e6e6e6;
                border-color: #adadad;
              }
            }
          }
          &.tabContent2 {
            padding: 30px 120px 30px 20px;
            .el-form {
              position: relative;
            }

            & /deep/ .el-form-item__content {
              text-align: left;
            }

            .customUpLoad {
              .uploadInput {
                width: 475px;
                margin-right: 20px;
              }
              button {
                color: #fff;
                background-color: #337ab7;
                border-color: #2e6da4;
              }
              .closeBtn {
                position: absolute;
                right: -50px;
                top: 12px;
                font-size: 18px;
                cursor: pointer;
                &:hover {
                  font-weight: bold;
                }
              }
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
            .width360 {
              width: 360px;
            }
            .uploadBtn {
              color: #00a9ec;
              margin-top: 5px;
              cursor: pointer;
            }

            .personImg {
              position: absolute;
              right: -40px;
              top: 0;
              z-index: 10;
              img {
                width: 140px;
                height: 140px;
                margin-bottom: 5px;
                padding: 4px;
                line-height: 1.42857143;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 4px;
              }
            }

            .rowLabel {
              & /deep/ .el-form-item__label {
                text-align: center;
                width: 100% !important;
              }
            }

            .customRow {
              // display: flex;
              // align-items: center;
            }

            &
              /deep/
              .el-form-item.is-required:not(.is-no-asterisk)
              > .el-form-item__label:before,
            .el-form-item.is-required:not(.is-no-asterisk)
              .el-form-item__label-wrap
              > .el-form-item__label:before {
              content: "*";
              color: #ff4949;
              margin-right: 0px;
              font-size: 24px;
            }
            & /deep/ .el-form-item__label {
              font-weight: bold;
            }

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
      }
    }
  }
}
</style>
