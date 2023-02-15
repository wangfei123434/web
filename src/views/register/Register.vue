<template>
  <div class="reg-big-box">
    <div class="top-banner">
      <img
        class="banner-image"
        src="../../assets/imgs/wfimg/home-banner.png"
        alt=""
      />
    </div>
    <div class="content-wrapper" :class="{ auto: cardShow == 1 }">
      <div class="card-top">
        <span
          @click="changeCard(1)"
          :class="{ active: 1 == cardShow }"
          class="top-botton"
          >个人用户</span
        >
        <span
          @click="changeCard(2)"
          :class="{ active: 2 == cardShow }"
          class="top-botton"
          >法人用户</span
        >
      </div>
      <div class="card-main" v-show="cardShow == 1">
        <!--      <div class="title" style="margin-top: 50px;">-->
        <!--        <h3>个人用户</h3>-->
        <!--      </div>-->
        <div class="main-box" style="width:600px; margin-left: 250px">
          <el-form
            :model="regForm"
            status-icon
            :rules="loginRules"
            ref="regForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="regForm.name"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="证件类型">
              <el-select
                v-model="regForm.idType"
                placeholder="请输入证件类型"
                style="width:100%"
              >
                <el-option label="身份证" value="0"></el-option>
                <el-option label="港澳台通行证" value="2"></el-option>
                <el-option label="护照" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件号" prop="idNum">
              <el-input
                v-model="regForm.idNum"
                placeholder="请输入身份证号"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="tel">
              <el-input
                v-model="regForm.tel"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
              <el-input
                v-model="regForm.captcha"
                autocomplete="off"
                placeholder="请输入验证码"
              >
                <el-button
                  slot="append"
                  class="send-code-button"
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
                class="register-submit-button"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="card-main" v-show="cardShow == 2">
        <!--      <div class="title" style="margin-top: 50px;">-->
        <!--        <h3>法人用户</h3>-->
        <!--      </div>-->
        <div class="main-box" style="width:600px; margin-left: 250px">
          <el-form
            :model="regForm2"
            status-icon
            :rules="loginRules"
            ref="regForm2"
            label-width="130px"
            class="demo-ruleForm"
          >
            <el-form-item label="单位名称" prop="cName">
              <el-input
                v-model="regForm2.cName"
                placeholder="请输入单位名称"
              ></el-input
            ></el-form-item>
            <el-form-item label="统一社会信用代码" prop="socialCode">
              <el-input
                v-model="regForm2.socialCode"
                placeholder="请输入统一社会信用代码"
              ></el-input
            ></el-form-item>
            <el-form-item label="单位注册所在地">
              <el-select
                v-model="regForm2.cPlace"
                placeholder="请选择单位注册所在地"
                style="width:470px"
              >
                <el-option
                  v-for="(o, i) in cPlaceList"
                  :key="i"
                  :label="o.name"
                  :value="o.name"
                ></el-option>
                <!-- <el-option label="江夏区" value="江夏区"></el-option>
              <el-option label="硚口区" value="硚口区"></el-option>
              <el-option label="武昌区" value="武昌区"></el-option>
              <el-option label="东西湖区" value="东西湖区"></el-option>
              <el-option label="蔡甸区" value="蔡甸区"></el-option>
              <el-option label="汉南区" value="汉南区"></el-option>
              <el-option label="江汉区" value="江汉区"></el-option>
              <el-option label="江岸区" value="江岸区"></el-option>
              <el-option label="青山区" value="青山区"></el-option>
              <el-option label="黄陂区" value="黄陂区"></el-option>
              <el-option label="洪山区" value="洪山区"></el-option>
              <el-option label="新洲区" value="新洲区"></el-option>
              <el-option
                label="东湖新技术开发区"
                value="东湖新技术开发区"
              ></el-option>
              <el-option label="汉阳区" value="汉阳区"></el-option>
              <el-option
                label="其他（市属企事业单位及高校院所）"
                value="其他（市属企事业单位及高校院所）"
              ></el-option>
              <el-option label="武汉开发区" value=" 武汉开发区"></el-option> -->
              </el-select>
            </el-form-item>

            <el-form-item label="法人姓名" prop="fName">
              <el-input
                v-model="regForm2.fName"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="证件类型">
              <el-select
                v-model="regForm.idType"
                placeholder="请输入证件类型"
                style="width:100%"
              >
                <el-option label="身份证" value="0"></el-option>
                <el-option label="港澳台通行证" value="2"></el-option>
                <el-option label="护照" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件号" prop="idNum2">
              <el-input
                v-model="regForm2.idNum2"
                placeholder="请输入身份证号"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="tel2">
              <el-input
                v-model="regForm2.tel2"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha2">
              <el-input
                v-model="regForm2.captcha2"
                autocomplete="off"
                placeholder="请输入验证码"
                ><el-button
                  slot="append"
                  class="send-code-button"
                  @click="telphone2"
                  :disabled="yzmDis2"
                  >{{ yzmDis2 ? yzmDisText2 : "发送验证码" }}</el-button
                >
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass2">
              <el-input
                type="password"
                autocomplete="off"
                v-model="regForm2.pass2"
                placeholder="8-16位大小写字母加数字"
              ></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass2">
              <el-input
                type="password"
                v-model="regForm2.checkPass2"
                autocomplete="off"
                placeholder="8-16位大小写字母加数字"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm2('regForm2')"
                class="register-submit-button"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- <div class="card-main" v-show="cardShow == 2">222</div> -->
    </div>
  </div>
