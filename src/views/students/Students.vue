<template>
  <!-- 容器 -->
  <div class="content-wrapper">
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
              <div id="title"><h3>人才留汉住房租赁</h3></div>
              <div
                style="background-color: #f7f7f7;padding-top:10px;padding-bottom:14px"
              >
                <el-menu-item index="/reportGuide">
                  <span slot="title">申报指南</span>
                </el-menu-item>
                <el-menu-item index="/houseMap">
                  <span slot="title">房源查看</span>
                </el-menu-item>
                <el-menu-item index="/reportOnlie">
                  <!-- <span slot="title">在线申报</span> -->
                  <span slot="title">资格申请</span>
                </el-menu-item>
                <el-menu-item
                  index="/reportHouse1"
                  :class="zxxf ? 'select' : ''"
                >
                  <span slot="title">在线选房</span>
                </el-menu-item>
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
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
  computed: {
    zxxf() {
      // return window.location.pathname.includes('reportHouse') || window.location.pathname.includes('houseMap')
      return window.location.pathname.includes("reportHouse");
    }
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
  border-bottom: 2px solid #d10100;
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
    background-color: #d9001b;
    line-height: 70px;
    color: white;
    font-size: 20px;
    font-weight: 400;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .el-menu-item {
    // border-bottom: 2px solid #696969;
    font-weight: bolder;
    font-size: 17px;
    text-align: left;

    & > span {
      margin-left: 70px;
    }
  }
  .el-menu-item.is-active {
    // border-bottom: 2px solid red;
    // background-color: #fff !important;
    // color: red !important;
    margin-top: 30px;
    margin-bottom: 18px;
    margin-left: 70px;
    height: 17px;
    width: 110px;
    text-align: center;
    line-height: 3px;
    border-radius: 8px 8px 8px 8px;
    background-color: #ffcfcf;
    font-size: 17px;
    color: red !important;
    & > span {
      margin-left: -1px;
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
  color: red;
}
/deep/ .el-breadcrumb__inner.is-link,
.el-breadcrumb__inner a {
  font-weight: normal;
  // text-decoration: none;
  color: #000;
}
/deep/ .el-breadcrumb__inner.is-link:hover,
.el-breadcrumb__inner a :hover {
  color: red;
}

.select {
  margin-top: 30px;
  margin-bottom: 18px;
  margin-left: 70px;
  height: 17px;
  width: 110px;
  text-align: center;
  line-height: 3px;
  border-radius: 8px 8px 8px 8px;
  background-color: #ffcfcf;
  font-size: 17px;
  color: red !important;
  & > span {
    margin-left: -1px !important;
  }
}
</style>
