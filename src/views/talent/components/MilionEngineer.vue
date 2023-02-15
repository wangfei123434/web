<template>
  <div style="display:flex;flex-wrap:wrap">
    <div class="box-list" v-for="(v, i) in list" :key="i">
      <a
        class="box-lists"
        @mouseenter="enterIn(i)"
        @mouseleave="getOut(i)"
        :href="v.url"
        target="_blank"
        >
        <!-- @click="jumpTo(v.id, v.title)" -->
        <img
          src="@/assets/imgs/newImg/items/wenjianhui.png"
          alt="xx"
          v-show="i != flag"
        />
        <img
          src="@/assets/imgs/newImg/items/wenjian.png"
          alt="xx"
          v-show="i == flag"
        /><span>{{ v.title }}</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: "",
       list: [
        {
          id: "062df3ca-0131-11ea-a83e-e82a444382df",
          title: "普通高校大学生落户",
          url: "http://www.whzc.gov.cn/dxslh/html/rclh/index.html"
        },
        {
          id: "062e1c68-0131-11ea-855d-e82a444382df",
          title: "大学毕业生租赁房",
          url: "http://www.whzc.gov.cn/dxslh/html/rcaj/index.html"
        },
        { id: "062e1c69-0131-11ea-b44e-e82a444382df", title: "大学生主题社区",
          url: "http://www.whzc.gov.cn/dxslh/html/ztsq/index.html"
        },
        { id: "062e1c6a-0131-11ea-83b6-e82a444382df", title: "见习基地补贴",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/43.html"
        },
        {
          id: "062e1c6b-0131-11ea-83e4-e82a444382df",
          title: "大学生实习（训）见",
          url: "http://www.whzc.gov.cn/dxslh/html/sxjx/index.html"
        },
        {
          id: "062e1c6c-0131-11ea-b2e2-e82a444382df",
          title: "定向招录基层社会服务大学生",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/45.html"
        },
        {
          id: "062e1c6d-0131-11ea-95f3-e82a444382df",
          title: "开发基层社会服务岗",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/44.html"
        },
        { id: "062e1c6e-0131-11ea-ade9-e82a444382df", 
          title: "创业导师辅导和大学生创业服务",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/48.html"
        },
        { id: "062e1c6f-0131-11ea-b592-e82a444382df", title: "创业学院补贴",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/47.html"
         },
        {
          id: "062e1c70-0131-11ea-bbf3-e82a444382df",
          title: "大学生创新创业培训",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/46.html"
        },
        { id: "062e1c71-0131-11ea-af84-e82a444382df", title: "大学生创业工位", 
        url: "http://www.whzc.gov.cn/dxslh/html/cygw/index.html"
         },
        {
          id: "062e1c72-0131-11ea-9ded-e82a444382df",
          title: "大学生创业企业社保、税费资助扶持",
          url: "http://www.whzc.gov.cn/dxslh/html/cyrz/index.html"
        },
        {
          id: "062e1c73-0131-11ea-94e5-e82a444382df",
          title: "大学生创业项目资助",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/52.html"
        },
        {
          id: "062e1c74-0131-11ea-8dd0-e82a444382df",
          title: "大学生创业企业股权投资",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/51.html"
        },
        {
          id: "062e1c75-0131-11ea-96e8-e82a444382df",
          title: "大学生创业贷款担保",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/50.html"
        },
        {
          id: "062e1c76-0131-11ea-bb45-e82a444382df",
          title: "优化创业就业环境",
          url: "http://www.whzc.gov.cn/dxslh/html/2017-07/54.html"
        }
      ],
      // list: [
      //   {
      //     id: "062df3ca-0131-11ea-a83e-e82a444382df",
      //     title: "普通高校大学生落户"
      //   },
      //   {
      //     id: "062e1c68-0131-11ea-855d-e82a444382df",
      //     title: "大学毕业生租赁房"
      //   },
      //   { id: "062e1c69-0131-11ea-b44e-e82a444382df", title: "大学生主题社区" },
      //   { id: "062e1c6a-0131-11ea-83b6-e82a444382df", title: "见习基地补贴" },
      //   {
      //     id: "062e1c6b-0131-11ea-83e4-e82a444382df",
      //     title: "大学生实习（训）见"
      //   },
      //   {
      //     id: "062e1c6c-0131-11ea-b2e2-e82a444382df",
      //     title: "定向招录基层社会服务大学生"
      //   },
      //   {
      //     id: "062e1c6d-0131-11ea-95f3-e82a444382df",
      //     title: "开发基层社会服务岗"
      //   },
      //   { id: "062e1c6e-0131-11ea-ade9-e82a444382df", title: "创业导师辅导和大学生创业服务" },
      //   { id: "062e1c6f-0131-11ea-b592-e82a444382df", title: "创业学院补贴" },
      //   {
      //     id: "062e1c70-0131-11ea-bbf3-e82a444382df",
      //     title: "大学生创新创业培训"
      //   },
      //   { id: "062e1c71-0131-11ea-af84-e82a444382df", title: "大学生创业工位" },
      //   {
      //     id: "062e1c72-0131-11ea-9ded-e82a444382df",
      //     title: "大学生创业企业社保、税费资助扶持"
      //   },
      //   {
      //     id: "062e1c73-0131-11ea-94e5-e82a444382df",
      //     title: "大学生创业项目资助"
      //   },
      //   {
      //     id: "062e1c74-0131-11ea-8dd0-e82a444382df",
      //     title: "大学生创业企业股权投资"
      //   },
      //   {
      //     id: "062e1c75-0131-11ea-96e8-e82a444382df",
      //     title: "大学生创业贷款担保"
      //   },
      //   {
      //     id: "062e1c76-0131-11ea-bb45-e82a444382df",
      //     title: "优化创业就业环境"
      //   }
      // ]
    };
  },
  methods: {
    enterIn(i) {
      console.log(i);

      this.flag = i;
    },
    getOut(i) {
      this.flag = "";
    },
    jumpTo(id, title) {
      // if (id == "062e1c6b-0131-11ea-83e4-e82a444382df") {
      //   this.$router.push("/trainStu");
      // } else if (id == "062e1c71-0131-11ea-af84-e82a444382df") {
      //   this.$router.push("/workPosition");
      // } else {
      //   this.$router.push({
      //     path: "read",
      //     query: {
      //       id: id
      //     }
      //   });
      // }
      this.$router.push({
        path: "/milRead",
        query: {
          id: id,
          title
        }
      });
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
    //   align-self: center;
    // align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-top: 50px;
    img {
      width: 50px;
      height: 50px;
      display: block;
      margin-top: 30px;
      margin-left: 55px;
    }
    span {
      margin-top: 10px;
      display: inline-block;
      margin-top: 20px;
    }
  }
  .box-lists:hover {
    box-shadow: 5px 5px 20px 0px rgba(241, 238, 234);
  }
}
</style>
