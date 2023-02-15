<template>
  <div class="wrap-box">
    <div class="title1">通知公告</div>
    <div class="title2">INFORMATION CENTER</div>
<!--    <div class="box">-->
<!--      <img src="../../../assets/imgs/wfimg/home-banner.png" alt="" />-->
<!--      <div class="t">习近平出席中央人才工作会议并发表重要讲话</div>-->
<!--      <div class="c">-->
<!--        中央人才工作会议9月27日至28日在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话，强调要坚持党管人才，坚持面向世界科技前沿、面向经济主战场、面向国家重大需求、面向人民生命健康，深入实施新时代人才强国战略，全方位培养、引进、用好人才，加快建设世界重要人才中心和创新高地，为2035年基本实现社会主义现代化提供人才支撑，为2050年全面建成社会主义现代化强国打好人才基础李克强主持会议。栗战书、汪洋、赵乐际、韩正出席会议。王沪宁作总结讲话。-->
<!--      </div>-->
<!--    </div>-->
    <div class="list-box">
      <div class="box-lists"
           v-for="v in list"
           :key="v.id"
           @click="handleTo(v)">
        <!-- 有图片 -->
<!--        <div class="item-box">-->
<!--          <div class="item-box-l"></div>-->
<!--          <div class="item-box-m">-->
<!--            <div class="t">一图读懂2021年“武汉英才”举荐认定</div>-->
<!--            <div class="time">2021-08-25</div>-->
<!--            <div class="c">-->
<!--              为大力引进聚集海内外高层次人才，根据《关于建立完善人才工作体系推动武汉高质量发展的实施意见》（武办发〔2019〕2号），启动2021年度“武汉英才”（原名为“武汉黄鹤英才”）举荐申报工作。-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="item-box-r">-->
<!--            <span></span>-->
<!--          </div>-->
<!--        </div>-->
        <!-- 没图片 -->
        <div class="item-box item-box2">
          <div class="item-box-l">
            <div class="time-1">{{v.dateCreated.substring(0,7)}}</div>
            <div class="time-2">{{v.dateCreated.substring(8,10)}}</div>
          </div>
          <div class="item-box-m">
            <div class="t">{{v.title}}</div>
            <div class="c">
              {{v.title}}
            </div>
          </div>
          <div class="item-box-r">
            <span></span>
          </div>
        </div>

      </div>
    </div>
<!--    <div style="margin-top:30px;margin-left:500px">-->
<!--      <el-pagination-->
<!--        @current-change="handleCurrentChange"-->
<!--        :current-page="currentPage"-->
<!--        :page-size="pageSize"-->
<!--        layout="prev, pager, next, jumper"-->
<!--        :total="total"-->
<!--      >-->
<!--      </el-pagination>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Zxzx",
  components: {},
  data() {
    return {
      list: [
        {
          title: '2022年度武汉英才（优秀青年人才）申报指引',
          url: '/yTlent',
          dateCreated: '2022-09-13'
        },
        {
          title: '2022年度武汉英才（战略科技人才）邀约指引',
          url: '/zTlent',
          dateCreated: '2022-09-13'
        },
        {
          title: '2022年度武汉英才（产业领军人才）申报指引',
          url: '/cTlent',
          dateCreated: '2022-09-13'
        },
        {
          title: '2022年度江汉英才申报指引',
          url: '/jianghan',
          dateCreated: '2022-06-15'
        },
        {
          title: '2022年度青山英才申报指引',
          url: '/qingshan',
          dateCreated: '2022-06-15'
        },
      ]
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    handleTo(item) {
      this.$router.push(item.url);
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
  .box {
    width: 1200px;
    height: 534px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    padding: 38px;
    text-align: left;
    img {
      width: 1124px;
      height: 332px;
    }
    .t {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #0a63dd;
      margin: 10px 0;
    }
    .c {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 28px;
      color: #666666;
    }
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
