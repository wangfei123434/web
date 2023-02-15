<template>
  <div>
    <div class="box-list">
      <a
        class="box-lists"
        @mouseenter="flag1 = !flag1"
        @mouseleave="flag1 = !flag1"
        @click="handelTo(1)"
        ><img
          src="@/assets/imgs/serive/hhl_h.png"
          alt="xx"
          v-show="flag1 == false"
        />
        <img
          src="@/assets/imgs/serive/hhl.png"
          alt="xx"
          v-show="flag1 == true"
        /><span>武汉英才</span></a
      >
      <a
        class="box-lists"
        @mouseenter="flag2 = !flag2"
        @mouseleave="flag2 = !flag2"
        @click="handelTo(2)"
        ><img
          src="@/assets/imgs/serive/lhgc_h.png"
          alt="xx"
          v-show="flag2 == false"
        />
        <img
          src="@/assets/imgs/serive/lhgc.png"
          alt="xx"
          v-show="flag2 == true"
        /><span>百万大学生留汉工程</span></a
      >
      <a
        class="box-lists"
        @mouseenter="flag3 = !flag3"
        @mouseleave="flag3 = !flag3"
        style="cursor: not-allowed;"
        >
         <!-- @click="handelTo(3)" -->
        <img
          src="@/assets/imgs/serive/hhr_h.png"
          alt="xx"
          v-show="flag3 == false"
        />
        <img
          src="@/assets/imgs/serive/hhr.png"
          alt="xx"
          v-show="flag3 == true"
        /><span>城市合伙人</span></a
      >
      <a
        class="box-lists"
        @mouseenter="flag4 = !flag4"
        @mouseleave="flag4 = !flag4"
        @click="handelTo(4)"
        ><img
          src="@/assets/imgs/serive/xmsb_h.png"
          alt="xx"
          v-show="flag4 == false"
        />
        <img
          src="@/assets/imgs/serive/xmsb.png"
          alt="xx"
          v-show="flag4 == true"
        /><span>人才服务事项</span></a
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
  mounted() {
    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight()
    }, 500)
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight
      let elHeaderH = document.querySelector('.bread').clientHeight

      let hh = h - headH - footH - elHeaderH - 200
      if(hh > 320) {
        document.querySelector('.box').style.height = (hh) + 'px'
      }
    },
    handelTo(i) {
      if (i == 1) {
        this.$router.push("/hhTalent");
      }
      if (i == 2) {
        this.$router.push("/milionEngineer");
      }
      if (i == 3) {
        this.$router.push("/cityPatner");
      }
      if (i == 4) {
        this.$router.push("/serveBussiness");
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
