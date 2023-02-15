<template>
  <div>
    <table>
      <tr>
        <td style="width:120px;text-align:right ">被举荐人姓名:</td>
        <td style="width:70%">
          <input
            type="text"
            placeholder="被举荐人姓名"
            style="width:70%"
            v-model="obj.name"
          />
        </td>
      </tr>
      <tr>
        <td style="width:120px;text-align:right">被举荐人身份证号:</td>
        <td style="width:70%">
          <input
            type="text"
            placeholder="被举荐人身份证号"
            style="width:70%"
            v-model="obj.identity"
          />
        </td>
      </tr>
      <tr>
        <td style="width:120px;text-align:right">举荐类型:</td>
        <td style="width:70%">
          <select
            id="type"
            class="form-control"
            style="width:70%"
            v-model="obj.type"
            v-if="
              this.$route.query.val ==
                'cylj3,qs_leaders_innovation,qs_leaders_startup'
            "
          >
            <option value="qs_leaders_innovation" selected=""
              >产业领军人才1类</option
            >
            <option value="qs_leaders_startup">产业领军人才2类</option>
            <option value="cylj3">产业领军人才3类</option>
          </select>
          <select
            id="type"
            class="form-control"
            style="width:70%"
            v-model="obj.type"
            v-if="
              this.$route.query.val ==
                'qs_excellentYouth_doctor,qs_excellentYouth_recommend,qs_excellentYouth_startup'
            "
          >
            <option value="qs_excellentYouth_doctor" selected=""
              >优秀青年人才1类</option
            >
            <option value="qs_excellentYouth_recommend">优秀青年人才2类</option>
            <option value="qs_excellentYouth_startup">优秀青年人才3类</option>
          </select>
          <select
            id="type"
            class="form-control"
            style="width:70%"
            v-model="obj.type"
            v-if="this.$route.query.val == 'qs_qingshanElite_craftsman,lj1'"
          >
            <option value="qs_qingshanElite_craftsman" selected=""
              >钢城工匠1类</option
            >
            <option value="lj1">钢城工匠2类</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { addAssgin } from "@/api/personal";
import { mapState } from "vuex";
export default {
  props: ["father"],
  data() {
    return {
      obj: {
        name: "",
        identity: "",
        type: ""
      }
    };
  },
  created() {
    
    this.obj.name = this.father.name;
    this.obj.identity = this.father.identity;
    this.obj.type = this.father.type;
    console.log(this.obj.type, 111111);
  },

  // destroyed() {
  //   console.log("destroyed");
  // },
  computed: {
    ...mapState(["componyInfo"])
  },
  methods: {
    getAddAssgin() {
      this.obj.companyId = this.componyInfo.id;
      this.obj.companyName = this.componyInfo.name;

      // let d = JSON.parse(JSON.stringify(this.obj))
      addAssgin({...this.obj}).then(data => {
        console.log(data);
        if(data && data.code == 200) {
          this.$message.success(data.data.msg)

          this.$emit('addData')
        }
      });
    },
    clear() {
      this.obj = {};
    },
    setData(d) {
      this.$set(this.obj, "name", d.name);
      this.$set(this.obj, "identity", d.identity);
      this.$set(this.obj, "type", d.type);
    }
  }
};
</script>

<style lang="less" scoped>
input[type="text"] {
  height: 30px;
  width: 95%;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
select {
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
</style>
