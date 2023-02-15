<template>
  <div style="display:flex;flex-wrap:wrap">
    <div class="box-list" v-for="(v, i) in list" :key="v.id">
      <a
        class="box-lists"
        @mouseenter="enterIn(v.id)"
        @mouseleave="getOut(v.id)"
        @click="jumpTo(i)"
        >
        <img :src="v.img1" alt="xx" v-show="v.id != flag" />
        <img :src="v.img" alt="xx" v-show="v.id == flag" /><span>{{
          v.title
        }}</span>
        </a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: "",
      list: [
        {
          id: 1,
          title: "青山英才申报",
          img: require("@/assets/imgs/newImg/items/d.png"),
          img1: require("@/assets/imgs/newImg/items/cshhr.png")
        },
        {
          id: 2,
          title: "江汉英才申报",
          img: require("@/assets/imgs/newImg/items/d.png"),
          img1: require("@/assets/imgs/newImg/items/cshhr.png")
        },
      ],

    };
  },
  created() {
  },
  methods: {
    enterIn(id) {
      this.flag = id;
    },
    getOut(id) {
      this.flag = "";
    },
    jumpTo(i) {
      if (i == 0) {
        this.$router.push("/qingshan");
      } else {
        window.open(
          'http://www.whzc.gov.cn/jianghan/',
          "_blank"
        );
      }
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
    margin-right: 20px;
    margin-top: 50px;
    img {
      width: 50px;
      height: 50px;
      display: block;
      margin-left: 55px;
      margin-top: 30px;
    }
    span {
      margin-top: 10px;
      display: block;
      margin-top: 20px;
    }
  }
  .box-lists:hover {
    box-shadow: 5px 5px 20px 0px rgba(241, 238, 234);
  }
}
</style>
