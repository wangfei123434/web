<template>
  <div style="display:flex;flex-wrap:wrap">
    <div class="box-list" v-for="v in list" :key="v.id">
      <a
        class="box-lists"
        @mouseenter="enterIn(v.id)"
        @mouseleave="getOut(v.id)"
        @click="handelTo(v.id)"
        ><img
          src="@/assets/imgs/newImg/items/cshhr.png"
          alt="xx"
          v-show="v.id != flag"
        />
        <img
          src="@/assets/imgs/newImg/items/e1.png"
          alt="xx"
          v-show="v.id == flag"
        /><span>{{ v.title }}</span></a
      >
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import {articleList} from '../../../api/talentPolicy.js';

export default {
  data() {
    return {
      list: [],
      flag: ""
    };
  },
  created() {
    this.getPaterner();
  },
  methods: {
    getPaterner() {
      // axios
      //   .get(
      //     "/gateway/cmsserver/cms/article/getArticleList?categoryId=a1962bca-011e-11ea-b4ac-e82a444382df"
      //   )
        articleList({categoryId: 'a1962bca-011e-11ea-b4ac-e82a444382df'})
        .then(res => {
          console.log(res.data);
          this.list = res.data;
        });
    },
    enterIn(id) {
      console.log(id);

      this.flag = id;
    },
    getOut(id) {
      this.flag = "";
    },
    handelTo(id) {
      this.$router.push({ path: "read", query: { id: id } });
    }
  }
};
</script>

<style lang="less" scoped>
.box-list {
  display: flex;
  .box-lists {
    width: 160px;
    height: 160px;
    background-color: #f8f8f8;
    display: inline-block;
    display: flex;
    flex-direction: column;
    //   align-self: center;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-top: 50px;
    img {
      width: 50px;
      height: 50px;
      display: inline-block;
    }
    span {
      margin-top: 10px;
      display: inline-block;
    }
  }
  .box-lists:hover {
    box-shadow: 5px 5px 20px 0px rgba(241, 238, 234);
  }
}
</style>
