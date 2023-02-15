<template>
  <div>
    <h2>我要建议</h2>
    <el-input
      placeholder="名字"
      v-model="form.name"
      style="width: 400px; margin-top: 20px"
    ></el-input>
    <el-input
      placeholder="手机号"
      v-model="form.tel"
      style="width: 400px;margin-left:20px; margin-top: 20px"
    ></el-input>

    <el-input
      placeholder="主题"
      v-model="form.subject"
      style="width: 820px; margin-top: 20px"
    ></el-input>
    <el-input
      type="textarea"
      v-model="form.desc"
      placeholder="内容"
      style="width: 820px; margin-top: 20px"
    ></el-input>
    <el-button
      style="display:block;margin-top: 20px;margin-left:420px;margin-bottom:30px"
      type="primary"
      @click="onSubmit"
    >
      提交
    </el-button>
  </div>
</template>

<script>
import { controller } from "../../../api/home";
export default {
  data() {
    return {
      form: {
        name: "",
        tel: "",
        subject: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      controller({
        creator: this.form.name,
        title: this.form.subject,
        contents: this.form.desc,
        contact: this.form.tel,
        version: 0
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "提交成功"
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ el-input {
  margin-top: 20px !important;
}
</style>
