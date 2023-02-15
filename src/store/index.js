import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalInfo: null, // 个人中心 personalData接口获取的 信息

    userInfo: null, // 登入页面 用户信息

    qingshan: null,

    componyInfo: null, // 法人中心 公司信息
  },
  mutations: {
    setPersonalInfo(state, val) {
      state.personalInfo = val;
    },
    setUserInfo(state, val) {
      state.userInfo = val;
    },
    setQingshan(state, val) {
      state.qingshan = val;
    },
    setComponyInfo(state, val) {
      state.componyInfo = val;
    },
  },
  actions: {},
  modules: {}
});
