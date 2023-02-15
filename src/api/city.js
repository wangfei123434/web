import request from "@/utils/request.js";

// 首页列表数据
export function citySave(data) {
  return request.post("/gateway/talentserver/frontend/apply/cityTalent/save", data);
}

// 入口产业领军保存

export function citySelfSave(data) {
  return request.post("/gateway/talentserver/frontend/apply/cityTalent/selfsave", data);
}
