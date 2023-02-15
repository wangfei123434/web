import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout";
import Home from "../views/Home.vue";
import {getToken} from "@/utils/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {name: "首页"},
    redirect: "index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "home",
        meta: {name: "首页"},
        component: Home
      },
      // 人才
      // {
      //   path: "talent",
      //   name: "talent",
      //   component: () =>
      //     import(/* webpackChunkName: "talent" */ "../views/talent/Talent.vue")
      // },
      // // 用人单位
      // {
      //   path: "employer",
      //   name: "employer",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "employer" */ "../views/employer/Employer.vue"
      //     )
      // },
      // // 高校
      // {
      //   path: "colleges",
      //   name: "colleges",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "colleges" */ "../views/colleges/Colleges.vue"
      //     )
      // },
      // 服务机构
      // {
      //   path: "serviceIns",
      //   name: "serviceIns",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "serviceIns" */ "../views/serviceIns/ServiceIns.vue"
      //     )
      // },
      // // 人才工作者
      // {
      //   path: "talentWorker",
      //   name: "talentWorker",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "talentWorker" */ "../views/talentWorker/TalentWorker.vue"
      //     )
      // },
      // 人才留汉
      {
        path: "students",
        name: "students",
        meta: {name: "人才留汉住房租赁"},
        redirect: "/reportGuide",
        component: () =>
          import(
            /* webpackChunkName: "students" */ "../views/students/Students.vue"
            ),
        children: [
          {
            path: "/reportGuide",
            name: "reportGuide",
            meta: {name: "申报指南"},
            component: () =>
              import(
                /* webpackChunkName: "students" */ "../views/students/components/ReportGuide.vue"
                )
          },
          {
            path: "/reportOnlie",
            name: "reportOnlie",
            // meta: { name: "在线申报" },
            meta: {name: "人才租赁房申请"},

            component: () =>
              import(
                /* webpackChunkName: "students" */ "../views/students/components/ReportOnlie.vue"
                )
          },
          {
            path: "/reportHouse1",
            name: "reportHouse1",
            meta: {name: "在线选房"},

            component: () =>
              import(
                /* webpackChunkName: "students" */ "../views/students/components/ReportHouse1.vue"
                )
          },
          {
            path: "/reportHouse2",
            name: "reportHouse2",
            meta: {name: "在线选房"},

            component: () =>
              import(
                /* webpackChunkName: "students" */ "../views/students/components/ReportHouse2.vue"
                )
          },
          {
            path: "/reportHouse3",
            name: "reportHouse3",
            meta: {name: "在线选房"},

            component: () =>
              import(
                /* webpackChunkName: "students" */ "../views/students/components/ReportHouse3.vue"
                ),
            beforeEnter: (to, from, next) => {
              if (getToken()) {
                next();
              } else {
                if (to.path === "login") {
                  next();
                } else {
                  next("login");
                }
              }
            }
          },
          {
            path: "/reportHouse4",
            name: "reportHouse4",
            meta: {name: "在线选房"},

            component: () =>
              import(
                /* webpackChunkName: "students" */ "../views/students/components/ReportHouse4.vue"
                )
          },

          {
            path: "/houseMap",
            meta: {name: "房源查看"},

            component: () =>
              import(
                /* webpackChunkName: "houseMap" */ "../views/students/components/HouseMap.vue"
                )
          }
        ]
      },
      // 人才申报
      {
        path: "talentReport",
        name: "talentReport",
        meta: {name: "武汉英才计划"},
        redirect: "/zTlent",
        component: () =>
          import(
            /* webpackChunkName: "students" */ "../views/talentReport/TalentReport.vue"
            ),
        children: [
          {
            path: "/zTlent",
            name: "zTlent",
            meta: {name: "战略科技人才"},

            component: () =>
              import(
                /* webpackChunkName: "zTlent" */ "../views/talentReport/components/ZTlent.vue"
                )
          },
          {
            path: "/cTlent",
            name: "cTlent",
            meta: {name: "产业领军人才"},

            component: () =>
              import(
                /* webpackChunkName: "zTlent" */ "../views/talentReport/components/CTlent.vue"
                )
          },
          {
            path: "/yTlent",
            name: "yTlent",
            meta: {name: "优秀青年人才"},

            component: () =>
              import(
                /* webpackChunkName: "zTlent" */ "../views/talentReport/components/YTlent.vue"
                )
          },
          {
            path: "/wTlent",
            name: "wTlent",
            meta: {name: "武汉工匠"},

            component: () =>
              import(
                /* webpackChunkName: "zTlent" */ "../views/talentReport/components/WTlent.vue"
                )
          }
        ]
      },
      // 人才服务
      {
        path: "/service",
        name: "service",

        redirect: "/serviceClass",
        component: () =>
          import(
            /* webpackChunkName: "service" */ "../views/talent/TalentService.vue"
            ),
        children: [
          // 服务分类
          {
            path: "/serviceClass",
            name: "serviceClass",
            meta: {name: "服务分类"},
            component: () =>
              import(
                /* webpackChunkName: "ServiceClass" */ "../views/talent/components/ServiceClass.vue"
                )
          },
          // 黄鹤英才
          {
            path: "/hhTalent",
            name: "hhTalent",
            meta: {name: "武汉英才"},
            component: () =>
              import(
                /* webpackChunkName: "hhTalent" */ "../views/talent/components/HhTalent.vue"
                )
          },
          // 百万大学生留汉
          {
            path: "/milionEngineer",
            name: "milionEngineer",
            meta: {name: "百万大学生留汉"},
            component: () =>
              import(
                /* webpackChunkName: "milionEngineer" */ "../views/talent/components/MilionEngineer.vue"
                )
          },
          // 城市合伙人
          {
            path: "/cityPatner",
            name: "cityPatner",
            meta: {name: "城市合伙人"},
            component: () =>
              import(
                /* webpackChunkName: "cityPatner" */ "../views/talent/components/CityPatner.vue"
                )
          },
          // 人才服务事项
          {
            path: "/serveBussiness",
            name: "serveBussiness",
            meta: {name: "人才服务事项"},
            component: () =>
              import(
                /* webpackChunkName: "serveBussiness" */ "../views/talent/components/ServeBussiness.vue"
                )
          },
          {
            path: "/navList",
            name: "navList",
            meta: {name: "人才服务事项"},
            component: () =>
              import(
                /* webpackChunkName: "navList" */ "../views/talent/components/NavList.vue"
                )
          }
        ]
      },
      // 人才政策
      {
        path: "/talentPolicy",
        name: "talentPolicy",
        meta: {name: "人才政策"},
        redirect: "/workState",
        component: () =>
          import(
            /* webpackChunkName: "talentPolicy" */ "../views/talentPolicy/TalentPolicy.vue"
            ),
        children: [
          {
            path: "/talentNews",
            name: "talentNews",
            meta: {name: "人才新闻"},

            component: () =>
              import(
                /* webpackChunkName: "workState" */ "../views/talentPolicy/components/talentNews.vue"
                )
          },
          {
            path: "/newsInfo",
            name: "newsInfo",
            meta: {name: "新闻动态"},

            component: () =>
              import(
                /* webpackChunkName: "workState" */ "../views/talentPolicy/components/newsInfo.vue"
                )
          },
          {
            path: "/talentLive",
            name: "talentLive",
            meta: {name: "人才安居"},

            component: () =>
              import(
                /* webpackChunkName: "workState" */ "../views/talentPolicy/components/talentLive.vue"
                )
          },
          {
            path: "/enterprisePlan",
            name: "enterprisePlan",
            meta: {name: "企业问计"},

            component: () =>
              import(
                /* webpackChunkName: "workState" */ "../views/talentPolicy/components/enterprisePlan.vue"
                )
          },
          {
            path: "/workState",
            name: "workState",
            meta: {name: "工作动态"},

            component: () =>
              import(
                /* webpackChunkName: "workState" */ "../views/talentPolicy/components/WorkState.vue"
                )
          },
          {
            path: "/ploFile",
            name: "ploFile",
            meta: {name: "政策文件"},

            component: () =>
              import(
                /* webpackChunkName: "ploFile" */ "../views/talentPolicy/components/PloFile.vue"
                )
          },
          {
            path: "/talentActivities",
            name: "talentActivities",
            meta: {name: "人才活动"},

            component: () =>
              import(
                /* webpackChunkName: "ploFile" */ "../views/talentPolicy/components/talentActivities.vue"
                )
          }
        ]
      },
      // 操作指南
      {
        path: "operateGuide",
        name: "operateGuide",
        component: () =>
          import(
            /* webpackChunkName: "operateGuide" */ "../views/operateGuide/OperateGuide.vue"
            )
      },
      // 区级工作
      // {
      //   path: "regionWork",
      //   name: "regionWork",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "regionWork" */ "../views/region/RegionWork.vue"
      //     )
      // },
      // 登录
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/login/Login.vue")
      },
      // {
      //   path: "zxzx",
      //   name: "zxzx",
      //   component: () =>
      //     import(/* webpackChunkName: "login" */ "../views/zxzx/index.vue")
      // },
      {
        path: "/zxzx",
        name: "zxzx",
        meta: { name: "资讯中心" },
        redirect: "/Rcyw",
        component: () =>
          import(
            "../views/zxzx/index.vue"
          ),
        children: [
          {
            path: "/Rcyw",
            name: "Rcyw",
            meta: { name: "人才要闻" },
            component: () =>
              import(
                "../views/zxzx/components/Rcyw.vue"
              )
          },
          {
            path: "/Gzdt",
            name: "Gzdt",
            meta: { name: "工作动态" },
            component: () =>
              import(
                "../views/zxzx/components/Gzdt.vue"
              )
          },
          {
            path: "/Rchd",
            name: "Rchd",
            meta: { name: "人才活动" },
            component: () =>
              import(
                "../views/zxzx/components/Rchd.vue"
              )
          },
          {
            path: "/Tzgg",
            name: "Tzgg",
            meta: { name: "通知公告" },
            component: () =>
              import(
                "../views/zxzx/components/Tzgg.vue"
              )
          },
          {
            path: "/zxzxDetail",
            name: "zxzxDetail",
            meta: { name: "资讯中心详情" },
            component: () =>
              import(
                "../views/zxzx/detailPage/Detail.vue"
              )
          },
        ]
      },
      // {
      //   path: "rczc",
      //   name: "rczc",
      //   component: () =>
      //     import(/* webpackChunkName: "login" */ "../views/rczc/index.vue")
      // },
      {
        path: "/rczc",
        name: "rczc",
        meta: { name: "人才政策" },
        redirect: "/Zcwj",
        component: () =>
          import(
            "../views/rczc/index.vue"
          ),
        children: [
          {
            path: "/Zcwj",
            name: "Zcwj",
            meta: { name: "政策文件" },
            component: () =>
              import(
                "../views/rczc/components/Zcwj.vue"
              )
          },
          {
            path: "/Qywj",
            name: "Qywj",
            meta: { name: "企业问计" },
            component: () =>
              import(
                "../views/rczc/components/Qywj.vue"
              )
          },
          {
            path: "/rczcDetail",
            name: "rczcDetail",
            meta: { name: "人才政策详情" },
            component: () =>
              import(
                "../views/zxzx/detailPage/Detail.vue"
              )
          },
        ]
      },
      // {
      //   path: "fwdt",
      //   name: "fwdt",
      //   component: () =>
      //     import(/* webpackChunkName: "login" */ "../views/fwdt/index.vue")
      // },
      {
        path: "/fwdt",
        name: "fwdt",
        meta: { name: "服务大厅" },
        redirect: "/Rcjh",
        component: () =>
          import(
            "../views/fwdt/index.vue"
          ),
        children: [
          {
            path: "/Rcjh",
            name: "Rcjh",
            meta: { name: "人才计划" },
            component: () =>
              import(
                "../views/fwdt/components/Rcjh.vue"
              )
          },
          {
            path: "/Sxfw",
            name: "Sxfw",
            meta: { name: "事项服务" },
            component: () =>
              import(
                "../views/fwdt/components/Sxfw.vue"
              )
          }
        ]
      },
      // {
      //   path: "gywm",
      //   name: "gywm",
      //   component: () =>
      //     import(/* webpackChunkName: "login" */ "../views/gywm/index.vue")
      // },
      {
        path: "/gywm",
        name: "gywm",
        meta: { name: "关于我们" },
        redirect: "/lxwm",
        component: () =>
          import(
            "../views/gywm/index.vue"
          ),
        children: [
          {
            path: "/lxwm",
            name: "lxwm",
            meta: { name: "联系我们" },
            component: () =>
              import(
                "../views/gywm/components/ContactUS.vue"
              )
          },
          {
            path: "/hdjl",
            name: "hdjl",
            meta: { name: "互动交流" },
            component: () =>
              import(
                "../views/gywm/components/InteractiveCommunication.vue"
              )
          }
        ]
      },
      //忘记密码
      {
        path: "forgetCode",
        name: "forgetCode",
        component: () =>
          import(
            /* webpackChunkName: "forgetCode" */ "../views/login/ForgetCode.vue"
            )
      },
      // 百万大学生重置密码
      {
        path: "millcode",
        name: "millcode",
        component: () =>
          import(
            /* webpackChunkName: "millcode" */ "../views/login/Millcode.vue"
            )
      },
      //注册
      {
        path: "register",
        name: "register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../views/register/Register.vue"
            )
      },
      // 个人中心
      {
        path: "personal",
        name: "personal",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../views/personal/Personal.vue"
            )
      },
      //个人信息
      {
        path: "personalInfo",
        name: "personalInfo",
        component: () =>
          import(
            /* webpackChunkName: "personalInfo" */ "../views/personal/PersonalInfo.vue"
            )
      },
      // 个人中心-区级优秀人才-查看
      {
        path: "yxrcCheck",
        name: "yxrcCheck",
        component: () =>
          import(
            /* webpackChunkName: "personalInfo" */ "../views/personal/yxrcCheck.vue"
            )
      },
      {
        path: "qingshan0",
        name: "qingshan0",
        component: () =>
          import(
            /* webpackChunkName: "qingshan" */ "../views/personal/qingshan.vue"
            )
      },
      {
        path: "jianghan",
        name: "jianghan",
        component: () =>
          import(
            /* webpackChunkName: "qingshan" */ "../views/personal/jianghan.vue"
            )
      },
      {
        path: "qingshan1",
        name: "qingshan1",
        component: () =>
          import(
            /* webpackChunkName: "qingshan" */ "../views/personal/qingshan1.vue"
            )
      },
      {
        path: "qingshan2",
        name: "qingshan2",
        component: () =>
          import(
            /* webpackChunkName: "qingshan" */ "../views/personal/qingshan2.vue"
            )
      },
      {
        path: "qingshan3",
        name: "qingshan3",
        component: () =>
          import(
            /* webpackChunkName: "qingshan" */ "../views/personal/qingshan3.vue"
            )
      },
      {
        path: "qingshan4",
        name: "qingshan4",
        component: () =>
          import(
            /* webpackChunkName: "qingshan" */ "../views/personal/qingshan4.vue"
            )
      },
      {
        path: "qingshan",
        name: "qingshan",
        component: () =>
          import(
            /* webpackChunkName: "qingshanText" */ "../views/personal/qingshanText.vue"
            )
      },
      {
        path: "bwdxsList",
        name: "bwdxsList",
        component: () =>
          import(
            /* webpackChunkName: "qingshanText" */ "../views/bwdxsList/bwdxsList.vue"
            )
      },
      {
        path: "bwdxs",
        name: "bwdxs",
        component: () =>
          import(
            /* webpackChunkName: "qingshanText" */ "../views/bwdxs/bwdxstext.vue"
            )
      },
      {
        path: "cityTalentReport",
        name: "cityTalentReport",
        component: () =>
          import(
            /* webpackChunkName: "cityTalentReport" */ "../views/personal/cityTalentReport.vue"
            )
      },
      //法人中心
      {
        path: "company",
        name: "company",
        component: () =>
          import(
            /* webpackChunkName: "company" */ "../views/personal/Company.vue"
            )
      },
      {
        path: "comInfo",
        name: "comInfo",
        component: () =>
          import(
            /* webpackChunkName: "comInfo" */ "../views/personal/ComInfo.vue"
            )
      },
      {
        path: "comList",
        name: "comList",
        component: () =>
          import(
            /* webpackChunkName: "comList" */ "../views/personal/ComList.vue"
            )
      },
      {
        path: "comTalent",
        name: "comTalent",
        component: () =>
          import(
            /* webpackChunkName: "comTalent" */ "../views/personal/ComTalent.vue"
            )
      },
      {
        path: "editInfo",
        name: "editInfo",
        component: () =>
          import(
            /* webpackChunkName: "editInfo" */ "../views/personal/EditInfo.vue"
            )
      },
      {
        path: "/read",
        name: "read",
        component: () =>
          import(/* webpackChunkName: "read" */ "../views/Read.vue")
      },
      {
        path: "/read1",
        name: "read1",
        component: () =>
          import(/* webpackChunkName: "read1" */ "../views/Read1.vue")
      },
      // 百万大学生
      {
        path: "/commonStu",
        name: "commonStu",
        component: () =>
          import(
            /* webpackChunkName: "commonStu" */ "@/views/milionStudent/CommonStu.vue"
            )
      },
      {
        path: "/houseChange",
        name: "houseChange",
        component: () =>
          import(
            /* webpackChunkName: "houseChange" */ "@/views/milionStudent/HouseChange.vue"
            )
      },
      {
        path: "/trainStu",
        name: "trainStu",
        component: () =>
          import(
            /* webpackChunkName: "trainStu" */ "@/views/milionStudent/TrainStu.vue"
            )
      },
      {
        path: "/workPosition",
        name: "workPosition",
        component: () =>
          import(
            /* webpackChunkName: "WorkPosition" */ "@/views/milionStudent/WorkPosition.vue"
            )
      },
      {
        path: "newIncrease",
        name: "newIncrease",
        component: () =>
          import(
            /* webpackChunkName: "newIncrease" */ "../views/personal/components/newIncrease.vue"
            )
      },
      {
        path: "back",
        name: "back",
        component: () =>
          import(/* webpackChunkName: "back" */ "../views/back.vue")
      },
      // 互动交流
      {
        path: "/community",
        name: "community",
        redirect: "/community/aboutUs",
        meta: {name: "互动交流"},
        component: () =>
          import(
            /* webpackChunkName: "community" */ "../views/community/community.vue"
            ),
        children: [
          {
            path: "/community/aboutUs",
            name: "aboutUs",
            meta: {name: "关于我们"},
            component: () =>
              import(
                /* webpackChunkName: "aboutUs" */ "../views/community/components/aboutUs.vue"
                )
          },
          {
            path: "/community/advice",
            name: "advice",
            meta: {name: "我要建议"},
            component: () =>
              import(
                /* webpackChunkName: "advice" */ "../views/community/components/advice.vue"
                )
          }
        ]
      },
      {
        path: "/milRead",
        name: "milRead",
        component: () =>
          import(/* webpackChunkName: "milRead" */ "../views/milRead.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  //创新类在线申报
  {
    path: "/ljCx",
    name: "innovate1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/talentReport/components/innovate1.vue")
  },
  // 创业类在线申报
  {
    path: "/ljCy",
    name: "business1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/talentReport/components/business1.vue")
  },
  // 优秀青年
  {
    path: "/yxqn",
    name: "yxqn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/talentReport/components/yxqn.vue")
  },
  // 非创投机构
  {
    path: "/unVenture",
    name: "unVenture",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/personal/components/unVenture1.vue")
  },
  // 创投机构

  {
    path: "/venture",
    name: "venture",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/personal/components/venture1.vue")
  },
  // 其他机构
  {
    path: "/other",
    name: "other",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/personal/components/other1.vue")
  }

];

// 解决路由点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
