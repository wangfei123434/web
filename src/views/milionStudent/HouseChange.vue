<template>
  <div class="content-wrapper">
    <div class="top-title">
      <div class="title-left">人才公寓租赁申请变更</div>
    </div>
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      class="Form1"
    >
      <tbody>
        <tr>
          <td>变更类型</td>
          <td colspan="6">
            <table border="0">
              <tbody>
                <tr>
                  <el-radio-group
                    style="margin-top:15px"
                    v-model="obj.changeType"
                  >
                    <el-radio type="radio" label="0">基本信息变更</el-radio>

                    <el-radio type="radio" label="1"
                      >学历/就业创业信息变更</el-radio
                    >

                    <el-radio type="radio" label="2">家庭成员信息变更</el-radio>

                    <el-radio type="radio" label="3">登记意向区域变更</el-radio>
                  </el-radio-group>
                </tr>
              </tbody>
            </table>
            <el-input type="hidden" name="hdStatus" value="通过" />
          </td>
        </tr>
        <tr>
          <td>变更原因</td>
          <td colspan="6" style="height:80px">
            <el-input type="textarea" v-model="obj.changeReason"></el-input>
          </td>
        </tr>
        <tr>
          <td rowspan="4">基本信息</td>
          <td>姓名：</td>
          <td>
            <el-input type="text" class="" v-model="obj.name" :disabled="obj.changeType != '0'"/>
          </td>
          <td>性别：</td>
          <td>
            <label class="">
              <table border="0">
                <tbody>
                  <tr>
                    <el-radio-group
                      style="margin-top:10px"
                      v-model="obj.gender"
                      :disabled="obj.changeType != '0'"
                    >
                      <el-radio label="0" >男</el-radio>
                      <el-radio label="1" >女</el-radio>
                    </el-radio-group>
                  </tr>
                </tbody>
              </table>
            </label>
          </td>
          <td>民族：</td>
          <td>
            <el-input type="text" class="" v-model="obj.nation"  :disabled="obj.changeType != '0'"/>
          </td>
        </tr>

        <tr>
          <td>证件号码：</td>
          <td>
            <span>{{ obj.zjlx | idName }}</span
            >&nbsp;—&nbsp;<span>{{ obj.idCard }}</span>
          </td>
          <td>婚姻状态：</td>
          <td colspan="3">
            <table border="0">
              <tbody>
                <tr>
                  <el-radio-group style="margin-top:10px" v-model="obj.marital">
                    <el-radio label="单身" :disabled="obj.changeType != '0'">单身</el-radio>
                    <el-radio label="已婚" :disabled="obj.changeType != '0'">已婚</el-radio>
                  </el-radio-group>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td>户籍地址：</td>
          <td colspan="5">
            <el-input type="text" class="" v-model="obj.houseHoldAddress"  :disabled="obj.changeType != '0'"/>
          </td>
        </tr>

        <tr>
          <td>现住地址：</td>
          <td colspan="5">
            <el-input type="text" class="" v-model="obj.liveAddress"  :disabled="obj.changeType != '0'"/>
          </td>
        </tr>

        <tr>
          <td rowspan="2">通讯方式</td>
          <td>移动电话：</td>
          <td colspan="2">
            <el-input type="text" class="" v-model="obj.phoneNumber"  :disabled="obj.changeType != '0'"/>
          </td>
          <td>微信号：</td>
          <td colspan="2">
            <el-input type="text" class="" v-model="obj.weixin"  :disabled="obj.changeType != '0'"/>
          </td>
        </tr>

        <tr>
          <td>通信地址：</td>
          <td colspan="5">
            <el-input type="text" class="" v-model="obj.mailingAddress"  :disabled="obj.changeType != '0'"/>
          </td>
        </tr>

        <tr>
          <td rowspan="4">学历信息</td>
          <td>毕业院校：</td>
          <td colspan="2">
            <el-input type="text" class="wenzishur" v-model="obj.school"  :disabled="obj.changeType != '1'"/>
          </td>
          <td>毕业时间：</td>
          <td colspan="2">
            <el-input type="text" class="" v-model="obj.graduateDate"  :disabled="obj.changeType != '1'"/>
          </td>
        </tr>

        <tr>
          <td>学历：</td>
          <td colspan="2">
            <el-select class="" v-model="obj.education"  :disabled="obj.changeType != '1'">
              <el-option value="" label="—请选择—"></el-option>
              <el-option
                value="BAA102522D404273A34CEAF26478CAF2"
                label="大专及以下"
              ></el-option>
              <el-option
                value="6F3A155C4A25410FBD13A47B2EBB5285"
                label="本科"
              ></el-option>
              <el-option
                value="3012A9BC0C8843CB9E74A5D5A5EAE70B"
                label="硕士研究生"
              ></el-option>
              <el-option
                value="79C986D1-8811-45FD-A320-A10108B1FCE6"
                label="博士研究生"
              ></el-option>
            </el-select>
          </td>
          <td>毕业证号：</td>
          <td colspan="2">
            <el-input type="text" class="" v-model="obj.educationCard"  :disabled="obj.changeType != '1'"/>
          </td>
        </tr>

        <tr>
          <td>学位：</td>
          <td colspan="2">
            <el-select class="" v-model="obj.degree"  :disabled="obj.changeType != '1'">
              <el-option value="" label="—请选择—"></el-option>
              <el-option
                value="FFF9AFFC-6ADF-4673-9384-161D4EEAD08E"
                label="学士及以下"
              ></el-option>
              <el-option
                value="0FF20517-1EC2-4548-9C7E-4ADE2B2C1B11"
                label="硕士"
              ></el-option>
              <el-option
                value="9A0EE126-5799-4C7F-A477-50CA214F3A49"
                label="博士"
              ></el-option>
            </el-select>
          </td>
          <td>学位证号：</td>
          <td colspan="2">
            <el-input type="text" maxlength="40" v-model="obj.degreeCard"  :disabled="obj.changeType != '1'"/>
          </td>
        </tr>

        <tr>
          <td>专业类别及名称：</td>
          <td colspan="5">
            <el-select
              class=""
              v-model="obj.specalityXkml"
              @change="getThrSubject"
               :disabled="obj.changeType != '1'"
            >
              <el-option value="" label="—请选择—"></el-option>
              <el-option
                value="AA56E353-3326-43EC-8B4C-B4DD4CEAE786"
                label="哲学"
              ></el-option>
              <el-option
                value="4878008B-7A95-46D3-AB96-6AC150832B42"
                label="医学"
              ></el-option>
              <el-option
                value="43ED5BA5-63C1-43D9-AFE8-0B61465F7194"
                label="管理学"
              ></el-option>
              <el-option
                value="AA62221D-A85A-46DA-9512-5CE1AB032554"
                label="艺术学"
              ></el-option>
              <el-option
                value="E4991FD8-88EF-4D01-B8E8-F855AE5D550A"
                label="经济学"
              ></el-option>
              <el-option
                value="694840BD-CF87-410F-9E19-02639361564E"
                label="法学"
              ></el-option>
              <el-option
                value="77FA3B35-1F8C-4D6E-8506-D62929B45E22"
                label="教育学"
              ></el-option>
              <el-option
                value="87A293A1-EE78-4E47-88E3-5E44EB27ED5C"
                label="文学"
              ></el-option>
              <el-option
                value="EC7A8967-E49C-42C4-AC6B-ABDB822255AD"
                label="历史学"
              ></el-option>
              <el-option
                value="44E9F451-82C6-4B49-B7AD-4BCB79161DC3"
                label="理学"
              ></el-option>
              <el-option
                value="01866646-9AF7-4F4E-A29E-37DEFA024E08"
                label="工学"
              ></el-option>
              <el-option
                value="0B682636-3081-4F8A-9DF9-7E40981CA8A8"
                label="农学"
              ></el-option>
            </el-select>
            —
            <el-select
              class=""
              v-model="obj.specalitySsml"
              @change="getThrSubject2"
               :disabled="obj.changeType != '1'"
            >
              <el-option
                v-for="item in stuList"
                :key="item.id"
                :value="item.id"
                :label="item.dictName"
              ></el-option>
            </el-select>
            —
            <el-select v-model="obj.specality"  :disabled="obj.changeType != '1'">
            <!-- <el-select v-model="obj.professionalType"> -->
              <el-option
                v-for="item in stuList2"
                :key="item.id"
                :value="item.id"
                :label="item.dictName"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td rowspan="2">创业就业信息</td>
          <td>类别：</td>
          <td colspan="2">
            <table border="0" style="width:25%;">
              <tbody>
                <tr>
                  <el-radio-group
                    style="display:flex;margin-top:10px"
                    v-model="obj.type"
                     :disabled="obj.changeType != '1'"
                  >
                    <el-radio label="创业"></el-radio>
                    <el-radio label="就业"></el-radio>
                    <el-radio label="待业"></el-radio>
                  </el-radio-group>
                </tr>
              </tbody>
            </table>
          </td>
          <td>行业类别：</td>
          <td colspan="2">
            <el-select class="" v-model="obj.industryCategory"  :disabled="obj.changeType != '1'">
              <el-option value="" label="—请选择—"></el-option>
              <el-option
                value="3F2A1D06368043EB9884C753F78DF3FC"
                label="贸易/消费/制造/营运"
              ></el-option>
              <el-option
                value="7C45D3287BD64915AEAF079F3FADDD26"
                label="广告/媒体"
              ></el-option>
              <el-option
                value="0F7AB0C8BCBD46DA97BD76F4EA7D7667"
                label="计算机/互联网/通信/电子"
              ></el-option>
              <el-option
                value="8EE2F240899240EC8873A5A7B25DCE2A"
                label="服务业"
              ></el-option>
              <el-option
                value="3962ED65DDCF4B8FADBE7E796C904754"
                label="会计/金融/银行/保险"
              ></el-option>
              <el-option
                value="A9ACC70BAB344056938CA5EBBFF2DADD"
                label="其他"
              ></el-option>
              <el-option
                value="A7C41A25EC9E482799984B839087778C"
                label="政府/非盈利机构"
              ></el-option>
              <el-option
                value="486928FDFDC0420A847DD0C245627CD0"
                label="制药/医疗"
              ></el-option>
              <el-option
                value="A6C4408F928F4E388F5BC7F6F0D02CA7"
                label="能源/原材料"
              ></el-option>
              <el-option
                value="9272339EB2C948ACB4E15DEC262C66B8"
                label="物流/运输"
              ></el-option>
              <el-option
                value="8A38CAE3D31F45C2933104DF8C68B4E9"
                label="房地产/建筑"
              ></el-option>
              <el-option
                value="8DBC2EC937CD4DAA99421C46B1E7A79F"
                label="专业服务/教育/培训"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td>所在单位：</td>
          <td colspan="2">
            <el-input type="text" class="" v-model="obj.unit"  :disabled="obj.changeType != '1'"/>
          </td>
          <td>单位地址：</td>
          <td colspan="2">
            <el-input type="text" class="" v-model="obj.unitAddress"  :disabled="obj.changeType != '1'"/>
          </td>
        </tr>

        <tr>
          <td rowspan="3">家庭成员情况</td>
          <td>与申请人关系</td>
          <td>姓名</td>
          <td colspan="4">证件号码</td>
        </tr>

        <tr v-for="(v, i) in studentFamilies" :key="i">
          <td>
            <el-select class="" style="width:100px;" v-model="v.relation"  :disabled="obj.changeType != '2'">
              <el-option value="" label="—请选择—"></el-option>
              <el-option value="0" label="父母"></el-option>
              <el-option value="1" label="配偶"></el-option>
              <el-option value="2" label="子女"></el-option>
              <el-option value="3" label="父亲"></el-option>
              <el-option value="4" label="母亲"></el-option>
            </el-select>
          </td>
          <td>
            <el-input type="text" class="" v-model="v.memberName"  :disabled="obj.changeType != '2'"/>
          </td>
          <td colspan="4">
            <el-select class="" style="width:120px;" v-model="v.zjlx" :disabled="obj.changeType != '2'">
              <el-option value="" label="—请选择类型—"></el-option>
              <el-option value="0" label="身份证"></el-option>
              <el-option value="1" label="港澳台身份证"></el-option>
              <el-option value="2" label="港澳通行证"></el-option>
              <el-option value="3" label="外籍人士护照"></el-option>
            </el-select>
            —
            <el-input
              type="text"
              class=""
              style="width:50%;"
              v-model="v.memberIdcard"
               :disabled="obj.changeType != '2'"
            />
          </td>
        </tr>

        <tr>
          <td>配租意向</td>
          <td>登记意向区域：</td>
          <td colspan="6">
            <el-select class="" v-model="obj.leaseIntentionArea"  :disabled="obj.changeType != '3'">
              <el-option value="">—请选择—</el-option>
              <el-option
                value="5DA2D683-161D-4357-8ECB-C3519BD9E571"
                label="东湖新技术开发区"
              ></el-option>
              <el-option
                value="1F8C8A6C-0322-4210-90AB-534ED4668B8A"
                label="洪山区"
              ></el-option>
              <el-option
                value="3E3ECD5E-9976-4A74-9BA1-73A1CF5D2624"
                label="东西湖区"
              ></el-option>
              <el-option
                value="41050CBE-264E-4E56-9585-4F49F0D5CF5C"
                label="蔡甸区"
              ></el-option>
              <el-option
                value="58B27BE0-E1EE-4F0B-A070-634AB8931871"
                label="江夏区"
              ></el-option>
              <el-option
                value="689E478A-F499-428E-9340-F18FD11199C3"
                label="黄陂区"
              ></el-option>
              <el-option
                value="9A4FAA76-4C40-4CD0-A6B3-A8F3ECDF2DED"
                label="新洲区"
              ></el-option>
              <el-option
                value="ABE152E0-6D92-4FEB-9E2B-0314C8783824"
                label="东湖生态旅游风景区"
              ></el-option>
              <el-option
                value="B5AC6616-B832-41D3-85F9-6831D8DDEF5F"
                label="武汉化工区"
              ></el-option>
              <el-option
                value="081F6CC0-FB1F-41BC-B4C2-25A5E47AF053"
                label="汉南区"
              ></el-option>
              <el-option
                value="42403F88-4D60-4980-90C1-BC4BD124581C"
                label="武汉经济技术开发区"
              ></el-option>
              <el-option
                value="88FF32FB-8D80-483E-84AE-AF61FCB4EC6A"
                label="江岸区"
              ></el-option>
              <el-option
                value="9BE15342-BC28-45D4-A358-9C614349A03F"
                label="江汉区"
              ></el-option>
              <el-option
                value="B16CA8CB-636C-4FF1-8211-EF6B51CDAA27"
                label="硚口区"
              ></el-option>
              <el-option
                value="D1D5782A-6369-4766-AFCB-9F58668EBF43"
                label="汉阳区"
              ></el-option>
              <el-option
                value="EB5285A8-C841-4F7C-A39F-3F31FD332C12"
                label="武昌区"
              ></el-option>
              <el-option
                value="1988F7F5-4FE9-4992-9662-9F64344744B1"
                label="青山区"
              ></el-option>
            </el-select>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      @click="getChangeSave"
      style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px"
    >
      提交
    </button>
  </div>
