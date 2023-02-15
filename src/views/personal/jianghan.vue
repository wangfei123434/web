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
  <div class="content-wrapper ql-snow">
    <div class="t2_personal_affairs">
      <div class="tle" style="text-align: center">
        <h2 style="font-family: 方正小标宋简体;font-weight: bold">
          {{title}}
        </h2>
      </div>
      <br />
      <div class="clearfix" style="line-height: 30px;">
        <div v-html="content" class="ql-editor"></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { jianghanTextArticle } from '../../api/qingShang.js';

export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    jianghanTextArticle().then(res => {
      console.log(res);
      if(res && res.data) {
        let d = res.data
        this.title = d.title
        this.content = d.contents
      }
    })
  },
  methods: {
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

.content-wrapper {
  width: 1000px;
  margin: 0 auto;
}
</style>
