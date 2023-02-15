<template>
  <div v-if="isShowForm" class="reportOnline">
    <div class="top-title">
      <div class="title-left">大学毕业生租赁房申请</div>
    </div>
    <table width="100%" class="Form1">
      <tbody>
        <tr>
          <td rowspan="4">基本信息</td>
          <td colspan="1">姓名：</td>
          <td style="width:150px">
            <input
              :disabled="dis"
              name="labName"
              type="text"
              v-model="name"
              readonly
            />
          </td>
          <td style="width:40px">性别：</td>
          <td>
            <!-- :readonly="isReadonlyPersonTable" -->
            <input
              :disabled="isReadonlyPersonTable || dis"
              type="radio"
              name="gender"
              value="1"
              v-model.trim="gender"
            /><label for="rabGender_0">男</label>

            <input
              :disabled="isReadonlyPersonTable || dis"
              type="radio"
              name="gender"
              value="0"
              v-model.trim="gender"
            /><label for="rabGender_1">女</label>
          </td>
          <td colspan="1" style="width:80px">民族：</td>
          <td>
            <input
              :disabled="dis"
              name="nationality"
              type="text"
              v-model="nation"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>

        <tr>
          <td>证件号码：</td>
          <td colspan="5">
            <!-- <span style="width:40%">{{ zjlx | certificateTypeName }}</span>
            —
            <span style="width:56%;">{{ idCard }}</span> -->
            <select
              name="ddlzjlx"
              class="form-control"
              style="width:40%"
              v-model.trim="zjlx"
              disabled="true"
              :readonly="isReadonlyPersonTable"
            >
              <!-- :disabled="dis || isReadonlyPersonTable" -->
              <option value="">—请选择类型—</option>
              <option value="0">身份证</option>
              <option value="2">港澳台通行证</option>
              <option value="3">护照</option>
            </select>
            —
            <input
              name="txtIdCard"
              v-model.trim="idCard"
              type="text"
              style="width:56%;"
              disabled="true"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>

        <tr>
          <td>户籍地址：</td>
          <td colspan="5">
            <input
              name="txtHouseholdAddress"
              value=""
              type="text"
              class="wenzishur"
              rq="true"
              tag="请输入户籍地址！"
              v-model.trim="houseHoldAddress"
              :disabled="dis"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>

        <tr>
          <td>现住地址：</td>
          <td colspan="5">
            <input
              name="txtLiveAddress"
              value=""
              type="text"
              class="wenzishur"
              rq="true"
              tag="请输入现住地址！"
              v-model.trim="liveAddress"
              :disabled="dis"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>
        <tr>
          <td rowspan="1">通讯方式</td>
          <td>移动电话：</td>
          <td colspan="5">
            <input
              name="labPhoneNumber"
              v-model.trim="phoneNumber"
              type="text"
              id="labPhoneNumber"
              rq="true"
              tag="请输入移动电话！"
              :disabled="dis"
              readonly
            />
          </td>
        </tr>
        <tr>
          <td rowspan="5">学历信息</td>
          <td>毕业院校：</td>
          <td colspan="2">
            <span></span>
            <input
              type="text"
              :disabled="dis"
              value=""
              v-model.trim="school"
              :readonly="isReadonlyPersonTable"
            />
          </td>
          <td>毕业时间：</td>
          <td colspan="2">
            <el-date-picker
              v-model="graduateDate"
              type="date"
              :disabled="dis"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              :readonly="isReadonlyPersonTable"
            >
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td>专业：</td>
          <td colspan="6">
            <select
              class="xialakuang"
              v-model.trim="specalityXkml"
              :disabled="dis || isReadonlyPersonTable"
              @change="getThrSubject"
              style="width:150px;height:30px"
            >
              <option value="">—请选择—</option>
              <option v-for="(v, i) in friList" :key="i" :value="v.id">{{
                v.dictName
              }}</option></select
            >
            —
            <select
              class="xialakuang"
              :disabled="dis || isReadonlyPersonTable"
              v-model.trim="specalitySsml"
              @change="getThrSubject2"
              style="width:150px;height:30px"
              ><option value="">—请选择—</option>
              <option v-for="(v, i) in stuList" :key="i" :value="v.id">{{
                v.dictName
              }}</option></select
            >
            —

            <select
              class="xialakuang"
              v-model.trim="specality"
              :value="specality"
              :disabled="dis || isReadonlyPersonTable"
              style="width:150px;height:30px"
              ><option value="">—请选择—</option
              ><option v-for="(v, i) in stuList2" :key="i" :value="v.id">{{
                v.dictName
              }}</option></select
            >
          </td>
        </tr>

        <tr>
          <td>学历：</td>
          <td colspan="2">
            <select
              name="education"
              class="xialakuang"
              v-model.trim="education"
              :disabled="dis || isReadonlyPersonTable"
              style="width:390px;height:30px"
            >
              <option value="">—请选择—</option>
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
              type="text"
              :disabled="dis"
              v-model.trim="educationCard"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>

        <tr>
          <td>学位：</td>
          <td colspan="2">
            <select
              name="degree"
              v-model.trim="degree"
              :disabled="dis || isReadonlyPersonTable"
              style="width:390px;height:30px"
            >
              <option value="">—请选择—</option>
              <option value="FFF9AFFC-6ADF-4673-9384-161D4EEAD08E"
                >学士及以下</option
              >
              <option value="0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11">硕士</option>
              <option value="9A0EE126-5799-4C7F-A477-50CA214F3A49">博士</option>
            </select>
          </td>
          <td>学位证号：</td>
          <td colspan="2">
            <input
              type="text"
              class="wenzishur"
              tag="请输入学位证号！"
              v-model.trim="degreeCard"
              :disabled="dis"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>
        <tr>
          <td>
            验证码:
          </td>
          <td colspan="2">
            <a
              href="http://www.chsi.com.cn/"
              target="_blank"
              style="color: #00a9ec;display:inline-block;width:110px"
              >点击学信网获取</a
            >
            <input
              type="text"
              v-model.trim="checkCode"
              :disabled="dis"
              style="width:280px;display:inline-block;"
              :readonly="isReadonlyPersonTable"
            />
          </td>
          <td>学习形式：</td>
          <td colspan="2">
            <select
              class="xialakuang"
              v-model.trim="studyType"
              :disabled="dis"
              style="width:100%;height:30px"
            >
              <option value>—请选择—</option>
              <option value = "全日制">全日制</option>
              <option value = "非全日制">非全日制</option>
            </select>
          </td>
        </tr>
        <tr>
          <td rowspan="3">创业就业信息</td>
          <td colspan="1">创业就业类型：</td>
          <td colspan="2">
            <select
              name=""
              style="width:390px;height:30px"
              v-model="type"
              :disabled="dis || isReadonlyPersonTable"
            >
              <option value="个人创业">个人创业</option>
              <option value="单位就业">单位就业</option>
              <option value="网签职业">网签职业</option>
              <option value="待业">待业</option>
            </select>
          </td>
          <td>所在行业：</td>
          <td colspan="2">
            <select
              name="ddlIndustryCategory"
              class="form-control"
              v-model.trim="industryCategory"
              :disabled="dis || isReadonlyPersonTable"
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
              <option value="9272339EB2C948ACB4E15DEC262C66B">物流/运输</option>
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
          <td>所在单位：</td>
          <td colspan="2">
            <input
              name="txtUnit"
              type="text"
              value=""
              class="wenzishur"
              rq="true"
              tag="请输入所在单位！"
              v-model.trim="unit"
              :disabled="dis"
              :readonly="isReadonlyPersonTable"
            />
          </td>
          <td>单位地址：</td>
          <td colspan="2">
            <input
              name="txtUnitAddress"
              type="text"
              value=""
              class="wenzishur"
              rq="true"
              tag="请输入单位地址！"
              v-model.trim="unitAddress"
              :disabled="dis"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>
        <tr>
          <td>社保账号:</td>
          <td colspan="6">
            <input
              type="text"
              v-model="societyAccount"
              :readonly="isReadonlyPersonTable"
            />
          </td>
        </tr>
        <tr>
          <td rowspan="5">家庭成员情况</td>
          <td>婚姻状态:</td>
          <td colspan="6">
            <select
              style="width:308px;height:30px"
              :disabled="dis"
              v-model="married"
            >
              <option value="未婚">未婚</option>
              <option value="已婚">已婚</option>
              <option value="离异">离异</option>
              <option value="丧偶">丧偶</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>与申请人关系</td>
          <td>姓名</td>
          <td colspan="4">证件号码</td>
        </tr>
        <tr v-for="(v, i) in studentFamilies" :key="i">
          <td>
            <select
              name="ddlRelation3"
              class="form-control"
              style="width:100px;"
              v-model.trim="v.relation"
              :disabled="dis"
            >
              <option value="">—请选择—</option>
              <!-- <option value="0">父母</option>
              <option value="1">配偶</option>
              <option value="2">子女</option> -->

              <option value="3">父亲</option>
              <option value="4">母亲</option>
              <option value="1">配偶</option>
            </select>
          </td>
          <td>
            <input
              name="txtMemberName3"
              type="text"
              value=""
              class="wenzishur"
              v-model.trim="v.memberName"
              :disabled="dis"
            />
          </td>
          <td colspan="4">
            <select
              name="ddlfzjlx3"
              id="ddlfzjlx3"
              class="form-control"
              style="width:93px;"
              v-model.trim="v.zjlx"
              :disabled="dis"
            >
              <option value="">—请选择类型—</option>
              <!-- <option value="0">身份证</option>
              <option value="1">港澳台身份证</option>
              <option value="2">护照</option>
              <option value="3">户口簿</option>
              <option value="4">军官证(士兵证)</option> -->

              <option value="0">身份证</option>
              <option value="2">港澳台通行证</option>
              <option value="3">护照</option>
            </select>
            —
            <input
              name="txtMemberIDcard3"
              type="text"
              value=""
              :id="'txtMemberIDcard3_' + i"
              class="wenzishur"
              style="width:70%;"
              v-model.trim="v.memberIdcard"
              :disabled="dis"
            />
          </td>
        </tr>
        <tr class="afterMR">
          <td>配租意向</td>
          <td>配租意向区域</td>
          <td colspan="5">
            <select
              name="ddlRelation3"
              class="form-control"
              style="width:311px;"
              v-model.trim="leaseIntentionArea"
              :disabled="dis"
            >
              <option value="">—请选择—</option>
              <option value="9BE15342-BC28-45D4-A358-9C614349A03F"
                >江汉区</option
              >
              <option value="88FF32FB-8D80-483E-84AE-AF61FCB4EC6A"
                >江岸区</option
              >
              <option value="B16CA8CB-636C-4FF1-8211-EF6B51CDAA27"
                >硚口区</option
              >
              <option value="D1D5782A-6369-4766-AFCB-9F58668EBF43"
                >汉阳区</option
              >
              <option value="EB5285A8-C841-4F7C-A39F-3F31FD332C12"
                >武昌区</option
              >
              <option value="1F8C8A6C-0322-4210-90AB-534ED4668B8A"
                >洪山区</option
              >
              <option value="1988F7F5-4FE9-4992-9662-9F64344744B1"
                >青山区</option
              >
              <option value="5DA2D683-161D-4357-8ECB-C3519BD9E571"
                >东湖新技术开发区</option
              >
              <option value="58B27BE0-E1EE-4F0B-A070-634AB8931871"
                >江夏区</option
              >
              <option value="3E3ECD5E-9976-4A74-9BA1-73A1CF5D2624"
                >东西湖区</option
              >
              <option value="689E478A-F499-428E-9340-F18FD11199C3"
                >黄陂区</option
              >
              <option value="41050CBE-264E-4E56-9585-4F49F0D5CF5C"
                >蔡甸区</option
              >
              <option value="9A4FAA76-4C40-4CD0-A6B3-A8F3ECDF2DED"
                >新洲区</option
              >
              <option value="42403F88-4D60-4980-90C1-BC4BD124581C"
                >武汉经济技术开发区（汉南区）</option
              >
            </select>
          </td>
        </tr>
        <tr>
          <td>备注</td>
          <td colspan="6">
            <textarea
              placeholder="备注200字以内"
              name="txtRemark"
              rows="2"
              cols="20"
              class="form-control"
              style="height:80px;"
              v-model.trim="tip"
              :disabled="dis"
              @keydown="textareaKeyDown"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="list_news clearfix biaodan_m2">
      <table class="Form1" style="width: 100%">
        <tbody>
          <tr>
            <th>
              <span
                class="NewSet"
                style="cursor: pointer;text-decoration:none;color:red;"
                ><b @click="lookFile">*上传资料规范（点击查看）</b></span
              >
              <el-dialog
                title="上传资料规范"
                :visible.sync="dialogVisible"
                width="50%"
                style="text-align:left"
              >
                <span>这是一段信息</span>
                <tipFile />
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = false"
                    >确 定</el-button
                  >
                </span>
              </el-dialog>

              <select
                name="FileUploadControl1$ddlDict"
                class="form-control"
                style="width: 40%"
                v-model.trim="chooseFile"
                :disabled="dis"
              >
                <!-- 租赁 -->
                <option value="">--请选择--</option>
                <option value="18">父亲身份证正反面</option>
                <option value="19">母亲身份证正反面</option>
                <option value="20">配偶身份证正反面</option>
                <option value="9">户口簿</option>
                <option value="4">婚姻登记凭证</option>
                <!-- <option value="5">学历和学位证书</option> -->
                <!-- <option value="21">社保缴纳凭据、劳动合同或在职证明</option> -->
                <!-- <option value="22">股权证明</option>
                <option value="8">其他</option> -->

                <!-- 个人 -->
                <option value="11">学历证书/留学生服务中心认证报告</option>
                <option value="10">个人登记照</option>
                <option value="13">本人身份证正反面</option>
                <option value="5">学位证书</option>
                <option value="7">法人营业执照</option>
                <option value="6">个人就业合同</option>
                <option value="16">社保卡</option>
              </select>
            </th>
            <th style="display:flex;height:40px;align-items:center;">
              <input
                type="file"
                ref="file"
                name="FileUploadControl1$FileUpload1"
                style="width:100%;"
                @change="getFile"
                :disabled="dis"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="list_news clearfix biaodan_m2">
      <table
        class="Form1"
        style="width: 100%"
        title="认定资料"
        data-options="toolbar:FileUploadControl1_tbupload"
      >
        <thead>
          <tr>
            <th style="text-align:center;width:50%">文件</th>
            <th style="text-align:center;width: 100px">分类</th>
            <th style="text-align:center;width: 120px">上传时间</th>
            <th style="text-align:center;width: 100px">操作</th>
          </tr>
        </thead>
        <tbody id="fileList" v-for="(v, i) in file" :key="i">
          <tr>
            <td>{{ v.name }}</td>
            <td>{{ chooseFileArr[i] | idName }}</td>
            <td>{{ v.time | formatDate }}</td>

            <td>
              <a
                style="margin-left: 10px;"
                v-if="hasDownLoad(v.isPerson)"
                @click="downFile(v)"
                >下载</a
              >
              <!-- v-if="hasDownLoad(v)" -->
              <!-- v-if="(v.isPerson && isReadonlyPersonTable) || saveBtnStatus" -->
              <a style="margin-left: 10px;" v-else @click="delFile(v)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="anniu_m">
      <span v-if="status == '通过'" class="adoptBtn">审核通过</span>
      <span v-else>
        <input
          type="button"
          v-if="saveBtnStatus"
          value="审核中"
          :disabled="dis"
          style="width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;"
        />
        <span v-else>
          <input
            type="button"
            value="保存"
            :disabled="dis"
            @click="getReportOnline(1)"
            style="margin-right: 20px;width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;cursor:pointer;"
          />
          <input
            type="button"
            value="提交"
            :disabled="dis"
            @click="getReportOnline(2)"
            style="width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;cursor:pointer;"
          />
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { getId, getToken } from "../../../utils/auth";
import {
  repOnline,
  thrSubject,
  friSubject,
  attachmentDownLoad,
  getOneById,
} from "@/api/personal";
import { apartmentLeaseApplySave } from '../../../api/house.js';
import { mapState } from "vuex";
import tipFile from "./tipFile.vue";

