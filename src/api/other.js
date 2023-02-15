import request from "@/utils/request.js";

export function getArticle(url) {
    return request.get("/gateway/cmsserver/cms/article/"+url);
}

export function getAllArticle(data) {
    return request.get("/gateway/cmsserver/talent/urlConfig/frontend/getAllArticle1", data)
}