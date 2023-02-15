<template>
  <div style="display:flex;flex-direction:column ">
    <div
      class="box-lists"
      v-for="v in list"
      :key="v.id"
      style="margin-top:5px;border-radius:5px;border-left:5px solid #d0d0d0;margin-top:15px"
      @click="handleTo(v.id)"
    >
      <span class="title">{{ v.title }}</span
      ><span>{{ v.postDate | formatDate }}</span>
    </div>
    <div style="margin-top:30px;margin-left:300px">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { articleList } from "../../../api/talentPolicy";
export default {
  data() {
    return {
      resourceList: [],
      list: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      articleList({
        categoryId: "b5aaeb08-e4b3-47eb-bb6d-5934b05d966e",
        currentPage: this.currentPage,
        pageSize: this.pageSize
        }).then(
        data => {
          // console.log(data.data);
           let dd = data.data.list;

          if (dd) {
            let d = dd.filter(e => e.audit == true)
            this.resourceList = d;

            this.total = data.data.total;
            this.list = this.resourceList;
          }
        }
      );
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(i) {
      this.currentPage = i;
      this.getArticleList();
      // this.list = this.resourceList.slice(
      //   (this.currentPage - 1) * this.pageSize,
      //   this.currentPage * this.pageSize
      // );
    },
    handleTo(id) {
      this.$router.push({
        path: "read1",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.box-lists {
  line-height: 42px;
  font-size: 12px;
  color: #676767;
  padding-left: 28px;
  width: 824px;
  height: 43px;
  float: left;
  font-weight: normal;
  background-color: #f3f3f3;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding-right: 28px;
  & > span {
    min-width: 100px;
    &.title{
      display: inline-block;    overflow: hidden; /*超出部分隐藏*/
      text-overflow: ellipsis; /* 超出部分显示省略号 */
      white-space: nowrap; /*规定段落中的文本不进行换行 */
    }
  }
  &:hover {
    color: red;
  }
}
</style>
