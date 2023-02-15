import request from "@/utils/request.js";

// export function articleList(data) {
//   return request({
//     url: "/cms/article/getArticleList",
//     method: "get",
//     data: data
//   });
// }
export function articleList(data) {
  return request.get("/gateway/cmsserver/cms/article/getArticleList", data);
}
