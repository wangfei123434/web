<template>
  <div class="content-wrapper">
    <div class="title" style="margin-top: 50px;">
      <h3>百万大学生重置密码</h3>
    </div>
    <div class="main-box" style="width:600px; margin-left: 250px">
      <el-form
        :model="regForm"
        status-icon
        :rules="loginRules"
        ref="regForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- <el-form-item label="用户名" prop="userName">
          <el-input
            v-model="regForm.userName"
            placeholder="请输入用户名"
          ></el-input
        ></el-form-item>
        <el-form-item label="原密码" prop="oldPass">
          <el-input
            type="password"
            v-model="regForm.oldPass"
            autocomplete="off"
            placeholder="请输入原密码"
          ></el-input>
        </el-form-item> -->
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="regForm.tel" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-input
            v-model="regForm.captcha"
            autocomplete="off"
            placeholder="请输入验证码"
            ><el-button
              slot="append"
              style="backgroundColor:#1b9af7;color:white"
              @click="telphone"
              :disabled="yzmDis"
              >{{ yzmDis ? yzmDisText : "发送验证码" }}</el-button
            >
          </el-input>
        </el-form-item>

        <el-form-item label="新密码" prop="pass">
          <el-input
            type="password"
            v-model="regForm.pass"
            autocomplete="off"
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="regForm.checkPass"
            autocomplete="off"
            placeholder="请确认密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('regForm')"
            style="backgroundColor:#1b9af7;color:white"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { telCode } from "../../api/reg";
import { millionStudednt } from "../../api/login";
import { validatePass, validatePass2, checkTel } from "@/utils/val";
export default {
  data() {
    return {
      regForm: {
        userName: "",
        oldPass: "",
        tel: "",
        captcha: "",
        pass: "",
        checkPass: ""
      },
      loginRules: {
        pass: [{ validator: validatePass(this), trigger: "blur" }],
        checkPass: [{ validator: validatePass2(this), trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }]
      },

      yzmDis: false,
      yzmDisText: '120s',
      yzmTime: null,
    };
  },
  mounted() {
    console.log(this, this.$route);
    let userInfo = this.$route.params.userInfo

    if(userInfo) {
      this.regForm.userName = userInfo.idCard
      this.regForm.tel = userInfo.phoneNumber ? userInfo.phoneNumber : ''
    }
    this.regForm.oldPass = this.$route.params.password ? this.$route.params.password : ''

    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight()
    }, 500)
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight

      document.querySelector('.content-wrapper').style.height = (h - headH - footH) + 'px'
    },
    async telphone() {
      this.yzmDis = true
      this.yzmTime = setInterval(() => {
        this.yzmDisText = (parseInt(this.yzmDisText) - 1) + 's'
        if(parseInt(this.yzmDisText) == 0) {
          clearInterval(this.yzmTime)
          this.yzmTime = null
          this.yzmDisText = '120s'
          this.yzmDis = false
        }
      }, 1000)

      const data = await telCode({
        phone: this.regForm.tel,
        type: 'reset'
      });
      console.log(data);

      if(data.code == 200) {
        this.$message.success(data.data || data.msg || '验证码已发送！')
      }
    },

    submitForm(str) {
      // this.$refs['ruleForm']  ===  this.$refs.ruleForm
      this.$refs[str].validate(async valid => {
        if (valid) {
          const data = await millionStudednt({
            code: this.regForm.captcha,
            enPaasword: this.regForm.checkPass,
            idNumber: this.regForm.userName,
            newPassword: this.regForm.pass,
            oldPaasword: this.regForm.oldPass,
            phone: this.regForm.tel,
            name: this.regForm.userName
          });
          console.log(data);
          if (data.code == 200) {
            this.$alert('密码修改成功', {
              confirmButtonText: "确定"
            }).then(() => {
              this.$router.push("login");
            });
          }
        } else {
          console.log("表单不通过校验");
          return false;
        }
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
  overflow: auto;
}
</style>