</template>

<script>
import { regUser, regUser2, telCode, orgList } from "../../api/reg";
import {
  checkCom,
  checkPlace,
  checkSocaial,
  validatePass,
  validatePass2,
  checkTel,
  checkIdNum,
  checkName,
  checkCode
} from "@/utils/val";
export default {
  data() {
    return {
      cardShow: 1,
      regForm: {
        name: "",
        idNum: "",
        tel: "",
        captcha: "",
        pass: "",
        checkPass: "",
        idType: "0"
      },
      regForm2: {
        cName: "",
        socialCode: "",
        cPlace: "",
        fName: "",
        idNum2: "",
        tel2: "",
        captcha2: "",
        pass2: "",
        checkPass2: "",
        idType: "0"
      },
      loginRules: {
        pass: [{ validator: validatePass(this), trigger: "blur" }],
        checkPass: [{ validator: validatePass2(this), trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }],
        idNum: [{ validator: checkIdNum, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        cName: [{ validator: checkCom, trigger: "blur" }],
        cPlace: [{ validator: checkPlace, trigger: "blur" }],
        socialCode: [{ validator: checkSocaial, trigger: "blur" }],
        fName: [{ validator: checkName, trigger: "blur" }],
        idNum2: [{ validator: checkIdNum, trigger: "blur" }],
        tel2: [{ validator: checkTel, trigger: "blur" }],
        pass2: [{ validator: checkCode, trigger: "blur" }],
        checkPass2: [{ validator: checkCode, trigger: "blur" }]
      },

      yzmDis: false,
      yzmDisText: "120s",
      yzmTime: null,

      yzmDis2: false,
      yzmDisText2: "120s",
      yzmTime2: null,

      cPlaceList: null,
      boxH: ""
    };
  },
  created() {
    orgList().then(res => {
      console.log(res);
      if (res && res.code == 200) {
        this.cPlaceList = res.data.filter(
          e => e.name != "全部" && e.name != "其他(市属企事业单位及高校院所)"
        );
      }
    });
  },
  mounted() {
    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight();
    }, 500);
  },

  methods: {
    calcFullHeight() {
      // let h = document.documentElement.clientHeight
      // let headH = document.querySelector('.header-wrapper').clientHeight
      // let footH = document.querySelector('footer').clientHeight
      //
      // this.boxH = (h - headH - footH) + 'px'
      // document.querySelector('.content-wrapper').style.height = this.boxH
    },
    changeCard(index) {
      this.cardShow = index;
      // if(index == 2) {
      //   document.querySelector('.content-wrapper').style.height = ''
      // }else{
      //   document.querySelector('.content-wrapper').style.height = this.boxH
      // }
    },
    async telphone() {
      if (!this.regForm.tel) {
        this.$message.error("手机号不能为空~");
        return false;
      } else {
        var reg = /^[1][3-9][\d]{9}/;
        if (!reg.test(this.regForm.tel)) {
          this.$message.error("请输入正确的手机号~");
          return false;
        }
      }
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
        phone: this.regForm.tel
      });
      console.log(data);
      // this.yzmDis = false
      // if(this.yzmTime) {
      //   clearInterval(this.yzmTime)
      //   this.yzmTime = null
      //   this.yzmDisText = '600s'
      // }
      if (data.code == 200) {
        this.$message.success("验证码已发送！");
      }
    },
    async telphone2() {
      if (!this.regForm2.tel2) {
        this.$message.error("手机号不能为空~");
        return false;
      } else {
        var reg = /^[1][3-9][\d]{9}/;
        if (!reg.test(this.regForm2.tel2)) {
          this.$message.error("请输入正确的手机号~");
          return false;
        }
      }
      this.yzmDis2 = true;
      this.yzmTime = setInterval(() => {
        this.yzmDisText2 = parseInt(this.yzmDisText2) - 1 + "s";
        if (parseInt(this.yzmDisText2) == 0) {
          clearInterval(this.yzmTime);
          this.yzmTime2 = null;
          this.yzmDisText2 = "120s";
          this.yzmDis2 = false;
        }
      }, 1000);

      const data = await telCode({
        phone: this.regForm2.tel2
      });
      console.log(data);
      // this.yzmDis = false
      // if(this.yzmTime) {
      //   clearInterval(this.yzmTime)
      //   this.yzmTime = null
      //   this.yzmDisText = '600s'
      // }
      if (data.code == 200) {
        this.$message.success("验证码已发送！");
      }
    },
    submitForm(str) {
      // this.$refs['ruleForm']  ===  this.$refs.ruleForm
      this.$refs[str].validate(async valid => {
        if (valid) {
          const data = await regUser({
            code: this.regForm.captcha,
            enPaasword: this.regForm.checkPass,
            idNumber: this.regForm.idNum,
            name: this.regForm.name,
            newPassword: this.regForm.pass,
            phone: this.regForm.tel,
            idType: this.regForm.idType
          });
          console.log(data);
          if (data.code == 200) {
            // this.$router.push("login");
            // this.$router.go(0);
            this.$message.success("注册成功！");

            setTimeout(() => {
              this.$router.push("login");
            }, 1000);
          }
        } else {
          console.log("表单不通过校验");
          this.$message.error("注册失败!");

          return false;
        }
      });
    },
    submitForm2(str) {
      console.log(this.regForm2);
      this.$refs[str].validate(async valid => {
        if (valid) {
          const data = await regUser2({
            code: this.regForm2.captcha2,
            enPaasword: this.regForm2.checkPass2,
            idNumber: this.regForm2.idNum2,
            name: this.regForm2.fName,
            newPassword: this.regForm2.pass2,
            phone: this.regForm2.tel2,
            uscc: this.regForm2.socialCode,
            enterpriseName: this.regForm2.cName,
            district: this.regForm2.cPlace,
            idType: this.regForm.idType
          });
          console.log(data);
          if (data.code == 200) {
            this.$message.success("注册成功！");

            setTimeout(() => {
              this.$router.push("login");
            }, 1000);
          }
        } else {
          console.log("表单不通过校验");
          this.$message.error("注册失败!");

          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.reg-big-box {
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
  margin: 24px auto;
  background: transparent !important;

  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(153, 153, 153, 0.2);
  border-radius: 10px;
  &.auto {
    overflow: auto;
  }
}
.card-top {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  .top-botton {
    width: 88px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: -1px;
    position: relative;
    &:first-child {
      margin-right: 100px;
    }
    &:after {
      position: absolute;
      width: 76px;
      height: 4px;
      background: #0a63dd;
      border-radius: 2px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      display: none;
      transition: all 3s;
    }
    &.active:after {
      display: block !important;
    }
  }
  .top-botton:hover {
    //background-color: #f7f7f7;
  }
}
.card-main {
  padding: 60px 0;
  .title {
  }
  .main-box {
  }
}
/deep/.el-form-item__label {
  // width: 200px !important;
}
.register-submit-button {
  width: 300px;
  height: 40px;
  background: #0a63dd;
  border-radius: 6px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  padding: 0;
}
/deep/ .el-input-group__append {
  background: white !important;
  border: none !important;
}
.send-code-button {
  width: 94px;
  height: 31px;
  background: #e6eef8 !important;
  border: 1px solid #3f74fb !important;
  border-radius: 6px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #3f67d2 !important;
  padding: 0 !important;
  margin-left: 0px;
  &.is-disabled {
    background: #e6eef8 !important;
    border-color: #e6eef8 !important;
  }
}
/deep/ .el-form-item {
  margin-bottom: 20px;
}
/deep/ .el-input {
  &,
  & .el-input__inner,
  .el-input__icon,
  .el-select__caret {
    height: 32px !important;
    line-height: 32px;
    border-radius: 6px;
  }
}
/deep/ .el-form-item__label {
  line-height: 40px;
}
</style>
