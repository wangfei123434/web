<template>
  <div class="content-wrapper">
    <div class="top-title">
      <div class="title-left">创业工位申请</div>
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
          <td rowspan="2">申报工位信息</td>
          <td>工位所在地：</td>
          <td colspan="4">
            <el-select
              ref="sbgw"
              class="sbgw"
              v-model="list.locationArea"
              @change="getStationAddress()"
              :disabled="dis"
            >
              <el-option v-for="(o,i) in locationAreaList" :value="o.value" :label="o.label" :key="i"></el-option>
            </el-select>

            —

            <el-select
              class=""
              style="width:200px"
              :disabled="dis"
              v-model="list.locationName"
              @change="workListChange($event)"
            >
              <el-option
                v-for="(v, i) in workList"
                :key="i"
                :value="v.name"
                :label="v.name"
              ></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>申请使用时段：</td>
          <td colspan="2">
            <span>{{ list.useBeginDate | formatDate }}</span
            >--
            <span>{{ list.useEndDate | formatDate }}</span>
          </td>
          <td>申请受理时间：</td>
          <td>
            <span>{{ list.acceptDate | formatDate }}</span>
          </td>
        </tr>

        <tr>
          <td rowspan="4">大学生概况</td>
          <td>姓名：</td>
          <td>
            <span>{{ list.name }}</span>
          </td>
          <td>身份证号：</td>
          <td colspan="2">
            <span>{{ list.idCard }}</span>
          </td>
        </tr>

        <tr>
          <td>毕业（在读）院校：</td>
          <td colspan="4">
            <span>{{ list.school }}</span>
            <el-input type="hidden" value="False" />
            <el-input type="hidden" />
          </td>
        </tr>

        <tr>
          <td>专业：</td>
          <td colspan="2">
            <span>{{ list.specality }}</span>
          </td>
          <td>毕业时间：</td>
          <td>
            <span>{{ list.graduateDate | formatDate }}</span>
          </td>
        </tr>

        <tr>
          <td>联系方式：</td>
          <td>
            <span>{{ list.phoneNumber }}</span>
          </td>
          <td>电子邮箱：</td>
          <td colspan="2">
            <el-input
              type="text"
              v-model="list.email"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td rowspan="6">项目情况</td>
          <td>创业项目名称：</td>
          <td colspan="4">
            <el-input
              type="text"
              class=""
              v-model="list.projectName"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td>技术领域：</td>
          <td colspan="2">
            <el-select
              class=""
              v-model="list.technosphere"
              :disabled="dis"
            >
              <el-option value="">—请选择—</el-option>
              <el-option value="1" label="电子信息技术"></el-option>
              <el-option value="2" label="生物与新医药技术"></el-option>
              <el-option value="3" label="航空航天技术"></el-option>
              <el-option value="4" label="新材料技术"></el-option>
              <el-option value="5" label="高技术服务业"></el-option>
              <el-option value="6" label="新能源及节能技术"></el-option>
              <el-option value="7" label="资源与环境技术"></el-option>
              <el-option value="8" label="高新技术改造传统产业"></el-option>
              <el-option value="9" label="其他"></el-option>
            </el-select>
          </td>
          <td>团队人数：</td>
          <td>
            <el-input
              type="text"
              class=""
              v-model="list.teamSize"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td rowspan="3">工商登记信息</td>
          <td>所在区：</td>
          <td>
            <el-select
              class=""
              v-model="list.businessArea"
              :disabled="dis"
            >
              <el-option value="" label="—请选择—">—请选择—</el-option>
              <el-option
                value="5DA2D683-161D-4357-8ECB-C3519BD9E571"
                label="东湖新技术开发区"
                >东湖新技术开发区</el-option
              >
              <el-option
                value="1F8C8A6C-0322-4210-90AB-534ED4668B8A"
                label="洪山区"
                >洪山区</el-option
              >
              <el-option
                value="3E3ECD5E-9976-4A74-9BA1-73A1CF5D2624"
                label="东西湖区"
                >东西湖区</el-option
              >
              <el-option
                value="41050CBE-264E-4E56-9585-4F49F0D5CF5C"
                label="蔡甸区"
                >蔡甸区</el-option
              >
              <el-option
                value="58B27BE0-E1EE-4F0B-A070-634AB8931871"
                label="江夏区"
                >江夏区</el-option
              >
              <el-option
                value="689E478A-F499-428E-9340-F18FD11199C3"
                label="黄陂区"
                >黄陂区</el-option
              >
              <el-option
                value="9A4FAA76-4C40-4CD0-A6B3-A8F3ECDF2DED"
                label="新洲区"
                >新洲区</el-option
              >
              <el-option
                value="ABE152E0-6D92-4FEB-9E2B-0314C8783824"
                label="东湖生态旅游风景区"
                >东湖生态旅游风景区</el-option
              >
              <el-option
                value="B5AC6616-B832-41D3-85F9-6831D8DDEF5F"
                label="武汉化工区"
                >武汉化工区</el-option
              >
              <el-option
                value="081F6CC0-FB1F-41BC-B4C2-25A5E47AF053"
                label="汉南区"
                >汉南区</el-option
              >
              <el-option
                value="42403F88-4D60-4980-90C1-BC4BD124581C"
                label="武汉经济技术开发区"
                >武汉经济技术开发区</el-option
              >
              <el-option
                value="88FF32FB-8D80-483E-84AE-AF61FCB4EC6A"
                label="江岸区"
                >江岸区</el-option
              >
              <el-option
                value="9BE15342-BC28-45D4-A358-9C614349A03F"
                label="江汉区"
                >江汉区</el-option
              >
              <el-option
                value="B16CA8CB-636C-4FF1-8211-EF6B51CDAA27"
                label="硚口区"
                >硚口区</el-option
              >
              <el-option
                value="D1D5782A-6369-4766-AFCB-9F58668EBF43"
                label="汉阳区"
                >汉阳区</el-option
              >
              <el-option
                value="EB5285A8-C841-4F7C-A39F-3F31FD332C12"
                label="武昌区"
                >武昌区</el-option
              >
              <el-option
                value="1988F7F5-4FE9-4992-9662-9F64344744B1"
                label="青山区"
                >青山区</el-option
              >
            </el-select>
          </td>
          <td>法人代表：</td>
          <td>
            <el-input
              type="text"
              class=""
              v-model="list.legal"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td>注册地址：</td>
          <td colspan="3">
            <el-input
              type="text"
              class=""
              v-model="list.businessAddress"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td>社会诚信代码：</td>
          <td colspan="3">
            <el-input
              type="text"
              class=""
              v-model="list.integrityCode"
              :disabled="dis"
            />
          </td>
        </tr>

        <tr>
          <td>项目进展：</td>
          <td colspan="4">
            <el-input type="textarea" rows="5" v-model="list.projectProgress" :disabled="dis"></el-input>
            <!-- <el-textarea
              rows="2"
              cols="20"
              class=""
              style="height:150px;width:900px"
              v-model="list.projectProgress"
              :disabled="dis"
            ></el-textarea> -->
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="status == '未提交' || status==''">
      <button
        @click="saveFile"
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px;margin-right:30px"
      >
        保存
      </button> 
      <button
        @click="submitFile"
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px;margin-right:30px"
      >
        提交
      </button> 
    </div>
    <div v-else>
      <button
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px;"
      >
        {{ status }}
      </button>
    </div>


  </div>
