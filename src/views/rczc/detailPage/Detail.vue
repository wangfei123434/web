<template>
  <div class="content-wrapper ql-snow">
    <h2 style="text-align: center;">{{ title }}</h2>
    <p style="text-align: center;">
      发布时间： <span>{{ dateCreated }}</span> 作者：<span>{{ author }}</span>
      来源：<span>{{ source }}</span> 浏览次数：<span>{{ hits }}</span>
    </p>
    <div v-html="contents" class="ql-editor"></div>
  </div>
</template>

<script>
import {getArticle} from '../../../api/other.js';
import moment from 'moment';
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
  mounted() {
    
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
      getArticle(this.id).then(data => {
        console.log(data);
        let d = data.data
        if (d) {
          this.contents = d.contents;
          this.author = d.author;
          // this.dateCreated = d.dateCreated;
          this.dateCreated = d.postDate && d.postDate != "Invalid Date" ? moment(d.postDate).format('yyyy-MM-DD') : '';
          this.title = d.title;
          this.source = d.source;
          this.hits = d.hits;

          // 计算满屏高度
          setTimeout(() => {
            this.calcFullHeight()
          }, 500)
        }
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
  .auto {
    overflow: auto;
  }
}
</style>
