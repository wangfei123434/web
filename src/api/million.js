import request from "@/utils/request.js";

// 创业工位
export function workPosition(data) {
  return request.get(
    "/gateway/rentserver/businessLocationApply/frontend/getBy",
    data
  );
  // return request.get("/gateway/rentserver/businessLocationApply/getBy", data);
}
// 创业工位保存
export function workSave(data) {
  return request.post(
    "/gateway/rentserver/businessLocationApply/frontend/save",
    data
  );
}
//实习见习
export function trainStu(data) {
  return request.get("/gateway/rentserver/jobApply/frontend/get", data);
  // return request.get("/gateway/rentserver/jobApply/getById", data);
  // return request.get("/gateway/rentserver/jobApply/getBy", data);
}
// 实习见习保存

// export function trainSave(data) {
//   return request.post({
//     url: "/gateway/rentserver/jobApply/frontend/save",
//     headers: { "Content-Type": "multipart/form-data" }
//     // query: data
//   });
// }

export function trainSave(data) {
  return request.post("/gateway/rentserver/jobApply/frontend/save", data, {
    "Content-Type": "multipart/form-data"
  });
}

// 实习见习
// 下载
export function downloadFile(data) {
  return request.post(
    "/gateway/rentserver/fileStore/backend/downloadFile",
    data
  );
}
export function getArea(data) {
  return request.get(
    "/gateway/rentserver/jobApply/frontend/getArea",
    data
  );
}
export function getAreaCompany(data) {
  return request.get(
    "/gateway/rentserver/jobApply/frontend/getAreaCompany",
    data
  );
}
export function getCompanyPosition(data) {
  return request.get(
    "/gateway/rentserver/jobApply/frontend/getCompanyPosition",
    data
  );
}


// ?id=12ac9569-41d1-454e-b4d1-cd24e4caec42
// 第二个下拉框
export function stationAddress(data) {
  return request.get("/gateway/rentserver/station/stationAddress", data);
}

// 人才公寓租赁申请变更
export function byId(data) {
  return request.get(
    "/gateway/rentserver/apartmentLeaseApplyChange/getById",
    data
  );
}
// 人才公寓租赁申请变更保存

export function changeSave(data) {
  return request.post(
    "/gateway/rentserver/apartmentLeaseApplyChange/save",
    data
  );
}
