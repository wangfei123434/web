import request from "@/utils/request.js";

// // 轮播图
// export function bannerImg(data) {
//   return request.post("/systemserver/system/banner/status", data);
// }

// 首页列表数据
export function homeData(data) {
  return request.post("/gateway/cmsserver/cms/article/getAll", data);
}

// // 列表数据id
// export function idData(data) {
//   return request.post(
//     "/cmsserver/cms/article/062e1c76-0131-11ea-bb45-e82a444382df",
//     data
//   );
// }

// // 首页人才服务轮播
// export function talentData(data) {
//   return request.post(
//     "/cmsserver/cms/article/ab6a2a70-e042-48d2-96eb-32561ec9eb93",
//     data
//   );
// }

export function controller(data) {
  return request.post("/gateway/cmsserver/frontend/comment/save", data);
}
