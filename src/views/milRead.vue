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
              <div id="title"><h3>百万大学生留汉工程</h3></div>
              <div
                style="
                  background-color: #f7f7f7;
                  padding-top: 10px;
                  padding-bottom: 14px;
                "
              >
                <el-menu-item class="active">
                  <span slot="title">{{
                    $route.query.title.substr(0, 10)
                  }}</span>
                </el-menu-item>
                <el-menu-item
                  index="/trainStu"
                  v-show="title == '大学生实习（训）见习岗位' ? true : false"
                  :disabled="userInfo?false:true"
                >
                  <span slot="title">实习见习申请</span>
                </el-menu-item>
                <el-menu-item
                  index="/workPosition"
                  v-show="title == '大学生创业工位' ? true : false"
                  :disabled="userInfo?false:true"
                >
                  <span slot="title">创业工位申请</span>
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
          <div>
            <h2>{{ title }}</h2>
            <p>
              发布时间： <span>{{ dateCreated }}</span> 作者：<span>{{
                author
              }}</span>
              来源：<span>{{ source }}</span> 浏览次数：<span>{{ hits }}</span>
            </p>
            <div v-html="contents" style="text-align:left"></div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { getArticle } from '../api/other.js';

export default {
  data() {
    return {
      id: "",
      contents: "",
      author: "",
      dateCreated: "",
      title: "",
      source: "",
      hits: "",
      navList: []
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    this.getLittleBanner();
    this.getNav();
  },
  computed: {
    ...mapState([
      "userInfo",
    ])
  },
  methods: {
    // 面包屑
    getNav() {
      const arr = [{ name: "当前位置>>" }];
      this.$route.matched.forEach(item => {
        arr.push({
          path: item.path || "/",
          name: item.meta.name || this.$route.query.title
        });
      });
      this.navList = arr;
    },
    getLittleBanner() {
      // axios.get(`/gateway/cmsserver/cms/article/${this.id}`).then(data => {
      getArticle(this.id).then(data => {
        let d = data.data
        if(d) {
          this.contents = d.contents;
          this.author = d.author;
          this.dateCreated = d.dateCreated;
          this.title = d.title;
          this.source = d.source;
          this.hits = d.hits;
        }
      });
    },
  },
  watch: {
    $route: {
      handler() {
        this.getNav();
      },
      immediate: true
    }
    // "$route.path"() {
    //   this.getNav();
    // }
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

    // margin-top: 30px;
    // margin-bottom: 18px;
    // margin-left: 26px;
    // height: 12px;
    // width: 200px;
    // text-align: center;
    // line-height: 3px;
    // border-radius: 8px 8px 8px 8px;
    
    // font-size: 17px;
    
    // & > span {
    //   margin-left: -3px;
    // }

    // &.active {
    //   color: red !important;
    //   background-color: #ffcfcf;
    // }
    // &:hover {
    //   color: red !important;
    //   background-color: #ffcfcf;
    // }

    & > span {
      margin-left: 52px;
    }
  }
  .active {
    margin-top: 30px;
    margin-bottom: 18px;
    margin-left: 26px;
    height: 17px;
    width: 200px;
    text-align: center;
    line-height: 3px;
    border-radius: 8px 8px 8px 8px;
    background-color: #ffcfcf;
    font-size: 17px;
    color: red !important;
    & > span {
      margin-left: -3px;
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
