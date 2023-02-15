<template>
  <div>
    <div class="box-list">
      <a
        class="box-lists"
        @mouseenter="flag1 = !flag1"
        @mouseleave="flag1 = !flag1"
        @click="handelTo(1)"
        ><img
          src="@/assets/imgs/newImg/items/1.png"
          alt="xx"
          v-show="flag1 == false"
        />
        <img
          src="@/assets/imgs/newImg/items/b1.png"
          alt="xx"
          v-show="flag1 == true"
        /><span>战略科技人才</span></a
      >
      <a
        class="box-lists"
        @mouseenter="flag2 = !flag2"
        @mouseleave="flag2 = !flag2"
        @click="handelTo(2)"
        ><img
          src="@/assets/imgs/newImg/items/2.png"
          alt="xx"
          v-show="flag2 == false"
        />
        <img
          src="@/assets/imgs/newImg/items/b2.png"
          alt="xx"
          v-show="flag2 == true"
        /><span>产业领军人才</span></a
      >
      <a
        class="box-lists"
        @mouseenter="flag3 = !flag3"
        @mouseleave="flag3 = !flag3"
        @click="handelTo(3)"
        ><img
          src="@/assets/imgs/newImg/items/3.svg"
          alt="xx"
          v-show="flag3 == false"
        />
        <img
          src="@/assets/imgs/newImg/items/b3.png"
          alt="xx"
          v-show="flag3 == true"
        /><span>优秀青年人才</span></a
      >
      <a
        class="box-lists"
        @mouseenter="flag4 = !flag4"
        @mouseleave="flag4 = !flag4"
        style="cursor: not-allowed;"
        >
        <!-- @click="handelTo(4)" -->
        <img
          src="@/assets/imgs/newImg/items/4.svg"
          alt="xx"
          v-show="flag4 == false"
        />
        <img
          src="@/assets/imgs/newImg/items/b4.png"
          alt="xx"
          v-show="flag4 == true"
        /><span>武汉工匠</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false
    };
  },
  methods: {
    handelTo(i) {
      if (i == 1) {
        this.$router.push("/zTlent");
      }
      if (i == 2) {
        this.$router.push("/cTlent");
      }
      if (i == 3) {
        this.$router.push("/yTlent");
      }
      if (i == 4) {
        this.$router.push("/wTlent");
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
    display: flex;
    flex-direction: column;
    //   align-self: center;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
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
