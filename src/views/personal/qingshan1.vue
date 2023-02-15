<template>
<!-- 产业领军人才3类 -->
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
            <div class="content" style="padding: 0px 20px 0px 140px;text-align: left;">
                <p>1.填写前请认真阅读《青山英才（产业领军人才）申报指引》。</p>
                <p>2.请按要求填写完整、全面、真实信息，不得空项、漏项，若无相关信息，请填写“无”。</p>
                <p>3.联系人、联系电话、电子邮箱：联系人应为具体负责办理申报事宜的工作人员，熟悉申报人、申报材料的相关情况，可以为申报人本人。联系电话请同时填写办公电话和手机号码，保证联系畅通。</p>
                <p>4.照片：为近期两寸正面免冠证件照（红底）。</p>
                <p>5.身份证件：指居民身份证或护照等有效身份证件及其号码。</p>
                <p>6.最高学历、学位、毕业院校及专业：填写申报人所获最高学历（学位）的毕业院校、专业及学位的全称。</p>
                <p>7.工作单位、职务（岗位）：指申报人目前工作关系所在单位及其现任职务（岗位），以社保关系为准，单位名称需填写规范全称。</p>
                <p>8申报人诚信承诺：申报人承诺填报的所有信息均真实有效，若有弄虚作假行为，取消本次入选资格和今后三年的申报资格，并承担相应的法律责任。后期纸质材料须由申报人亲笔签名，不得由他人代签。</p>
                <p>9.用人单位意见：由申报人所在单位对申报人各项条件进行审查，对符合条件的人选作出意见。</p>
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
              <el-form-item label="国籍:" prop="nationality">
                <el-input
                  v-model="form.nationality"
                  class="width360"
                ></el-input>
              </el-form-item>
              <el-form-item label="政治面貌:" prop="politic">
                <el-input v-model="form.politic" class="width360"></el-input>
              </el-form-item>
              <el-form-item label="证件类型:" prop="idType">
                <div class="customRow">
                  <el-radio-group v-model="form.idType" disabled>
                    <el-radio label="身份证" value="身份证"></el-radio>
                    <el-radio label="护照" value="护照"></el-radio>
                    <el-radio label="其他" value="护照"></el-radio>
                  </el-radio-group>
                  <!-- <el-input
                    v-show="form.idType == '其他'"
                    v-model="form.idTypeText"
                    style="width: 180px;margin-left: 20px;"
                    disabled
                  ></el-input> -->
                </div>
              </el-form-item>
              <el-form-item label="证件编号:" prop="idCode">
                <el-input v-model="form.idCode"  disabled></el-input>
              </el-form-item>
              <el-form-item label="联系电话:" prop="mobile">
                <el-input v-model="form.mobile" disabled></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱:" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="毕业院校:" prop="school">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
              <!-- <el-form-item label="毕业时间:" prop="graduationDate">
                <el-date-picker
                  v-model="form.graduationDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item> -->
              <el-form-item label="专业:" prop="major">
                <el-input v-model="form.major"></el-input>
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
              
             
              <!-- <el-form-item label="专业技术职务:" prop="technicalPosition">
                <el-input v-model="form.technicalPosition"></el-input>
              </el-form-item>
              <el-form-item label="社会兼职:" prop="techTitle">
                <el-radio-group v-model="form.socialPosition" class="customRow">
                  <el-radio label="无">无</el-radio>
                  <el-radio label="有">有</el-radio>
                  <el-input
                    v-show="form.socialPosition == '有'"
                    v-model="form.socialPositionText"
                    style="width:180px;margin-right:20px;"
                  ></el-input>
                </el-radio-group>
              </el-form-item> -->
              <!-- <el-form-item label="岗位性质:" prop="postNature">
                <el-radio-group v-model="form.postNature" class="customRow">
                  <el-radio label="核心技术骨干">核心技术骨干</el-radio>
                  >
                  <el-radio label="高级管理人员">高级管理人员 </el-radio>
                  <el-radio label="高级管理人员">高级管理人员 </el-radio>
                </el-radio-group>
              </el-form-item> -->
              
              <el-form-item label="企业名称:" prop="">
                <el-input v-model="form.componyName" disabled></el-input>
              </el-form-item>
              <el-form-item label="产业领域:" prop="industry" >
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
              <el-form-item label="技术职称:" prop="techTitle">
                <el-input v-model="form.techTitle"></el-input>
              </el-form-item>
              <el-form-item label="取得时间:" prop="techTitleDate">
                <el-date-picker
                  v-model="form.techTitleDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="公司地址:" prop="companyAddress">
                <el-input v-model="form.companyAddress" disabled></el-input>
              </el-form-item>
              <el-form-item label="法人代表:" prop="represent">
                <el-input v-model="form.represent" disabled></el-input>
              </el-form-item>
               <!-- <el-form-item label="注册时间:" prop="registerDate">
                <el-date-picker
                  v-model="form.registerDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  disabled
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="实际到位资金:" prop="registerCapital">
                <el-input v-model="form.registerCapital" disabled></el-input>万元
              </el-form-item>
              <el-form-item label="资本构成和股权结构:" >
                <el-input
                  type="textarea"
                  v-model="form.struct"
                  :rows="3"
                  placeholder="列明包括申报人在内的主要股东、资本、股权份额等"
                  disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="是否上市:" prop="">
                <el-radio-group v-model="form.isOnsale">
                  <el-radio label="true">是</el-radio>
                  <el-radio label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="是否为民营科技企业:" prop="">
                <el-radio-group v-model="form.isHighTech">
                  <el-radio label="true">是</el-radio>
                  <el-radio label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="主营业务:" prop="compMajor">
                <el-input v-model="form.compMajor" disabled></el-input>
              </el-form-item>
              <hr> -->
              <!-- <el-form-item label="经营情况:" class="mergeCol3">
                <span style="width:150px;display: inline-block;">2018年（万元）</span>
                <span style="width:150px;display: inline-block;">2019年（万元）</span>
                <span style="width:150px;display: inline-block;">2020年（万元）</span>
              </el-form-item>
              <el-form-item label="主营业务收入:" class="mergeCol3" prop="agoSale">
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.blastSale"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.lastSale"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.agoSale"
                    placeholder="0"
                    disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="经营情况-其他成本:" class="mergeCol3" prop="">
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.blastOthers"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.lastOthers"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.agoOthers"
                    placeholder="0"
                    disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="净利润:" class="mergeCol3" prop="agoProfit">
                
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.blastProfit"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.lastProfit"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.agoProfit"
                    placeholder="0"
                    disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="研发投入:" class="mergeCol3" prop="agoDev">
                
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.blastDev"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.lastDev"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.agoDev"
                    placeholder="0"
                    disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="纳税:" class="mergeCol3" prop="agoTax">
                
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.blastTax"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.lastTax"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:150px;"
                  type="text"
                  v-model="form.agoTax"
                    placeholder="0"
                    disabled
                ></el-input>
              </el-form-item>
              <hr>
              <el-form-item label="单位总人数:" prop="totalCount">
                <el-input v-model="form.totalCount" placeholder="0" disabled></el-input>
              </el-form-item>
              <el-form-item label="入选国家、省、市级人才计划:" prop="planCount">
                <el-input v-model="form.planCount" placeholder="0" disabled></el-input>
              </el-form-item>
              <el-form-item label="人员类别:" class="mergeCol3">
                <span style="width:100px;display: inline-block;">本科学历</span>
                <span style="width:100px;display: inline-block;">硕士学历</span>
                <span style="width:100px;display: inline-block;">博士学历</span>
                <span style="width:100px;display: inline-block;">留学经历</span>
              </el-form-item>
              <el-form-item label="人员情况:" class="mergeCol3" prop="agoSale">
                <el-input
                  style="width:100px;"
                  type="text"
                  v-model="form.regularCount"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:100px;"
                  type="text"
                  v-model="form.masterCount"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:100px;"
                  type="text"
                  v-model="form.doctorCount"
                    placeholder="0"
                    disabled
                ></el-input>
                <el-input
                  style="width:100px;"
                  type="text"
                  v-model="form.abroadCount"
                    placeholder="0"
                    disabled
                ></el-input>
              </el-form-item> -->
              
              
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
              <el-form-item label="工作经历:" prop="workExperience">
                <el-input
                  type="textarea"
                  v-model="form.workExperience"
                  :rows="5"
                  placeholder="按时间顺序，包括“时间、国家、单位、职务”，兼职请注明
