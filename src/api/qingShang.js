// 青山-举荐
import request from "@/utils/request.js";

export function getTalentId(data) {
    return request.get(
      "/gateway/talentserver/talentCheck/frontend/check",
      data
    );
  }

export function qingShanTextArticle(data) {
  return request.get(
    "/gateway/cmsserver/cms/article/ceff9b80-bf2d-4690-8821-fc40b5fb5817",
    data
  );
}
export function jianghanTextArticle(data) {
  return request.get(
    "/gateway/cmsserver/cms/article/407fb349-8d6a-4a16-bb5f-f59ab7eba2c8",
    data
  );
}

export function bwdxsTextArticle (data) {
  return request.get("/gateway/cmsserver/cms/article/"+data)
}

export function getCompany(data) {
  return request.get(
    "/gateway/accountserver/personalCenter/getCompany",
    data
  );
}
