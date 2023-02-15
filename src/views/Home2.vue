<template>
  <div class="home">
    <div class="banner">
      <img class="banner-image" src="../assets/imgs/newImg/banner.png" alt="" />
    </div>
    <div class="content-wrapper news-wrapper">
      <!--      <el-tabs v-model="activeName" @tab-click="handleClick">-->
      <!--        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>-->
      <!--        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>-->
      <!--        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>-->
      <!--        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
      <!--      </el-tabs>-->

      <div class="news-content">
        <div class="news-list">
          <div
            :class="[newsId === 1 ? 'item active' : 'item']"
            @click="handleChangeNewsId(1)"
          >
            人才新闻
          </div>
          <div
            :class="[newsId === 2 ? 'item active' : 'item']"
            @click="handleChangeNewsId(2)"
          >
            新闻动态
          </div>
        </div>

        <div v-if="newsId === 1" class="news-item-wrapper">
          <div v-for="item in newList" v-bind:key="item.id" class="news-item">
            <span style="color: #a0a0a0;padding-right: 4px;">●</span>
            <a class="news-title" @click="handleNew(item.id)">{{
              item.title
            }}</a>
            <span style="color: #a0a0a0;">{{
              item.dateCreated.slice(0, 10)
            }}</span>
          </div>
          <div class="more" @click="more(1)">查看更多 ></div>
        </div>
        <div v-if="newsId === 2" class="news-item-wrapper">
          <div
            v-for="item in noticeList"
            v-bind:key="item.id"
            class="news-item"
          >
            <span style="color: #a0a0a0;padding-right: 4px;">●</span>
            <a class="news-title" @click="handleNew(item.id)">{{
              item.title
            }}</a>
            <span style="color: #a0a0a0;">{{
              item.lastUpdated.slice(0, 10)
            }}</span>
          </div>
          <div class="more" @click="more(2)">查看更多 ></div>
        </div>
      </div>
      <!-- 右边选项卡 -->
      <div class="right-choose">
        <div
          style="height: 38px; color:#d10b0f;border-bottom: 2px solid #d10b0f;margin-left:25px;"
        >
          <!-- <span
            :class="[newsId2 === 3 ? 'item active' : 'item']"
            @click="handleChangeNewsId2(3)"
            >人才安居</span
          > -->
          <span
            :class="[newsId2 === 4 ? 'item active' : 'item']"
            @click="handleChangeNewsId2(4)"
            >企业问计</span
          >
        </div>
        <div class="right-box">
          <div class="right-contain ">
            <div v-if="newsId2 === 3" class="news-item-wrapper2">
              <div
                v-for="item in tenlentHome"
                v-bind:key="item.id"
                class="news-item2"
              >
                <span style="color: #a0a0a0;padding-right: 4px;">●</span>
                <a class="news-title" @click="handleNew(item.id)">{{
                  item.title
                }}</a>
                <span style="color: #a0a0a0;">{{
                  item.lastUpdated.slice(0, 10)
                }}</span>
              </div>
              <div class="more2" @click="more(3)">查看更多 ></div>
            </div>
            <div v-if="newsId2 === 4" class="news-item-wrapper2">
              <div
                v-for="item in comAsk"
                v-bind:key="item.id"
                class="news-item2"
              >
                <span style="color: rgb(160, 160, 160); ">●</span>
                <a class="news-title" @click="handleNew(item.id)">{{
                  item.title
                }}</a>
                <span style="color: #a0a0a0;">{{
                  item.lastUpdated.slice(0, 10)
                }}</span>
              </div>
              <div class="more2" @click="more(4)">查看更多 ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="content-wrapper main">
        <div class="main-top">
          <img
            src="../assets/imgs/newImg/talentService.png"
            width="40"
            height="42"
          />
          <span style="color:#d10b0f;font-size: 20px;">人才服务专栏</span>
        </div>
        <div class="wrapper-box">
          <div class="left-wrapper">
            <div class="service-part">
              <div class="service-wrapper">
                <div
                  class="service-item"
                  v-for="(item, index) in serviceList"
                  :key="index"

                >
                  <img :src="item.img" @click="handleOther(item.id)" alt="" />
                  <div>{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-wrapper">
            <!-- <div class="item-list">
              <div class="recommendPage">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  style="padding-left:50px"
                >
                  <swiper-slide
                    ><img src="../assets/imgs/newImg/items/a1.png" alt="xx" /><a
                      @click="handelS(1)"
                      style="width:140px;text-align:left"
                      >申报指南</a
                    ></swiper-slide
                  >
                  <swiper-slide
                    ><img src="../assets/imgs/newImg/items/a2.png" alt="xx" /><a
                      @click="handelS(2)"
                      style="width:140px;text-align:left"
                    >
                      个人信息审核</a
                    ></swiper-slide
                  >
                  <swiper-slide
                    ><img src="../assets/imgs/newImg/items/a3.png" alt="xx" /><a
                      @click="handelS(3)"
                      style="width:140px;text-align:left"
                      >安居房资格申请</a
                    ></swiper-slide
                  >
                  <swiper-slide
                    ><img src="../assets/imgs/newImg/items/a4.png" alt="xx" /><a
                      @click="handelS(4)"
                      style="width:140px;text-align:left"
                      >在线选房</a
                    ></swiper-slide
                  >

                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div> -->
            <div class="item-list">
              <div class="recommendPage">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  style="padding-left:50px"
                >
                  <swiper-slide
                    ><img
                      src="../assets/imgs/newImg/items/b1.png"
                      style="width: 40px;
    height: 40px;"
                      alt="xx"
                    /><a
                      @click="handleReport(1)"
                      style="width:140px;text-align:left"
                    >
                      战略科技人才</a
                    ></swiper-slide
                  >
                  <swiper-slide
                    ><img
                      src="../assets/imgs/newImg/items/b2.png"
                      style="width: 40px;
    height: 40px;"
                      alt="xx"
                    /><a
                      @click="handleReport(2)"
                      style="width:140px;text-align:left"
                    >
                      产业领军人才</a
                    ></swiper-slide
                  >
                  <swiper-slide
                    ><img
                      src="../assets/imgs/newImg/items/b3.png"
                      style="width: 40px;
    height: 40px;"
                      alt="xx"
                    /><a
                      @click="handleReport(3)"
                      style="width:140px;text-align:left"
                    >
                      优秀青年人才</a
                    ></swiper-slide
                  >
                  <swiper-slide
                    ><img
                      src="../assets/imgs/newImg/items/b4.png"
                      style="width: 40px;
    height: 40px;"
                      alt="xx"
                    /><a

                      style="width:140px;text-align:left;cursor: not-allowed;"
                      >武汉工匠</a
                    >
                    <!-- @click="handleReport(4)" -->
                    </swiper-slide
                  >
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
            <div class="item-list">
              <div class="recommendPage">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  style="padding-left: 50px"
                >
                  <swiper-slide v-for="v in milList" :key="v.id"
                    ><img
                      src="../assets/imgs/newImg/items/c.png"
                      style="width: 40px;
    height: 40px;"
                      alt="xx"
                    />
                    <a
                      :href="v.url"
                      target="_blank"
                      style="width:140px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align:left"
                      >{{ v.title }}</a>
                    <!-- <a
                      @click="handelMil(v.id, v.title)"
                      style="width:140px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align:left"
                      >{{ v.title }}</a> -->
                    </swiper-slide
                  >

                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
            <div class="item-list">
              <div class="recommendPage">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  style="padding-left:50px"
                >
                  <swiper-slide v-for="(v, i) in parList" :key="i"
                    ><img
                      src="../assets/imgs/newImg/items/d.png"
                      style="text-align:leftwidth: 40px;
    height: 40px;"
                      alt="xx"
                    /><a

                      style="width:140px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align:left;cursor: not-allowed;"
                    >
                     <!-- @click="handlePartner(v.id)" -->
                      {{ v.title }}</a
                    ></swiper-slide
                  >
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
            <div class="item-list">
              <div class="recommendPage">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  style="padding-left:50px"
                >
                  <swiper-slide v-for="(v, i) in serList" :key="i"
                    ><img
                      :src="v.img"
                      style="width: 40px;
    height: 40px;"
                      alt="xx"
                    /><a
                      @click="handleService(i)"
                      style="width:140px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align:left"
                    >
                      {{ v.title }}</a
                    ></swiper-slide
                  >

                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="second-wrapper">
      <div class="content-wrapper second-wrapper">
        <div class="common-service-left">
          <div class="second-top">
            <img src="../assets/imgs/newImg/dongtaiRed.png" alt="xx" />
            <span>工作动态</span>
            <i  @click="more(5)">更多</i>
          </div>
          <div class="second-bottom">
            <div
              v-for="item in workState"
              v-bind:key="item.id"
              class="articleList"
            >
              <span style="color: #a0a0a0;padding-right: 4px;">●</span>
              <a
                class="news-title2"
                @click="handleNew(item.id)"
                style="margin-left: 5px;color:#444444;font-size:20px"
                >{{ item.title }}</a
              >
            </div>
          </div>
        </div>
        <div class="common-service-right">
          <div class="second-top">
            <img src="../assets/imgs/newImg/gonggaoRed.png" alt="xx" />
            <span>政策文件</span>
            <i @click="more(6)">更多</i>
          </div>
          <div class="second-bottom">
            <div
              v-for="item in politicalFile"
              v-bind:key="item.id"
              class="articleList"
            >
              <span style="color: #a0a0a0;padding-right: 4px">●</span>
              <a
                class="news-title2"
                @click="handleNew(item.id)"
                style="margin-left: 5px;color:#444444;font-size:20px"
                >{{ item.title }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tenlentActive -->

    <div class="footer-wrapper">
      <div class="content-wrapper footer">
        <div>
          <div style="display:flex;justify-content: space-between;">
            <div class="footer-top">人才活动</div>
            <span @click="more(7)" style="cursor:pointer;">更多</span>
          </div>
          <div class="foot-content-box" @mouseenter="showFootBtn" @mouseleave="footBtnVisible = false">
            <span class="btn btnR" v-show="footBtnVisible">
              <div class="el-icon-arrow-left" @click="footImgToLeft"></div>
            </span>
            <div style="display:flex;" class="footer-container-box">
              <div class="footer-container-ul" ref="footerContainerUl">
                <div
                  v-for="item in tenlentActive"
                  :key="item.id"
                  class="footer-container"
                >
                  <a @click="handleNew(item.id)">
                    <img :src="item.image" alt="" />
                    <div>{{ item.title }}</div>
                  </a>
                </div>
              </div>
            </div>
            <span class="btn btnL" v-show="footBtnVisible">
              <div class="el-icon-arrow-right" @click="footImgToRight"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// import "swiper/swiper-bundle.css";
import { homeData } from "../api/home";
import { getAllArticle } from '../api/other.js';

export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // activeName: "first",
      // 定义newsid
      newsId: 1,
      newsId2: 4,
      newList: [],
      comAsk: [],
      tenlentHome: [],
      workState: [],
      politicalFile: [],
      tenlentActive: [],
      noticeList: [], //
      serviceList: [
        // {
        //   id: 0,
        //   name: "人才留汉住房租赁",
        //   img: require("../assets/imgs/newImg/xzlh.png")
        // },
        {
          id: 1,
          name: "武汉英才",
          img: require("../assets/imgs/newImg/rc2.png")
        },
        {
          id: 2,
          name: "百万大学生留汉工程",
          img: require("../assets/imgs/newImg/rc4.png")
        },
        {
          id: 3,
          name: "城市合伙人",
          img: require("../assets/imgs/newImg/rc3.png")
        },
        {
          id: 4,
          name: "人才服务事项",
          img: require("../assets/imgs/newImg/rc1.png")
        }
      ],
      milList: [
        {
          id: "1",
          title: "大学生毕业生落户",
          url: "http://www.whzc.gov.cn/html/rclh/index.html"
        },
        {
          id: "2",
          title: "大学毕业生租赁房",
          url: "http://www.whzc.gov.cn/html/rcaj/index.html"
        },
        {
          id: "3",
          title: "大学生就业见习补贴",
          url: "http://www.whzc.gov.cn/html/sxjx/index.html"
        },
        { id: "4", 
          title: "大学生实习（训）见习岗位",
          url: "http://www.whzc.gov.cn/html/sxjx/index.html"
        },
        { id: "5", 
          title: "大学生一次性求职创业补贴申请",
          url: "http://www.whzc.gov.cn/html/jcjy/index.html"
        },
        {
          id: "6",
          title: "灵活就业应届高校毕业生意外伤害保险补助",
          url: "http://www.whzc.gov.cn/html/jcjy/index.html"
        },
        {
          id: "7",
          title: "大学生社会保险补贴申请（灵活就业）",
          url: "http://www.whzc.gov.cn/html/jcjy/index.html"
        },
        {
          id: "8",
          title: "小微企业招用大学生社会保险补贴申请",
          url: "http://www.whzc.gov.cn/html/jcjy/index.html"
        },
        { id: "9",
          title: "大学生创业工位",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        },
        { id: "10", 
          title: "大学生一次性创业补贴申请",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
         },
        { id: "11", 
          title: "武汉市高校毕业生“三大行业”创业补贴申报",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        },
        {
          id: "12",
          title: "大学生创业担保贷款资格申请",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        },
        {
          id: "13",
          title: "支持申报高新技术企业",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        },
        {
          id: "14",
          title: "支持申领科技创新劵",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        },
        {
          id: "15",
          title: "支持申报市级科技企业孵化器和众创空间认定",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        },
        {
          id: "16",
          title: "初创企业场租补贴",
          url: "http://www.whzc.gov.cn/html/cygw/index.html"
        }
      ],
      parList: [
        {
          id: "8ec50228-0129-11ea-b462-e82a444382df",
          title: "新设创投基金注资"
        },
        { id: "8ec52924-0129-11ea-add7-e82a444382df", title: "个税奖励" },
        { id: "8ec5500c-0129-11ea-965e-e82a444382df", title: "投资风险补贴" },
        { id: "8ec59df0-0129-11ea-962e-e82a444382df", title: "上市补贴" },
        { id: "8ec5c4e8-0129-11ea-a07a-e82a444382df", title: "服务平台补贴" },
        { id: "8ec5ebde-0129-11ea-8e47-e82a444382df", title: " 创业活动资助" },
        { id: "8ec612d0-0129-11ea-a2ca-e82a444382df", title: "创业项目资助" },
        { id: "8ec662ba-0129-11ea-bfa1-e82a444382df", title: "生活津贴 " },
        { id: "8ec689ae-0129-11ea-9bf5-e82a444382df", title: "科研项目资助 " },
        { id: "8ec6aeae-0129-11ea-a717-e82a444382df", title: "创业贷款 " },
        { id: "8ec6d79a-0129-11ea-b98f-e82a444382df", title: "创业场地补贴" },
        { id: "8ec6fc94-0129-11ea-9d71-e82a444382df", title: "学术交流资助" },
        { id: "8ec7239c-0129-11ea-8079-e82a444382df", title: "住房保障" },
        { id: "8ec77394-0129-11ea-8f10-e82a444382df", title: "职称特殊评审" },
        {
          id: "8ec0e834-0129-11ea-b70e-e82a444382df",
          title: "一事一议”项目资助"
        },
        { id: "8ec10f06-0129-11ea-be38-e82a444382df", title: "研发配套" },
        {
          id: "8ec15d7e-0129-11ea-acfe-e82a444382df",
          title: "团队核心成员薪酬补贴"
        },
        { id: "8ec1846e-0129-11ea-b7e9-e82a444382df", title: "创新产品认定  " },
        {
          id: "8ec1ab8c-0129-11ea-872b-e82a444382df",
          title: "创新产品优先采购"
        },
        {
          id: "8ec1cffe-0129-11ea-8828-e82a444382df",
          title: "境外来汉人才个税奖励"
        },
        { id: "8ec1f6fa-0129-11ea-b6d2-e82a444382df", title: "上市补贴" },
        {
          id: "8ec2473e-0129-11ea-a130-e82a444382df",
          title: "因公临时出国审批"
        },
        {
          id: "8ec26d5e-0129-11ea-a449-e82a444382df",
          title: " 私人事务类居留许可"
        },
        {
          id: "8ec292d0-0129-11ea-947d-e82a444382df",
          title: "外国专家来华工作许可"
        },
        {
          id: "8ec2b9c0-0129-11ea-9c0a-e82a444382df",
          title: "外国人签证及居留许可"
        },
        {
          id: "8ec307a8-0129-11ea-9ddf-e82a444382df",
          title: "高层次人才居住证 "
        },
        { id: "8ec33128-0129-11ea-be46-e82a444382df", title: "人才落户" },
        {
          id: "8ec356c8-0129-11ea-a330-e82a444382df",
          title: " 购（租）房补贴"
        },
        { id: "8ec3a4b6-0129-11ea-9a2f-e82a444382df", title: " 子女入学" },
        { id: "8ec3cb66-0129-11ea-8c72-e82a444382df", title: "优诊优疗服务" },
        {
          id: "8ec4185c-0129-11ea-b0b0-e82a444382df",
          title: "新设机构奖励补贴"
        },
        { id: "8ec43f64-0129-11ea-9ee4-e82a444382df", title: "引入资金奖励" },
        { id: "8ec46658-0129-11ea-bcfc-e82a444382df", title: "办公用房补贴" },
        {
          id: "8ec4b436-0129-11ea-a577-e82a444382df",
          title: "优先获得引导基金投入"
        }
      ],
      serList: [
        {
          img: require("../assets/imgs/newImg/items/e1.png"),
          title: "区级人才申报"
        },
        // {
        //   img: require("../assets/imgs/newImg/items/e2.svg"),
        //   title: "高校毕业生社会保险"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/e3.svg"),
        //   title: "湖北省高校毕业生就"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/e4.png"),
        //   title: "科技成果登记"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/rencailuohu.svg"),
        //   title: "人才落户"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/banli.svg"),
        //   title: "办理《武汉市高层次人才居住证》"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/shenqing.svg"),
        //   title: "申请《武汉市高层次人才居住证（副卡）》"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/jishu.svg"),
        //   title: "技术合同认定登记"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申请《外国专家来华邀请函》"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申领《外国人工作许可证》"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申请《外国人工作许可证》补办"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申请《外国人工作许可证》延期"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申请《外国人工作许可证》变更"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申请《外国人工作许可证》注销"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "境内申请外国人来华工作许可（来华工作90日以上，不含90日）"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "申请《外国人工作许可通知》（来华工作90日以上，不含90日）"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "外国人签证证件（签证、居留许可、停留许可）签发"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "外国人签证证件（签证、居留许可、停留许可）换发"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "外国人签证证件（签证、居留许可、停留许可）延期"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/ren.svg"),
        //   title: "外港澳台居民定居证明签发"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/qian.svg"),
        //   title: "一次性求职创业补贴申领"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/qian.svg"),
        //   title: "就业见习补贴申领"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/qian.svg"),
        //   title: "公益性岗位补贴申报"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/qian.svg"),
        //   title: "纳税咨询"
        // },
        // {
        //   img: require("../assets/imgs/newImg/items/qian.svg"),
        //   title: "一般纳税人资格查询"
        // }
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
      curFootImgIndex: 0,
      footBtnVisible: false,
    };
  },
  created() {
    // this.getBannerImg();
    this.query()
    this.getHomeData();
    // this.getIdData();
    // this.getTalentData();
    // this.getLittleBanner();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  methods: {
    query() {
      getAllArticle().then(res => {
        let d = res.data
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
            this.serList.push({
              id: e.id,
              title: e.name,
              ...imgs,
              url: e.url
            })
          })
        }
      })
    },
    showFootBtn() {
      let t = this.tenlentActive.length
      if(t <= 3) return
      this.footBtnVisible = true
    },
    footImgToRight() {
      let t = this.tenlentActive.length
      if(t <= 3) return
      if(this.curFootImgIndex > 0) {
        this.curFootImgIndex -= 1
        this.$refs.footerContainerUl.style.transform = `translateX(-${320 * this.curFootImgIndex}px)`
      }
    },
    footImgToLeft() {
      let t = this.tenlentActive.length
      if(t <= 3) return
      if(this.curFootImgIndex < t - 3) {
        this.curFootImgIndex += 1
        this.$refs.footerContainerUl.style.transform = `translateX(-${320 * this.curFootImgIndex}px)`
      }
    },
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
    handleChangeNewsId(newsId) {
      this.newsId = newsId;
    },
    handleChangeNewsId2(newsId) {
      this.newsId2 = newsId;
    },
    more(i) {
      // this.$router.push("talentPolicy") ;
      if (i == 1) {
        this.$router.push("/talentNews");
      } else if (i == 2) {
        this.$router.push("/newsInfo");
      } else if (i == 3) {
        this.$router.push("/talentLive");
      } else if (i == 4) {
        this.$router.push("/enterprisePlan");
      } else if (i == 5) {
        this.$router.push("/workState");
      } else if (i == 6) {
        this.$router.push("/ploFile");
      } else if (i == 7) {
        this.$router.push("/talentActivities");
      }
    },
    handelS(i) {
      if (i == 1) {
        this.$router.push("/reportGuide");
      }
      if (i == 2) {
        // 先判断是否登入
        if (this.$store.state.userInfo) {
          this.$router.push("personalInfo");
        } else {
          this.$router.push("login");
        }
      }
      if (i == 3) {
        this.$router.push("/reportOnlie");
      }
      if (i == 4) {
        this.$router.push("/reportHouse1");
      }
    },
    handleReport(i) {
      if (i == 1) {
        this.$router.push("/zTlent");
      }
      if (i == 2) {
        this.$router.push("/cTlent");
      }
      if (i == 3) {
        this.$router.push("/yTlent");
      }
      if (i == 4) {
        this.$router.push("/wTlent");
      }
    },
    handelMil(id, title) {
      this.$router.push({
        path: "/milRead",
        query: {
          id: id,
          title
        }
      });
    },
    handleNew(id) {
      this.$router.push({
        path: "read1",
        query: {
          id: id
        }
        // path: `/read/${id}`
      });
    },
    handlePartner(id) {
      this.$router.push({
        path: "read",
        query: {
          id: id
        }
        // path: `/read/${id}`
      });
    },
    // async getBannerImg() {
    //   const data = await bannerImg();
    //   console.log(data);
    // },

    handleOther(id) {
      if (id == 0) {
        this.$router.push("/students");
      }
      if (id == 1) {
        this.$router.push("/hhTalent");
      }
      if (id == 2) {
        this.$router.push("/milionEngineer");
      }
      if (id == 3) {
        return;
        this.$router.push("/cityPatner");
      }
      if (id == 4) {
        this.$router.push("/serveBussiness");
      }
    },
    handlePartner(id) {
      this.$router.push({
        path: "read",
        query: {
          id: id
        }
        // path: `/read/${id}`
      });
    },
    // async getBannerImg() {
    //   const data = await bannerImg();
    //   console.log(data);
    // },

    async getHomeData() {
      const data = await homeData();
      console.log(data);
      if (data) {
        let d = data.data;

        this.noticeList = d["新闻动态"].filter(e => e.audit == true);
        this.newList = data.data["人才新闻"].filter(e => e.audit == true);
        this.comAsk = data.data["企业问计"].filter(e => e.audit == true);
        this.tenlentHome = data.data["人才安居"].filter(e => e.audit == true);
        this.workState = data.data["工作动态"].filter(e => e.audit == true);
        this.politicalFile = data.data["政策文件"].filter(e => e.audit == true);
        this.tenlentActive = data.data["人才活动"].filter(e => e.audit == true);
      }
    },

    handleService(i) {
      if (i == 0) {
        this.$router.push("/navList");
      } else {
        window.open(
          this.serList[i].url,
          "_blank"
        );
      }
    }
  }
};
</script>

