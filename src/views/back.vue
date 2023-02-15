<template>
  <div>
    <img
      src="../assets/imgs/newImg/success.svg"
      style="width:200px;height:200px"
      alt=""
    />
    <h1 style="margin-left:-500px">尊敬的先生/女士:</h1>
    <h3>您还没通过个人信息审核</h3>
    <span
      style="width:200px;height:40px;background-color:#4cb0f9;color:white;display:inline-block;font-size:20px;line-height: 40px;margin-bottom:150px;margin-top:50px"
      @click="handelTo()"
      >去填写
      <img
        src="../assets/imgs/newImg/back.svg"
        style="width: 25px;margin-left: 5px;margin-top:5px;display:inline-block"
    /></span>
  </div>
</template>

<script>
export default {
  methods: {
    handelTo() {
      this.$router.push("personalInfo");
    }
  }
};
</script>

<style lang="less" scoped></style>
