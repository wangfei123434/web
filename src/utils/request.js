import axios from "axios";
import { Notification, MessageBox, Message, Loading } from "element-ui";
import { getToken, getId } from "@/utils/auth";
import store from "../store";
import config from "../assets/global/config.js";
import { EventBus } from '@/event-bus.js';

// axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例;
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: "http://10.192.54.7:4105", // 生产库******
  // baseURL: "http://58.49.165.170:8084",

  // baseURL: "http://172.16.200.36:4105",
  // baseURL: "http://172.16.200.254:4105",
  // baseURL: "http://172.16.200.191:4105",
  // baseURL: "http://172.16.200.101:4105",

  // baseURL: "http://58.49.165.170:8084", // 正式使用的ip
  // baseURL: "http://10.8.0.242:4105", // test

  baseURL: '/',

  // 超时
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});
// axios.defaults.baseURL = "http://10.192.54.7:4105";
// axios.defaults.baseURL = "http://172.16.200.254:4105";
// axios.defaults.baseURL = "http://172.16.200.101:4105"; // 姜依德

// axios.defaults.baseURL = "http://172.16.200.36:4105"; // 姜智舟
// axios.defaults.baseURL = "http://172.16.200.191:4105"; // 万钰

// axios.defaults.baseURL = "http://58.49.165.170:8084"; // 正式使用的ip

// axios.defaults.baseURL = config.serve.url; // 正式使用的ip
// request拦截器;
service.interceptors.request.use(
  config => {
    // console.log({config})
    if (getToken()) {
      config.headers.Authorization = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    getId() && (config.headers.userId = getId());
    return config;
  }
  //   error => {
  //     console.log(error);
  //     Promise.reject(error);
  //   }
);

// 响应拦截器
service.interceptors.response.use(
  res => {
    const { code, info, msg } = res.data;
    const { url } = res.config;
    // 所有接口401 token失效
    if(code && code == 401) {
      Message.error(info || msg);
      window.userInvalid = true
      setTimeout(() => {
        EventBus.$emit('userInvalid')
      }, 1000)
      return res
    }

    // 某些接口有自己的提示框，不需要拦截器的默认错误提示
    if (url == "/gateway/rentserver/apartmentLeaseApply/getStudentStatus") {
      return res;
    }
    if (url == "/gateway/rentserver/apartmentLeaseApply/getStudentStatus2") {
      return res;
    }
    // 登入接口。如果code为1005
    if (url == "/gateway/accountserver/login/login" && code == 1005) {
      return res;
    }
    // 个人中心 - 收藏
    if (
      url == "/gateway/rentserver/rent/frontend/collectionHouseList" &&
      code == 204
    ) {
      return res;
    }

    if (code || info) {
      if (code != 200 && code != 0) {
        Message.error(info || msg);
      }
    }
    return res;
  },
  error => {
    let data = error.response.data;
    if (data && data.code) {
      Message.error(data.msg);
    }
    let err = data.error;
    err && Message.error(err);
    return Promise.reject(error.response);
  }
);

export default {
  get(url, params, options={}) {
    const loading = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    return new Promise((resolve, reject) => {
      service
        .get(url, { params, ...options })
        .then(res => {
          if(res.data instanceof Blob) {
            loading.close();
            resolve({
              data: res.data,
              fileName: decodeURI(res.headers['content-disposition'].split(';')[1].split('filename=')[1])
            });
          }else{
            loading.close();
            resolve(res.data);
          }
        })
        .catch(err => {
          loading.close();
          reject(err);
        });
    });
  },
  post(url, query) {
    const loading = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    return new Promise((resolve, reject) => {
      service
        .post(url, query)
        .then(res => {
          loading.close();
          resolve(res.data);
        })
        .catch(e => {
          loading.close();
          reject(e);
        });
    });
  }
};
