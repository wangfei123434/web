<template>
  <div v-if="isShowForm" class="reportOnline">
    <div class="top-title">
      <div class="title-left">大学毕业生租赁房申请</div>
    </div>
    <table width="100%" class="Form1">
      <tbody>
        <tr>
          <td rowspan="4">基本信息</td>
          <td>姓名：</td>
          <td>
            <!-- <span style="padding-left: 4px;">{{ name }}</span> -->
            <input :disabled="dis" name="labName" type="text" />
          </td>
          <td>性别：</td>
          <td>
            <!-- <span type="radio" v-if="gender == 0">女 </span>
            <span type="radio" v-else-if="gender == 1"> 男 </span> -->
            <input :disabled="dis" type="text" v-model="gender" />
          </td>
          <td>民族：</td>
          <td>
            <!-- <span id="nationality" type="radio">{{ nation }}</span> -->
            <input :disabled="dis" name="nationality" value="汉" type="text" />
          </td>
        </tr>

        <tr>
          <td>证件号码：</td>
          <td>
            <select
              name="ddlzjlx"
              class="form-control"
              style="width:40%"
              v-model.trim="zjlx"
              :disabled="dis"
            >
              <option value="">—请选择类型—</option>
              <option value="0">身份证</option>
              <option value="1">港澳台身份证</option>
              <option value="2">护照</option>
              <option value="3">户口簿</option>
              <option value="4">军官证(士兵证)</option>
            </select>
            —
            <input
              name="txtIdCard"
              v-model.trim="idCard"
              type="text"
              style="width:50%;"
              :disabled="dis"
            />
          </td>
          <td>婚姻状态：</td>
          <td colspan="3">
            <table border="0" style="width:100%;">
              <tbody>
                <tr>
                  <td style="border: none;">
                    <input
                      type="radio"
                      name="rabMarital"
                      value="单身"
                      checked="checked"
                      v-model.trim="married"
                      :disabled="dis"
                    /><label for="rabMarital_0">单身</label>
                  </td>
                  <td style="border: none;">
                    <input
                      type="radio"
                      name="rabMarital"
                      value="已婚"
                      v-model.trim="married"
                      :disabled="dis"
                    /><label for="rabMarital_1">已婚</label>
                  </td>
                </tr>
              </tbody>
            </table>
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
            />
          </td>
        </tr>
        <!-- phoneNumber  weixin school graduateDate degreeCard type -->
        <tr>
          <td rowspan="1">通讯方式</td>
          <td>移动电话：</td>
          <td colspan="2">
            <input
              name="labPhoneNumber"
              v-model.trim="phoneNumber"
              type="text"
              id="labPhoneNumber"
              rq="true"
              tag="请输入移动电话！"
              :disabled="dis"
            />
          </td>
          <td>是否在读：</td>
          <td colspan="2">
            <input type="radio" checked="checked" :disabled="dis" /><label
              for="rabMarital_0"
              >是</label
            >

            <input type="radio" :disabled="dis" /><label for="rabMarital_1"
              >否</label
            >
          </td>
        </tr>

        <!-- <tr>
          <td>通信地址：</td>
          <td colspan="5">
            <input
              name="txtMailingAddress"
              value=""
              type="text"
              class="wenzishur"
              v-model.trim="mailingAddress"
              :disabled="dis"
            />
          </td>
        </tr> -->

        <tr>
          <td rowspan="4">学历信息</td>
          <td>毕业院校：</td>
          <td colspan="2">
            <span></span>
            <!-- <span style="padding-left: 4px;">{{ school }}</span> -->
            <input type="text" :disabled="dis" value="" v-model.trim="school" />
          </td>
          <td>毕业时间：</td>
          <td colspan="2">
            <!-- <span style="padding-left: 4px;">{{
              graduateDate | formatDate
            }}</span> -->
            <input
              type="text"
              :disabled="dis"
              value="2021-04-06"
              v-model.trim="graduateDate"
            />
          </td>
        </tr>
        <tr>
          <td>学历：</td>
          <td colspan="2">
            <select
              name="education"
              class="xialakuang"
              v-model.trim="education"
              :disabled="dis"
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
            <!-- <span
              style="padding-left: 4px;"
              v-show="education == 'BAA102522D404273A34CEAF26478CAF2'"
              >大专及以下</span
            >
            <span
              style="padding-left: 4px;"
              v-show="education == '6F3A155C4A25410FBD13A47B2EBB5285'"
              >本科</span
            >
            <span
              style="padding-left: 4px;"
              v-show="education == '3012A9BC0C8843CB9E74A5D5A5EAE70B'"
              >硕士研究生</span
            >
            <span
              style="padding-left: 4px;"
              v-show="education == '79C986D1-8811-45FD-A320-A10108B1FCE6'"
              >博士研究生</span
            > -->
            <!-- <input type="text" :disabled="dis" v-model.trim="education1" /> -->
            <!--                                <input name="hfEducation" :disabled='dis' id="hfEducation"  th:value="${information.education}" />-->
          </td>
          <td>毕业证号/学籍号：</td>
          <td colspan="2">
            <!-- <span style="padding-left: 4px;">{{ educationCard }}</span> -->
            <input
              type="text"
              :disabled="dis"
              v-model.trim="educationCard"
              value=""
            />
          </td>
        </tr>

        <tr>
          <td>学位：</td>
          <td colspan="2">
            <select
              name="degree"
              v-model.trim="degree"
              :disabled="dis"
              style="width:390px;height:30px"
            >
              <option value="">—请选择—</option>
              <option value="FFF9AFFC-6ADF-4673-9384-161D4EEAD08E"
                >学士及以下</option
              >
              <option value="0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11">硕士</option>
              <option value="9A0EE126-5799-4C7F-A477-50CA214F3A49">博士</option>
            </select>
            <!-- <span
              style="padding-left: 4px;"
              v-show="degree == 'FFF9AFFC-6ADF-4673-9384-161D4EEAD08E'"
              >学士及以下</span
            >
            <span
              style="padding-left: 4px;"
              v-show="degree == '0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11'"
              >硕士</span
            >
            <span
              style="padding-left: 4px;"
              v-show="degree == '9A0EE126-5799-4C7F-A477-50CA214F3A49'"
              >博士</span
            > -->
            <!--                                <input name="hfDegree" :disabled='dis' id="hfDegree"  th:value="${information.degree}" />-->
            <!-- <input
              type="text"
              :disabled="dis"
              v-model.trim="degree2"
              value="0"
            /> -->
          </td>
          <td>学位证号：</td>
          <td colspan="2">
            <input
              type="text"
              class="wenzishur"
              tag="请输入学位证号！"
              v-model.trim="degreeCard"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td>专业：</td>
          <td colspan="6">
            <select
              class="xialakuang"
              v-model.trim="specalityXkml"
              :disabled="dis"
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
              :disabled="dis"
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
              :disabled="dis"
              style="width:150px;height:30px"
              ><option value="">—请选择—</option
              ><option v-for="(v, i) in stuList2" :key="i" :value="v.id">{{
                v.dictName
              }}</option></select
            >
          </td>
          <!-- <td>
            <input
              type="text"
              :disabled="dis"
              value=""
              style="width:80%;"
              rq="true"
              tag="请输入专业名称！"
              v-model.trim="specality"
            />
          </td> -->

          <!-- <td>专业类别：</td>
          <td colspan="3">
            <input
              type="text"
              :disabled="dis"
              value=""
              style="width:80%;"
              rq="true"
              tag="请输入专业名称！"
              v-model.trim="specalityType"
            /> -->
          <!-- <span>-</span> -->
          <!-- </td> -->
        </tr>

        <tr>
          <td rowspan="3">创业就业信息</td>
          <td colspan="1">创业就业类型：</td>
          <td colspan="2">
            <select name="" style="width:390px;height:30px">
              <option value="">个人创业</option>
              <option value="">单位就业</option>
              <option value="">网签职业</option>
              <option value="">待业</option>
            </select>
            <!-- <table border="0" style="width:100%;">
              <tbody>
                <tr>
                  <td style="border: none;">
                    <input
                      type="radio"
                      name="rabType"
                      value="创业"
                      v-model.trim="type"
                      :disabled="dis"
                    /><label for="rabType_0">创业</label>
                  </td>
                  <td style="border: none;">
                    <input
                      type="radio"
                      name="rabType"
                      v-model.trim="type"
                      value="就业"
                    /><label for="rabType_1">就业</label>
                  </td>
                  <td style="border: none;">
                    <input
                      type="radio"
                      name="rabType"
                      v-model.trim="type"
                      value="待业"
                      :disabled="dis"
                    /><label for="rabType_2">待业</label>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </td>
          <td>所在行业：</td>
          <td colspan="2">
            <select
              name="ddlIndustryCategory"
              class="form-control"
              v-model.trim="industryCategory"
              :disabled="dis"
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
            />
          </td>
          <td>工作地址：</td>
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
            />
          </td>
        </tr>
        <tr>
          <td>社保账号:</td>
          <td colspan="6">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td rowspan="3">审核</td>
          <td>个人审核状态:</td>
          <td colspan="6"></td>
        </tr>
        <tr>
          <td>审核人:</td>
          <td colspan="6"></td>
        </tr>
        <tr>
          <td>审核时间:</td>
          <td colspan="6"></td>
        </tr>
        <tr>
          <td rowspan="2">人才</td>
          <td>人才分类认定:</td>
          <td colspan="6"></td>
        </tr>
        <tr>
          <td>人才评级认定:</td>
          <td colspan="6"></td>
        </tr>
        <tr>
          <td rowspan="6">家庭成员情况</td>
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
              <option value="0">父母</option>
              <option value="1">配偶</option>
              <option value="2">子女</option>
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
              <option value="0">身份证</option>
              <option value="1">港澳台身份证</option>
              <option value="2">护照</option>
              <option value="3">户口簿</option>
              <option value="4">军官证(士兵证)</option>
            </select>
            —
            <input
              name="txtMemberIDcard3"
              type="text"
              value=""
              :id="'txtMemberIDcard3_' + i"
              class="wenzishur"
              style="width:50%;"
              v-model.trim="v.memberIdcard"
              :disabled="dis"
            />
          </td>
        </tr>
        <tr class="afterMR">
          <td>配租意向</td>
          <td>配租意向区域</td>
          <td>
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
          <td>是否选择单套:</td>
          <td colspan="4">
            <input
              type="radio"
              value="1"
              v-model.trim="isSingleRoom"
              :disabled="dis"
            /><label>是</label>

            <input
              type="radio"
              value="0"
              v-model.trim="isSingleRoom"
              :disabled="dis"
            /><label>否</label>
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
                ><b>*上传资料规范（点击查看）</b></span
              >
              <select
                name="FileUploadControl1$ddlDict"
                class="form-control"
                style="width: 40%"
                v-model.trim="chooseFile"
                :disabled="dis"
              >
                <option value="">--请选择--</option>
                <option value="0">身份证</option>
                <option value="9">户口本本人信息页</option>
                <option value="1">父母身份证</option>
                <option value="2">配偶身份证</option>
                <option value="3">子女身份证</option>
                <option value="4">结婚证</option>
                <option value="5">学历和学位证书</option>
                <option value="6">社保缴纳凭据、劳动合同或在职证明</option>
                <option value="7">营业执照和股权证明</option>
                <option value="8">其他</option>
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
              <!-- <button style="">提交</button> -->
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
            <!-- <td>{{ this.attachments.length > 0 ?  (chooseFileArr[this.attachments.length -1 + i] | idName) : (chooseFileArr[i] | idName) }}</td> -->
            <td>{{ v.time | formatDate }}</td>

            <td>
              <a
                style="margin-left: 10px;"
                v-if="saveBtnStatus"
                @click="downFile(v)"
                >下载</a
              >
              <a style="margin-left: 10px;" v-else @click="delFile(v)">删除</a>
            </td>
          </tr>
        </tbody>
        <!-- <tbody id="fileList" v-for="(v, i) in attachments" :key="i">
          <tr>
            <td>{{ v.fileName }}</td>
            <td>{{ v.type | idName }}</td>
            <td>{{ v.createDate | formatDate }}</td>

            <td>
              <a
                style="margin-left: 10px;"
                v-if="saveBtnStatus"
                @click="downFile(v)"
                >下载</a
              >
              <a
                style="margin-left: 10px;"
                v-else
                @click="delFile(v)"
                :disabled="dis"
                >删除</a
              >
            </td>
          </tr>
        </tbody> -->
      </table>
    </div>
    <div class="anniu_m">
      <!-- <input :disabled="dis" name="status" value="0" id="status" /> -->

      <span v-if="status == '通过'" class="adoptBtn">审核通过</span>
      <span v-else>
        <input
          type="button"
          v-if="saveBtnStatus"
          value="审核中"
          :disabled="dis"
          style="width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;"
        />
        <!-- @click="getReportOnline" -->
        <span v-else>
          <input
            type="button"
            value="保存"
            :disabled="dis"
            @click="getReportOnline(null)"
            style="margin-right: 20px;width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;"
          />
          <input
            type="button"
            value="提交"
            :disabled="dis"
            @click="getReportOnline('审核中')"
            style="width: 80px; height: 30px; background: rgb(60, 186, 208); color: rgb(255, 255, 255); font-size: 14px; border: 1px solid rgb(60, 186, 208); border-radius: 0.5em;"
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
import { repOnline, thrSubject, friSubject } from "@/api/personal";
import { mapState } from "vuex";

