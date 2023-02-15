<template>
  <div class="header-wrapper">
    <div class="top-menu">
      <div class="inner">
        <!-- 黑白文字判断 :style="activeMenu != '/index' ? 'color:#000' : ''" -->
        <!-- 黑白文字判断 :style="activeMenuList.indexOf(activeMenu) != -1 ? '' : 'color:#000'" -->
        <div
          class="inner-l"
          @click="$router.push('/index');currentMenu = ''"
          :style="activeBlackColor.indexOf(activeMenu) != -1 ? 'color:#000':''"
        >
          <div class="inner-l-t">武汉人才工作</div>
          <div class="inner-l-b">WUHAN TALENT WORK</div>
        </div>
        <div class="inner-m">
          <div
            @click="MenuHandleClick('/zxzx')"
            :style="activeBlackColor.indexOf(activeMenu) != -1 ? 'color:#000':''"
            :class="[activeMenu == '/zxzx' || activeMenu == '/Rcyw' || activeMenu == '/Gzdt' || activeMenu == '/Rchd' || activeMenu == '/Tzgg' || activeMenu == '/zxzxDetail'? 'activeSty' : '']"
          >
            资讯中心
          </div>
          <div
            @click="MenuHandleClick('/rczc')"
            :style="activeBlackColor.indexOf(activeMenu) != -1 ? 'color:#000':''"
            :class="[activeMenu == '/rczc' || activeMenu == '/Zcwj' || activeMenu == '/Qywj' || activeMenu == '/rczcDetail'? 'activeSty' : '']"
          >
            人才政策
          </div>
          <div
            @click="MenuHandleClick('/fwdt')"
            :style="activeBlackColor.indexOf(activeMenu) != -1 ? 'color:#000':''"
            :class="[activeMenu == '/fwdt' || activeMenu == '/Rcjh' || activeMenu == '/Sxfw' ? 'activeSty' : '']"
          >
            服务大厅
          </div>
          <div
            @click="MenuHandleClick('/gywm')"
            :style="activeBlackColor.indexOf(activeMenu) != -1 ? 'color:#000':''"
            :class="[activeMenu == '/gywm'  || activeMenu == '/lxwm' || activeMenu == '/hdjl'? 'activeSty' : '']"
          >
            关于我们
          </div>
        </div>
        <div class="inner-r">
          <div class="inner-r-user" v-if="userInfo">
            <div class="user-name-box">
              {{
                this.userInfo.type == "ENTERPRISE"
                  ? companyName
                  : username.replace(/^['|"](.*)['|"]$/, "$1")
              }}
            </div>
            <div class="user-btn-box">
              <span
                v-if="this.userInfo && this.userInfo.type == 'PERSONAL'"
                @click="handlPerosonal"
                style="border-right:1px solid #0a63dd"
                >个人中心</span
              >
              <span
                v-else-if="this.userInfo && this.userInfo.type == 'ENTERPRISE'"
                @click="handlCompany"
                style="border-right:1px solid #0a63dd"
                >法人中心</span
              >
              <span @click="handleLogOut">退出</span>
            </div>
          </div>
          <div class="inner-r-login" v-else>
            <span :class="activeMenu == '/login'?'login-btn reg-btn':'reg-btn'" @click="handleLogin" style="border-right: 1px solid #0a63dd;">登录</span>
            <span :class="activeMenu == '/register'?'login-btn reg-btn':'reg-btn'" @click="handleReg">注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getName, removeData } from "../utils/auth";
import { mapMutations, mapState } from "vuex";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      navList: [
        { path: "zxzx", title: "资讯中心" },
        { path: "rczc", title: "人才政策" },
        { path: "fwdt", title: "服务大厅" },
        { path: "gywm", title: "关于我们" }
      ],
      currentMenu: "",
      activeBlackColor:["/personal","/qingshan2","/company","/comInfo"],
      activeMenuList:['/index','/zxzx','/rczc','/fwdt','/gywm','/Rcyw','/Gzdt','/Rchd','/Tzgg','/Zcwj','/Qywj','/Rcjh','/Sxfw','/zxzxDetail','/rczcDetail','/zTlent','/cTlent','/yTlent','/qingshan','/lxwm','/hdjl']
    };
  },
  name: "Header",
  created() {},
  mounted() {
    EventBus.$on("userInvalid", () => {
      if (window.userInvalid) {
        window.userInvalid = false;
        this.handleLogOut();
      }
    });
  },
  computed: {
    ...mapState(["userInfo"]),
    username() {
      return getName();
    },
    companyName() {
      return this.userInfo.companyName;
    },
    role() {
      return this.$store.state.role;
    },
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      console.log(this.$route.path, 8888);
      return path;
    }
  },
  methods: {
    ...mapMutations(["setPersonalInfo", "setUserInfo", "setComponyInfo"]),
    handleJump(page) {
      if (page == "/operateGuide") {
        let routeData = this.$router.resolve({
          path: "/operateGuide"
        });
        window.open(routeData.href, "_blank");
      } else {
        this.$router.push(page);
      }
    },

    handleLogin() {
      this.$router.push("/login");
    },

    handleReg() {
      this.$router.push("/register");
    },
    handleCheckJump() {
      // 判断当前角色是否是超级管理员。只有管理员有进入个人中心权限
      if (this.$store.state.role == "ROLE_SUPER_ADMIN") {
        this.$router.replace("/user/info");
      }
    },
    handleLogOut() {
      this.$router.push("/login");
      this.setPersonalInfo(null);
      this.setUserInfo(null);
      this.setComponyInfo(null);
      removeData();
      setTimeout(() => {
        this.$emit("winReload");
      }, 500);
    },
    handlPerosonal() {
      this.$router.push("/personal");
    },
    handlCompany() {
      this.$router.push("/company");
    },
    MenuHandleClick(path) {
      this.currentMenu = path;
      this.$router.push({path,query:{index:0}});
    }
  }
};
</script>

