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
        <h2 style="font-family: 方正小标宋简体;font-weight: bold;padding-top:50px;font-size:30px">
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
import { bwdxsTextArticle } from '../../api/qingShang.js';

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
    bwdxsTextArticle(this.$route.query.id).then(res => {
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
.box-list {
  width: 215px;
  height: 160px;
  margin-left: 30px;
  background-color: #fef8f1;
  cursor: pointer;
}
.box-list:hover {
  box-shadow: 5px 5px 20px 0px rgba(241, 238, 234);
  color: #0a63dd !important;
}
</style>