export default {
  beforeRouteEnter: (to, from, next) => {
    if (getToken()) {
      next();
    } else {
      if (to.path === "login") {
        next();
      } else {
        next("login");
      }
    }
  },
  data() {
    return {
      married: "单身",
      id: "",
      name: "",
      marital: "",
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
      mailingAddress: "",
      studentFamilies: [],
      leaseIntentionArea: "",
      educationCard: "",
      education: "",
      degree: "",
      specality: "",
      specalityType: "",
      degreeCard: "",
      isSingleRoom: "",
      industryCategory: "",
      // 备注
      tip: "",
      chooseFile: "",
      chooseFileArr: [],
      file: [],
      // relation: "",
      saveBtnStatus: false, // 表单提交按钮的状态
      status: "",
      dis: false,
      attachments: [],

      itemSaveId: "", // 保存时接口返回的id
      friList: [],
      stuList: [],
      stuList2: []
    };
  },
  created() {
    this.id = getId();
    console.log(this.id, 1111);

    if (this.isShowForm) {
      this.getOneById();
    }
  },
  updated() {
    // console.log(this.chooseFile, 222);
    // console.log(this.zjlx);
    console.log(this.studentFamilies, 22222);

    console.log(this.file, 110);
    this.changeDis();
  },
  computed: {
    ...mapState(["personalInfo"]),
    // 只有再以登入并且状态为以验证才现在表格
    isShowForm() {
      // return this.personalInfo && this.personalInfo.status == 2
      return true; // test
    }
    // education1() {
    //   let result = "";
    //   switch (this.education) {
    //     case "BAA102522D404273A34CEAF26478CAF2":
    //       result = "大专及以下";
    //       break;
    //     case "6F3A155C4A25410FBD13A47B2EBB5285":
    //       result = "本科";
    //       break;
    //     case "3012A9BC0C8843CB9E74A5D5A5EAE70B":
    //       result = "硕士研究生";
    //       break;
    //     case "79C986D1-8811-45FD-A320-A10108B1FCE6":
    //       result = "博士研究生";
    //       break;
    //   }
    //   return result;
    // },
    // degree2() {
    //   let result = "";
    //   switch (this.degree) {
    //     case "FFF9AFFC-6ADF-4673-9384-161D4EEAD08E":
    //       result = "学士及以下";
    //       break;
    //     case "0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11":
    //       result = "硕士";
    //       break;
    //     case "9A0EE126-5799-4C7F-A477-50CA214F3A49":
    //       result = "博士";
    //       break;
    //   }
    //   return result;
    // }
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
    getOneById() {
      axios
        .get(
          `/gateway/rentserver/apartmentLeaseApply/getOneById?id=${getId()}`
          // `/gateway/rentserver/apartmentLeaseApply/getOneById/?id=000fdf86-868a-44d4-a586-6eca58cb6007`
        )
        .then(async res => {
          console.log(res);
          //studentFamilies
          if (res.data.data) {
            this.name = res.data.data.name;
            this.nation = res.data.data.nation;
            // this.marital = res.data.data.marital;
            this.married = res.data.data.marital;
            this.gender = res.data.data.gender;
            this.idCard = res.data.data.idCard;
            this.zjlx = res.data.data.zjlx;
            this.phoneNumber = res.data.data.phoneNumber;
            this.weixin = res.data.data.weixin;
            this.school = res.data.data.school;
            this.graduateDate = moment(res.data.data.graduateDate).format(
              "YYYY-MM-DD"
            );
            this.type = res.data.data.type;
            this.unit = res.data.data.unit;
            this.unitAddress = res.data.data.unitAddress;
            this.houseHoldAddress = res.data.data.houseHoldAddress;
            this.liveAddress = res.data.data.liveAddress;
            this.mailingAddress = res.data.data.mailingAddress;
            // this.studentFamilies = res.data.data.studentFamilies;

            ////////////////////
            this.specalityXkml = data.education.specalityXkml;
            this.specalitySsml = data.education.specalitySsml;
            if (this.specalityXkml) {
              await this.getThrSubject();
            }
            if (this.specalitySsml) {
              await this.getThrSubject2();
            }

            console.log(this.attachments, 88888888888888);

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
              }
            ];
            let studentFamilies = res.data.data.studentFamilies || [];
            this.studentFamilies = studentFamilies.concat(...arr).slice(0, 3);

            this.leaseIntentionArea = res.data.data.leaseIntentionArea;
            this.educationCard = res.data.data.educationCard;
            this.education = res.data.data.education;
            this.degree = res.data.data.degree;
            this.specality = res.data.data.specality;
            this.specalityType = res.data.data.specalityType;
            this.degreeCard = res.data.data.degreeCard;

            this.industryCategory = res.data.data.industryCategory;
            this.isSingleRoom = res.data.data.isSingleRoom;

            let status = res.data.data.status;
            this.status = status;
            if (status == "审核中") {
              this.saveBtnStatus = true;
            } else {
              this.saveBtnStatus = false;
            }
            this.changeDis();

            this.chooseFileArr = [];
            // if (res.data.data.attachments) {
            //   this.chooseFileArr = res.data.data.attachments.map(e => e.type);

            this.chooseFileArr = [];
            if (res.data.data.attachments) {
              this.chooseFileArr = res.data.data.attachments.map(e => e.type);

              res.data.data.attachments.forEach(e => {
                this.file.push({
                  file: e.file, // 目前接口还没有file对象，
                  name: e.fileName,
                  time: e.createDate
                });
              });
            }

            this.attachments = res.data.data.attachments;

            this.itemSaveId = res.data.data.id;
          }
        });
    },

    getParam(status) {
      const formData = new FormData();
      formData.append("studentId", getId());
      formData.append("name", this.name);
      formData.append("nation", this.nation);
      // formData.append("marital", this.marital);
      formData.append("marital", this.married);
      formData.append("gender", this.gender);
      formData.append("idCard", this.idCard);
      formData.append("zjlx", this.zjlx);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("weixin", this.weixin);
      formData.append("school", this.school);
      formData.append("graduateDate", this.graduateDate);
      formData.append("type", this.type);
      formData.append("unit", this.unit);
      formData.append("unitAddress", this.unitAddress);
      formData.append("houseHoldAddress", this.houseHoldAddress);
      formData.append("liveAddress", this.liveAddress);
      formData.append("mailingAddress", this.mailingAddress);

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
      formData.append("specality", this.specality);
      formData.append("specalityType", this.specalityType);
      formData.append("degreeCard", this.degreeCard);
      formData.append("isSingleRoom", this.isSingleRoom);
      formData.append("industryCategory", this.industryCategory);
      formData.append("remark", this.tip);

      // formData.append("chooseFile", JSON.stringify(this.chooseFileArr));
      this.chooseFileArr.forEach((item, index) => {
        formData.append(`chooseFile`, item);
      });
      formData.append("status", status);

      this.file.forEach((file, index) => {
        formData.append(`file`, file.file);
      });

      this.itemSaveId && formData.append("id", this.itemSaveId);

      let operateType = 2;
      if (status == null) {
        operateType = 1;
      }
      formData.append("operateType", operateType);

      return formData;
    },
    getReportOnline(status) {
      // 表单验证
      if (
        this.name.length == 0 ||
        this.married.length == 0 ||
        this.houseHoldAddress.length == 0 ||
        this.liveAddress.length == 0 ||
        this.mailingAddress.length == 0 ||
        this.idCard.length == 0 ||
        !(this.gender == 0 || this.gender == 1) ||
        this.phoneNumber.length == 0 ||
        this.nation.length == 0 ||
        this.degree.length == 0 ||
        this.degreeCard.length == 0 ||
        this.graduateDate.length == 0 ||
        this.type.length == 0 ||
        this.studentFamilies.length == 0 ||
        this.leaseIntentionArea.length == 0 ||
        !(this.isSingleRoom == 0 || this.isSingleRoom == 1) ||
        this.school.length == 0
      ) {
        this.$message.error("表单不全");
        return false;
      }

      let formData = this.getParam(status);

      axios
        .post("/gateway/rentserver/apartmentLeaseApply/save", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message.success(res.data.msg);
          } else {
            this.$message.error(res.data.msg);
            return;
          }
          if (status == null) {
            if (res.status == 200) {
              this.$alert("保存成功", {
                confirmButtonText: "确定"
              }).then(({ value }) => {});

              this.itemSaveId = res.data.data;
            }
          } else if (status == "审核中") {
            if (res.status == 200) {
              this.$alert("提交成功", {
                confirmButtonText: "确定"
              }).then(({ value }) => {
                this.itemSaveId = res.data.data;
              });
            }
          }

          window.location.reload();
        });
    },

    getFile(e) {
      const input = e.target;
      const [file] = input.files;
      console.log([file], 88888);

      input.value = "";
      this.file.push({
        file,
        name: file.name,
        time: Date.now()
      });

      this.chooseFileArr.push(this.chooseFile);
    },
    downFile({ file, name }) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([file]));
      a.download = name;
      a.click();
    },
    delFile(v) {
      let i = this.file.findIndex(e => e.name == v.name);
      if (i > -1) {
        this.file.splice(i, 1);
        this.chooseFileArr.splice(i, 1);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.reportOnline {
  input[type="text"] {
    height: 30px;
    width: 95%;
    border: solid 1px #cccccc;
    font-size: 14px;
    padding: 4px 12px;
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
      width: 95%;
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
  // .afterMR {
  //   position: relative;
  //   &::after {
  //     content: "";
  //     display: block;
  //     position: absolute;
  //     width: 1px;
  //     height: 100%;
  //     // background: brown;
  //   }
  // }

  input:disabled {
    cursor: not-allowed;
  }
  select:disabled {
    cursor: not-allowed;
  }
  textarea:disabled {
    cursor: not-allowed;
  }
}
</style>
