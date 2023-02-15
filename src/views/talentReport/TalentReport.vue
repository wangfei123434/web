<template>
  <!-- 容器 -->
  <div class="box">
    <div class="banner">
      <img
        class="banner-image"
        src="../../assets/imgs/wfimg/home-banner.png"
        alt=""
      />
    </div>
    <div class="content-wrapper">
      <!-- banner -->

      <el-container>
        <el-aside width="250px">
          <!-- 导航 -->
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                :router="true"
              >
                <div id="title"><h3>武汉英才计划</h3></div>
                <div
                  style="background-color: #f7f7f7;padding-top:10px;padding-bottom:14px"
                >
                  <el-menu-item index="/zTlent">
                    <span slot="title">战略科技人才</span>
                  </el-menu-item>
                  <el-menu-item index="/cTlent">
                    <span slot="title">产业领军人才</span>
                  </el-menu-item>
                  <el-menu-item index="/yTlent">
                    <span slot="title">优秀青年人才</span>
                  </el-menu-item>
                  <!-- <el-menu-item index="/wTlent" disabled>
                  <span slot="title">武汉工匠</span>
                </el-menu-item> -->
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-header
            ><el-breadcrumb>
              <el-breadcrumb-item
                v-for="item in navList"
                :key="item.name"
                :to="{ path: item.path }"
                >{{ item.name }}</el-breadcrumb-item
              >
            </el-breadcrumb></el-header
          >
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: []
    };
  },
  created() {
    // console.log(this.$route.matched, 1111);
    this.getNav();
  },
  methods: {
    // 面包屑
    getNav() {
      const arr = [{ name: "当前位置>>" }];
      this.$route.matched.forEach(item => {
        if (item.meta.name) {
          arr.push({
            path: item.path || "/",
            name: item.meta.name
          });
        }
      });
      this.navList = arr;
    }
  },
  watch: {
    "$route.path"() {
      this.getNav();
    }
  }
};
</script>

<style lang="less" scoped>
.box{
  position: relative;
  top: -94px;
  .banner {
    width: 100%;
    height: 260px;
    .banner-image {
      width: 100%;
      height: 100%;
    }
  }
}
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}

// element容器
.el-header {
  // background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 2px solid #0a63dd;
}

.el-aside {
  // background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 250px;
}

/deep/.el-main {
  height: 100%;
  padding: 0;
  padding-left: 40px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
// 导航

.el-menu {
  width: 250px;
  height: 100%;
  border-right: solid 1px white;
  #title {
    width: 250px;
    height: 70px;
    background-color: #0a63dd;
    line-height: 70px;
    color: white;
    font-size: 20px;
    font-weight: 400;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .el-menu-item {
    // border-bottom: 2px solid #696969;
    // text-align: left;

    font-weight: bolder;
    font-size: 17px;
    & > span {
      margin-left: 70px;
      margin: 0 auto;
    }
  }
  .el-menu-item.is-active {
    // border-bottom: 2px solid red;
    // background-color: #fff !important;
    // color: red !important;
    margin-top: 30px;
    margin-bottom: 18px;
    margin-left: 54px;
    height: 17px;
    width: 136px;
    text-align: center;
    line-height: 2px;
    border-radius: 8px 8px 8px 8px;
    background-color: #e6effc;
    font-size: 17px;
    color: #0a63dd !important;
    & > span {
      margin-left: -4px;
    }
  }
}

//面包屑

/deep/ .el-breadcrumb__separator {
  color: black !important;
}
.el-breadcrumb {
  line-height: 82px;
}
/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #0a63dd;
}
/deep/ .el-breadcrumb__inner.is-link,
.el-breadcrumb__inner a {
  font-weight: normal;
  // text-decoration: none;
  color: #000;
}
/deep/ .el-breadcrumb__inner.is-link:hover,
.el-breadcrumb__inner a :hover {
  color: #0a63dd;
}
</style>
