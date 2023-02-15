<template>
  <div class="forget-big-box">
    <div class="top-banner">
      <img
        class="banner-image"
        src="../../assets/imgs/wfimg/home-banner.png"
        alt=""
      />
    </div>
    <div class="content-wrapper">
      <div class="title" style="margin: 50px;">
        <h3 style="font-size:20px">重置密码</h3>
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
          <el-form-item label="手机号" prop="tel">
            <el-input
              v-model="regForm.tel"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="统一社会信用代码"
            prop="uscc"
            v-if="$route.query.type == 'ENTERPRISE'"
          >
            <el-input
              v-model="regForm.uscc"
              placeholder="请输入统一社会信用代码"
            ></el-input>
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
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="regForm.pass"
              autocomplete="off"
              placeholder="8-16位大小写字母加数字"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="regForm.checkPass"
              autocomplete="off"
              placeholder="8-16位大小写字母加数字"
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
  </div>
</template>

<script>
import { modifyPassword } from "../../api/login";
import { telCode } from "../../api/reg";
import {
  validatePass,
  validatePass2,
  checkTel,
  checkSocaial
} from "@/utils/val";
export default {
  data() {
    return {
      regForm: {
        tel: "",
        captcha: "",
        pass: "",
        checkPass: "",
        uscc: ""
      },
      loginRules: {
        pass: [{ validator: validatePass(this), trigger: "blur" }],
        checkPass: [{ validator: validatePass2(this), trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        uscc: [{ validator: checkSocaial, trigger: "blur" }]
      },
      yzmDis: false,
      yzmDisText: "120s",
      yzmTime: null
    };
  },
  mounted() {
    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight();
    }, 500);
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight;
      let headH = document.querySelector(".header-wrapper").clientHeight;
      let footH = document.querySelector("footer").clientHeight;

      document.querySelector(".content-wrapper").style.height =
        h - headH - footH + "px";
    },
    async telphone() {
      this.yzmDis = true;
      this.yzmTime = setInterval(() => {
        this.yzmDisText = parseInt(this.yzmDisText) - 1 + "s";
        if (parseInt(this.yzmDisText) == 0) {
          clearInterval(this.yzmTime);
          this.yzmTime = null;
          this.yzmDisText = "120s";
          this.yzmDis = false;
        }
      }, 1000);

      const data = await telCode({
        phone: this.regForm.tel,
        type: "forget"
      });
      console.log(data);
      // this.yzmDis = false
      // if(this.yzmTime) {
      //   clearInterval(this.yzmTime)
      //   this.yzmTime = null
      //   this.yzmDisText = '600s'
      // }

      if (data.code == 200) {
        this.$message.success(data.data || data.msg || "验证码已发送！");
      }
    },

    submitForm(str) {
      // this.$refs['ruleForm']  ===  this.$refs.ruleForm
      this.$refs[str].validate(async valid => {
        if (valid) {
          const data = await modifyPassword({
            code: this.regForm.captcha,
            enPaasword: this.regForm.checkPass,
            newPassword: this.regForm.pass,
            phone: this.regForm.tel,
            uscc: this.regForm.uscc
          });
          console.log(data);
          if (data.code == 200) {
            this.$router.push("login");
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
.forget-big-box {
  margin-top: -94px;
  .top-banner {
    width: 100%;
    height: 259px;
    .banner-image {
      display: block;
      width: 100%;
      height: 260px;
    }
  }
}
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
  overflow: auto;
}
</style>