<style scoped lang="less">
.header-wrapper {
  position: relative;
  z-index: 2;
  .top-menu {
    padding: 10px 10px 0 10px;
    .inner {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .inner-l {
        color: #ffffff;
        cursor: pointer;
        .inner-l-t {
          font-size: 34px;
          font-family: Source Han Sans CN;
          font-weight: bold;
        }
        .inner-l-b {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          letter-spacing: 3px;
        }
      }
      .inner-m {
        display: flex;
        margin-top: 12px;
        div {
          margin: 0 40px;
          cursor: pointer;
          font-size: 22px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
        }
        .activeSty {
          border-bottom: 2px solid #0a63dd;
          padding-bottom: 20px;
        }
      }
      .inner-r {
        .inner-r-user {
          .user-name-box {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;
          }
          .user-btn-box {
            width: 110px;
            background: rgba(9, 98, 221, 0.1);
            border-radius: 4px;
            padding: 5px;
            margin: 10px auto 0 auto;
            span {
              cursor: pointer;
              color: #0962dd;
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              padding: 0 5px;
            }
          }
        }
        .inner-r-login {
          border: 1px solid #0a63dd;
          border-radius: 6px;
          span {
            display: inline-block;
            cursor: pointer;
            width: 60px;
            height: 28px;
            line-height: 28px;
          }
          .login-btn {
            color: #fff !important;
            background: #0a63dd;
          }
          .reg-btn {
            color: #0a63dd;
          }
        }
      }
    }
  }
  .bottom-menu {
    background: #f1eeea;
    .inner {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 18px;
      color: #666;
      div:hover {
        border-bottom: 4px solid red;
        p {
          color: red;
        }
      }
    }
    .menu-item {
      margin-left: 40px;
      padding: 0px 15px 0px;
      margin-left: 15px;
      border-bottom: 4px solid transparent;
      cursor: pointer;
      &.menu-item1 {
        display: flex;
        align-items: center;
        a {
          height: 60px;
          line-height: 60px;
        }
        &:hover {
          a {
            color: red;
          }
        }
      }
    }
    .menu-item.active {
      border-bottom: 4px solid #db0810;
    }
  }
}
</style>