如：
19XX年7月-20XX年X月 中国 XXXX有限公司XX部门XX项目组负责人"
                ></el-input>
              </el-form-item>
              <!-- <el-form-item label="主持（参与）过的主要项目:">
                <el-input
                  type="textarea"
                  v-model="form.project"
                  :rows="5"
                  placeholder="项目起止时间、性质和来源、经费总额、参与人数、申报人作用贡献等"
                ></el-input>
              </el-form-item> -->
              <el-form-item label="主要成果:" prop="contrib">
                <el-input
                  type="textarea"
                  v-model="form.contrib"
                  :rows="5"
                  placeholder="代表性论文、专利、产品或服务，每类不超过5项"
                ></el-input>
              </el-form-item>
              
              <!-- <el-form-item label="企业简介:" prop="memo">
                <el-input
                  style="width:560px;"
                  rows="3"
                  type="textarea"
                  v-model="form.memo"
                    placeholder="单位简介（200字）"
                    disabled
                ></el-input>
              </el-form-item> -->

              <!-- <el-form-item label="创新能力:" prop="idea">
                <el-input
                  style="width:560px;"
                  rows="5"
                  type="textarea"
                  v-model="form.idea"
                    placeholder="单位科研实力、产学研合作情况、核心技术及市场前景等"
                ></el-input>
              </el-form-item> -->
              <!-- <el-form-item label="投资机构投资情况:">
                <el-input
                  style="width:560px;"
                  rows="5"
                  type="textarea"
                  v-model="form.aInvest"
                  placeholder="获得哪些知名投资机构A轮投资、投资时间、投资额等"
                  disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="核心团队成员:" >
                <el-input
                  style="width:560px;"
                  rows="5"
                  type="textarea"
                  v-model="form.team"
                  placeholder="核心团队成员基本情况及主要业绩"
                  disabled
                ></el-input>
              </el-form-item> -->
              <hr>

              <el-form-item class="rowLabel" label="您是否和其他任何单位签订过仍然有效的竞业禁止协议，如有，请列出:" prop="hasOtherAgreement">
                <el-radio-group v-model="form.hasOtherAgreement" class="customRow">
                  <el-radio :label="false">无</el-radio>
                  <el-radio :label="true">有</el-radio>
                  <el-input
                    v-model="form.otherAgreement"
                    style="width:180px;margin-right:20px;"
                    :disabled="!form.hasOtherAgreement"
                  ></el-input>
                </el-radio-group>
              </el-form-item>

              <!-- 附件 -->
              <cyApply1 
                v-if="title == 'qs_leaders_innovation' || title == 'qs_leaders_startup' || title=='cylj3'" 
                :type="title" :data="attachmentReqDTOS" 
                ref="attachmentRef"
                @setDelArr="setDelArr"
                @attackCheck="attackCheck(1)"
              ></cyApply1>
              <!-- <cyApply1 v-if="$route.query.i == 1 ? true : false" />
              <cyApply2 v-if="$route.query.i == 2 ? true : false" />
              <cyApply3 v-if="$route.query.i == 3 ? true : false" /> -->

              <div class="foot">
                <el-button @click="curTab = 1">上一步</el-button>
                <el-button @click="save(0)" class="saveBtn" id="saveBtn" :disabled="btnDis">保存</el-button>
                <el-button @click="submit(1)" class="submitBtn" :disabled="btnDis">提交</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cyApply1 from "./components/cyApply1.vue";
