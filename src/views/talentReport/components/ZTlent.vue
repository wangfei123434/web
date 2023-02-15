<template>
  <div>
    <div class="newslist ql-editor">
      <div class="tle" style="text-align: center;margin-top: 10px;">
        <h3>{{title}}</h3>
      </div>
      <div
        class="content"
        style="padding: 10px 15px 10px 15px;line-height: 30px;"
        v-html="contents"
      >
      </div>
    </div>
  </div>
</template>

<script>
import {getArticle} from '../../../api/talentReport.js';
export default {
  data() {
    return {
      title: '',
      contents: ''
    }
  },
  created() {
    this.query()
  },
  methods: {
    query() {
      getArticle('9a4eea4f-d3e3-4446-a69e-21a0ca7a1d5b').then(res => {
        console.log(res);
        if(res?.data) {
          let d = res.data
          this.title = d.title
          this.contents = d.contents
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>

</style>