export default {
  components: { tipFile },
  // beforeRouteEnter: (to, from, next) => {
  //   if (getToken()) {
  //     next();
  //   } else {
  //     if (to.path === "login") {
  //       next();
  //     } else {
  //       next("login");
  //     }
  //   }
  // },
  data() {
    return {
      married: "",
      id: "",
      name: "",
      // marital: "",
      gender: "",
      nation: "",
      idCard: "",
      zjlx: "",
      phoneNumber: "",
      weixin: "",
      school: "",
      graduateDate: "",
      degreeCard: "",
      type: "",
      unit: "",
      unitAddress: "",
      houseHoldAddress: "",
      liveAddress: "",
      // mailingAddress: "",
      studentFamilies: [],
      leaseIntentionArea: "",
      educationCard: "",
      education: "",
      degree: "",
      // specality: "",
      // specalityType: "",
      // degreeCard: "",
      // isSingleRoom: "",
      industryCategory: "",
      // 备注
      tip: "",
      chooseFile: "",
      chooseFileArr: [],
      chooseFileArr1: [],
      file: [],
      // relation: "",
      saveBtnStatus: false, // 表单提交按钮的状态
      status: "",
      dis: true,
      attachments: [],
      delAttachmentIds: [], // 删除附件的id

      itemSaveId: "", // 保存时接口返回的id

      // 三级
      friList: [],
      stuList: [],
      stuList2: [],
      specalityXkml: "",
      specalitySsml: "",
      specality: "",
      //验证码
      checkCode: "",
      studyType: "",

      societyAccount: "",

      personTableStatus: "", // 个人信息表单的状态
      dialogVisible: false
    };
  },
  created() {
    this.id = getId();
  },
  mounted() {
    if (!this.userInfo) {
      this.$confirm("当前用户还未登录，请先登录", "提示", {
        confirmButtonText: "确定",
        showCancelButton: false,
        type: "warning"
      })
        .then(() => {
          this.$router.push({
            name: "login",
            query: {
              redirect: "reportOnlie"
            }
          });
        })
        .catch(() => {});
    } else {
      if (this.isShowForm) {
        this.getfriSubject();
        this.getOneById();
      }
    }
  },
  updated() {
    this.changeDis();
  },
  computed: {
    ...mapState(["personalInfo", "userInfo"]),
    // 只有再以登入并且状态为以验证才现在表格
    isShowForm() {
      // return this.personalInfo && this.personalInfo.status == 2
      return this.userInfo;
      // return true; // test
    },
    education1() {
      let result = "";
      switch (this.education) {
        case "BAA102522D404273A34CEAF26478CAF2":
          result = "大专及以下";
          break;
        case "6F3A155C4A25410FBD13A47B2EBB5285":
          result = "本科";
          break;
        case "3012A9BC0C8843CB9E74A5D5A5EAE70B":
          result = "硕士研究生";
          break;
        case "79C986D1-8811-45FD-A320-A10108B1FCE6":
          result = "博士研究生";
          break;
      }
      return result;
    },
    degree2() {
      let result = "";
      switch (this.degree) {
        case "FFF9AFFC-6ADF-4673-9384-161D4EEAD08E":
          result = "学士及以下";
          break;
        case "0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11":
          result = "硕士";
          break;
        case "9A0EE126-5799-4C7F-A477-50CA214F3A49":
          result = "博士";
          break;
      }
      return result;
    },
    // 根据个人信息表单的状态 表格值是否可以修改
    isReadonlyPersonTable() {
      if (this.personTableStatus == 2 || this.personTableStatus == 1) {
        return true;
      } else if (this.personTableStatus == 0 || this.personTableStatus == 3) {
        return false;
      }
      return false;
    }
  },

  methods: {
    async getfriSubject() {
      const { data } = await friSubject();

      this.friList = data;
      console.log(data, 666666666);
    },
    async getThrSubject() {
      const { data } = await thrSubject({
        parentName: this.specalityXkml
      });
      console.log(data, 7777777777777);
      this.stuList = data;
    },
    async getThrSubject2() {
      const { data } = await thrSubject({
        parentName: this.specalitySsml
      });
      this.stuList2 = data;
    },
    changeDis() {
      if (this.status == "通过" || this.status == "审核中") {
        this.dis = true;
      } else {
        this.dis = false;
      }
    },

    lookFile() {
      this.dialogVisible = true;
    },
    getOneById() {
      getOneById({id:getId()})
        .then(async res => {
          console.log(res);
          if (res.code != 200) {
            this.$message.error(res.data.msg);
            return;
          }
          //studentFamilies

          if (res.data) {
            this.name = res.data.name || "";
            this.nation = res.data.nation || "";
            // this.marital = res.data.marital;
            this.married = res.data.marital || "";
            this.gender = res.data.gender || "1";
            this.idCard = res.data.idCard || "";
            this.zjlx = res.data.zjlx || "0";
            this.phoneNumber = res.data.phoneNumber || "";
            this.weixin = res.data.weixin || "";
            this.school = res.data.school || "";
            this.graduateDate =
              res.data.graduateDate || ""
                ? moment(res.data.graduateDate).format("YYYY-MM-DD")
                : "";
            this.type = res.data.type || "";
            this.unit = res.data.unit || "";
            this.unitAddress = res.data.unitAddress || "";
            this.houseHoldAddress = res.data.houseHoldAddress || "";
            this.liveAddress = res.data.liveAddress || "";
            // this.mailingAddress = res.data.mailingAddress;
            // this.studentFamilies = res.data.studentFamilies;
            this.societyAccount = res.data.societyAccount || "";
            this.checkCode = res.data.checkCode || "";
            this.studyType = res.data.studyType || "";

            // console.log(this.attachments, 88888888888888);

            let arr = [
              {
                relation: "",
                memberName: "",
                zjlx: "",
                memberIdcard: ""
              },
              {
                relation: "",
                memberName: "",
                zjlx: "",
                memberIdcard: ""
              },
              {
                relation: "",
                memberName: "",
                zjlx: "",
                memberIdcard: ""
              },
              {
                relation: "",
                memberName: "",
                zjlx: "",
                memberIdcard: ""
              },
              {
                relation: "",
                memberName: "",
                zjlx: "",
                memberIdcard: ""
              }
            ];
            let studentFamilies = res.data.studentFamilies || [];
            this.studentFamilies = studentFamilies.concat(...arr).slice(0, 3);

            this.leaseIntentionArea = res.data.leaseIntentionArea || "";
            this.educationCard = res.data.educationCard || "";
            this.education = res.data.education || "";
            this.degree = res.data.degree || "";

            // this.specalityType = res.data.specalityType;
            this.degreeCard = res.data.degreeCard || "";

            this.industryCategory = res.data.industryCategory || "";
            // this.isSingleRoom = res.data.isSingleRoom;

            let status = res.data.status;
            this.status = status;
            if (status == "审核中") {
              this.saveBtnStatus = true;
            } else {
              this.saveBtnStatus = false;
            }
            this.changeDis();

            this.personTableStatus = res.data.userStatus;

            this.delAttachmentIds = [];
            this.chooseFileArr = [];
            this.chooseFileArr1 = [];

            let attachments = res.data.attachments;
            if (attachments) {
              this.attachments = attachments.map(e => {
                let isPerson =
                  e.type == "13" ||
                  e.type == "5" ||
                  e.type == "7" ||
                  e.type == "6" ||
                  e.type == "10" ||
                  e.type == "11" ||
                  e.type == "16"
                    ? true
                    : false;
                return {
                  ...e,
                  isPerson
                };
              });

              this.chooseFileArr = res.data.attachments.map(e => e.type);
              attachments.forEach(e => {
                let isPerson =
                  e.type == "13" ||
                  e.type == "5" ||
                  e.type == "7" ||
                  e.type == "6" ||
                  e.type == "10" ||
                  e.type == "11" ||
                  e.type == "16"
                    ? true
                    : false;
                this.file.push({
                  file: e.file, // 目前接口还没有file对象，
                  name: e.fileName,
                  time: e.createDate,
                  isPerson,
                  id: e.id,
                  filePath: e.filePath
                });
              });
            }

            this.itemSaveId = res.data.id || "";

            this.tip = res.data.remark || "";

            ////////////////////
            this.specalityXkml = res.data.specalityXkml || "";
            this.specalitySsml = res.data.specalitySsml || "";
            this.specality = res.data.professionalType || "";
            if (this.specalityXkml) {
              await this.getThrSubject();
            }
            if (this.specalitySsml) {
              await this.getThrSubject2();
            }
          }
        });
    },

    getParam(operateType) {
      const formData = new FormData();
      formData.append("studentId", getId());
      formData.append("name", this.name);
      formData.append("nation", this.nation);
      // formData.append("marital", this.marital);
      formData.append("marital", this.married);
      formData.append("gender", this.gender);
      formData.append("idCard", this.idCard);
      formData.append("zjlx", parseInt(this.zjlx));
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("weixin", this.weixin);
      formData.append("school", this.school);
      formData.append("graduateDate", this.graduateDate);
      formData.append("type", this.type);
      formData.append("unit", this.unit);
      formData.append("unitAddress", this.unitAddress);
      formData.append("houseHoldAddress", this.houseHoldAddress);
      formData.append("liveAddress", this.liveAddress);
      formData.append("studyType", this.studyType);
      // formData.append("mailingAddress", this.mailingAddress);

      let item = this.studentFamilies.filter(e => {
        return (
          e.relation !== "" &&
          e.memberName !== "" &&
          e.zjlx !== "" &&
          e.memberIdcard !== ""
        );
      });
      // this.studentFamilies.forEach((v, index) => {
      item.forEach((v, index) => {
        for (let key in v) {
          if (key == "createDate") v[key] = moment(v[key]).format("YYYY-MM-DD");
          formData.append(`studentFamilies[${index}].${key}`, v[key]);
        }
      });
      // formData.append("studentFamilies", this.studentFamilies);

      formData.append("leaseIntentionArea", this.leaseIntentionArea);
      formData.append("educationCard", this.educationCard);
      formData.append("education", this.education);
      formData.append("degree", this.degree);
      // formData.append("specality", this.specality);
      // formData.append("specalityType", this.specalityType);
      formData.append("degreeCard", this.degreeCard);
      // formData.append("isSingleRoom", this.isSingleRoom);
      formData.append("industryCategory", this.industryCategory);
      formData.append("remark", this.tip);

      formData.append("status", this.status);
      //验证码
      formData.append("checkCode", this.checkCode);

      //创业就业类型
      formData.append("createBusiness", this.createBusiness);
      formData.append("societyAccount", this.societyAccount);

      this.file.forEach((file, index) => {
        file.file && formData.append(`file`, file.file);
      });

      this.itemSaveId && formData.append("id", this.itemSaveId);

      formData.append("deleteIds", this.delAttachmentIds.join(","));
      formData.append("chooseFile", this.chooseFileArr1.join(","));

      formData.append("professionalType", this.specality);
      formData.append("specalityXkml", this.specalityXkml);
      formData.append("specalitySsml", this.specalitySsml);

      // let operateType = 2;
      // if (status == null) {
      //   operateType = 1;
      // }
      formData.append("operateType", operateType);

      // formData.append("checkCode", this.checkCode);
      // formData.append("societyAccount", this.societyAccount);

      return formData;
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
      if (this.nation.length == 0) {
        this.$message.error("民族为空，请先填写");
        return false;
      }
      if (this.zjlx != "0" && this.zjlx != "2" && this.zjlx != "3") {
        this.$message.error("证件类型为空，请先填写");
        return false;
      }
      if (this.idCard.length == 0) {
        this.$message.error("证件号为空，请先填写");
        return false;
      }
      if (this.houseHoldAddress.length == 0) {
        this.$message.error("户籍地址为空，请先填写");
        return false;
      }
      if (this.liveAddress.length == 0) {
        this.$message.error("现住地址为空，请先填写");
        return false;
      }
      if (this.phoneNumber.length == 0) {
        this.$message.error("移动电话为空，请先填写");
        return false;
      }
      if (this.school.length == 0) {
        this.$message.error("毕业院校为空，请先填写");
        return false;
      }
      if (this.graduateDate.length == 0) {
        this.$message.error("毕业时间为空，请先填写");
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
        this.$message.error("学历为空，请先填写");
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
      if (this.checkCode.length == 0) {
        this.$message.error("验证码为空，请先填写");
        return false;
      }
      if (this.studyType.length == 0) {
        this.$message.error("学习形式为空，请先填写");
        return false;
      }
      if (this.type.length == 0) {
        this.$message.error("创业就业类型为空，请先填写");
        return false;
      }
      if (this.industryCategory.length == 0) {
        this.$message.error("所在行业为空，请先填写");
        return false;
      }
      if (this.unit.length == 0) {
        this.$message.error("所在单位为空，请先填写");
        return false;
      }
      if (this.unitAddress.length == 0) {
        this.$message.error("单位地址为空，请先填写");
        return false;
      }
      if (this.societyAccount.length == 0) {
        this.$message.error("社保账号为空，请先填写");
        return false;
      }
      if (this.married.length == 0) {
        this.$message.error("婚姻状态为空，请先填写");
        return false;
      }
      if (this.leaseIntentionArea.length == 0) {
        this.$message.error("配租意向为空，请先填写");
        return false;
      }
      // 家庭成员情况
      if (this.studentFamilies) {
        let relation = this.studentFamilies.every(e => e.relation == "");
        let memberName = this.studentFamilies.every(e => e.memberName == "");
        let zjlx = this.studentFamilies.every(
          e => e.zjlx != "0" && e.zjlx != "2" && e.zjlx != "3"
        );
        let memberIdcard = this.studentFamilies.every(
          e => e.memberIdcard == ""
        );

        if (relation || memberName || zjlx || memberIdcard) {
          this.$message.error("家庭成员情况列表为空，请先填写");
          return false;
        }

        // 果然已婚。需提交配偶信息
        if(this.married == '已婚') {
          let relation1 = this.studentFamilies.filter(e => e.relation == "1");
          if(relation1.length == 0) {
            this.$message.error("婚姻状况为已婚，必须填写完整配偶信息！");
            return false
          }
          if(relation1[0].relation == '' || relation1[0].memberName == '' || relation1[0].zjlx === '' || relation1[0].memberIdcard == '') {
            this.$message.error("婚姻状况为已婚，必须填写完整配偶信息！");
            return false
          }
        }
      }

      return true;
    },
    checkAttach() {
      if(!this.chooseFileArr.includes("13")) {
        this.$message.error("请上传本人身份证正反面");
        return false
      }
      if(!this.chooseFileArr.includes("9")) {
        this.$message.error("请上传户口簿");
        return false
      }
      if(!this.chooseFileArr.includes("11")) {
        this.$message.error("请上传学历证书/留学生服务中心认证报告");
        return false
      }

      if(this.married == '已婚') {
        if(!this.chooseFileArr.includes("4")) {
          this.$message.error("请上传婚姻登记凭证");
          return false
        }
        if(!this.chooseFileArr.includes("20")) {
          this.$message.error("请上传配偶身份证正反面");
          return false
        }

        if(this.type == '个人创业'){
          if(!this.chooseFileArr.includes("7")) {
            this.$message.error("请上传法人营业执照");
            return false
          }
          if(!this.chooseFileArr.includes("6")) {
            this.$message.error("请上传个人就业合同");
            return false
          }
        }else if(this.type == '单位就业'){
          if(!this.chooseFileArr.includes("6")) {
            this.$message.error("请上传个人就业合同");
            return false
          }
        }
      }else if(this.married == '未婚'){
        let isfather = this.studentFamilies.some(e => e.relation == "3");
        if (isfather) {
          if(!this.chooseFileArr.includes("18")) {
            this.$message.error("请上传父亲身份证正反面");
            return false
          }
        }
        let ismother = this.studentFamilies.some(e => e.relation == "4");
        if (ismother) {
          if(!this.chooseFileArr.includes("19")) {
            this.$message.error("请上传母亲身份证正反面");
            return false
          }
        }
      }

      return true
    },
    querySave(operateType) {
      let formData = this.getParam(operateType);

      // axios
      //   .post("/gateway/rentserver/apartmentLeaseApply/save", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data"
      //     }
      //   })
        apartmentLeaseApplySave(formData)
        .then(res => {
          console.log(res);
          if (operateType == 1) {
            if (res.code == 200) {
              this.$alert("保存成功", {
                confirmButtonText: "确定"
              }).then(({ value }) => {
                window.location.reload();
              });

              this.itemSaveId = res.data;
            } else {
              this.$message.error(res.msg);
            }
          } else if (operateType == 2) {
            if (res.code == 200) {
              this.$alert("提交成功", {
                confirmButtonText: "确定"
              }).then(({ value }) => {
                this.itemSaveId = res.data;

                window.location.reload();
              });
            } else {
              this.$message.error(res.msg);
            }
          }
        });
    },
    getReportOnline(operateType) {
      // 表单验证
      let status = this.status;
      if (operateType == 2) {
        try {
          // 表单校验
          let flag = this.checkForm();
          if (!flag) return;
          // 附件校验
          let flag1 = this.checkAttach();
          if (!flag1) return;
        } catch (error) {
          console.log("表单验证功能有报错");
        }

        // alert('校验通过')
        // return
        
        this.$confirm('请确认以上信息由本人填写并承诺对信息的真实性负责，是否确认？', '提示')
        .then(_ => {
          this.querySave(operateType)
        }).catch(_ => {});
      }else{
        this.querySave(operateType)
      }

    },

    getFile(e) {
      const input = e.target;
      const [file] = input.files;
      console.log([file], 888883333333);
      console.log(file, 8888844433);

      input.value = "";
      this.file.push({
        file,
        name: file.name,
        time: Date.now(),
        id: "",
        filePath: ""
      });

      this.chooseFileArr.push(this.chooseFile);

      this.chooseFileArr1.push(this.chooseFile);
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
    delFile(v) {
      let i = this.file.findIndex(e => e.id == v.id && e.name == v.name);
      if (i > -1) {
        this.file.splice(i, 1);
        this.chooseFileArr.splice(i, 1);

        this.chooseFileArr1.splice(i, 1);

        this.attachments[i] &&
          this.attachments[i].id &&
          this.delAttachmentIds.push(this.attachments[i].id);
      }
    },
    hasDownLoad(v) {
      // console.log(v);
      return (v && this.isReadonlyPersonTable) || this.saveBtnStatus;
    },
    textareaKeyDown(e) {
      if(e && e.keyCode == 13) {
        console.log(this.tip);
        this.tip += '\r'
        // e.returnValue = false;
        console.log(this.tip);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.reportOnline {
  input[type="text"] {
    height: 30px;
    width: 100%;
    border: solid 1px #cccccc;
    font-size: 14px;
    padding: 4px 12px;
  }

  select {
    border-color: #ccc;
  }

  .top-title {
    width: 100%;
    height: 40px;
    background-color: #f5e9e9;
    margin-top: 20px;
    margin-bottom: 10px;
    .title-left {
      width: 210px;
      height: 40px;
      line-height: 40px;
      border-top: 2px solid red;
      background-color: #fff;
      font-weight: bolder;
      font-size: 20px;
    }
  }
  .Form1 {
    border-right: 1px solid #cccccc;

    border-bottom: 1px solid #cccccc;

    border-collapse: collapse;
    tr {
      height: 40px;
      td {
        border-right: 1px solid #cccccc;

        border-left: 1px solid #cccccc;
        border-top: 1px solid #cccccc;

        background-color: white;
        padding: 2px;
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

    .form-control {
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    #fileList > tr > td {
      text-align: center;
    }
  }
  .anniu_m {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .adoptBtn {
    display: inline-block;
    width: 100px;
    height: 50px;
    background: rgb(60, 186, 208);
    line-height: 50px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }

  input:disabled {
    cursor: not-allowed;
    color: #aaa;
  }
  input:disabled[type="button"] {
    cursor: not-allowed !important;
    background: #ccc !important;
    border-color: #ccc !important;
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

  & /deep/ .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 244px;
  }
}
</style>
