<template>
  <div class="login-big-box">
    <div class="top-banner">
      <img
        class="banner-image"
        src="../../assets/imgs/wfimg/home-banner.png"
        alt=""
      />
    </div>
    <div class="banner">
      <img
        class="banner-image"
        src="../../assets/imgs/newImg/login.png"
        alt=""
      />
      <div class="content-layout">
        <div class="login-box-wrapper">
          <div class="wl-box">WELCOME<span>欢迎登录</span></div>
          <div class="login-box">
            <el-tabs v-model="activeName" style="background:#fff">
              <el-tab-pane label="个人" name="first">
                <el-form
                  ref="loginForm"
                  :model="loginForm"
                  :rules="loginRules"
                  class="login-form"
                >
                  <el-form-item prop="username">
                    <el-input
                      v-model="loginForm.username"
                      type="text"
                      auto-complete="off"
                      placeholder="身份证/手机号"
                      prefix-icon="el-icon-user"
                      maxLength="20"
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input
                      v-model="loginForm.password"
                      type="password"
                      auto-complete="off"
                      placeholder="请输入密码"
                      prefix-icon="el-icon-lock"
                      maxLength="20"
                    >
                      <template slot="append"
                        ><span
                          @click="handelFor('PERSONAL')"
                          style="cursor: pointer"
                          >忘记密码</span
                        >
                      </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="captcha">
                    <el-input
                      v-model="loginForm.captcha"
                      auto-complete="off"
                      placeholder="请输入验证码"
                      prefix-icon="el-icon-key"
                    >
                      <template slot="append">
                        <div class="captcha-wrapper">
                          <img
                            class="captcha"
                            :src="'data:image/png;base64,' + testImgs"
                            alt=""
                          />
                          <a class="refreshCaptcha" @click="refresh">刷新</a>
                        </div>
                      </template>
                    </el-input>
                  </el-form-item>
                  <div style="display: flex;justify-content: space-between;">
                    <el-form-item class="login-btn-wrapper">
                      <el-button
                        class="login-btn btn"
                        @click="submitForm('loginForm', 'PERSONAL')"
                        >登录</el-button
                      >
                    </el-form-item>
                    <el-form-item class="login-btn-wrapper">
                      <el-button
                        class="login-btn btn reg-box"
                        @click="jumpTo()"
                        style="margin-left: 30px"
                        >注册</el-button
                      >
                    </el-form-item>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="企业" name="second">
                <el-form
                  ref="loginForm1"
                  :model="loginForm"
                  :rules="loginRules"
                  class="login-form"
                >
                  <el-form-item prop="username">
                    <el-input
                      v-model="loginForm.username"
                      type="text"
                      auto-complete="off"
                      placeholder="统一社会信用代码"
                      prefix-icon="el-icon-user"
                      maxLength="20"
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input
                      v-model="loginForm.password"
                      type="password"
                      auto-complete="off"
                      placeholder="请输入密码"
                      prefix-icon="el-icon-lock"
                      maxLength="20"
                    >
                      <template slot="append"
                        ><span
                          @click="handelFor('ENTERPRISE')"
                          style="cursor: pointer"
                          >忘记密码</span
                        >
                      </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="captcha">
                    <el-input
                      v-model="loginForm.captcha"
                      auto-complete="off"
                      placeholder="请输入验证码"
                      prefix-icon="el-icon-key"
                    >
                      <template slot="append">
                        <div class="captcha-wrapper">
                          <img
                            class="captcha"
                            :src="'data:image/png;base64,' + testImgs"
                            alt=""
                          />
                          <a class="refreshCaptcha" @click="refresh">刷新</a>
                        </div>
                      </template>
                    </el-input>
                  </el-form-item>
                  <div style="display: flex;justify-content: space-between;">
                    <el-form-item class="login-btn-wrapper">
                      <el-button
                        class="login-btn btn"
                        @click="submitForm('loginForm1', 'ENTERPRISE')"
                        >登录</el-button
                      >
                    </el-form-item>
                    <el-form-item class="login-btn-wrapper">
                      <el-button
                        class="login-btn btn reg-box"
                        @click="jumpTo()"
                        style="margin-left: 30px"
                        >注册</el-button
                      >
                    </el-form-item>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken, setId, setName } from "../../utils/auth";