<style lang="less" scoped>
.banner-image {
  display: block;
  width: 100%;
  height: 338px;
}
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}
// 选项卡样式
.item {
  font-size: 24px;
  color: #666666;
  //padding: 8px 0;
  //margin-left: 50px;
  margin-right: 32px;
  border-bottom: 4px solid transparent;
  border-radius: 2px;
  cursor: pointer;
}

.item.active {
  color: #333;
  font-weight: 700;
  border-bottom: 4px solid #ff1600;
}
.news-title {
  //flex-grow: 1;
  width: 300px;
  margin-left: 11px;
  line-height: 28px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.title-border {
  color: rgba(51, 51, 51, 1);
  position: relative;
  text-align: left;

  .cn-text {
    font-size: 24px;
    position: relative;

    b {
      position: relative;
      z-index: 999;
    }

    .border {
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, #ff1600, #ff9d00);
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      z-index: 0;
      left: 0;
    }
  }
}

.news-wrapper {
  padding: 20px;
  // box-shadow: 0 0 20px 0 rgba(153, 153, 153, 0.3);
  display: flex;
  align-items: flex-start;
  background: #fff;
  position: relative;
  // margin-bottom: 34px;
  border-radius: 6px;
  // padding-bottom: 0;

  .more {
    margin-top: 10px;
    margin-left: 330px;
    background: #fff;
    color: #999999;
    font-size: 14px;
    cursor: pointer;
  }

  .news-content {
    //display: flex;
    flex: 0 0 0;
  }
  .right-choose {
    width: 60%;
    // height: 400px;
    padding-left: 15px;
    & > div {
      font-size: 24px;
      display: flex;
      span {
        display: inline-block;
        justify-content: flex-start;
        margin-right: 20px;
      }
    }
    .right-box {
      margin-left: 15px;
    }
  }
}

.news-content {
  padding-left: 32px;
}

.news-list {
  display: flex;
  //justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid red;
  width: 440px;
}

.news-item-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0 0;
  width: 440px;

  .news-item {
    //width: 50%;
    text-align: left;
    display: flex;
    margin-bottom: 11px;
    align-items: center;
  }
}
.news-item-wrapper2 {
  margin-top: 23px;
  .news-item2 {
    display: flex;
    align-items: center;
    margin-left: 11px;
    line-height: 28px;
    margin-top: 11px;
    & > a {
      display: inline-block;
      font-size: 15px;
      width: 500px;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    & > span {
      display: inline-block;
      font-size: 15px;
    }
  }
  .more2 {
    margin-left: 530px;
    margin-top: 20px;
    background: #fff;
    color: #999999;
    font-size: 14px;
    cursor: pointer;
  }
}
.main-wrapper {
  padding: 41px 0 49px;
  display: flex;
  flex-direction: column;

  .main {
    .main-top {
      width: 100%;
      border-bottom: 2px solid red;
      display: flex;
      justify-content: flex-start;
    }
    .wrapper-box {
      display: flex;
      border: 3px solid #dddddd;
      border-radius: 15px;
      .left-wrapper {
        flex-basis: 250px;
        border-radius: 6px;
        overflow: hidden;
        // box-shadow: 0 0 20px 0 rgba(191, 191, 191, 0.3);
        display: flex;
        // flex-direction: column;
        .service-part,
        .platform-part {
          border-radius: 6px;
          overflow: hidden;
          background: #fff;
          // box-shadow: 0 0 20px 0 rgba(191, 191, 191, 0.3);

          .service-wrapper {
            display: flex;
            flex-direction: column;

            justify-content: space-between;
            padding: 11px 30px 20px;

            .service-item {
              font-size: 16px;
              font-weight: 500;
              color: #333333;
              margin-top: 15px;
              img {
                width: 100px;
                height: 100px;
                margin-bottom: 10px;
              }
              & > div {
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
        .list {
          padding: 24px 20px 6px;

          .item {
            display: flex;
            align-items: center;
            margin-bottom: 26px;

            .circle {
              width: 10px;
              height: 10px;
              background: #eeeef3;
              border-radius: 50%;
              margin-right: 8px;
            }

            .title {
              width: 407px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: left;
            }

            .date {
              margin-left: 20px;
              color: #333333;
              font-size: 12px;
            }
          }
        }
      }

      .right-wrapper {
        .item-list {
          margin: 0px 0 20px;
          padding: 20px 0 13px;
          .recommendPage {
            // position: relative;
            width: 948px;
            height: 100px;
          }

          .recommendPage .swiper-slide {
            width: 100%;
            line-height: 100px;
            color: #000;
            font-size: 16px;
            // text-align: center;
            display: flex;
            align-items: center;
            img {
              display: inline-block;
            }
            & > a {
              display: inline-block;
            }
            & > a:hover {
              color: #ff1600;
            }
          }
          .swiper-button-prev {
            margin-top: -18px;
            right: 16px;
            top: 60px;
            width: 31px;
            height: 16px;
            background-image: url("../assets/imgs/houseList/箭头左.png");
            background-size: 40% 100%;
          }

          .swiper-button-next {
            margin-top: -18px;
            right: 16px;
            top: 60px;
            width: 31px;
            height: 16px;
            background-image: url("../assets/imgs/houseList/箭头右.png");
            background-size: 40% 100%;
          }
        }
      }
      .platform-part {
        margin-top: 20px;
      }
    }
  }
}
.second-wrapper {
  background: #fbf6f0;
  // height: 360px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;

  .common-service-left,
  .common-service-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .second-top {
      flex-basis: 50px;
      position: relative;
      overflow: hidden;
      border-bottom: 2px solid red;
      img {
        position: absolute;
        left: 20px;
        width: 40px;
        height: 46px;
      }
      span {
        color: #ff1600;
        position: absolute;
        top: 20px;
        left: 90px;
        font-size: 20px;
        font-weight: 500;
      }
      i {
        position: absolute;
        top: 20px;
        right: 10px;
        font-style: normal;
        cursor:pointer;
      }
      a {
        position: absolute;
        top: 20px;
        right: 10px;
      }
    }
    .second-bottom {
      flex: 1;
      .articleList {
        display: flex;
        text-align: left;
        align-items: center;
        margin-top: 10px;
        width: 500px;
        .news-title2 {
          width: 500px;
          margin-left: 11px;
          line-height: 28px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          & > span {
            display: inline-block;
          }

          & > a {
            display: inline-block;
          }
        }
      }
    }
  }
}
.footer-wrapper {
  padding-top: 50px;
  padding-bottom: 50px;
  .footer {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    .footer-top {
      color: red;
      margin-left: -40px;
      // position: absolute;
      // left: 20px;
      // top: -23px;
    }
    .foot-content-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .btn {
        width: 30px;
        height: 30px;
        line-height: 30px;
        display: block;
        border-radius: 50%;
        background: #eee;
        cursor: pointer;
        &.btnL{
          margin-left: 10px;
        }
        &.btnR{
          margin-right: 10px;
        }
      }
    }
    .footer-container-box {
      max-width: 980px;
      overflow: hidden;

    }
    .footer-container-ul {
      display: flex;
      justify-content: space-around;
      transition: all 0.5s;
    }
    .footer-container {
      margin-right: 10px;
      &:last-child {
        margin-right: 0px;
      }
      a {
        display: inline-block;
        width: 320px;
        height: 176px;
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid rgba(51, 51, 51, 0.2);
        img {
          width: 320px;
          height: 152px;
        }
      }
      a:hover {
        box-shadow: 5px 5px 10px black;
      }
    }
  }
}
</style>
