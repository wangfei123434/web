<template>
  <div>
    <div class="newslist ql-editor" v-if="visible">
      <div class="tle" style="text-align: center;margin-top: 10px;">
        <h3>{{title}}</h3>
      </div>
      <div
        class="content"
        style="padding: 10px 15px 10px 15px;line-height: 30px;"
        v-html="contents"
      >
      </div>
      <div class="foot">
        <div class="btn mr50 " @click="toDeclare($event, 1)">创新类在线申报</div>
        <div class="btn " @click="toDeclare($event, 2)">创业类在线申报</div>
      </div>
    </div>
    <div v-else style="text-align:left;">
      <innovate v-if="tag == 1"></innovate>
      <business v-else-if="tag == 2"></business>
    </div>
  </div>
</template>

<script>
import {getArticle, cityCheck} from '../../../api/talentReport.js';
import innovate from './innovate.vue';
import business from './business.vue';
import { getId } from "@/utils/auth";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      title: '',
      contents: '',
      visible: true, // 是否显示表格
      tag: 1,
    }
  },
  components: {
    innovate,
    business,
  },
  created() {
    if(this.$route.query.tag) {
      this.visible = false
      this.tag = this.$route.query.tag
    }
    this.query()
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    query() {
      getArticle('62805fe3-5772-42f4-9cb7-46e2c6c69a84').then(res => {
        console.log(res);
        if(res?.data) {
          let d = res.data
          this.title = d.title
          this.contents = d.contents
        }
      })
    },
    toDeclare(e, i) {
      let dom = e.target
      if(dom.classList.contains('disabled')) return

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
              redirect: "cTlent"
            }
          });
        })
        .catch(() => {});

        return
      }

      cityCheck({
        userId: getId(),
        type: 'lj'+i
      }).then(res => {
        if(res?.code == 200) {
          let id = res.data?.talent?.id
          let cityEnterpriseType = res.data?.enterprise?.cityEnterpriseType
          let type = i == 1 ? 'lj1' : 'lj2'
          let districtName = res.data?.enterprise?.districtName
          let name = res.data?.enterprise?.name

          this.$router.replace({
            name: 'cTlent',
            query: {
              tag: i,
              talentId: id,
              cityEnterpriseType,
              type,
              districtName,
              name
            }
          })
        }
      })

      // this.tag = i
      // this.visible = false
    },
  },
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
