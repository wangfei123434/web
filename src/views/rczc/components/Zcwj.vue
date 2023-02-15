<template>
  <div class="wrap-box">
    <div class="title1">政策文件</div>
    <div class="title2">POLICY DOCUMENT</div>
    <div class="list-box">
      <div  class="box-lists"
            v-for="v in list"
            :key="v.id"
            @click="handleTo(v.id)">
        <div class="item-box item-box2">
          <div class="item-box-l">
            <div class="time-1"> {{v.postDate.substring(0,7)}}</div>
            <div class="time-2"> {{v.postDate.substring(8,10)}}</div>
          </div>
          <div class="item-box-m">
            <div class="t">{{v.title}}</div>
            <div class="c">
              {{v.subTitle?v.subTitle:v.title}}
            </div>
          </div>
          <div class="item-box-r">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:30px;margin-left:500px">
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
import {articleList} from "@/api/talentPolicy";

export default {
  name: "Zxzx",
  components: {},
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
        categoryId: "6b1d66f4-30ba-4e33-81ad-23b9adbd20ea",
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
        path: "/rczcDetail",
        query: {
          index:0,
          id: id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.wrap-box {
  padding: 30px 0;
  .title1 {
    font-size: 34px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #0a63dd;
  }
  .title2 {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #999999;
    margin: 20px 0;
  }
  .list-box {
    margin-top: 30px;
    .item-box {
      width: 1200px;
      height: 236px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      padding: 28px 40px 28px 35px;
      text-align: left;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      .item-box-l {
        width: 376px;
        height: 180px;
        border: 1px solid #707070;
      }
      .item-box-m {
        width: 800px;
        .t {
          font-size: 22px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #273140;
        }
        .time {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #666666;
          margin: 20px 0;
        }
        .c {
          width: 540px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #666666;
          line-height: 25px;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .item-box-r {
        span {
          display: inline-block;
          width: 50px;
          height: 50px;
          margin-top: 60px;
          cursor: pointer;
          background: url("../../../assets/imgs/wfimg/rcyw-jt0.png") no-repeat;
          &:hover {
            background: url("../../../assets/imgs/wfimg/rcyw-jt.png") no-repeat;
          }
        }
      }
    }
    .item-box2{
      height: 156px;
      .item-box-l {
        width: 100px;
        height: 100px;
        background: #0A63DD;
        padding: 10px;
        div{
          text-align: center;
        }
        .time-1{
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
          margin-top: 10px;
        }
        .time-2{
          font-size: 32px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
      .item-box-m{
        .c{
          width: 800px;
          margin-top: 20px;
        }
      }
      .item-box-r{
        span{
          margin-top: 25px;
        }
      }
    }
  }
}
</style>
