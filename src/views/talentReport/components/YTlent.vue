<template>
  <div class="">
    <div class="newslist ql-editor " v-if="visible">
      <div class="tle" style="text-align: center;margin-top: 10px;">
        <h3>{{title}}</h3>
      </div>
      <div
        class="content yTlent"
        style="padding: 10px 15px 10px 15px;line-height: 30px;"
        v-html="contents"
      >
      </div>
      <div class="foot">
        <div class="btn" @click="toDeclare($event)">在线申报</div>
      </div>
    </div>
    <div v-else style="text-align:left;">
      <innovate></innovate>
    </div>
  </div>
</template>

<script>
import {getArticle, cityCheck} from '../../../api/talentReport.js';
import yound from './yound.vue';
import innovate from './innovate.vue';
import { getId } from "@/utils/auth";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      title: '',
      contents: '',
      visible: true, // 是否显示表格
    }
  },
  components: {
    yound,
    innovate,
  },
  created() {
    if(this.$route.query.tag) {
      this.visible = false
      this.tag = this.$route.query.tag
    }
    this.query()
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  mounted() {
    // 计算满屏高度
    // setTimeout(() => {
    //   this.calcFullHeight()
    // }, 500)
  },
  methods: {
    query() {
      getArticle('1141292b-18d8-459c-972d-1fcf9721c4ea').then(res => {
        console.log(res);
        if(res?.data) {
          let d = res.data
          this.title = d.title
          this.contents = d.contents
        }
      })
    },
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight
      let eHead = document.querySelector('.el-header').clientHeight

      // document.querySelector('.yTlent').style.height = (h - headH - footH - eHead - 102) + 'px'
      document.querySelector('.yTlent').style.height = (h - headH - footH - eHead - 65) + 'px'
    },
    toDeclare(e) {
      let dom = e.target
      if(dom.classList.contains('disabled')) return
      // this.visible = false

      if(!this.userInfo) {
        this.$confirm("当前用户还未登录，请先登录", "提示", {
        confirmButtonText: "确定",
        showCancelButton: false,
        type: "warning"
      })
        .then(() => {
          this.$router.push({
            name: "login",
            query: {
              redirect: "yTlent"
            }
          });
        })
        .catch(() => {});

        return
      }

      cityCheck({
        userId: getId(),
        type: 'YXQNRC'
      }).then(res => {
        if(res?.code == 200) {
          let id = res.data?.talent?.id
          let cityEnterpriseType = res.data?.enterprise?.cityEnterpriseType
          let type = 'YXQNRC'
          let districtName = res.data?.enterprise?.districtName
          let name = res.data?.enterprise?.name

          this.$router.replace({
            name: 'yTlent',
            query: {
              tag: 1,
              talentId: id,
              cityEnterpriseType,
              type,
              districtName,
              name
            }
          })
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.foot {
  display: flex;
  justify-content: center;
  .btn {
    padding: 10px 20px;
    background: rgba(22, 155, 213, 1);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    &.mr50 {
      margin-right: 50px;
    }
    &.disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
