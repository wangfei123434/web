<template>
  <div class="container">
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      :showClose="false"
    >
      <div class="agreement_picture">
        <div class="pdf">
          <iframe
            :src="src"
            frameborder="0"
            style="width: 100%; height: 1050px"
          ></iframe>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "/book.pdf",
      dialogVisible: true
    };
  }
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog__header {
  margin: 0 !important;
  padding: 0 !important;
}
/deep/ .el-dialog__body {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
