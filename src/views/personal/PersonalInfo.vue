<template>
  <div>
    <div class="top">
      <div class="title">个人信息</div>
    </div>
    <div class="main">
      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        class="Form1"
      >
        <input
          type="hidden"
          id="userId"
          name="userId"
          value="cd738321-1c0b-4d14-a306-d0c74500f71a"
        />
        <input type="hidden" name="name" value />
        <input type="hidden" name="idNumber" value="420105198202160419" />
        <tbody>
          <tr>
            <td>姓名：</td>
            <td>
              <span id="labName">{{ name }}</span>
            </td>
            <td>性别：</td>
            <td>
              <label class="youjuli">
                <table border="0" style="border: none;">
                  <tbody>
                    <tr>
                      <td style="border: none;padding-right: 50px;">
                        <input
                          type="radio"
                          name="gender"
                          value="1"
                          v-model.trim="gender"
                          :disabled="dis"
                        />
                        <label for="rabGender_0">男</label>
                      </td>
                      <td style="border: none;">
                        <input
                          type="radio"
                          name="gender"
                          value="0"
                          v-model.trim="gender"
                          :disabled="dis"
                        />
                        <label for="rabGender_1">女</label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </label>
            </td>

            <!-- <td>身份证号：</td>
            <td>
              <span>{{ idNumber }}</span>
            </td>-->
            <td rowspan="5" style="text-align:center;height: 20%;width: 15%;">
              <!--<iframe id="iframePhoto" style="width: 150px; height: 200px; border: 0px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="StudentPhoto.aspx"></iframe>-->
              <img
                style="border-width:0px;width: 148px; height: 176px"
                :src="images"
              />

              <input
                type="file"
                style="width:100%"
                @change="uploadImg"
                :disabled="dis"
              />
              <!--<iframe id="iframePhoto" style="width: 150px; height: 200px; border: 0px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="StudentPhoto.aspx"></iframe>-->
            </td>
          </tr>
          <tr>
            <td>证件类型：</td>
            <!-- <td>{{certificateType | certificateTypeName}}</td> -->
            <td>
              <select
                class="xialakuang"
                v-model="certificateType"
                style="width:150px;height:30px"
                disabled="true"
              >
                <option value>—请选择—</option>
                <option value="0">身份证</option>
                <option value="2">港澳台通行证</option>
                <option value="3">护照</option>
              </select>
            </td>
            <td>证件号：</td>
            <td>
              <!-- <span>{{ idNumber }}</span> -->
              <input
                name="nationality"
                type="text"
                v-model.trim="idNumber"
                class="wenzishur"
                rq="true"
                tag="请输入证件号！"
                disabled="true"
              />
            </td>
          </tr>
          <tr>
            <td>户籍地址：</td>
            <td>
              <input
                type="text"
                style="width:100%"
                :disabled="dis"
                v-model="residenceAddress"
              />
            </td>
            <td>民族：</td>
            <td>
              <input
                name="nationality"
                type="text"
                v-model.trim="nation"
                class="wenzishur"
                rq="true"
                tag="请输入民族！"
                :disabled="dis"
              />
            </td>
          </tr>
          <tr>
            <td>联系方式：</td>
            <td>
              <input
                name="phone"
                type="text"
                v-model.trim="phoneNumber"
                class="wenzishur"
                rq="true"
                tag="请输入联系方式！"
                :disabled="dis"
                readonly
              />
              <!-- onkeyup="value=value.replace(/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/)" -->
            </td>
            <!-- <td>电子邮箱：</td> -->
            <td>现住地址：</td>
            <td>
              <input
                type="text"
                class="wenzishur"
                rq="true"
                tag="请输入电子邮箱地址！"
                :disabled="dis"
                v-model.trim="liveAddress"
              />
            </td>
          </tr>
          <tr>
            <!-- <td>是否在读：</td>
            <td>
              <label class="youjuli">
                <table border="0">
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="notGraduated"
                          value="1"
                          v-model.trim="isGraduate"
                          :disabled="dis"
                        />
                        <label for="rabSchool_0">是</label>
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="notGraduated"
                          value="0"
                          v-model.trim="isGraduate"
                          :disabled="dis"
                        />
                        <label for="rabSchool_1">否</label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </label>
            </td>-->
            <td>毕业时间：</td>
            <td>
              <el-date-picker
                v-model.trim="graduateDate"
                type="date"
                placeholder="选择日期"
                :disabled="dis"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </td>
            <td>毕业（在读）院校：</td>
            <td>
              <input
                name="school"
                type="text"
                :disabled="dis"
                v-model.trim="school"
                class="wenzishur"
                rq="true"
                tag="请输入毕业（在读）院校！"
              />
            </td>
          </tr>
          <!-- <tr>
            <td>毕业（在读）院校：</td>
            <td colspan="3">
              <input
                name="school"
                type="text"
                :disabled="dis"
                v-model.trim="school"
                class="wenzishur"
                rq="true"
                tag="请输入毕业（在读）院校！"
              />
            </td>
          </tr> -->
          <tr>
            <td>专业：</td>
            <!-- <td colspan="4"> -->
            <td colspan="1">
              <select
                class="xialakuang"
                v-model.trim="specalityXkml"
                :disabled="dis"
                @change="getThrSubject"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option v-for="(v, i) in friList" :key="i" :value="v.id">
                  {{ v.dictName }}
                </option>
              </select>
              —
              <select
                class="xialakuang"
                :disabled="dis"
                v-model.trim="specalitySsml"
                @change="getThrSubject2"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option v-for="(v, i) in stuList" :key="i" :value="v.id">
                  {{ v.dictName }}
                </option>
              </select>
              —
              <select
                class="xialakuang"
                v-model.trim="specality"
                :value="specality"
                :disabled="dis"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option v-for="(v, i) in stuList2" :key="i" :value="v.id">
                  {{ v.dictName }}
                </option>
              </select>
            </td>
            <td>学习形式：</td>
            <td colspan="2">
              <select
                class="xialakuang"
                v-model.trim="studyType"
                :disabled="dis"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option value = "全日制">全日制</option>
                <option value = "非全日制">非全日制</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>最高学历：</td>
            <td>
              <select
                name="education"
                class="xialakuang"
                v-model.trim="education"
                :disabled="dis"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option value="BAA102522D404273A34CEAF26478CAF2"
                  >大专及以下</option
                >
                <option value="6F3A155C4A25410FBD13A47B2EBB5285">本科</option>
                <option value="3012A9BC0C8843CB9E74A5D5A5EAE70B"
                  >硕士研究生</option
                >
                <option value="79C986D1-8811-45FD-A320-A10108B1FCE6"
                  >博士研究生</option
                >
              </select>
            </td>

            <td>毕业证号/学籍号：</td>
            <td colspan="2">
              <input
                name="studentCode"
                type="text"
                v-model.trim="educationCard"
                class="wenzishur"
                rq="true"
                tag="请输入毕业证号/学籍号！"
                :disabled="dis"
              />
            </td>
          </tr>
          <tr>
            <td>学位：</td>
            <td>
              <select
                name="degree"
                class="xialakuang"
                v-model.trim="degree"
                :disabled="dis"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option value="FFF9AFFC-6ADF-4673-9384-161D4EEAD08E"
                  >学士及以下</option
                >
                <option value="0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11"
                  >硕士</option
                >
                <option value="9A0EE126-5799-4C7F-A477-50CA214F3A49"
                  >博士</option
                >
              </select>
            </td>
            <!-- <td>社保账号：</td>
            <td>
              <input
                name="studentCode"
                type="text"
                v-model="societyAccount"
                class="wenzishur"
                rq="true"
                tag="请输入社保账号！"
                :disabled="dis"
              />
            </td> -->

            <td>学位证号：</td>
            <!-- v-model="degreeNumber" -->
            <td colspan="2">
              <input
                name="studentCode"
                type="text"
                v-model="degreeCard"
                class="wenzishur"
                rq="true"
                tag="请输入学位证号！"
                :disabled="dis"
              />
            </td>
          </tr>
          <tr>
            <td>社保账号：</td>
            <td>
              <input
                name="studentCode"
                type="text"
                v-model="societyAccount"
                class="wenzishur"
                rq="true"
                tag="请输入社保账号！"
                :disabled="dis"
              />
            </td>

            <td>
              验证码（
              <a
                href="http://www.chsi.com.cn/"
                target="_blank"
                style="color: #00a9ec"
                >学信网获取</a
              >）：
            </td>
            <td colspan="2">
              <input
                name="verification"
                type="text"
                maxlength="18"
                class="wenzishur"
                rq="true"
                tag="请输入验证码！"
                v-model.trim="checkCode"
                :disabled="dis"
              />
              <input name="status" type="hidden" value="2" id="status" />
            </td>
          </tr>
          <tr>
            <td>创业就业类型：</td>
            <td>
              <select
                class="xialakuang"
                v-model="createBusiness"
                :disabled="dis"
                style="width:150px;height:30px"
              >
                <option value>—请选择—</option>
                <option value="个人创业">个人创业</option>
                <option value="单位就业">单位就业</option>
                <option value="网签职业">网签职业</option>
                <option value="待业">待业</option>
              </select>
            </td>
            <td>所在行业:</td>
            <td colspan="2">
              <select
                class="xialakuang"
                v-model="affiliatedBusiness"
                :disabled="dis"
                style="width:150px;height:30px"
              >
                <option value="">—请选择—</option>
                <option value="3F2A1D06368043EB9884C753F78DF3FC"
                  >贸易/消费/制造/营运</option
                >
                <option value="7C45D3287BD64915AEAF079F3FADDD26"
                  >广告/媒体</option
                >
                <option value="0F7AB0C8BCBD46DA97BD76F4EA7D7667"
                  >计算机/互联网/通信/电子</option
                >
                <option value="8EE2F240899240EC8873A5A7B25DCE2A">服务业</option>
                <option value="3962ED65DDCF4B8FADBE7E796C904754"
                  >会计/金融/银行/保险</option
                >
                <option value="A9ACC70BAB344056938CA5EBBFF2DADD">其他</option>
                <option value="A7C41A25EC9E482799984B839087778C"
                  >政府/非盈利机构</option
                >
                <option value="486928FDFDC0420A847DD0C245627CD0"
                  >制药/医疗</option
                >
                <option value="A6C4408F928F4E388F5BC7F6F0D02CA7"
                  >能源/原材料</option
                >
                <option value="9272339EB2C948ACB4E15DEC262C66B"
                  >物流/运输</option
                >
                <option value="8A38CAE3D31F45C2933104DF8C68B4E9"
                  >房地产/建筑</option
                >
                <option value="8DBC2EC937CD4DAA99421C46B1E7A79F"
                  >专业服务/教育/培训</option
                >
              </select>
            </td>
          </tr>
          <tr>
            <td>所在单位:</td>
            <td>
              <input
                type="text"
                v-model="affiliatedCompany"
                class="wenzishur"
                rq="true"
                tag="请输入所在单位！"
                :disabled="dis"
              />
            </td>
            <td>工作地址:</td>
            <td colspan="2">
              <input
                type="text"
                v-model="workAddress"
                class="wenzishur"
                rq="true"
                tag="请输入工作地址！"
                :disabled="dis"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="upload-file">
        <table style="width:100%;">
          <tbody>
            <td style="width:30%"></td>
            <td style="height:40px;">
              <tbody>
                <tr>
                  <form
                    name="upFileForm"
                    method="post"
                    enctype="multipart/form-data"
                    :disabled="dis"
                  ></form>
                  <th>
                    <a
                      class="NewSet"
                      rel="leanModal"
                      href="#NewWindow"
                      style="text-decoration:none;color:red;"
                    >
                      <b style="display:none">*上传资料规范（点击查看）</b>
                    </a>
                    <a
                      class="NewSet"
                      rel="leanModal"
                      href="#NewWindow"
                      style="text-decoration:none;color:red;"
                    >
                      <b style="display:none">*上传资料规范（点击查看）</b>
                    </a>

                    <select
                      name="category"
                      :disabled="dis"
                      style="width:160px;height:30px"
                      v-model="chooseFile"
                    >
                      <option value="">--请选择--</option>
                      <option value="11"
                        >学历证书/留学生服务中心认证报告</option
                      >
                      <!-- <option value="17">个人登记照</option> -->
                      <option value="13">本人身份证正反面</option>
                      <option value="5">学位证书</option>
                      <option value="7">法人营业执照</option>
                      <option value="6">个人就业合同</option>
                      <option value="16">社保卡</option>
                    </select>
                  </th>
                  <th>
                    <input
                      type="file"
                      style="width:100%;"
                      @change="uploadFile"
                      :disabled="dis"
                    />
                  </th>
                </tr>
              </tbody>
            </td>
          </tbody>
        </table>
      </div>
      <div class="upload-list">
        <table>
          <thead>
            <tr>
              <th style="text-align:center;width:30%">文件</th>
              <th style="text-align:center;width: 30%">分类</th>
              <th style="text-align:center;width: 500px">上传时间</th>
              <th style="text-align:center;width: 500px">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v, i) in fileAll" :key="v.id">
              <td style="text-align:center">{{ v.fileName }}</td>
              <td style="text-align:center">
                <!-- {{ chooseFileArr[i] | uploadOption }} -->
                {{ chooseFileArr[i] | idName }}
              </td>
              <td style="text-align:center">{{ v.createDate | formatDate }}</td>
              <td style="text-align:center">
                <button
                  v-if="status == 1 || status == 2"
                  style="width:80px;height:30px;background:#3CBAD0;color:#fff;font-size:14px;border:1px solid #3CBAD0;border-radius:.5em;cursor:pointer;"
                  @click="downFile(v)"
                >
                  下载
                </button>
                <button
                  v-else
                  style="width:80px;height:30px;background:#3CBAD0;color:#fff;font-size:14px;border:1px solid #3CBAD0;border-radius:.5em;cursor:pointer;"
                  @click="delFile(v.id)"
                >
                  删除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="button-bottom"
        style="display:flex;justify-content:center;margin:15px"
      >
        <input
          type="submit"
          value="保存"
          style="width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;"
          v-if="status == 0 || status == 3 || status == null ? true : false"
          @click="saveFile()"
        />
        <input
          type="submit"
          value="审核中"
          style="width: 80px; height: 30px; background: rgb(60, 186, 208,0.8); color: rgba(255, 255, 255); font-size: 14px; border: 1px solid rgba(60, 186, 208,0.2); border-radius: 0.5em;"
          v-if="status == 1 ? true : false"
        />
        <input
          type="button"
          value="提交审核"
          @click="submitAudit()"
          v-if="status == 0 || status == 3 || status == null ? true : false"
          style="margin-left:10px;width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;"
        />
        <input
          type="button"
          value="审核通过"
          style="margin-left:10px;width: 80px; height: 30px; background: rgb(60, 186, 208,0.8); color: rgba(255, 255, 255); font-size: 14px; border: 1px solid rgba(60, 186, 208,0.2); border-radius: 0.5em;"
          v-if="status == 2 ? true : false"
        />
        <span
          v-if="status == '3'"
          style="display: inline-block;margin-left:10px; height: 30px; line-height: 30px;  color: rgba(255, 0, 0); font-size: 14px;"
        >
          {{ failPassText }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { personalInfo, infoSave, thrSubject, friSubject, uploadStudentAvatar, delFileStore } from "@/api/personal";
import { getId, getToken } from "@/utils/auth";
// import axios from "axios";
import { mapMutations } from "vuex";
export default {
  // props: {
  //   disabled: {
  //     default: true
  //   }
  // },
  data() {
    return {
      name: "",
      idNumber: "",

      id: "",
      photoId: "",
      password: "",
      age: "",
      gender: "",
      nation: "",
      phoneNumber: "",
      email: "",
      liveAddress: "",
      isGraduate: "",
      schoolProvince: "",
      schoolCity: "",
      school: "",
      specalityXkml: "",
      specalitySsml: "",
      specality: "",
      graduateDate: "",
      education: "",
      educationCard: "",
      degree: "",
      degreeCard: "",
      status: "",
      opinion: "",
      checkCode: "",
      registerDate: "",
      checkDate: "",
      residenceAddress: "",
      // degreeNumber: "",
      createBusiness: "",
      affiliatedBusiness: "",
      affiliatedCompany: "",
      workAddress: "",
      societyAccount: "",
      studyType: "",
      options: [
        {
          value: "选项1",
          label: "留学生服务中心认证报告"
        }
      ],

      certificateType: "",

      // value: "",

      // 上传文件
      file: [],
      // 文件图片
      images: "",
      // // 文件展示
      fileList: [],
      friList: [],
      stuList: [],
      stuList2: [],
      dis: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      fileAll: [],
      chooseFileArr: [],
      chooseFile: "",
      opinion: ""
    };
  },
  created() {
    this.getfriSubject();
    this.getPersonalInfo();
  },
  updated() {
    this.changeDis();
  },
  watch: {
    // data: "changeDis",
    // data(val, value) {
    //   console.log(val, 1111);
    //   console.log(value, 777);
    // }
    // status: function(newVal, old) {
    //   if (newVal == 0 || 3) {
    //     this.disabled = false;
    //   }
    // }
  },
  computed: {
    failPassText() {
      return "审核未通过 (" + this.opinion + ")";
    }
  },
  methods: {
    ...mapMutations(["setQingshan"]),
    changeDis() {
      if (this.status == 2 || this.status == 1) {
        this.dis = true;
      } else if (this.status == 0 || this.status == 3) {
        this.dis = false;
      }
    },
    async getfriSubject() {
      const { data } = await friSubject();

      this.friList = data;
      // console.log(data, 666666666);
    },
    async getThrSubject() {
      const { data } = await thrSubject({
        parentName: this.specalityXkml
      });
      // console.log(data, 7777777777777);
      this.stuList = data;
    },
    async getThrSubject2() {
      const { data } = await thrSubject({
        parentName: this.specalitySsml
      });
      this.stuList2 = data;
    },
    async getPersonalInfo() {
      const { data } = await personalInfo({
        userId: getId()
      });
      console.log(data);
      // console.log(data.userInfo.mobile);
      // console.log(data.education.nation);

      // 初始化附件
      this.fileAll = [];
      this.chooseFileArr = [];
      if (data) {
        this.name = data.userInfo.name || "";
        this.idNumber = data.userInfo.idNumber || "";
        this.id = data.education.id || "";
        this.photoId = data.education.photoId || "";
        this.password = data.education.password || "";
        this.age = data.education.age || "";
        this.gender = data.education.gender || "";
        this.nation = data.education.nation || "";
        this.phoneNumber =
          data.education.phoneNumber || data.userInfo.mobile || "";
        this.email = data.education.email || "";
        this.isGraduate = data.education.isGraduate || "";
        this.schoolProvince = data.education.schoolProvince || "";
        this.schoolCity = data.education.schoolCity || "";
        this.school = data.education.school || "";
        this.specalityXkml = data.education.specalityXkml || "";
        this.specalitySsml = data.education.specalitySsml || "";
        this.specality = data.education.specality || "";
        this.graduateDate = data.education.graduateDate || "";
        this.education = data.education.education || "";
        this.educationCard = data.education.educationCard || "";
        this.degree = data.education.degree || "";
        this.degreeCard = data.education.degreeCard || "";
        this.status = data.education.status || "";
        this.opinion = data.education.opinion || "";
        this.checkCode = data.education.checkCode || "";
        this.registerDate = data.education.registerDate || "";
        this.checkDate = data.education.checkDate || "";

        // this.certificateType = data.education.certificateType || "0";
        this.certificateType = data.userInfo.idType || "0";

        this.residenceAddress = data.education.residenceAddress || "";
        // this.degreeNumber = data.education.degreeNumber;
        this.createBusiness = data.education.createBusiness || "";
        this.affiliatedBusiness = data.education.affiliatedBusiness || "";
        this.affiliatedCompany = data.education.affiliatedCompany || "";
        this.workAddress = data.education.workAddress || "";
        this.societyAccount = data.education.societyAccount || "";
        this.liveAddress = data.education.liveAddress || "";
        this.studyType = data.education.studyType || "";

        if(data.attachment && data.attachment.data && data.attachment.data.length > 0) {
          let attachment = data.attachment.data.filter(e => {
            return (
              e.type == "13" ||
              e.type == "5" ||
              e.type == "7" ||
              e.type == "6" ||
              e.type == "11" ||
              e.type == "16"
            );
          });
          this.fileAll = attachment;
  
          attachment.forEach(v => {
            this.chooseFileArr.push(v.type);
          });
        }

        if (this.specalityXkml) {
          await this.getThrSubject();
        }
        if (this.specalitySsml) {
          await this.getThrSubject2();
        }

        if (data.headImage.data && data.headImage.data.filePath) {
          this.images = data.headImage.data.filePath;
        }
      }
      var newList = [];
      newList.push({
        name: data.userInfo.name,
        gender: data.education.gender,
        nation: data.education.nation,
        mobile: data.userInfo.mobile,
        phoneNumber: data.education.phoneNumber,
        idNumber: data.userInfo.idNumber,
        certificateType: data.education.certificateType
      });

      this.setQingshan(newList);
    },

    uploadImg(e) {
      const [images] = e.target.files;

      console.log(images, 99999);
      // 声明一个读取文件对象
      let reader = new FileReader();
      // 开始读取文件内容
      reader.readAsDataURL(images);
      // 读取操作结束时触发
      reader.onloadend = ev => {
        // 赋值给vue对象属性
        this.images = ev.target.result;
      };
      const formData = new FormData();
      formData.append("type", "10");
      formData.append("file", images);
      formData.append("userId", getId());

      uploadStudentAvatar(formData).then(res => {});
    },
    uploadFile(e) {
      const [file] = e.target.files;
      e.target.value = "";
      let d = {
        file,
        fileName: file.name,
        createDate: Date.now()
      };
      this.uploadAllFile(d);
    },
    downFile({ file, name, filePath }) {
      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      // image.setAttribute("crossOrigin",'Anonymous');
      image.onload = function(e) {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png");
        let a = document.createElement("a");
        let event = new MouseEvent("click");
        if (name) {
          a.download = name;
        } else {
          a.download = "down_load.jpg";
        }
        a.href = url;
        // 触发a的单击事件
        a.dispatchEvent(event);
      };
      // 获取img上的src值，赋值之后，完成之后会调用onload事件
      image.src = filePath;
    },
    uploadAllFile(d) {
      const formData = new FormData();
      formData.append("type", this.chooseFile);
      formData.append("file", d.file);
      formData.append("userId", getId());
      if (this.chooseFile == "") {
        this.$message.error("请选择类型");
        return false;
      }
      uploadStudentAvatar(formData)
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            this.$message.success("上传成功！");
            // this.getPersonalInfo();

            // 所有类型的文件都是唯一的。如果存在需要替换。没有才是新增
            // let i = this.chooseFileArr.findIndex(e => e == this.chooseFile);
            // if (i == -1) {
            //   this.fileAll.push({
            //     ...d,
            //     id: res.data.data
            //   });

            //   this.chooseFileArr.push(this.chooseFile);
            // } else {
            //   this.$set(this.chooseFileArr, i, this.chooseFile);
            //   let dd = {
            //     id: res.data.data,
            //     ...d
            //   };
            //   this.$set(this.fileAll, i, dd);
            // }

              this.fileAll.push({
                ...d,
                id: res.data
              });

              this.chooseFileArr.push(this.chooseFile);
          }
          //  else {
          //   this.$message.error(res.msg);
          // }
        });
    },
    delFile(id) {
      console.log(id);

      // axios.get(`/gateway/rentserver/fileStore/delete/${id}`).then(res => {
        delFileStore(id).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message.success("删除成功！");
          let i = this.fileAll.findIndex(e => id == id);

          if (i > -1) {
            this.fileAll.splice(i, 1);
            this.chooseFileArr.splice(i, 1);
          }
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    checkForm() {
      if (this.name.length == 0) {
        this.$message.error("姓名为空，请先填写");
        return false;
      }
      if (this.gender != "0" && this.gender != "1") {
        this.$message.error("性别为空，请先填写");
        return false;
      }
      if (
        this.certificateType != "0" &&
        this.certificateType != "2" &&
        this.certificateType != "3"
      ) {
        this.$message.error("证件类型为空，请先填写");
        return false;
      }
      if (this.idNumber.length == 0) {
        this.$message.error("证件号为空，请先填写");
        return false;
      }
      if (this.residenceAddress.length == 0) {
        this.$message.error("户籍地址为空，请先填写");
        return false;
      }
      if (this.nation.length == 0) {
        this.$message.error("民族为空，请先填写");
        return false;
      }
      if (this.phoneNumber.length == 0) {
        this.$message.error("联系方式为空，请先填写");
        return false;
      }
      if (this.liveAddress.length == 0) {
        this.$message.error("现住地址为空，请先填写");
        return false;
      }
      if (this.graduateDate.length == 0) {
        this.$message.error("毕业时间为空，请先填写");
        return false;
      }
      if (this.school.length == 0) {
        this.$message.error("毕业（在读）院校为空，请先填写");
        return false;
      }
      if (
        this.specalityXkml.length == 0 ||
        this.specalitySsml.length == 0 ||
        this.specality.length == 0
      ) {
        this.$message.error("专业为空，请先填写");
        return false;
      }
      if (this.education.length == 0) {
        this.$message.error("最高学历为空，请先填写");
        return false;
      }
      if (this.educationCard.length == 0) {
        this.$message.error("毕业证号/学籍号为空，请先填写");
        return false;
      }
      if (this.degree.length == 0) {
        this.$message.error("学位为空，请先填写");
        return false;
      }
      if (this.degreeCard.length == 0) {
        this.$message.error("学位证号为空，请先填写");
        return false;
      }
      if (this.societyAccount.length == 0) {
        this.$message.error("社保账号为空，请先填写");
        return false;
      }
      if (this.checkCode.length == 0) {
        this.$message.error("验证码为空，请先填写");
        return false;
      }
      if (this.createBusiness.length == 0) {
        this.$message.error("创业就业类型为空，请先填写");
        return false;
      }
      if (this.affiliatedBusiness.length == 0) {
        this.$message.error("所在行业为空，请先填写");
        return false;
      }
      if (this.affiliatedCompany.length == 0) {
        this.$message.error("所在单位为空，请先填写");
        return false;
      }
      if (this.workAddress.length == 0) {
        this.$message.error("工作地址为空，请先填写");
        return false;
      }
      if (this.studyType == "") {
        this.$message.error("学习形式为空，请先填写");
        return false;
      }
      return true;
    },
    checkAttach() {
      if(!this.chooseFileArr.includes("13")) {
        this.$message.error("请上传本人身份证正反面");
        return false
      }
      if(!this.chooseFileArr.includes("11")) {
        this.$message.error("请上传学历证书/留学生服务中心认证报告");
        return false
      }

      if(this.createBusiness == '个人创业'){
        if(!this.chooseFileArr.includes("7")) {
          this.$message.error("请上传法人营业执照");
          return false
        }
        if(!this.chooseFileArr.includes("6")) {
          this.$message.error("请上传个人就业合同");
          return false
        }
      }else if(this.createBusiness == '单位就业'){
        if(!this.chooseFileArr.includes("6")) {
          this.$message.error("请上传个人就业合同");
          return false
        }
      }

      return true
    },
    async saveFile() {
      const that = this;
      const data = await infoSave({
        id: getId(),
        name: this.name,
        idCard: this.idNumber,
        // photoId: this.photoId,
        password: this.password,
        age: this.age,
        gender: this.gender,
        nation: this.nation,
        phoneNumber: this.phoneNumber,
        // email: this.email,
        isGraduate: this.isGraduate,
        schoolProvince: this.schoolProvince,
        schoolCity: this.schoolCity,
        school: this.school,
        specalityXkml: this.specalityXkml,
        specalitySsml: this.specalitySsml,
        specality: this.specality,
        graduateDate: this.graduateDate,
        education: this.education,
        educationCard: this.educationCard,
        degree: this.degree,
        degreeCard: this.degreeCard,
        status: 0,
        opinion: this.opinion,
        checkCode: this.checkCode,
        registerDate: this.registerDate,
        checkDate: this.checkDate,
        residenceAddress: this.residenceAddress,
        // degreeNumber: this.degreeNumber,
        createBusiness: this.createBusiness,
        affiliatedBusiness: this.affiliatedBusiness,
        affiliatedCompany: this.affiliatedCompany,
        workAddress: this.workAddress,
        societyAccount: this.societyAccount,

        certificateType: parseInt(this.certificateType),
        liveAddress: this.liveAddress,
        studyType: this.studyType,
      });

      // console.log(data);
      if (data.code == 200) {
        this.$alert("保存成功", {
          confirmButtonText: "确定"
        }).then(({ value }) => {
          // location.reload();
        });
      }
    },
    submitAudit() {
      try {
        let flag = this.checkForm();
        if (!flag) return;
        // 附件校验
        let flag1 = this.checkAttach();
        if (!flag1) return;
      } catch (error) {
        console.log("表单验证功能有报错");
      }

      this.$confirm(
        "请确认以上信息由本人填写并承诺对信息的真实性负责，是否确认？",
        "提示"
      )
        .then(_ => {
          infoSave({
            id: getId(),
            name: this.name,
            idCard: this.idNumber,
            password: this.password,
            age: this.age,
            gender: this.gender,
            nation: this.nation,
            phoneNumber: this.phoneNumber,
            isGraduate: this.isGraduate,
            schoolProvince: this.schoolProvince,
            schoolCity: this.schoolCity,
            school: this.school,
            specalityXkml: this.specalityXkml,
            specalitySsml: this.specalitySsml,
            specality: this.specality,
            graduateDate: this.graduateDate,
            education: this.education,
            educationCard: this.educationCard,
            degree: this.degree,
            degreeCard: this.degreeCard,
            status: 1,
            opinion: this.opinion,
            checkCode: this.checkCode,
            registerDate: this.registerDate,
            checkDate: this.checkDate,

            certificateType: parseInt(this.certificateType),
            liveAddress: this.liveAddress,

            residenceAddress: this.residenceAddress,
            createBusiness: this.createBusiness,
            affiliatedBusiness: this.affiliatedBusiness,
            affiliatedCompany: this.affiliatedCompany,
            workAddress: this.workAddress,
            societyAccount: this.societyAccount,
            studyType: this.studyType,
          }).then(data => {
            if (data.code == 200) {
              this.$alert("提交成功", {
                confirmButtonText: "确定"
              }).then(({ value }) => {
                // location.reload();
                // this.$router.push("personalInfo");
                this.getPersonalInfo();
                this.changeDis();
              });
            }
          });
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="less" scoped>
select {
  border-color: #cccccc;
}
.top {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background: #f5e9e9;
  text-align: left;

  .title {
    line-height: 40px;
    width: 100px;
    background-color: #fff;
    color: red;
    font-weight: bolder;
    font-size: 18px;
    border-top: 2px solid #d10b0f;
    text-align: center;
  }
}
table {
  border-right: 1px solid #cccccc;

  border-bottom: 1px solid #cccccc;

  border-collapse: collapse;
  tr {
    height: 40px;
    td {
      border-left: 1px solid #cccccc;
      border-top: 1px solid #cccccc;

      background-color: white;
      // padding: 2px;
      padding: 2px 10px;
      font-size: 14px;
      font-family: "宋体";
      border-spacing: 1px;
      text-align: left;
    }
    th {
      border-left: 1px solid #cccccc;
      border-top: 1px solid #cccccc;

      background-color: white;
      padding: 2px;
      font-size: 14px;
      font-family: "宋体";
      text-align: right;
      text-align: center;
      // width: 50%;
    }
  }
  input[type="text"] {
    height: 30px;
    // width: 95%;
    width: 100%;
    border: solid 1px #cccccc;
    font-size: 14px;
    padding: 4px 12px;
  }
}
/deep/ .el-upload-list {
  display: flex;
  align-items: center;
  margin-left: 50px;
  a {
    display: inline-block;
  }
}
/deep/.el-upload-list__item:first-child {
  margin-top: 5px !important;
}

input:disabled {
  cursor: not-allowed;
  color: #aaa;
}
input[readonly] {
  cursor: not-allowed;
  color: #aaa;
}
select:disabled {
  cursor: not-allowed;
  color: #aaa;
}
textarea:disabled {
  cursor: not-allowed;
  color: #aaa;
}

.failPass {
  background: red;
}
</style>
