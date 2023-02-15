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
    <div class="big-box" style="display:flex;margin-bottom:50px">
      <div class="box-list" @click="jumpTo('qs_leaders')">
        <img
          src="../../assets/imgs/newImg/y1.png"
          alt=""
          style="height:50px;weight:50px;margin-top:30px"
        />
        <p>产业领军人才在线申报</p>
      </div>
      <div class="box-list" @click="jumpTo('qs_excellentYouth')">
        <img
          src="../../assets/imgs/newImg/y2.png"
          alt=""
          style="height:50px;weight:50px;margin-top:30px"
        />
        <p>优秀青年人才在线申报</p>
      </div>

      <div class="box-list" @click="jumpTo('qs_craftsman')">
        <img
          src="../../assets/imgs/newImg/y3.png"
          alt=""
          style="height:50px;weight:50px;margin-top:30px"
        />
        <p>钢城工匠在线申报</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getTalentId,qingShanTextArticle } from '../../api/qingShang.js';

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
    qingShanTextArticle().then(res => {
      console.log(res);
      if(res && res.data) {
        let d = res.data
        this.title = d.title
        this.content = d.contents
      }
    })
  },
  methods: {
    jumpTo(type) {
      if (!this.userInfo) {
        this.$confirm("当前用户还未登录，请先登录", "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        })
        .then(() => {
          this.$router.push({
            name: "login",
            query: {
              redirect: "qingshan"
            }
          });
        })
        .catch(() => {});
        return
      }

      getTalentId({
        userId: this.userInfo.id,
        type
      }).then(res => {
        if(res.code == 200) {
          let title = this.$route.query?.title || res.data?.assign?.type || ''
          if(title == 'qs_leaders_innovation' || title == 'qs_leaders_startup') {
            this.$router.push({
              path: "qingshan0",
              query: {
                title,
                talentId: res.data.talent && res.data.talent.id || '',
                companyName: res.data.assign && res.data.assign.companyName || '',
                companyId: res.data.assign && res.data.assign.companyId || '',
              }
            });
          }else if(title == 'cylj3') {
            this.$router.push({
              path: "qingshan1",
              query: {
                title,
                talentId: res.data.talent && res.data.talent.id || '',
                companyName: res.data.assign && res.data.assign.companyName || '',
                companyId: res.data.assign && res.data.assign.companyId || '',
              }
            });
          }else if(title == 'qs_excellentYouth_doctor' || title == 'qs_excellentYouth_recommend') {
            this.$router.push({
              path: "qingshan2",
              query: {
                title,
                talentId: res.data.talent && res.data.talent.id || '',
                companyName: res.data.assign && res.data.assign.companyName || '',
                companyId: res.data.assign && res.data.assign.companyId || '',
              }
            });
          }else if(title == 'qs_excellentYouth_startup') {
            this.$router.push({
              path: "qingshan3",
              query: {
                title,
                talentId: res.data.talent && res.data.talent.id || '',
                companyName: res.data.assign && res.data.assign.companyName || '',
                companyId: res.data.assign && res.data.assign.companyId || '',
              }
            });
          }else if(title == 'qs_qingshanElite_craftsman' || title == 'gcjj2') {
            this.$router.push({
              path: "qingshan4",
              query: {
                title,
                talentId: res.data.talent && res.data.talent.id || '',
                companyName: res.data.assign && res.data.assign.companyName || '',
                companyId: res.data.assign && res.data.assign.companyId || '',
              }
            });
          }
        }
      })

    },
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
