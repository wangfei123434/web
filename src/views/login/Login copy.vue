<template>
  <div>
    <div class="banner">
      <!-- <img class="banner-image" src="../../assets/imgs/banner.gif" alt="" /> -->
      <img
        class="banner-image"
        src="../../assets/imgs/newImg/login.jpg"
        alt=""
      />
      <div class="content-layout">
        <div class="login-box-wrapper">
          <div class="login-box">
            <h3>欢迎登录</h3>
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
                  placeholder="身份证/统一社会信用代码/手机号"
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
                    ><span @click="handelFor" style="cursor:pointer;">忘记密码</span>
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
                <!--                <div class="login-code">-->
                <!--                  <img :src="codeUrl" @click="getCode" />-->
                <!--                </div>-->
              </el-form-item>
              <div style="display:flex">
                <el-form-item class="login-btn-wrapper">
                  <el-button
                    class="login-btn btn"
                    @click="submitForm('loginForm')"
                    >登录</el-button
                  >

                  <!-- <div class="register-btn btn">注册</div> -->
                </el-form-item>
                <el-form-item class="login-btn-wrapper">
                  <el-button
                    class="login-btn btn"
                    @click="jumpTo()"
                    style="margin-left:30px"
                    >注册</el-button
                  >

                  <!-- <div class="register-btn btn">注册</div> -->
                </el-form-item>
              </div>
              <div>客服电话： 027-83991871</div>
            </el-form>
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
      paramCode: ""
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
    submitForm(str) {
      let that = this;
      this.$refs[str].validate(valid => {
        if (valid) {
          loginCode({
            loginName: this.loginForm.username,
            paramCode: this.paramCode,
            password: this.loginForm.password,
            type: "string",
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
              this.$alert(data.info, '提示', {
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
    handelFor() {
      this.$router.push("forgetCode");
    }
  }
};
</script>

<style lang="less" scoped>
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
    top: 120px;
    // right: 100px;
    left: 420px;
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
      // border-radius: 10px;
      padding: 28px;
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
          // background: #2795dc;
          background-color: #db0810;
          border-color: #d20715;
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
</style>
