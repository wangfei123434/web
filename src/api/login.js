import request from "@/utils/request.js";

// 图片验证吗
export function pictureCode(data) {
  return request.get("/gateway/accountserver/login/getPictureCode", data);
}
// 登录
export function loginCode(data) {
  return request.post("/gateway/accountserver/login/login", data);
}
//忘记密码
export function modifyPassword(data) {
  return request.post("/gateway/accountserver/login/modifyPassword", data);
}
//百万大学生
export function millionStudednt(data) {
  return request.post(
    "/gateway/accountserver/login/modifyPasswordStudednt",
    data
  );
}
