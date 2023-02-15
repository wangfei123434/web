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
import { getAllArticle } from '../../../api/other.js';
export default {
  data() {
    return {
      flag: "",
      list: [
        {
          id: 1,
          title: "区级人才申报",
          img: require("@/assets/imgs/newImg/items/d.png"),
          img1: require("@/assets/imgs/newImg/items/cshhr.png")
        },
      ],
      imgs: [
        {
          img: require("@/assets/imgs/newImg/items/e2.svg"),
          img1: require("@/assets/imgs/newImg/items/gxshbt.svg")
        },
        {
          img: require("@/assets/imgs/newImg/items/e3.svg"),
          img1: require("@/assets/imgs/newImg/items/gxjyjx.svg")
        },
        {
          img: require("@/assets/imgs/newImg/items/e4.png"),
          img1: require("@/assets/imgs/newImg/items/kjcgdj.svg")
        },
        {
          img1: require("@/assets/imgs/newImg/items/rencailuohuhui.svg"),
          img: require("@/assets/imgs/newImg/items/rencailuohu.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/banli.svg"),
          img1: require("@/assets/imgs/newImg/items/banlihui.svg"),
        },
        {
           img: require("@/assets/imgs/newImg/items/shenqing.svg"),
          img1: require("@/assets/imgs/newImg/items/shenqinghui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/jishu.svg"),
          img1: require("@/assets/imgs/newImg/items/jishuhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
        },
        {
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
        }
      ],
      list1: [
        {
          id: 1,
          title: "区级人才申报",
          img: require("@/assets/imgs/newImg/items/d.png"),
          img1: require("@/assets/imgs/newImg/items/cshhr.png")
        },
        {
          id: 2,
          title: "高校毕业生社会保险",
          img: require("@/assets/imgs/newImg/items/e2.svg"),
          img1: require("@/assets/imgs/newImg/items/gxshbt.svg")
        },
        {
          id: 3,
          title: "湖北省高校毕业生就",
          img: require("@/assets/imgs/newImg/items/e3.svg"),
          img1: require("@/assets/imgs/newImg/items/gxjyjx.svg")
        },
        {
          id: 4,
          title: "科技成果登记",
          img: require("@/assets/imgs/newImg/items/e4.png"),
          img1: require("@/assets/imgs/newImg/items/kjcgdj.svg")
        },
        {
          id: 5,
          img1: require("@/assets/imgs/newImg/items/rencailuohuhui.svg"),
          img: require("@/assets/imgs/newImg/items/rencailuohu.svg"),
          title: "人才落户"
        },
        {
          id: 6,
          img: require("@/assets/imgs/newImg/items/banli.svg"),
          img1: require("@/assets/imgs/newImg/items/banlihui.svg"),
          title: "办理《武汉市高层次人才居住证》"
        },
        {
          id: 7,
          img: require("@/assets/imgs/newImg/items/shenqing.svg"),
          img1: require("@/assets/imgs/newImg/items/shenqinghui.svg"),
          title: "申请《武汉市高层次人才居住证（副卡）》"
        },
        {
          id: 8,
          img: require("@/assets/imgs/newImg/items/jishu.svg"),
          img1: require("@/assets/imgs/newImg/items/jishuhui.svg"),
          title: "技术合同认定登记"
        },
        {
          id: 9,
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          title: "申请《外国专家来华邀请函》"
        },
        {
          id: 10,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "申领《外国人工作许可证》"
        },
        {
          id: 11,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "申请《外国人工作许可证》补办"
        },
        {
          id: 12,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "申请《外国人工作许可证》延期"
        },
        {
          id: 13,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "申请《外国人工作许可证》变更"
        },
        {
          id: 14,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "申请《外国人工作许可证》注销"
        },
        {
          id: 15,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "境内申请外国人来华工作许可（来华工作90日以上，不含90日）"
        },
        {
          id: 16,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "申请《外国人工作许可通知》（来华工作90日以上，不含90日）"
        },
        {
          id: 17,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "外国人签证证件（签证、居留许可、停留许可）签发"
        },
        {
          id: 18,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "外国人签证证件（签证、居留许可、停留许可）换发"
        },
        {
          id: 19,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "外国人签证证件（签证、居留许可、停留许可）延期"
        },
        {
          id: 20,
          img1: require("@/assets/imgs/newImg/items/renhui.svg"),
          img: require("@/assets/imgs/newImg/items/ren.svg"),
          title: "外港澳台居民定居证明签发"
        },
        {
          id: 21,
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
          title: "一次性求职创业补贴申领"
        },
        {
          id: 22,
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          title: "就业见习补贴申领"
        },
        {
          id: 23,
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          title: "公益性岗位补贴申报"
        },
        {
          id: 24,
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          title: "纳税咨询"
        },
        {
          id: 25,
          img1: require("@/assets/imgs/newImg/items/qianhui.svg"),
          img: require("@/assets/imgs/newImg/items/qian.svg"),
          title: "一般纳税人资格查询"
        }
      ]
    };
  },
  created() {
    this.query()
  },
  methods: {
    query() {
      getAllArticle({
        // currentPage: 1,
        // pageSize: 25,
      }).then(res => {
        console.log(res);
        let d = res.data
        // if(d && d.list) {
        if(d) {
          let list = d.sort((a,b) => a.reserved1 - b.reserved1)
          list.forEach((e, i) => {
            let imgs = this.imgs[i]
            if(!imgs) {
              imgs = {
                img: require("@/assets/imgs/newImg/items/ren.svg"),
                img1: require("@/assets/imgs/newImg/items/renhui.svg"),
              }
            }
            this.list.push({
              id: e.id,
              title: e.name,
              ...imgs,
              url: e.url
            })
          })
        }
      })
    },
    enterIn(id) {
      console.log(id);

      this.flag = id;
    },
    getOut(id) {
      this.flag = "";
    },
    jumpTo(i) {
      if (i == 0) {
        this.$router.push("/navList");
      } else {
        window.open(
          this.list[i].url,
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
    // display: flex;
    // flex-direction: column;
    // //   align-self: center;
    // align-items: center;
    // justify-content: center;
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