// import cyApply2 from "./components/cyApply2.vue";
// import cyApply3 from "./components/cyApply3.vue";
import { personalInfo, getTalentData, saveCYLJ } from "@/api/personal";
import { getCompany } from "@/api/qingShang";
import { getId } from "@/utils/auth";
import { mapState } from 'vuex';
import head from '@/assets/imgs/head.jpg';

export default {
  components: { cyApply1},
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

        techTitleDate: '',
        techTitle: '',
        represent: '',
        registerDate: '',
        registerCapital: '',
        struct: '',
        isOnsale: '',
        isHighTech: '',
        compMajor: '',
        planCount: '',

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
        blastOthers: "",
        lastOthers: "",
        agoOthers: "",
        totalCount: "",
        regularCount: "",
        masterCount: "",
        doctorCount: "",
        abroadCount: "",
        aInvest: "",
        team: "",

        memo: "",
        idea: "",
        companyId: "",
      },
      // 头像
      header: head,
      personImgData: null,

      rules: {
        name: [{ required: true, message: "请输入内容", trigger: "blur" }],
        gender: [{ required: true, message: "请选择", trigger: "blur" }],
        birthDate: [{ required: true, message: "请选择", trigger: "blur" }],
        isOnsale: [{ required: true, message: "请选择", trigger: "blur" }],
        isHighTech: [{ required: true, message: "请选择", trigger: "blur" }],
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
        // company: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // companyAddress: [
        //   { required: true, message: "请输入内容", trigger: "blur" }
        // ],
        // companyTel: [
        //   { required: true, message: "请输入内容", trigger: "blur" }
        // ],
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
        techTitleDate: [{ required: true, message: "请输入内容", trigger: "blur" }],
        techTitle: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // represent: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // registerDate: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // registerCapital: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // compMajor: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // planCount: [{ required: true, message: "请输入内容", trigger: "blur" }],
        // totalCount: [{ required: true, message: "请输入内容", trigger: "blur" }],
        workExperience: [{ required: true, message: "请输入内容", trigger: "blur" }],

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

    // console.log(this.personalInfo, this.userInfo);
  },
  computed: {
    ...mapState(["personalInfo", "userInfo"]),
    title() {
      return this.$route.query.title;
    },
    // 通过哪个行政级别过来的 包含  城市-city，区县-area
    // level() {
    //   return this.$route.params.level || "area";
    // }
    btnDis() {
      if(!this.$route.query.talentId) {
        return false
      }else if(this.status == 0 || this.status == 104) {
        return false
      }
      return true
    }
  },
  methods: {
    queryData() {
      // let id = '0b5112f1-e8e4-4d64-bc49-3320c79f380b'
      let id = this.$route.query.talentId
      if(!id) {
        console.log(this);
        let f = this.form
        
        f.name = this.userInfo.name
        f.gender = this.userInfo.gender
        f.mobile = this.userInfo.mobile
        let idType = this.userInfo.idType
        f.idType = idType == 0 ? '身份证' : idType == 3 ? '护照' : '其他'
        f.idCode = this.userInfo.idNumber

        f.company =  this.$route.query.companyName
        f.companyId =  this.$route.query.companyId

        // 公司信息
        getCompany({
          idNumber: this.userInfo.idNumber
        }).then(res => {
          if(res?.code == 200) {
            let c = res.data
            f.componyName =  c.name
            f.companyAddress =  c.address
            f.companyTel =  c.phone
            f.companyFax =  c.fax
            f.companyId =  c.id
            f.represent =  c.represent
            f.registerDate =  c.registerDate
            f.registerCapital =  c.registerCapital || 0
            f.struct =  c.struct
            f.isOnsale =  c.isOnsale ? 'true' : 'false'
            f.isHighTech =  c.isHighTech ? 'true' : 'false'
            f.compMajor =  c.major

            f.agoSale =  c.agoSale || 0
            f.blastSale =  c.blastSale || 0
            f.lastSale =  c.lastSale || 0
            f.agoProfit =  c.agoProfit || 0
            f.blastProfit =  c.blastProfit || 0
            f.lastProfit =  c.lastProfit || 0
            f.agoDev =  c.agoDev || 0
            f.blastDev =  c.blastDev || 0
            f.lastDev =  c.lastDev || 0
            f.agoTax =  c.agoTax || 0
            f.blastTax =  c.blastTax || 0
            f.lastTax =  c.lastTax || 0
            f.blastOthers =  c.blastOthers || 0
            f.lastOthers =  c.lastOthers || 0
            f.agoOthers =  c.agoOthers || 0
            f.totalCount =  c.totalCount || 0
            f.regularCount =  c.regularCount || 0
            f.masterCount =  c.masterCount || 0
            f.doctorCount =  c.doctorCount || 0
            f.abroadCount =  c.abroadCount || 0
            f.aInvest =  c.aInvest
            f.team =  c.team
            f.memo =  c.memo
          }
        })

        return 
      }
      let item = "getDistrict/";
      // if (this.level == "area") {
      //   item = "getDistrict/";
      // }
      let url = `gateway/talentserver/talent/` + item + id;
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
          f.gender = d.gender || this.userInfo.gender || 'male'
          f.mobile = d.mobile || this.userInfo.mobile
          // f.idType = d.idType || this.userInfo.idType || '身份证'
          f.idCode = d.idNumber || this.userInfo.idNumber
          f.idType = d.idName == '身份证' || d.idName == '护照' ? d.idName : '其他'
          f.idTypeText = f.idType == '身份证' || f.idType == '护照' ? "" : d.idName

          f.birthDate =  d.birthday
          f.nationality =  d.nationality
          f.politic =  d.politic
          // f.idTypeText = f.idType == '其他' ?  d.other : ''
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
          f.techTitleDate =  d.techTitleDate
          f.techTitle =  d.techTitle
          f.planCount =  d.planCount

          // f.company =  d.company
          // f.companyAddress =  d.companyAddress
          // f.companyTel =  d.companyTel
          f.company =  this.$route.query.companyName
          f.companyId =  this.$route.query.companyId
          let companyReqDTOs = d.companyReqDTOs
          if(companyReqDTOs && companyReqDTOs.length > 0) {
            let c = companyReqDTOs[0]
            f.componyName =  c.name
            f.companyAddress =  c.address
            f.companyTel =  c.phone
            f.companyFax =  c.fax
            f.companyId =  c.id
            f.represent =  c.represent
            f.registerDate =  c.registerDate
            f.registerCapital =  c.registerCapital || 0
            f.struct =  c.struct
            f.isOnsale =  c.isOnsale ? 'true' : 'false'
            f.isHighTech =  c.isHighTech ? 'true' : 'false'
            f.compMajor =  c.major

            f.agoSale =  c.agoSale || 0
            f.blastSale =  c.blastSale || 0
            f.lastSale =  c.lastSale || 0
            f.agoProfit =  c.agoProfit || 0
            f.blastProfit =  c.blastProfit || 0
            f.lastProfit =  c.lastProfit || 0
            f.agoDev =  c.agoDev || 0
            f.blastDev =  c.blastDev || 0
            f.lastDev =  c.lastDev || 0
            f.agoTax =  c.agoTax || 0
            f.blastTax =  c.blastTax || 0
            f.lastTax =  c.lastTax || 0
            f.blastOthers =  c.blastOthers || 0
            f.lastOthers =  c.lastOthers || 0
            f.agoOthers =  c.agoOthers || 0
            f.totalCount =  c.totalCount || 0
            f.regularCount =  c.regularCount || 0
            f.masterCount =  c.masterCount || 0
            f.doctorCount =  c.doctorCount || 0
            f.abroadCount =  c.abroadCount || 0
            f.aInvest =  c.aInvest
            f.team =  c.team
            f.memo =  c.memo
       
           
          }

          f.hasOtherAgreement =  d.hasOtherAgreement
          f.otherAgreement =  d.otherAgreement

          f.educationalExperience =  d.edu
          f.workExperience =  d.work
          f.project =  d.project
          f.contrib =  d.contrib

          this.status = d.status

          if(attachmentReqDTOS) {
            this.attachmentReqDTOS = attachmentReqDTOS
  
            let headAtta = attachmentReqDTOS.filter(e => e.type == 'HEADER')
            if(headAtta.length > 0) {
              this.header = headAtta[0].url
              this.personImgData = headAtta[0]
            }
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
      // formData.append("idType", this.form.idType);
      if(this.form.idType == '身份证' || this.form.idType == '护照') {
        formData.append("idName", this.form.idType);
      }else{
        formData.append("idName", this.form.idTypeText || this.form.idType);
      }
      formData.append("other", this.form.idTypeText);
      formData.append("idNumber", this.form.idCode);

      formData.append("birthday", this.form.birthDate);
      formData.append("nationality", this.form.nationality);
      formData.append("politic", this.form.politic);
      formData.append("education", this.form.education);
      formData.append("degree", this.form.degree);
      formData.append("school", this.form.school);
      formData.append("graduationDate", this.form.graduationDate);
      formData.append("field", this.form.major);
      formData.append("techPosition", this.form.technicalPosition);
      // formData.append("techTitle", this.form.socialPosition == '有' ? this.form.socialPositionText : this.form.socialPosition);
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

      formData.append("techTitleDate", this.form.techTitleDate);
      formData.append("techTitle", this.form.techTitle);
      formData.append("planCount", this.form.planCount);

      // 公司
      // formData.append("companyName", this.form.company);
      formData.append("companyName", this.form.componyName);
      formData.append("companyReqDTOs[0].address", this.form.companyAddress);
      // formData.append("companyReqDTOs[0].name", this.form.company);
      formData.append("companyReqDTOs[0].name", this.form.componyName);
      formData.append("companyReqDTOs[0].id", this.form.companyId);
      formData.append("companyReqDTOs[0].registerCapital", this.form.registerCapital);
      formData.append("companyReqDTOs[0].represent", this.form.represent);
      formData.append("companyReqDTOs[0].registerDate", this.form.registerDate);
      formData.append("companyReqDTOs[0].struct", this.form.struct);
      formData.append("companyReqDTOs[0].isOnsale", this.form.isOnsale == 'true' ? 1 : 0);
      formData.append("companyReqDTOs[0].isHighTech", this.form.isHighTech == 'true' ? 1 : 0);
      formData.append("companyReqDTOs[0].major", this.form.compMajor);
      formData.append("companyReqDTOs[0].agoSale", this.form.agoSale);
      formData.append("companyReqDTOs[0].blastSale", this.form.blastSale);
      formData.append("companyReqDTOs[0].lastSale", this.form.lastSale);
      formData.append("companyReqDTOs[0].agoProfit", this.form.agoProfit);
      formData.append("companyReqDTOs[0].blastProfit", this.form.blastProfit);
      formData.append("companyReqDTOs[0].lastProfit", this.form.lastProfit);
      formData.append("companyReqDTOs[0].agoDev", this.form.agoDev);
      formData.append("companyReqDTOs[0].blastDev", this.form.blastDev);
      formData.append("companyReqDTOs[0].lastDev", this.form.lastDev);
      formData.append("companyReqDTOs[0].agoTax", this.form.agoTax);
      formData.append("companyReqDTOs[0].blastTax", this.form.blastTax);
      formData.append("companyReqDTOs[0].lastTax", this.form.lastTax);
      formData.append("companyReqDTOs[0].blastOthers", this.form.blastOthers);
      formData.append("companyReqDTOs[0].lastOthers", this.form.lastOthers);
      formData.append("companyReqDTOs[0].agoOthers", this.form.agoOthers);
      formData.append("companyReqDTOs[0].totalCount", this.form.totalCount);
      formData.append("companyReqDTOs[0].regularCount", this.form.regularCount);
      formData.append("companyReqDTOs[0].masterCount", this.form.masterCount);
      formData.append("companyReqDTOs[0].doctorCount", this.form.doctorCount);
      formData.append("companyReqDTOs[0].abroadCount", this.form.abroadCount);
      formData.append("companyReqDTOs[0].aInvest", this.form.aInvest);
      formData.append("companyReqDTOs[0].team", this.form.team);
      formData.append("companyReqDTOs[0].memo", this.form.memo);

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
          console.log("error submit!!");
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
