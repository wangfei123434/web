<template>
  <div class="content-wrapper" style="margin-bottom:50px">
    <h3 style="text-align:left;margin-left:20px">人才情况统计表</h3>
    <table class="content-box">
      <tr>
        <td style="width:100px">
          <span>姓名:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.name"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>性别:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.gender"
            style="width:300px"
          />
        </td>
      </tr>
      <tr>
        <td style="width:100px">
          <span>出生年月:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.birthday"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>国籍:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.nationality"
            style="width:300px"
          />
        </td>
      </tr>
      <tr>
        <td style="width:100px">
          <span>学历学位:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.degree"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>专业方向:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.major"
            style="width:300px"
          />
        </td>
      </tr>
      <tr>
        <td style="width:100px">
          <span>身份证号:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.identity"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>毕业院校:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.school"
            style="width:300px"
          />
        </td>
      </tr>
      <tr>
        <td style="width:100px">
          <span>专业技术职称:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.technicalTitle"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>工作单位及职务:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.enterpriseName"
            style="width:300px"
          />
        </td>
      </tr>
      <tr>
        <td style="width:100px">
          <span>本人联系电话:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.phone"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>高层次人才 荣誉类别:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.highLevelType"
            style="width:300px"
          />
        </td>
      </tr>
      <tr>
        <td style="width:100px">
          <span>政治面貌:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.politic"
            style="width:300px"
          />
        </td>
        <td style="width:100px">
          <span>高技能人才 荣誉类别:</span>
        </td>
        <td style="width:300px">
          <input
            type="text"
            placeholder=""
            v-model="telList.highTechType"
            style="width:300px"
          />
        </td>
      </tr>
    </table>

    <table class="content-box">
      <tr>
        <td style="width:100px"><span>其他荣誉:</span></td>
        <td style="width:790px">
          <textarea style="width:790px;height:115px" v-model="telList.otherHonor"></textarea>
        </td>
      </tr>
      <tr>
        <td style="width:100px"><span>备注:</span></td>
        <td style="width:790px">
          <textarea style="width:790px;height:115px" v-model="telList.memo"></textarea>
        </td>
      </tr>
    </table>

    <button
      style="width:54px;height:34px;border:1px solid #ccccc;text-align:center;background-color:white;border-radius:5px;font-size: 14px;margin-bottom:20px"
      @click="toBack"
    >
      返回
    </button>
    <button
      style="width:54px;height:34px;border:1px solid #ccccc;text-align:center;background-color:#286090;border-radius:5px;font-size: 14px;color:white;border:none;margin-left:30px;margin-bottom:20px"
      @click="getSavePersonStatistics"
    >
      保存
    </button>
  </div>
</template>

<script>
import { savePersonStatistics, talentStatisticses } from "@/api/personal";
import { mapState } from "vuex";

export default {
  data() {
    return {
      telList: {
        name: "",
        gender: "",
        birthday: "",
        nationality: "",
        degree: "",
        major: "",
        identity: "",
        school: "",
        technicalTitle: "",
        enterpriseName: "",
        phone: "",
        highLevelType: "",
        otherHonor: "",
        memo: ""
      }
    };
  },
  created() {
    this.getTalentStatisticses();
  },
  computed: {
    ...mapState(["userInfo"])
  },

  methods: {
    toBack() {
      this.$router.go(-1)
    },
    async getTalentStatisticses() {
      if (this.$route.query.id) {
        const { data } = await talentStatisticses({
          id: this.$route.query.id
        });
        if (data.list[0]) {
          this.telList = data.list[0];
        }
      }
    },
    async getSavePersonStatistics() {
      const data = await savePersonStatistics({
        companyId: this.$route.query.companyId,
        id: this.$route.query.id,
        // list: JSON.stringify(this.telList)
        ...this.telList
      });
      console.log(data);
      if (data.code == 200) {
        this.$alert("保存成功", {
          confirmButtonText: "确定"
        }).then(({ value }) => {
          // this.$router.push("/comTalent");
          this.$router.push({
            name: 'comTalent',
            query: {
              id: this.$route.query.companyId
            }
          })
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
  border: 2px solid #5bc0de;
  .content-box {
    width: 80%;
    margin: 0 auto;
  }
}
input[type="text"] {
  height: 30px;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
</style>
