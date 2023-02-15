import request from "@/utils/request.js";

export function getArticle(data) {
  return request.get("/gateway/cmsserver/cms/article/"+data, );
}

export function cityCheck(data) {
  return request.get("/gateway/talentserver/talentCheck/frontend/cityCheck", data);
}