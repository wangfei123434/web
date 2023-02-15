import request from "@/utils/request.js";

// 个人注册
export function regUser(data) {
  return request.post("/gateway/accountserver/login/registerPersonalUser", data);
}
// 发送验证码
export function telCode(data) {
    return request.get("/gateway/accountserver/login/sendMessage", data);
}
  //法人注册
  export function regUser2(data) {
    return request.post("/gateway/accountserver/login/registerEnterpriseUser", data);
  }
  //法人区域列表
  export function orgList() {
    return request.post("gateway/accountserver/login/org/list");
  }