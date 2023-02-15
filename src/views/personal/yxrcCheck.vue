<template>
  <div class="content-wrapper">
    <div class="main">
      <div class="head">
        {{ title }}
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
            <div class="tle" style="text-align: center; margin-top: 10px">
              <h4 style="margin: 0; padding: 0">填写须知</h4>
            </div>
            <div
              class="content"
              style="padding: 10px 15px 10px 15px; text-align: left"
            >
              <p>
                <span style="font-size: 10.5pt"
                  >1.填写前请认真阅读《青山英才（优秀青年人才）申报指引》。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >2.请按要求填写完整、全面、真实信息，不得空项、漏项，若无相关信息，请填写“无”。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >3.联系人、联系电话、电子邮箱：联系人应为具体负责办理申报事宜的工作人员，熟悉申报人、申报材料的相关情况，可以为申报人本人。联系电话请同时填写办公电话和手机号码，保证联系畅通</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >4.照片：为近期小两寸正面免冠证件照（红底）。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >5.身份证件：指居民身份证或p护照等有效身份证件及其号码。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >6.最高学历、学位、毕业院校及专业：填写申报人所获最高学历（学位）的毕业院校、专业及学位的全称。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >7.工作单位、职务（岗位）：指申报人目前工作关系所在单位及其现任职务（岗位），以社保关系为准，单位名称需填写规范全称。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >8.主要学术（创新）成就简介：作为第一作者或通讯作者在学术期刊上发表的论文，参与结题的科研项目，发表的著作以及取得专利、成果转化等情况，成果需真实、可查。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >9.主要业绩简介：获得区级及以上荣誉情况，以及在我区重点产业、重大工程、重大项目、重大技术改造等工作中，个人参与和发挥作用情况，为我区经济社会发展作出的贡献，业绩和贡献需真实、可查。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >10.申报人诚信承诺：申报人承诺填报的所有信息均真实有效，若有弄虚作假行为，取消人才认定资格，并承担相应的法律责任。后期纸质材料须由申报人亲笔签名，不得由他人代签。</span
                >
              </p>
              <p>
                <span style="font-size: 10.5pt"
                  >11.用人单位意见：由申报人所在单位对申报人各项条件进行审查，对符合条件的人选作出意见。</span
                >
              </p>
            </div>
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
                    style="width: 100%; display: none"
                    @change="personImgChange"
                  />
                  <img :src="personImgSrc" alt="" />
                  <div
                    @click.prevent="$refs.personImg_file.click()"
                    class="uploadBtn"
                  >
                    点击上传
                  </div>
                </div>
              </div>

              <el-form-item label="申报人:" prop="name">
                <el-input v-model="form.name" class="width360"></el-input>
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
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="国籍:" prop="nationality">
                <el-input
                  v-model="form.nationality"
                  class="width360"
                ></el-input>
              </el-form-item>
              <el-form-item label="政治面貌:" prop="politic">
                <el-input v-model="form.politic" class="width360"></el-input>
              </el-form-item>
              <el-form-item label="申报人联系电话:" prop="telephone">
                <el-input v-model="form.telephone" class="width360"></el-input>
              </el-form-item>
              <el-form-item label="证件类型:" prop="idType">
                <div class="customRow">
                  <el-radio-group v-model="form.idType">
                    <el-radio label="身份证"></el-radio>
                    <el-radio label="护照"></el-radio>
                    <el-radio label="其他"></el-radio>
                  </el-radio-group>
                  <el-input
                    v-model="form.idTypeText"
                    style="width: 180px; margin-left: 20px"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item label="证件编号:" prop="idCode">
                <el-input v-model="form.idCode"></el-input>
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
              <el-form-item label="毕业院校:" prop="school">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
              <el-form-item label="毕业时间:" prop="graduationDate">
                <el-date-picker
                  v-model="form.graduationDate"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="专业:" prop="major">
                <el-input v-model="form.major"></el-input>
              </el-form-item>
              <el-form-item label="专业技术职务:" prop="technicalPosition">
                <el-input v-model="form.technicalPosition"></el-input>
              </el-form-item>
              <el-form-item label="社会职务:" prop="socialPosition">
                <el-radio-group v-model="form.socialPosition" class="customRow">
                  <el-radio label="true">是</el-radio>
                  <el-input
                    v-model="form.socialPositionText"
                    style="width: 180px; margin-right: 20px"
                  ></el-input>
                  <el-radio label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="联系人:" prop="contacts">
                <el-input v-model="form.contacts"></el-input>
              </el-form-item>
              <el-form-item label="联系电话:" prop="contactsTel">
                <el-input v-model="form.contactsTel"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱:" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="工作单位:" prop="company">
                <el-input v-model="form.company"></el-input>
              </el-form-item>
              <el-form-item label="工作单位地址:" prop="companyAddress">
                <el-input v-model="form.companyAddress"></el-input>
              </el-form-item>
              <el-form-item label="单位电话:" prop="companyTel">
                <el-input v-model="form.companyTel"></el-input>
              </el-form-item>
              <el-form-item label="单位传真:">
                <el-input v-model="form.companyFax"></el-input>
              </el-form-item>
              <el-form-item label="职务(岗位):" prop="job">
                <el-input v-model="form.job"></el-input>
              </el-form-item>
              <el-form-item
                label="教育经历(从本科填起):"
                prop="educationalExperience"
              >
                <el-input
                  type="textarea"
                  v-model="form.educationalExperience"
                  :rows="5"
                ></el-input>
              </el-form-item>
              <el-form-item label="工作经历:">
                <el-input
                  type="textarea"
                  v-model="form.workExperience"
                  :rows="5"
                ></el-input>
              </el-form-item>
              <el-form-item label="创办企业情况:">
                <el-input
                  type="textarea"
                  v-model="form.businessExperience"
                  :rows="5"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="主要学术(创新)成果:"
                prop="academicAchievements"
              >
                <el-input
                  type="textarea"
                  v-model="form.academicAchievements"
                  :rows="5"
                ></el-input>
              </el-form-item>
              <el-form-item label="主要业绩简介:" prop="performanceProfile">
                <el-input
                  type="textarea"
                  v-model="form.performanceProfile"
                  :rows="5"
                ></el-input>
              </el-form-item>
              <el-form-item label="未来三年工作设想:" :rows="5" prop="workPlan">
                <el-input
                  type="textarea"
                  v-model="form.workPlan"
                  :rows="5"
                ></el-input>
              </el-form-item>

              <!-- 有效身份证件上传 -->
              <div class="idCard">
                <div class="cardTitle">有效身份证件上传</div>
                <div class="cardBox">
                  <div class="left customUpLoad">
                    <input
                      ref="idCardLeft_file"
                      type="file"
                      name="idCardLeft"
                      style="width: 100%; display: none"
                      @change="idCardLeftChange"
                    />
                    <img :src="idCardLeftSrc" alt="" />
                    <div
                      @click.prevent="$refs.idCardLeft_file.click()"
                      class="uploadBtn"
                    >
                      点击上传
                    </div>
                  </div>

                  <div class="customUpLoad">
                    <input
                      ref="idCardRight_file"
                      type="file"
                      name="idCardRight"
                      style="width: 100%; display: none"
                      @change="idCardRightChange"
                    />
                    <img :src="idCardRightSrc" alt="" />
                    <div
                      @click.prevent="$refs.idCardRight_file.click()"
                      class="uploadBtn"
                    >
                      点击上传
                    </div>
                  </div>
                </div>
              </div>

              <el-form-item
                label="户口本上传:"
                class="customUpLoad"
                prop="householdRegisterName"
              >
                <input
                  ref="householdRegister_file"
                  type="file"
                  name="householdRegister"
                  style="width: 100%; display: none"
                  @change="householdRegisterChange"
                />
                <el-input
                  v-model="form.householdRegisterName"
                  class="uploadInput"
                  @click="$refs.householdRegister_file.click()"
                ></el-input>
                <el-button @click.prevent="$refs.householdRegister_file.click()"
                  >上传</el-button
                >
              </el-form-item>
              <el-form-item
                label="最高学历证书:"
                class="customUpLoad"
                prop="diplomaName"
              >
                <input
                  ref="diploma_file"
                  type="file"
                  name="diploma"
                  style="width: 100%; display: none"
                  @change="diplomaNameChange"
                />
                <el-input
                  v-model="form.diplomaName"
                  class="uploadInput"
                  @click.prevent="$refs.diploma_file.click()"
                ></el-input>
                <el-button @click.prevent="$refs.diploma_file.click()"
                  >上传</el-button
                >
              </el-form-item>
              <el-form-item
                label="最高学位证书:"
                class="customUpLoad"
                prop="degreeCertificateName"
              >
                <input
                  ref="degreeCertificate_file"
                  type="file"
                  name="degreeCertificate"
                  style="width: 100%; display: none"
                  @change="degreeCertificateChange"
                />
                <el-input
                  v-model="form.degreeCertificateName"
                  class="uploadInput"
                  @click.prevent="$refs.degreeCertificate_file.click()"
                ></el-input>
                <el-button @click.prevent="$refs.degreeCertificate_file.click()"
                  >上传</el-button
                >
              </el-form-item>
              <el-form-item
                label="学历验证报告:"
                class="customUpLoad"
                prop="verificationReportName"
              >
                <input
                  ref="verificationReport_file"
                  type="file"
                  name="verificationReport"
                  style="width: 100%; display: none"
                  @change="verificationReportChange"
                />
                <el-input
                  v-model="form.verificationReportName"
                  class="uploadInput"
                  @click.prevent="$refs.verificationReport_file.click()"
                ></el-input>
                <el-button
                  @click.prevent="$refs.verificationReport_file.click()"
                  >上传</el-button
                >
              </el-form-item>
              <el-form-item
                label="主要业绩证明:"
                class="customUpLoad"
                prop="performanceCertificationName"
              >
                <input
                  ref="performanceCertification_file"
                  type="file"
                  name="performanceCertification"
                  style="width: 100%; display: none"
                  @change="performanceCertificationChange"
                />
                <el-input
                  v-model="form.performanceCertificationName"
                  class="uploadInput"
                  @click.prevent="$refs.performanceCertification_file.click()"
                ></el-input>
                <el-button
                  @click.prevent="$refs.performanceCertification_file.click()"
                  >上传</el-button
                >
              </el-form-item>
              <el-form-item
                label="劳动合同及缴纳社保证明:"
                class="customUpLoad"
                prop="laborContractName"
              >
                <input
                  ref="laborContract_file"
                  type="file"
                  name="laborContract"
                  style="width: 100%; display: none"
                  @change="laborContractChange"
                />
                <el-input
                  v-model="form.laborContractName"
                  class="uploadInput"
                  @click.prevent="$refs.laborContract_file.click()"
                ></el-input>
                <el-button @click.prevent="$refs.laborContract_file.click()"
                  >上传</el-button
                >
              </el-form-item>

              <!-- 其他附件 -->
              <el-form-item
                label="其他:"
                class="customUpLoad"
                v-for="(otherAttachment, i) in otherAttachmentList"
                :key="i"
              >
                <input
                  :ref="'otherAttachment_file_' + i"
                  type="file"
                  :name="'otherAttachment_' + i"
                  style="width: 100%; display: none"
                  @change="otherAttachmentChange($event, i)"
                />
                <el-input
                  :ref="'otherAttachment_input_' + i"
                  class="uploadInput"
                ></el-input>
                <el-button @click="otherAttachmentClick($event, i)"
                  >上传</el-button
                >
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
                <span
                  id="add"
                  style="color: blue; cursor: pointer"
                  @click="addFuJian"
                  >+添加材料</span
                >
              </div>

              <div class="foot">
                <el-button @click="curTab = 1">上一步</el-button>
                <el-button @click="save" class="saveBtn">保存</el-button>
                <el-button @click="submit" class="submitBtn">提交</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // title: '青山区-优秀青年人才1类-在线申报',
      curTab: 1,
      form: {
        name: "",
        gender: "男",
        birthDate: "",
        nationality: "",
        politic: "",
        telephone: "",
        idType: "身份证",
        idTypeText: "身份证",
        idCode: "",
        education: "",
        degree: "",
        school: "",
        graduationDate: "",
        major: "",
        technicalPosition: "",
        socialPosition: "false",
        socialPositionText: "",
        contacts: "",
        contactsTel: "",
        email: "",
        company: "",
        companyAddress: "",
        companyTel: "",
        companyFax: "",
        job: "",
        educationalExperience: "",
        workExperience: "",
        businessExperience: "",
        academicAchievements: "",
        performanceProfile: "",
        workPlan: "",

        householdRegisterName: "",
        diplomaName: "",
        degreeCertificateName: "",
        verificationReportName: "",
        performanceCertificationName: "",
        laborContractName: "",
      },
      householdRegisterData: [],
      diplomaData: [],
      degreeCertificateData: [],
      verificationReportData: [],
      performanceCertificationData: [],
      laborContractData: [],
      // 身份证
      idCardLeftSrc: "",
      idCardRightSrc: "",
      idCardLeftData: [],
      idCardRightData: [],
      // 头像
      personImgSrc: "",
      personImgData: [],

      rules: {
        header: [{ required: true, message: "请上传头像" }],
        name: [{ required: true, message: "请输入内容", trigger: "blur" }],
        gender: [{ required: true, message: "请选择", trigger: "blur" }],
        birthDate: [{ required: true, message: "请选择", trigger: "blur" }],
        nationality: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        politic: [{ required: true, message: "请输入内容", trigger: "blur" }],
        telephone: [{ required: true, message: "请输入内容", trigger: "blur" }],
        idType: [{ required: true, message: "请选择", trigger: "blur" }],
        idCode: [{ required: true, message: "请输入内容", trigger: "blur" }],
        education: [{ required: true, message: "请输入内容", trigger: "blur" }],
        degree: [{ required: true, message: "请输入内容", trigger: "blur" }],
        school: [{ required: true, message: "请输入内容", trigger: "blur" }],
        graduationDate: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        major: [{ required: true, message: "请输入内容", trigger: "blur" }],
        technicalPosition: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        socialPosition: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        contacts: [{ required: true, message: "请输入内容", trigger: "blur" }],
        contactsTel: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        email: [{ required: true, message: "请输入内容", trigger: "blur" }],
        company: [{ required: true, message: "请输入内容", trigger: "blur" }],
        companyAddress: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        companyTel: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        job: [{ required: true, message: "请输入内容", trigger: "blur" }],
        educationalExperience: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        academicAchievements: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        performanceProfile: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        workPlan: [{ required: true, message: "请输入内容", trigger: "blur" }],
        householdRegisterName: [
          { required: true, message: "请上传资料", trigger: "blur" },
        ],
        diplomaName: [
          { required: true, message: "请上传资料", trigger: "blur" },
        ],
        degreeCertificateName: [
          { required: true, message: "请上传资料", trigger: "blur" },
        ],
        verificationReportName: [
          { required: true, message: "请上传资料", trigger: "blur" },
        ],
        performanceCertificationName: [
          { required: true, message: "请上传资料", trigger: "blur" },
        ],
        laborContractName: [
          { required: true, message: "请上传资料", trigger: "blur" },
        ],
      },

      sourceData: null,

      otherAttachmentList: [], // 创建其他附件上传dom的数组
      otherAttachmentArr: [], // 其他附件上传 - input 框中的名字
    };
  },
  created() {
    this.queryData();
  },
  computed: {
    title() {
      // return this.$route.query.title +'-在线申报'
      return this.$route.params.title + "-在线申报";
    },
    // 通过哪个行政级别过来的 包含  城市-city，区县-area
    level() {
      return this.$route.params.level || "area";
    },
  },
  methods: {
    initData() {
      this.form = {
        name: "",
        gender: "男",
        birthDate: "",
        nationality: "",
        politic: "",
        telephone: "",
        idType: "身份证",
        idTypeText: "身份证",
        idCode: "",
        education: "",
        degree: "",
        school: "",
        graduationDate: "",
        major: "",
        technicalPosition: "",
        socialPosition: "否",
        socialPositionText: "",
        contacts: "",
        contactsTel: "",
        email: "",
        company: "",
        companyAddress: "",
        companyTel: "",
        companyFax: "",
        job: "",
        educationalExperience: "",
        workExperience: "",
        businessExperience: "",
        academicAchievements: "",
        performanceProfile: "",
        workPlan: "",

        householdRegisterName: "",
        diplomaName: "",
        degreeCertificateName: "",
        verificationReportName: "",
        performanceCertificationName: "",
        laborContractName: "",
      };
      this.diplomaData = [];
      this.householdRegisterData = [];
      this.degreeCertificateData = [];
      this.verificationReportData = [];
      this.performanceCertificationData = [];
      this.laborContractData = [];

      this.idCardLeftSrc = "";
      this.idCardRightSrc = "";
      this.idCardLeftData = [];
      this.idCardRightData = [];

      this.personImgSrc = "";
      this.personImgData = [];
    },
    queryData() {
      // let id = '000d8f4f-5397-443c-b01d-f940ffe44444'
      // let id = '00170c58-b913-48a4-8386-afad4129d42c'
      let id = "00398426-57ca-48ef-b357-fb06a02d4bf7";
      let item = "get/";
      if (this.level == "area") {
        item = "getDistrict/";
      }
      let url = `gateway/talentserver/talent/` + item + id;
      axios.get(url).then((res) => {
        console.log(res);
        //studentFamilies
        // console.log(res.data.data.name);
        let d = res.data.data;
        if (d) {
          this.sourceData = d;
          let attachmentReqDTOS = d.attachmentReqDTOS;

          this.form = {
            name: d.name,
            gender: d.gender,
            birthDate: d.birthday,
            nationality: d.nationality,
            politic: d.politic,
            telephone: d.mobile,
            idType: d.idName,
            idTypeText: "身份证",
            idCode: d.idNumber,
            education: d.education,
            degree: d.degree,
            school: d.school,
            graduationDate: d.graduationDate,
            major: d.field,
            technicalPosition: d.techPosition,
            socialPosition: d.hasSocialFunction + "", // boolean
            socialPositionText: d.socialFunction,
            contacts: d.contactor,
            contactsTel: d.phone,
            email: d.email,
            company: d.companyName,
            companyAddress:
              (d.companyReqDTOs &&
                d.companyReqDTOs[0] &&
                d.companyReqDTOs[0].address) ||
              "",
            companyTel:
              (d.companyReqDTOs &&
                d.companyReqDTOs[0] &&
                d.companyReqDTOs[0].phone) ||
              "",
            companyFax: d.fax,
            job: d.post,
            educationalExperience: d.edu,
            workExperience: d.work,
            businessExperience: d.entre,
            academicAchievements: d.achievement,
            performanceProfile: d.contrib,
            workPlan: d.future,

            // 附件
            // householdRegisterName: '',
            // diplomaName: '',
            // degreeCertificateName: '',
            // verificationReportName: '',
            // performanceCertificationName: '',
            // laborContractName: '',
          };

          if (attachmentReqDTOS) {
            this.otherAttachmentList = [];
            this.otherAttachmentArr = [];
            attachmentReqDTOS.forEach((e) => {
              switch (e.type) {
                case "HEADER": //头像
                  this.personImgSrc = e.url;
                  break;
                case "FRONT": // 身份证前面
                  this.idCardLeftSrc = e.url;
                case "BACK": // 身份证后面
                  this.idCardRightSrc = e.url;
                case "HKB": // 户口
                  this.form.householdRegisterName = e.name;
                  break;
                case "DIPLOMA": // 最高学历证书
                  this.form.diplomaName = e.name;
                  break;
                case "QUALIFICATIONS": // 最高学位证书
                  this.form.degreeCertificateName = e.name;
                  break;
                case "CERTIFICATE": // 学历验证报告
                  this.form.verificationReportName = e.name;
                  break;
                case "YJZM": // 业绩证明
                  this.form.performanceCertificationName = e.name;
                  break;
                case "CONTRACT": // 合同
                  this.form.laborContractName = e.name;
                  break;
                case "ADDITIONAL": // 其他
                  this.otherAttachmentList.push(
                    this.otherAttachmentList.length
                  );
                  this.otherAttachmentArr.push(e.name);
                  break;
              }
            });
          }
        }
      });
    },
    selectTab(e) {
      let key = e.target.dataset.key;
      if (key && key != this.curTab) {
        this.curTab = key;
      }
    },
    householdRegisterChange(e) {
      const input = e.target;
      const [file] = input.files;
      // console.log([file]);

      input.value = "";
      this.form.householdRegisterName = file.name;
      this.householdRegisterData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    diplomaNameChange(e) {
      const input = e.target;
      const [file] = input.files;
      // console.log([file]);

      input.value = "";
      this.form.diplomaName = file.name;
      this.diplomaData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    degreeCertificateChange(e) {
      const input = e.target;
      const [file] = input.files;
      // console.log([file]);

      input.value = "";
      this.form.degreeCertificateName = file.name;
      this.degreeCertificateData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    verificationReportChange(e) {
      const input = e.target;
      const [file] = input.files;
      // console.log([file]);

      input.value = "";
      this.form.verificationReportName = file.name;
      this.verificationReportData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    performanceCertificationChange(e) {
      const input = e.target;
      const [file] = input.files;
      // console.log([file]);

      input.value = "";
      this.form.performanceCertificationName = file.name;
      this.performanceCertificationData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    laborContractChange(e) {
      const input = e.target;
      const [file] = input.files;
      // console.log([file]);

      input.value = "";
      this.form.laborContractName = file.name;
      this.laborContractData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    idCardLeftChange(e) {
      const input = e.target;
      const [file] = input.files;
      var oFReader = new FileReader();
      oFReader.readAsDataURL(file);
      let that = this;
      oFReader.onloadend = function (oFRevent) {
        var src = oFRevent.target.result;
        that.idCardLeftSrc = src;
      };

      this.idCardLeftData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    idCardRightChange(e) {
      const input = e.target;
      const [file] = input.files;
      var oFReader = new FileReader();
      oFReader.readAsDataURL(file);
      let that = this;
      oFReader.onloadend = function (oFRevent) {
        var src = oFRevent.target.result;
        that.idCardLeftSrc = src;
      };

      this.idCardRightData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },
    personImgChange(e) {
      const input = e.target;
      const [file] = input.files;
      var oFReader = new FileReader();
      oFReader.readAsDataURL(file);
      let that = this;
      oFReader.onloadend = function (oFRevent) {
        var src = oFRevent.target.result;
        that.personImgSrc = src;
      };

      this.personImgData.push({
        file,
        name: file.name,
        time: Date.now(),
      });
    },

    // 上传用FormData
    getFormData() {
      const formData = new FormData();
      formData.append("id", getId());
      formData.append("name", this.form.name);
      formData.append("gender", this.form.gender);
      formData.append("birthday", this.form.birthDate);
      formData.append("nationality", this.form.nationality);
      formData.append("politic", this.form.politic);
      formData.append("mobile", this.form.telephone);
      formData.append("idName", this.form.idType);
      formData.append("idNumber", this.form.idCode);
      formData.append("education", this.form.education);
      formData.append("degree", this.form.degree);
      formData.append("school", this.form.school);
      formData.append("graduationDate", this.form.graduationDate);
      formData.append("field", this.form.major);
      formData.append("techPosition", this.form.technicalPosition);
      formData.append(
        "hasSocialFunction",
        this.form.socialPosition == "true" ? true : false
      );
      formData.append("socialFunction", this.form.socialPositionText);
      formData.append("contactor", this.form.contacts);
      formData.append("phone", this.form.contactsTel);
      formData.append("email", this.form.email);
      // 公司信息
      formData.append("companyName", this.form.company);
      // formData.append("companyAddress", this.form.companyAddress);
      // formData.append("companyTel", this.form.companyTel);
      // formData.append("companyFax", this.form.companyFax);
      formData.append("post", this.form.job);
      formData.append("edu", this.form.educationalExperience);
      formData.append("work", this.form.workExperience);
      formData.append("entre", this.form.businessExperience);
      formData.append("achievement", this.form.academicAchievements);
      formData.append("contrib", this.form.performanceProfile);
      formData.append("future", this.form.workPlan);
    },
    getFormDataJson() {
      return {};
    },
    save() {
      console.log("save");
    },
    submit() {
      console.log("submit");
      this.$refs.qjyxrcRuleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 新增附件
    addFuJian() {
      console.log(this.$refs.addFuJianDom);
      this.otherAttachmentList.push(this.otherAttachmentList.length);
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
        time: Date.now(),
      });

      this.$refs["otherAttachment_input_" + i][0].$el.querySelector(
        "input"
      ).value = file.name;
    },
    closeOtherAttachment(i) {
      this.otherAttachmentList.splice(i, 1);

      this.otherAttachmentArr.splice(i, 1);
    },
    otherAttachmentClick(e) {
      let btn = e.target;
      if (btn.tagName == "SPAN") {
        btn = btn.parentElement;
      }
      let parent = btn.parentElement;
      parent.querySelector("input[type='file']").click();
    },
  },
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
            .idCard {
              margin-bottom: 20px;
              .cardTitle {
                margin-bottom: 20px;
              }
              .cardBox {
                display: flex;
                justify-content: center;
                .left {
                  margin-right: 50px;
                  margin-left: 100px;
                }
              }
              img {
                width: 320px;
                height: 200px;
                margin-bottom: 5px;
                padding: 4px;
                line-height: 1.42857143;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 4px;
              }
            }

            .width360 {
              width: 360px;
            }
            .uploadBtn {
              color: #00a9ec;
              margin-top: -5px;
              cursor: pointer;
              line-height: 20px;
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

            .customRow {
              display: flex;
              align-items: center;
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