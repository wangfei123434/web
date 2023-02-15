<template>
  <div class="padding-50 bg-white w-1200-auto InteractiveCommunication flex-column flex-center">
    <BaseTitle title="互动交流" subTitle="interactive"/>
    <el-form
      :model="regForm2"
      status-icon
      :rules="loginRules"
      ref="regForm2"
      label-width="130px"
      class="demo-ruleForm"
    >
      <el-form-item :label="`姓名：`" prop="name">
        <el-input
          v-model="form.name"
          placeholder="请输入姓名"
        />
      </el-form-item>
      <el-form-item label="手机号码：" prop="tel">
        <el-input
          v-model="form.tel"
          placeholder="请输入手机号码"
        />
      </el-form-item>
      <el-form-item label="主题：" prop="subject">
        <el-input
          v-model="form.subject"
          placeholder="请输入主题"
        />
      </el-form-item>
      <el-form-item label="内容：" prop="desc">
        <el-input
          type="textarea"
          rows="5"
          v-model="form.desc"
          placeholder="请输入内容"
        />
      </el-form-item>
    </el-form>
    <el-button class="submit-button"  @click="onSubmit">提交</el-button>
  </div>
</template>
<script>

import {controller} from "@/api/home";

export default {
  data() {
    return {
      regForm2:{},
      loginRules:{

      },
      form: {
        name: "",
        tel: "",
        subject: "",
        desc: ""
      }
    }
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
          this.form.name= ''
          this.form.tel= ''
          this.form.subject= ''
          this.form.desc= ''
          this.$message({
            type: "success",
            message: "提交成功"
          });

        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.InteractiveCommunication{
  box-shadow: 0px 2px 10px rgba(0,0,0,0.1600);
}
.introduction-body{
  font-size: 18px;
  font-weight: 400;
  line-height: 42px;
  color: #666666;
  width: 1200px;
  margin: 0 auto;
}
.submit-button{
  width: 220px;
  height: 60px;
  background: #0A63DD;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
}
.demo-ruleForm{
  width: 80%;
}
/deep/ .el-form-item{
  margin-bottom: 20px;
}
/deep/ .el-input{
  &,& .el-input__inner,.el-input__icon,.el-select__caret{
    height: 46px!important;
    line-height: 46px;
    border-radius: 0px;
  }
}
/deep/ .el-form-item__label,/deep/ .el-input textarea{
  line-height: 46px;
}
</style>
