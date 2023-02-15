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
      <div class="c-box">
        <div class="title1">大学生就业创业</div>
        <div class="title2"></div>
        <div class="list-box" style="flex-wrap: wrap;">
          <div class="item-box" v-for="(item, index) in navList5" :key="index">
            <div class="t">{{ item.t }}</div>
            <div class="btn" @click="goRouter(item.id)">立即查看</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { bwdxsTextArticle } from "../../api/qingShang.js";

export default {
  data() {
    return {
      navList5: [
        {
          t: "大学生就业见习补贴",
          id: "062e1c69-0131-11ea-b44e-e82a444382df"
        },
        {
          t: "大学生见习岗位",
          id: "062e1c6b-0131-11ea-83e4-e82a444382df"
        },
        {
          t: "大学生一次性求职创业补贴申请",
          id: "062e1c6a-0131-11ea-83b6-e82a444382df"
        },
        {
          t: "灵活就业应届高校毕业生意外伤害保险补助",
          id: "062e1c6c-0131-11ea-b2e2-e82a444382df"
        },
        {
          t: "大学生社会保险补贴申请（灵活就业）",
          id: "062e1c6d-0131-11ea-95f3-e82a444382df"
        },
        {
          t: "小微企业招用大学生社会保险补贴申请",
          id: "062e1c6e-0131-11ea-ade9-e82a444382df"
        },
        {
          t: "大学生创业工位",
          id: "062e1c6f-0131-11ea-b592-e82a444382df"
        },
        {
          t: "大学生一次性创业补贴申请",
          id: "062e1c70-0131-11ea-bbf3-e82a444382df"
        },
        {
          t: "武汉市高校毕业生“三大行业”创业补贴申报",
          id: "062e1c71-0131-11ea-af84-e82a444382df"
        },
        {
          t: "大学生创业担保贷款资格申请",
          id: "062e1c72-0131-11ea-9ded-e82a444382df"
        },
        {
          t: "支持申报高新技术企业",
          id: "062e1c73-0131-11ea-94e5-e82a444382df"
        },
        {
          t: "支持申领科技创新劵",
          id: "062e1c74-0131-11ea-8dd0-e82a444382df"
        },
        {
          t: "支持申报市级科技企业孵化器和众创空间认定",
          id: "062e1c75-0131-11ea-96e8-e82a444382df"
        },
        {
          t: "初创企业场租补贴",
          id: "062e1c76-0131-11ea-bb45-e82a444382df"
        }
      ]
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {},
  methods: {
    goRouter(id) {
      this.$router.push({ path: "bwdxs", query: { id: id } });
    }
  }
};
</script>

<style lang="less" scoped>
.box {
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
  width: 1260px;
  margin: 0 auto;
}
.c-box {
  margin: 0 auto;
  margin-bottom: 30px;
  .title1 {
    font-size: 34px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 40px;
    color: #0a63dd;
    margin-top: 20px;
  }
  .title2 {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 40px;
    color: #c4c4c4;
    margin: 20px 0 10px 0;
    width: 40px;
    height: 8px;
    background: rgba(10, 99, 221, 1);
    margin: 20px auto 50px auto;
  }
  .list-box {
    display: flex;
    .item-box {
      width: 240px;
      height: 167px;
      border: 4px solid #ffffff;
      background: linear-gradient(180deg, #f2f5f8 0%, #fffefe 100%);
      box-shadow: 0px 4px 24px rgba(1, 56, 131, 0.16);
      opacity: 1;
      border-radius: 4px;
      padding-top: 10px;
      margin: 37px;
      .t {
        height: 70px;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        color: #000000;
        font-weight: bold;
      }
      .btn {
        width: 122px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgba(10, 99, 221, 0.03);
        border: 1px solid #0962dd;
        color: #0a63dd;
        margin: 30px auto;
        cursor: pointer;
        &:hover {
          background: #0a63dd;
          color: #fff;
        }
      }
    }
  }
}
</style>
