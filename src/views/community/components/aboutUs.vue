<template>
  <div style="height:500px;overflow-y:hidden;overflow-x:hidden">
    <div class="box"><span> 武汉市招才局</span></div>
    <h4>地址 : 武汉市江岸区劳动街办事处惠济路39号杨森公馆</h4>
    <h4>电话 : 027-82267029</h4>
    <h4>邮编 : 430000</h4>
    <h4>邮箱 : 123456@qq.com</h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  width: 930px;
  height: 60px;
  background-color: #eeeeee;
  font-size: 20px;
  text-align: left;
  & > span {
    line-height: 60px;
    margin-left: 20px;
  }
}
h4 {
  text-align: left;
}
</style>
