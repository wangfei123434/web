<template>
  <div class="content-wrapper ql-snow" style="margin-bottom:50px">
    <h2>{{ title }}</h2>
    <p>
      发布时间： <span>{{ dateCreated }}</span> 作者：<span>{{ author }}</span>
      来源：<span>{{ source }}</span> 浏览次数：<span>{{ hits }}</span>
    </p>
    <div v-html="contents" class="ql-editor"></div>
  </div>
</template>

<script>
import {getArticle} from '../api/other.js';
import 'quill/dist/quill.snow.css';

export default {
  data() {
    return {
      id: "",
      contents: "",
      author: "",
      dateCreated: "",
      title: "",
      source: "",
      hits: ""
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    this.getLittleBanner();
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight

      let hh = h - headH - footH - 20
      let boxH = document.querySelector('.content-wrapper').clientHeight
      if(boxH < hh) {
        document.querySelector('.content-wrapper').style.height = (hh) + 'px'
        document.querySelector('.content-wrapper').classList.add('auto')
      }
    },
    getLittleBanner() {
      // axios.get(`/gateway/cmsserver/cms/article/${this.id}`).then(data => {
      getArticle(this.id).then(data => {
        console.log(data);
        let d = data.data
        if (d) {
          this.contents = d.contents;
          this.author = d.author;
          this.dateCreated = d.dateCreated;
          this.title = d.title;
          this.source = d.source;
          this.hits = d.hits;
        }

        // 计算满屏高度
        setTimeout(() => {
          this.calcFullHeight()
        }, 500)
      });
    }
  }
};
</script>

<style lang="less" scoped>
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  .auto {
    overflow: auto;
  }
}
/deep/.award-subsidy {
  margin: 18px auto;
  width: 910px;
  height: 53px;
  background: #e2e2e2;
}
/deep/.manager-item tr:first-child {
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid grey !important;
}
/deep/.award-subsidy li {
  height: 33px;
  // border: 1px solid red;
  margin: 10px 30px;
  font-family: "微软雅黑";
}
/deep/li {
  list-style: none;
}
/deep/.award-subsidy li:first-child {
  /* width: 215px; */
  width: 500px;
  float: left;
  line-height: 33px;
  font-size: 20px;
  letter-spacing: 4px;
}
/deep/.award-subsidy li:last-child {
  display: inline-block;
  width: 102px;
  height: 33px;
  line-height: 33px;
  text-align: center;
}
/deep/.award-subsidy li:first-child span {
  color: #ee6363;
}
/deep/ table.manager-item {
  width: 863px;
  height: 75px;
  margin: 40px 0 90px 0;
  /* border: 1px solid red; */
  text-align: center;
}
/deep/.basic-info p {
  height: 30px;
  border-bottom: 2px solid #ee6363;
  font-size: 20px;
  color: #222222;
}
/deep/textarea {
  width: 820px;
  // margin-top: 28px;
  // margin-left: 43px;
  border: none;
  font-family: "微软雅黑";
  font-size: 16px;
}
/deep/.content {
  height: 137px;
}
/deep/.condition {
  height: 100px !important;
}
/deep/ .flow {
  height: 130px;
}
</style>
