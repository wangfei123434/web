<template>
  <div class="content-wrapper">
    <div class="bread">
      <el-breadcrumb>
        <el-breadcrumb-item
          v-for="item in navList"
          :key="item.name"
          :to="{ path: item.path }"
          >{{ item.name }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <div class="box ">
      <div class="top">服务分类</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // flag1: false,
      // flag2: false,
      // flag3: false,
      // flag4: false,
      navList: []
    };
  },
  created() {
    console.log(this.$route.matched, 1111);
    this.getNav();
  },
  methods: {
    // 面包屑
    getNav() {
      console.log(222);
      const arr = [{ name: "当前位置>>" }];
      this.$route.matched.forEach(item => {
        if (item.meta.name) {
          arr.push({
            path: item.path || '/',
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
  .bread {
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
  }
  .box {
    width: 1000px;
    // height: 340px;
    border: 1px solid #cccccc;
    // display: flex;
    padding: 30px;
    margin-bottom: 200px;
    .top {
      height: 50px;
      width: 950px;
      border-bottom: 2px solid red;
      padding: 15px;
      text-align: left;
      font-weight: bolder;
      font-size: 20px;
    }
    // .box-list {
    //   display: flex;
    //   .box-lists {
    //     width: 160px;
    //     height: 160px;
    //     background-color: #f8f8f8;
    //     display: inline-block;
    //     display: flex;
    //     flex-direction: column;
    //     //   align-self: center;
    //     align-items: center;
    //     justify-content: center;
    //     margin-right: 30px;
    //     margin-top: 50px;
    //     img {
    //       width: 50px;
    //       height: 50px;
    //       display: inline-block;
    //     }
    //     span {
    //       margin-top: 10px;
    //       display: inline-block;
    //     }
    //   }
    //   .box-lists:hover {
    //     box-shadow: 5px 5px 20px 0px rgba(241, 238, 234);
    //   }
    // }
  }
}
</style>