</template>

<script>
import {
  workPosition,
  trainStu,
  stationAddress,
  workSave
} from "../../api/million";
import { getId } from "../../utils/auth";
export default {
  data() {
    return {
      workList: [],
      list: {
        locationArea: "",
        // locationArea1: "",
        // 第二个下拉框要后端接口    
        locationName: "",
        locationId: "",
        useBeginDate: "",
        useEndDate: "",
        acceptDate: "",
        name: "",
        idCard: "",
        school: "",
        specality: "",
        graduateDate: "",
        phoneNumber: "",
        email: "",
        projectName: "",
        technosphere: "",
        teamSize: "",
        businessArea: "",
        legal: "",
        businessAddress: "",
        integrityCode: "",
        projectProgress: "",
        id: "",
        applyDate: ""
      },
      status: "",
      
      locationAreaList: [
        {
          value: '',
          label: '—请选择—'
        },
        {
          value: '5DA2D683-161D-4357-8ECB-C3519BD9E571',
          label: '东湖新技术开发区'
        },
        {
          value: '1F8C8A6C-0322-4210-90AB-534ED4668B8A',
          label: '洪山区'
        },
        {
          value: '3E3ECD5E-9976-4A74-9BA1-73A1CF5D2624',
          label: '东西湖区'
        },
        {
          value: '41050CBE-264E-4E56-9585-4F49F0D5CF5C',
          label: '蔡甸区'
        },
        {
          value: '58B27BE0-E1EE-4F0B-A070-634AB8931871',
          label: '江夏区'
        },
        {
          value: '689E478A-F499-428E-9340-F18FD11199C3',
          label: '黄陂区'
        },
        {
          value: '9A4FAA76-4C40-4CD0-A6B3-A8F3ECDF2DED',
          label: '新洲区'
        },
        {
          value: 'ABE152E0-6D92-4FEB-9E2B-0314C8783824',
          label: '东湖生态旅游风景区'
        },
        {
          value: 'B5AC6616-B832-41D3-85F9-6831D8DDEF5F',
          label: '武汉化工区'
        },
        {
          value: '081F6CC0-FB1F-41BC-B4C2-25A5E47AF053',
          label: '汉南区'
        },
        {
          value: '42403F88-4D60-4980-90C1-BC4BD124581C',
          label: '武汉经济技术开发区'
        },
        {
          value: '88FF32FB-8D80-483E-84AE-AF61FCB4EC6A',
          label: '江岸区'
        },
        {
          value: '9BE15342-BC28-45D4-A358-9C614349A03F',
          label: '江汉区'
        },
        {
          value: 'B16CA8CB-636C-4FF1-8211-EF6B51CDAA27',
          label: '硚口区'
        },
        {
          value: 'D1D5782A-6369-4766-AFCB-9F58668EBF43',
          label: '汉阳区'
        },
        {
          value: 'EB5285A8-C841-4F7C-A39F-3F31FD332C12',
          label: '武昌区'
        },
        {
          value: '1988F7F5-4FE9-4992-9662-9F64344744B1',
          label: '青山区'
        }
      ]
    };
  },
  created() {
    this.getWorkPosition();
  },
  computed: {
    dis() {
      if(this.status == '未提交' || this.status == '') {
        return false
      }
      return true
    }
  },
  methods: {
    workListChange(d) {
      this.list.locationId = this.workList.find(e => e.name == d).id
    },
    getStationAddress(areaName) {
      let a
      if(areaName) {
        a = this.locationAreaList.find(e => e.value == areaName)
      }else{
        a = this.locationAreaList.find(e => e.value == this.list.locationArea)
      }
      stationAddress({
        areaName: a.label
      }).then(res => {
        let data = res.data
        if(window.firstWorkPosition) {
          window.firstWorkPosition = false
        }else{
          this.list.locationName = ''
          this.list.locationId = ''
        }
        if (data) {
          this.workList = data.obj;
        }
      })
    },
    getWorkPosition() {
      workPosition({
        studentId: getId()
      }).then(res => {
        let data = res.data

      if (data) {
          window.firstWorkPosition = true
          this.list.locationArea = data.locationArea
          this.list.locationName = data.locationName
          this.list.locationId = data.locationId
          this.list.useBeginDate = data.useBeginDate
          this.list.useEndDate = data.useEndDate
          this.list.acceptDate = data.acceptDate
          this.list.name = data.name
          this.list.idCard = data.idCard
          this.list.school = data.school
          this.list.specality = data.specality
          this.list.graduateDate = data.graduateDate
          this.list.phoneNumber = data.phoneNumber
          this.list.email = data.email
          this.list.projectName = data.projectName
          this.list.technosphere = data.technosphere
          this.list.teamSize = data.teamSize
          this.list.businessArea = data.businessArea
          this.list.legal = data.legal
          this.list.businessAddress = data.businessAddress
          this.list.integrityCode = data.integrityCode
          this.list.projectProgress = data.projectProgress
          this.list.id = data.id;
          this.list.applyDate = data.applyDate;
          this.status = data.status;

          if(data.locationArea) {
            this.getStationAddress(data.locationArea)
          }
      }
      })
    },
    saveFile() {
      this.$confirm("你要保存吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          workSave({
            ...this.list,
            status: "未提交",
            studentId: getId(),
            id: this.list.id
          }).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "保存成功"
              });
              this.getWorkPosition();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "未保存成功"
          });
        });
    },

    submitFile() {
      this.$confirm("你要提交吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          workSave({
            ...this.list,
            status: "审核中",
            studentId: getId(),
            id: this.list.id
          }).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "提交成功"
              });
              this.getWorkPosition();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "未提交成功"
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
