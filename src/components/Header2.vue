<!--
 * @Author: zy
 * @Date: 2021-5-6 
 * @LastEditTime: 
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \黄陂门户\portal\src\components\TopHeader.vue
-->

<template>
  <div class="header-wrapper">
    <div class="top-menu">
      <div class="inner">
        <div class="left-title">
          <img src="../assets/imgs/newImg/logoWhite.png" alt="xxx" />
        </div>
        <div class="right-content">
          <div class="link-wrapper"></div>
          <!-- v-show="username ? false : true" -->
          <img
            v-show="userInfo ? false : true"
            src="../assets/imgs/newImg/loginWhite.png"
            alt=""
            width="15"
          />
          <div v-if="userInfo" class="user-info">
            <!--          <img @click="handleCheckJump" src="../assets/imgs/avator.png" alt="" />-->

            {{
              this.userInfo.type == "ENTERPRISE"
                ? companyName
                : username.replace(/^['|"](.*)['|"]$/, "$1")
            }}

            <div
              @click="handlPerosonal"
              style="margin-left:10px"
              v-if="this.userInfo && this.userInfo.type == 'PERSONAL'"
            >
              个人中心
            </div>
            <div
              @click="handlCompany"
              style="margin-left:10px"
              v-else-if="this.userInfo && this.userInfo.type == 'ENTERPRISE'"
            >
              法人中心
            </div>
            <div @click="handleLogOut" style="margin-left:16px;">退出</div>
          </div>
          <div v-else class="log-reg">
            <div class="login-btn" @click="handleLogin">登录</div>
            <div class="register-btn" @click="handleReg">
              注册
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-menu">
      <div class="inner">
        <div
          :class="[activeMenu == '/index' ? 'menu-item active' : 'menu-item']"
          @click="handleJump('/index')"
        >
          <p>
            首页
          </p>
        </div>
        <!-- <div
          class="menu-item"
          :class="[
            activeMenu.indexOf('/report') > -1 ||
            activeMenu.indexOf('/houseMap') > -1
              ? 'active'
              : ''
          ]"
          @click="handleJump('/students')"
        >
          <p>人才留汉</p>
        </div> -->
        <div
          class="menu-item"
          :class="[activeMenu.indexOf('Tlent') > -1 ? 'active' : '']"
          @click="handleJump('/talentReport')"
        >
          <p>人才申报</p>
        </div>
        <div
          :class="[
            activeMenu == '/serviceClass' || activeMenu == '/milionEngineer' || activeMenu == '/milRead' || activeMenu == '/trainStu' || activeMenu == '/workPosition' || activeMenu == '/serveBussiness' || activeMenu == '/hhTalent' || activeMenu == '/navList'
            ? 'menu-item active' : 'menu-item'
          ]"
          @click="handleJump('/service')"
        >
          <p>人才服务</p>
        </div>
        <div
          class="menu-item"
          :class="[
            activeMenu == '/workState' || activeMenu == '/ploFile'  || activeMenu == '/talentNews'  || activeMenu == '/talentLive'  || activeMenu == '/talentActivities'  || activeMenu == '/newsInfo'  || activeMenu == '/enterprisePlan' 
              ? 'active'
              : ''
          ]"
          @click="handleJump('/talentNews')"
        >
          <p>人才政策</p>
        </div>
        <div
          target="_blank"
          class="menu-item menu-item1"
        >
        <a href="http://www.whzc.gov.cn/dxslh/" target="_blank" >百万大学生留汉工程</a>
        </div>
        <div
          :class="[
            activeMenu == '/operateGuide' ? 'menu-item active' : 'menu-item'
          ]"
          @click="handleJump('/operateGuide')"
        >
          <p>操作指南</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getName, removeData } from "../utils/auth";
import { mapMutations, mapState } from "vuex";
import { EventBus } from '@/event-bus.js';

export default {
  data() {
    return { avtivecolor: "color:#b8b8b8" };
  },
  name: "Header",
  created() {
    // console.log(JSON.parse(getName()));
  },
  mounted() {
    EventBus.$on('userInvalid', () => {
      if(window.userInvalid) {
        window.userInvalid = false
        this.handleLogOut()
      }
    })
  },
  computed: {
    ...mapState(["userInfo"]),
    username() {
      // return this.$store.state.username;
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
      if(page == '/operateGuide') {
        let routeData = this.$router.resolve({
              path:'/operateGuide'
          });
          window.open(routeData.href, '_blank');
      }else{
        this.$router.push(page);
      }
    },

    handleLogin() {
      this.$router.push("/login");
      // this.$store.commit("SET_LOGIN", true);
    },

    handleReg() {
      // this.$router.replace("register");
      this.$router.push("/register");
    },
    handleCheckJump() {
      // 判断当前角色是否是超级管理员。只有管理员有进入个人中心权限
      if (this.$store.state.role == "ROLE_SUPER_ADMIN") {
        this.$router.replace("/user/info");
      }
    },
    handleLogOut() {
      // this.$store.dispatch("LogOut").then(() => {
      //   location.reload();
      // });

      this.$router.push('/login')
      this.setPersonalInfo(null);
      this.setUserInfo(null);
      this.setComponyInfo(null);

      // this.$emit("winReload");

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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-wrapper {
  //height: 68px;
  //background: #9ba7cf;

  .top-menu {
    background: #db0810;
    //padding: 29px 0 20px;
    padding: 0 0 20px;

    .inner {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }

    .left-title {
      // font-size: 20px;
      // font-weight: 800;
      // color: #ffffff;
      margin-top: 20px;
    }

    .right-content {
      height: 40px;

      align-items: center;
      display: flex;

      .link-wrapper {
        display: flex;

        .link {
          padding: 30px 14px 2px;
          //border-right: 1px solid #fff;
          font-size: 16px;
          cursor: pointer;
          margin-right: 6px;
          //padding-top: 30px;

          &.active {
            background: #d30711;
            border-bottom: 4px solid #fa9514;
            //border-right: 1px solid #d30711;
          }

          &.border-none {
            border: none;
          }
        }
      }
      .log-reg {
        display: flex;
        .login-btn {
          // width: 40px;
          // height: 20px;
          // background: #fff;
          font-size: 12px;
          // border-radius: 20px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 30px;
        }

        .register-btn {
          font-size: 12px;
          margin-top: 30px;
          cursor: pointer;
        }
      }
      img {
        margin-top: 29px;
        cursor: pointer;
      }
      .user-info {
        display: flex;
        height: 30px;
        font-size: 14px;
        color: #f7f8fc;
        align-items: center;
        cursor: pointer;
        margin-top: 25px;

        img {
          display: block;
          width: 30px;
          height: 30px;
          margin-right: 8px;
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
      //border-radius: 2px;
      cursor: pointer;
      &.menu-item1 {
        display:flex;
        align-items:center;
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
      //border-image: linear-gradient(#c1312d, #fa9514) 30 30;
    }
  }
}
</style>