import { pictureCode, loginCode } from "../../api/login";
import { mapMutations } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        captcha: "",
        key: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "用户名不能为空"
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "密码不能为空"
          }
        ],
        captcha: [
          {
            required: true,
            trigger: "change",
            message: "验证码不能为空"
          }
        ]
      },
      testImgs: "",
      paramCode: "",

      activeName: "first"
    };
  },
  created() {
    this.getPictureCode();
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
    // 验证图片
    async getPictureCode() {
      const data = await pictureCode();
      // console.log(data);
      console.log(data.paramCode);

      this.testImgs = data.base64Img;
      this.paramCode = data.paramCode;
    },
    jumpTo() {
      this.$router.push("register");
    },
    submitForm(str, type) {
      let that = this;
      this.$refs[str].validate(valid => {
        if (valid) {
          loginCode({
            loginName: this.loginForm.username,
            paramCode: this.paramCode,
            password: this.loginForm.password,
            type: type,
            verifyCode: this.loginForm.captcha
          }).then(data => {
            console.log(data);

            if (data.code == 0 || data.code == 200) {
              this.setUserInfo(data.user);

              setToken(data.token);
              setId(data.user.id);
              setName(JSON.stringify(data.user.name));

              this.$message.success("登录成功！");

              setTimeout(() => {
                // this.$router.push("/");
                // this.$router.go(0);

                // 判断是否带有redirect的参数。。如果有跳转到对应页面
                let redirect = that.$route.query && that.$route.query.redirect;
                if (redirect) {
                  that.$router.push("/" + redirect);
                } else {
                  that.$router.push("/");
                  that.$router.go(0);
                }
              }, 1000);
            } else if (data.code == 1005) {
              // this.$alert("您需要重置信息!", {
              this.$alert(data.info, "提示", {
                confirmButtonText: "确定"
              }).then(() => {
                this.$router.push({
                  name: "millcode",
                  params: {
                    userInfo: data.user,
                    password: this.loginForm.password
                  }
                });
              });
            }
          });
        } else {
          console.log("error submit!!");
          this.$message.error("登录失败!");

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async refresh() {
      const data = await pictureCode();
      // console.log(data);
      console.log(data.paramCode);

      this.testImgs = data.base64Img;
      this.paramCode = data.paramCode;
    },
    handelFor(type) {
      if (type == "ENTERPRISE") {
        this.$router.push({
          name: "forgetCode",
          query: {
            type
          }
        });
      } else {
        this.$router.push("forgetCode");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login-big-box {
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
.banner {
  position: relative;
  //padding-left: 100px;
  height: 700px; // 后期根据ui给的图片而定，先写死
  overflow: hidden;

  .banner-image {
    display: block;
    width: 100%;
    height: 700px; // 后期根据ui给的图片而定，先写死
    position: absolute;
    left: 0;
    top: 0;
  }

  .banner-title {
    color: #ffffff;
    font-weight: bold;
    position: relative;
    margin: 0 auto 18px;
    text-align: center;

    .cn-text {
      font-size: 26px;
      letter-spacing: 2px;
      margin: 0;
    }

    .en-text {
      font-size: 60px;
      opacity: 0.1;
      margin: -50px 0 0;
    }
  }
}

.content-layout {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  .login-box-wrapper {
    position: absolute;
    top: 100px;
    left: 800px;
    width: 340px;

    /deep/ .el-input__inner {
      border-radius: 0;
      border: 0;
      border-bottom: 1px solid #dcdfe6;
    }

    /deep/ .el-input-group__append {
      border: 0;
      background: transparent;
      border-bottom: 1px solid #dcdfe6;
      color: #0080e8;
      padding-right: 0;
    }

    .login-box {
      width: 350px;
      min-height: 360px;
      background: #ffffff;
      box-shadow: 0 0 10px 0 rgba(0, 31, 110, 0.5);
      // padding: 0 28px 28px 28px;
      font-size: 14px;

      h3 {
        font-size: 20px;
        font-weight: 500;
        color: #333333;
        text-align: left;
        margin-top: 0;
      }

      .captcha-wrapper {
        display: flex;
        align-items: center;
      }

      .refreshCaptcha {
        display: inline-block;
        width: 52px;
        height: 33px;
        background: #f2f2f2;
        border: 1px solid #dddddd;
        border-radius: 4px;
        line-height: 33px;
      }

      .captcha {
        display: inline-block;
        width: 70px;
        height: 25px;
        vertical-align: bottom;
        margin-right: 4px;
        border: none;
      }

      .login-btn-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;

        .btn {
          width: 130px;
          height: 40px;
          border-radius: 6px;
          border: none;
          line-height: 20px !important;
        }

        .login-btn {
          background-color: #0a63dd;
          border-color: #0a63dd;
          color: #fff;
        }

        .register-btn {
          background: #ffffff;
          border: 1px solid #d20715;
          border-radius: 6px;
          color: #d20715;
        }
      }
    }
  }
}

.wl-box {
  font-size: 60px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.1);
  position: relative;
  span {
    display: block;
    position: absolute;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    top: 0;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.reg-box {
  background: none !important;
  border: 1px solid #0a63dd !important;
  border-radius: 6px !important;
  color: #0a63dd !important;
}
::v-deep .el-tabs__header {
  background: #e5f0ff;
  border: none;
}
::v-deep .el-tabs__content {
  padding: 20px;
}
::v-deep .el-tabs__nav {
  margin-left: 120px;
  height: 50px;
  line-height: 50px;
}
::v-deep .is-active {
  font-weight: bold;
}
</style>
