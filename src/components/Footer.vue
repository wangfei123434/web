<template>
  <footer>
    <div class="footer-box1">
      <div class="container">
        <div class="foot1-l">
          <div class="top">友情链接</div>
          <div class="bottom bottom1">
            <a target="_blank" href="http://www.wuhan.gov.cn/"
              >武汉市人民政府门户网站</a
            >
            <a target="_blank" href="http://zwfw.hubei.gov.cn/"
              >湖北政务服务网</a
            >
            <a target="_blank" href="http://rsj.wuhan.gov.cn/"
              >武汉市人力资源和社会保障局</a
            >
            <a target="_blank" href="http://kjj.wuhan.gov.cn"
              >武汉市科学技术局</a
            >
          </div>
          <div class="bottom bottom2">
            <a target="_blank" href="http://www.whzg.gov.cn/">武汉组工网</a>
            <a target="_blank" href="http://fgj.wuhan.gov.cn"
              >武汉市住房保障和房屋管理局</a
            >
          </div>
        </div>
        <!-- <div class="foot1-r">
          <img src="../assets/imgs/wfimg/footer-img.png" alt="" />
        </div> -->
      </div>
    </div>
    <div class="footer-box2">
      <div class="container">
        <a target="_self" href="/gywm?index=0">关于我们</a>
        <a target="_self" href="/hdjl?index=1">互动交流</a>
        <a>人事档案查询： 027-82835095</a>
        <a>客服电话： 027-83991871</a>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010202001973"
          >鄂公网安备 42010202001973号</a
        >
        <a target="_blank" href="/operateGuide" class="guide"
          ><i class="el-icon-bottom"></i>操作指南</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.footer-box1 {
  background: #343434;
  padding: 20px 0;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    font-size: 12px;
    .foot1-l {
      .top {
        font-size: 14px;
        font-family: SourceHanSansCN-Medium;
        line-height: 40px;
        border-bottom: 1px solid #fff;
        width: 950px;
        text-align: left;
        margin-bottom: 20px;
      }
      .bottom {
        text-align: left;
        margin: 10px 0;
        a {
          font-size: 14px;
          font-family: SourceHanSansCN-Medium;
          color: #fffefe;
        }
      }
      .bottom1 {
        a {
          margin-right: 64px;
        }
      }
      .bottom2 {
        a {
          margin-right: 148px;
        }
      }
    }
    .foot1-r {
      img {
        width: 90px;
        height: 108px;
      }
    }
  }
}
.footer-box2 {
  background: #474747;
  padding: 20px 0;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    font-size: 12px;
    .guide {
      display: inline-block;
      width: 108px;
      height: 32px;
      line-height: 32px;
      background: #343434;
      border-radius: 4px;
      i {
        border-radius: 50%;
        background: #fff;
        color: #000;
        margin-right: 5px;
      }
    }
  }
}
</style>
