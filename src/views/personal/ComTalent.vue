<template>
  <div class="content-wrapper " style="margin-bottom:50px;height:1000px">
    <div style="height:40px;border-bottom:3px solid  #00a9ec;">
      <h2 style="color: #00a9ec;text-align:left">企业人才情况统计</h2>
      <table>
        <span style="margin-left:-50px;font-weight:bolder">基本信息</span>
        <tr>
          <td style="width:300px">单位名称:</td>
          <td style="width:700px">
            <input type="text" style="width:700px" placeholder="单位名称" v-model="talentList.name"/>
          </td>
        </tr>
        <tr>
          <td style="width:300px">
            <span
              >社会信用 <br />
              统一代码:</span
            >
          </td>
          <td style="width:700px">
            <input
              type="text"
              style="width:700px"
              placeholder="社会信用统一代码"
              v-model="talentList.unifiedCode"
            />
          </td>
        </tr>
        <tr>
          <td style="width:300px">联系人:</td>
          <td style="width:700px">
            <input type="text" style="width:700px" placeholder="联系人"  v-model="talentList.contactor"/>
          </td>
        </tr>
        <tr>
          <td style="width:300px">手机号码:</td>
          <td style="width:700px">
            <input type="text" style="width:700px" placeholder="手机号码"  v-model="talentList.mobile"/>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td style="width:300px">职工总数:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="职工总数"  v-model="talentList.staffCount"/>
          </td>
          <td style="width:200px">党员人数:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="党员人数"  v-model="talentList.partyMemberCount"/>
          </td>
        </tr>
        <span style="margin-left:-50px;font-weight:bolder">学历分布</span>
        <tr>
          <td style="width:300px">大专人数:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="大专人数"  v-model="talentList.collegeCount"/>
          </td>
          <td style="width:200px">本科人数:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="本科人数"  v-model="talentList.regularCount"/>
          </td>
        </tr>
        <tr>
          <td style="width:300px">研究生人数:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="研究生人数"  v-model="talentList.masterCount"/>
          </td>
          <td style="width:200px">博士人数:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="博士人数" v-model="talentList.doctorCount" />
          </td>
        </tr>
        <span style="margin-left:-50px;font-weight:bolder">专业技术职称</span>
      </table>

      <table>
        <tr>
          <td style="width:300px">中级职称:</td>
          <td style="width:150px">
            <input type="text" style="width:150px" placeholder="中级职称" v-model="talentList.intermediateTitle" />
          </td>
          <td style="width:123px">高级职称:</td>
          <td style="width:150px">
            <input type="text" style="width:150px" placeholder="高级职称" v-model="talentList.seniorTitle" />
          </td>
          <td style="width:123px">正高级职称:</td>
          <td style="width:150px">
            <input type="text" style="width:150px" placeholder="正高级职称" v-model="talentList.superSeniorTitle" />
          </td>
        </tr>
      </table>

      <table>
        <span style="margin-left:-50px;font-weight:bolder">技能人才</span>
        <tr>
          <td style="width:300px">技师:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="技师" v-model="talentList.technician" />
          </td>
          <td style="width:200px">高级技师:</td>
          <td style="width:250px">
            <input type="text" style="width:250px" placeholder="高级技师" v-model="talentList.superTechnician" />
          </td>
        </tr>
      </table>
        <hr style="margin: 30px 0;">
        <div style="margin-left: 90px;font-weight: bolder;text-align: left;">查询条件</div>

      <el-form
        style="display:flex;justify-content:space-around"
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item label="姓名">
          <el-input v-model="formInline.nameLike" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <div>
        <span
          class="iconfont icon-add"
          style="fontSize:25px;width:50px;height:40px;border:1px solid #cccccc; display: inline-block;border-radius:5px;line-height:40px;margin-left:700px"
          @click="add"
        ></span>
        <span
          class="iconfont icon-shuaxin"
          style="fontSize:25px;width:50px;height:40px;border:1px solid #cccccc; display: inline-block;border-radius:5px;line-height:40px;margin-left:20px"
          @click="refrash"
        ></span>
      </div>
      <!-- <span
        style="width:55px;height:40px;border:1px solid #cccccc;display: inline-block;border-radius:5px;line-height:40px"
      >
        <span class="iconfont icon-quanbu" style="font-size:30px"></span>
        <span class="iconfont icon-xiala"></span>
      </span> -->
      <!-- <select class="year">
        <option value=""
          >
        </option>
      </select> -->
      <el-table
        border
        :data="tableData"
        style="width: 77%;margin-left:88px"
      >
      <!-- tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize) -->
        <el-table-column label="姓名" width="150" prop="name">
        </el-table-column>
        <el-table-column label="性别" width="150" prop="gender">
        </el-table-column>
        <el-table-column label="身份证" width="150" prop="identity">
        </el-table-column>
        <el-table-column label="本人电话" width="150" prop="phone">
        </el-table-column>
        <el-table-column label="学历学位" width="173" prop="degree">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { editCompany, talentStatisticses, getByCompanyId, deleteTalentStatistics } from "@/api/personal";
import { mapState } from "vuex";
import { getId } from '../../utils/auth';
export default {
  data() {
    return {
      formInline: {
        nameLike: ""
      },
      tableData: [],
      talentList: {},
      nameLike: "",
      pageSize: 2,
      currentPage: 1,
      total: 0
    };
  },
  created() {
    this.getEditCompany();
    this.getTalentStatisticses();
    // console.log(this.userInfo);
  },
  computed: { ...mapState(["userInfo"]) },
  methods: {
    refrash() {
      this.currentPage = 1
      this.formInline.nameLike = ""

      this.getTalentStatisticses()
    },
    handleDelete(i, d) {
      deleteTalentStatistics({
        id: d.id
      }).then(res => {
        if(res?.code == 200) {
          this.$message.success(res?.msg)

          this.getTalentStatisticses()
        }
      })
    },
    onSubmit() {
      this.currentPage = 1
      this.getTalentStatisticses();
    },

    async getEditCompany() {
      const { data } = await getByCompanyId({
        CompanyId: this.$route.query.id
      });
      console.log(data);
      var talentList = data;
      this.talentList = talentList
    },
    async getTalentStatisticses() {
      const { data } = await talentStatisticses({
        companyId: this.$route.query.id,
        nameLike: this.formInline.nameLike,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      });

      this.total = data.totalCount
      this.tableData = data?.list
    },

    add() {
      // this.$router.push("/newIncrease");
      this.$router.push({
        name: 'newIncrease',
        query: {
          companyId: this.$route.query.id
        }
      })
    },
    handleEdit(index) {
      console.log(index);
      var id = this.tableData[index].id;
      console.log(id);

      this.$router.push({ path: "/newIncrease", query: { 
        id,
        companyId: this.$route.query.id
        } });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;

      this.getTalentStatisticses()
    }
  }
};
</script>

<style lang="less" scoped>
// .year {
//   background: url("../../assets/imgs/newImg/sele.png") no-repeat;
//   width: 50px;
//   height: 40px;
//   border: 1px solid #cccccc !important;
//   border-radius: 5px;
//   line-height: 40px;
//   background-position: 5px 6px;
// }
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}
input[type="text"] {
  height: 30px;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
tr {
  height: 50px;
}
</style>
