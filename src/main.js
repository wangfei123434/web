import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 自己写的index.less
import "./assets/css/index.less";
// 阿里图标库
import "./assets/font/iconfont.css";
import store from "./store";
import Element from "element-ui";

import BaseTabs from './components/BaseTabs.vue'


// import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/element-variables.scss";
import "./utils/filter";
import 'quill/dist/quill.snow.css';
import BaseBreadcrumb from "@/components/BaseBreadcrumb";
import BaseTitle from "@/components/BaseTitle";


Vue.component('BaseTabs', BaseTabs)
Vue.component('BaseBreadcrumb', BaseBreadcrumb)
Vue.component('BaseTitle', BaseTitle)
Vue.use(Element);
Vue.config.productionTip = false;

// 刷新保存状态
if (sessionStorage.getItem("store")) {
  store.replaceState(
    Object.assign({}, store.state, JSON.parse(sessionStorage.getItem("store")))
  );
  sessionStorage.removeItem("store");
}

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});


// 监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
