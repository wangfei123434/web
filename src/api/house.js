import request from "@/utils/request.js";

// 小区列表（分散式）
export function communiteList(data) {
  return request.post(
    "/gateway/rentserver/rent/frontend/getCommunityList",
    data
  );
}

// 房源列表 3
export function houseList(data) {
  return request.post("/gateway/rentserver/rent/frontend/getHouseList", data);
}

//项目列表（集中式）
export function projectList(data) {
  return request.post("/gateway/rentserver/rent/frontend/getProjectList", data);
}

// 房源详情 4
export function houseDetail(data) {
  return request.post("/gateway/rentserver/rent/frontend/getHouseDetail", data);
}

// 收藏
export function collectionOperate(data) {
  return request.post(
    "/gateway/rentserver/rent/frontend/collectionOperate",
    data
  );
}
//收藏列表
export function collectionHouseList(data) {
  return request.post(
    "/gateway/rentserver/rent/frontend/collectionHouseList",
    data
  );
}

// 提交选房

export function selectHouse(data) {
  return request.post("/gateway/rentserver/rent/frontend/selectHouse", data);
}

// 地图在线选房，获取房源
export function countHouseForMap(data) {
  return request.post("gateway/rentserver/rent/frontend/countHouse5", data);
}
export function countHouseForMap3(data) {
  return request.post("gateway/rentserver/rent/frontend/countHouse3", data);
}
export function countHouseForMapOld(data) {
  return request.post("gateway/rentserver/rent/frontend/countHouse", data);
}
export function getStudentStatus(data) {
  return request.get(
    "/gateway/rentserver/apartmentLeaseApply/getStudentStatus",
    data
  );
}
export function getStudentStatus2(data) {
  return request.get(
    "/gateway/rentserver/apartmentLeaseApply/getStudentStatus2",
    data
  );
}

// 租房信息保存
export function apartmentLeaseApplySave(data) {
  return request.post("/gateway/rentserver/apartmentLeaseApply/save", data);
}