</template>

<script>
import { byId, changeSave } from "@/api/million";
import { mapState } from "vuex";
import { thrSubject } from "@/api/personal";
import moment from "moment";
export default {
  data() {
    return {
      obj: {
        changeType: "",
        changeReason: "",
        name: "",
        gender: "",
        nation: "",
        zjlx: "",
        idCard: "",
        marital: "",
        houseHoldAddress: "",
        liveAddress: "",
        phoneNumber: "",
        weixin: "",
        mailingAddress: "",
        school: "",
        graduateDate: null,
        education: "",
        educationCard: "",
        degree: "",
        degreeCard: "",
        // 三级
        specalityXkml: "",
        specalitySsml: "",
        specality: "",
        professionalType: "",

        type: "",
        industryCategory: "",
        unit: "",
        unitAddress: "",

        leaseIntentionArea: ""
      },
      // 家庭成员
      studentFamilies: [],

      stuList: [],
      stuList2: [],

      // 验证
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        changeType: [{ required: true, message: "请选择", trigger: "change" }],
        changeReason: [
          { required: false, message: "请选择", trigger: "change" }
        ],
        name: [
          { required: true, message: "请选择", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请选择", trigger: "change" }],
        nation: [{ required: true, message: "请选择", trigger: "blur" }],
        // zjlx:  [
        //     { required: true, message: '请选择', trigger: 'change' }
        //   ],
        // idCard:  [
        //     { required: true, message: '请选择', trigger: 'change' }
        //   ],
        marital: [{ required: true, message: "请选择", trigger: "change" }],
        houseHoldAddress: [
          { required: true, message: "请选择", trigger: "blur" }
        ],
        liveAddress: [{ required: true, message: "请选择", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请选择", trigger: "blur" },
          { min: 11, max: 11, message: "手机号不符合要求", trigger: "blur" }
        ],
        weixin: [{ required: true, message: "请选择", trigger: "blur" }],
        mailingAddress: [
          { required: true, message: "请选择", trigger: "blur" }
        ],
        school: [{ required: true, message: "请选择", trigger: "change" }],
        graduateDate: [{ required: true, message: "请选择", trigger: "blur" }],
        education: [{ required: true, message: "请选择", trigger: "change" }],
        educationCard: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        degree: [{ required: true, message: "请选择", trigger: "change" }],
        degreeCard: [{ required: true, message: "请选择", trigger: "change" }],
        // 三级
        specalityXkml: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        specalitySsml: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        specality: [{ required: true, message: "请选择", trigger: "change" }],

        type: [{ required: true, message: "请选择", trigger: "change" }],
        industryCategory: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        unit: [{ required: true, message: "请选择", trigger: "change" }],
        unitAddress: [{ required: true, message: "请选择", trigger: "change" }],

        leaseIntentionArea: [
          { required: true, message: "请选择", trigger: "change" }
        ]
      }
    };
  },
  created() {
    window.firstGetHouseChange = true
    this.getById();
    // console.log(this.userInfo);
  },
  mounted() {
    // console.log(this.userInfo);
    // console.log(this.personalInfo);
  },
  computed: {
    ...mapState(["userInfo"]),
    ...mapState(["personalInfo"])
  },
  watch: {
    'obj.changeType' (newV, oldV) {
        console.log(newV);
        this.getById(true)
      },
//     'obj.changeType': {
//       handler(newValue, oldValue) {
// 　　　　　　console.log(newValue)
//           this.getById(true)
// 　　　　},
// 　　　　deep: false
//     }
  },
  methods: {
    async getThrSubject() {
      const { data } = await thrSubject({
        parentName: this.obj.specalityXkml
      });
      this.stuList = data;
      console.log(this.stuList, 7777777777777);
    },
    async getThrSubject2() {
      const { data } = await thrSubject({
        parentName: this.obj.specalitySsml
      });
      this.stuList2 = data;
    },
    getById(changeTypeFlag) {
      byId({
        id:this.userInfo.id
      }).then(data => {
        console.log(data);

        if (data && data.data) {
          if(window.firstGetHouseChange && !changeTypeFlag) {
            this.obj.changeType = (data.data.changeType || data.data.changeType == 0) ? data.data.changeType + "" : ""
            window.firstGetHouseChange = false
          }

          let d = data.data
          this.obj.changeReason = d.changeReason
          this.obj.name = d.name
          this.obj.gender = d.gender + ''
          this.obj.nation = d.nation
          this.obj.zjlx = d.zjlx
          this.obj.idCard = d.idCard
          this.obj.marital = d.marital
          this.obj.houseHoldAddress = d.houseHoldAddress
          this.obj.liveAddress = d.liveAddress
          this.obj.phoneNumber = d.phoneNumber
          this.obj.weixin = d.weixin
          this.obj.mailingAddress = d.mailingAddress
          this.obj.school = d.school
          this.obj.graduateDate = moment(d.graduateDate).format("YYYY-MM-DD")
          this.obj.education = d.education
          this.obj.educationCard = d.educationCard
          this.obj.degree = d.degree
          this.obj.degreeCard = d.degreeCard
          this.obj.specalityXkml = d.specalityXkml
          this.obj.specalitySsml = d.specalitySsml
          this.obj.specality = d.specality
          this.obj.professionalType = d.professionalType
          this.obj.type = d.type
          this.obj.industryCategory = d.industryCategory
          this.obj.unit = d.unit
          this.obj.unitAddress = d.unitAddress
          this.obj.leaseIntentionArea = d.leaseIntentionArea

          // this.obj = {
          //   // changeType: (data.data.changeType || data.data.changeType == 0) ? data.data.changeType + "" : "",
          //   changeReason: data.data.changeReason,
          //   name: data.data.name,
          //   gender: data.data.gender + "",
          //   nation: data.data.nation,
          //   zjlx: data.data.zjlx,
          //   idCard: data.data.idCard,
          //   marital: data.data.marital,
          //   houseHoldAddress: data.data.houseHoldAddress,
          //   liveAddress: data.data.liveAddress,
          //   phoneNumber: data.data.phoneNumber,
          //   weixin: data.data.weixin,
          //   mailingAddress: data.data.mailingAddress,
          //   school: data.data.school,
          //   graduateDate: moment(data.data.graduateDate).format("YYYY-MM-DD"),
          //   education: data.data.education,
          //   educationCard: data.data.educationCard,
          //   degree: data.data.degree,
          //   degreeCard: data.data.degreeCard,
          //   // 三级
          //   specalityXkml: data.data.specalityXkml,
          //   specalitySsml: data.data.specalitySsml,
          //   specality: data.data.specality,
          //   professionalType: data.data.professionalType,

          //   type: data.data.type,
          //   industryCategory: data.data.industryCategory,
          //   unit: data.data.unit,
          //   unitAddress: data.data.unitAddress,

          //   leaseIntentionArea: data.data.leaseIntentionArea
          // };
          
          //家庭成员
          this.studentFamilies = []
          data.data.studentFamilies.forEach(v => {
            this.studentFamilies.push({
              relation: v.relation + "",
              memberName: v.memberName,
              zjlx: v.zjlx + "",
              memberIdcard: v.memberIdcard
            });
          });
          // console.log(this.studentFamilies);
        }
        if (this.obj.specalityXkml) {
          this.getThrSubject();
        }
        if (this.obj.specalitySsml) {
          this.getThrSubject2();
        }
      });
    },
    getChangeSave() {
      this.$confirm("你要保存吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if(!this.obj.changeType) {
            this.$message.error('必须要先选择变更类型')
            return
          }else if(!this.obj.changeReason) {
            this.$message.error('必须要先选择变更原因')
            return
          }

          changeSave({
            ...this.obj,
            studentFamilies: this.studentFamilies,
            studentId: this.userInfo.id,
            alaId: this.$route.query.id || "",
            status: '变更审核中',
            // specality: this.obj.professionalType
          }).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "保存成功"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "未保存成功"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
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
el-input[type="text"] {
  height: 30px;
  width: 95%;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
el-select {
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
}
</style>
