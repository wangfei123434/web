import request from "@/utils/request.js";


// 个人中心列表
export function personalData(data) {
  return request.get("/gateway/accountserver/personalCenter/list", data);
}
// 个人信息列表
export function personalInfo(data) {
  return request.get("/gateway/accountserver/personalCenter/detail", data);
}

// 在线申报列表提交接口
// export function reportOnline(data) {
//   return request.post("/gateway/rentserver/apartmentLeaseApply/save", data);
// }

// export function repOnline(data) {
//   return request({
//     methods: "post",
//     url: "/gateway/rentserver/apartmentLeaseApply/save",
//     header: { "Content-Type": "multipart/form-data" },
//     data: data
//   });
// }

// 个人中心提交

export function infoSave(data) {
  return request.post("/gateway/rentserver/infoSave", data);
}

// 法人中心
export function companyData(data) {
  return request.get(
    // "/gateway/accountserver/personalCenter/enterprise?userId=cf041135-64c5-439f-a94d-f95fb0b624cb",
    "/gateway/accountserver/personalCenter/enterprise",
    data
  );
}

//三级联动(第一级)
export function friSubject(data) {
  return request.get(
    "/gateway/rentserver/frontend/Subject/listRootSubject2",
    data
  );
}

//三级联动
export function thrSubject(data) {
  return request.get(
    "/gateway/rentserver/frontend/Subject/listSubjectByParentName2",
    data
  );
}

// 我的收藏
export function collectionOperate(data) {
  return request.post(
    "/gateway/rentserver/rent/frontend/collectionHouseList",
    data
  );
}
//我的选房
export function selectHouseList(data) {
  return request.post(
    "/gateway/rentserver/rent/frontend/selectHouseList",
    data
  );
}

// comList接口
export function comListId(data) {
  return request.get(
    "/gateway/accountserver/assign/getAssginsByCompanyIdAndType",
    data
  );
}

// 新增接口

export function addAssgin(data) {
  return request.post("/gateway/accountserver/assign/addAssgin", data);
}

// comlist删除

export function deleteAssgin(data) {
  return request.get("/gateway/accountserver/assign/deleteAssgin", data);
}
export function deleteById(data) {
  return request.get("/gateway/accountserver/assign/deleteById", data);
}
// return request.get("/gateway/accountserver/assign/getAssginsByCompanyIdAndType", data);
// }

// 个人中心， 法人中心 表格中 反馈信息
export function getTalentAuditLog(id) {
  return request.get(`/gateway/talentserver/auditLog/getTalentAuditLog/` + id);
}
export function getTalentAuditLog1(id) {
  return request.get(`/gateway/talentserver/auditLog/getEnterpriseAuditLog/${id}/1`);
}

//法人中心编辑企业信息
export function editCompany(data) {
  return request.get(
    "/gateway/accountserver/personalCenter/get/enterprise",
    data
  );
}
//企业人才统计
export function getByCompanyId(data) {
  return request.get(
    "/gateway/talentserver/enterpriseTalentStatistics/frontend/getByCompanyId",
    data
  );
}
// 删除
export function deleteTalentStatistics(data) {
  return request.get(
    "/gateway//talentserver/talent/statistic/frontend/deleteTalentStatistics",
    data
  );
}
export function saveEditCompany(data) {
  // 公司基本信息
  return request.post(
    "/gateway/accountserver/personalCenter/save/enterprise",
    data
  );
}
export function saveEditCompany1(data) {
  // 公司基本信息
  return request.post(
    "/gateway/accountserver/personalCenter/saveSelf/enterprise",
    data
  );
}
// 法人中心 区级企业认定 企业信息
export function getEnterpriseAttachment(data) {
  return request.get(
    `/gateway/talentserver/frontend/enterpriseAttachment/getById`,
    data
  );
}
// 法人中心-市级企业认定 附件信息
export function getEnterpriseAttachmentCity(data) {
  return request.get(
    `/gateway/talentserver/frontend/enterpriseAttachment/cityGetById`,
    data
  );
}
export function saveEnterpriseAttachment(data) {
  // 附件
  return request.post(
    `/gateway/talentserver/frontend/enterpriseAttachment/upload`,
    data
  );
}
//搜索框
export function likeName(data) {
  return request.get("/gateway/accountserver/assign/likeName", data);
}
// 企业人才统计表格
export function talentStatisticses(data) {
  return request.get(
    "/gateway/talentserver/talent/statistic/getTalentStatisticses",
    data
  );
}
// 企业人才统计表格编辑新增
export function savePersonStatistics(data) {
  return request.post(
    "/gateway/talentserver/talent/statistic/savePersonStatistics",
    data
  );
}


// 个人信息提交后再在租房表单中附件下载
export function attachmentDownLoad(id) {
  return request.get("/gateway/rentserver/fileStore/downloadFile/" + id)
}

export function getDept(data) {
  return request.get("/gateway/accountserver/personalCenter/getDept", data)
}

// 青山人才
// 获取人才信息
export function getTalentData(url) {
  return request.get(url)
}
// 产业领军人才 保存提交
export function saveCYLJ(data) {
  return request.post("/gateway/talentserver/frontend/apply/qs_leaders_innovation/save", data)
}
// 优秀青年人才 保存提交
export function saveYXQNRC(data) {
  return request.post("/gateway/talentserver/frontend/apply/qs_excellentYouth/save", data)
}
// 钢城工匠人才1类 保存提交
export function saveGTGJ(data) {
  return request.post("/gateway/talentserver/frontend/apply/qs_qingshanElite_craftsman/save", data)
}
//下载
export function talentDown(data) {
  // return request.get('/gateway/talentserver/talent/frontend/download', data, { responseType: 'blob'})
  // return request.get(`/gateway/talentserver/talent/downloadPDF/${data.id}`, null, { responseType: 'blob' })
  return request.get(`/gateway/talentserver/talent/downloadFull/${data.id}/${data.type}`, null, { responseType: 'blob' })
}

// 人才安居
export function getOneById(data) {
  return request.get('/gateway/rentserver/apartmentLeaseApply/getOneById', data)
}

// 个人信息
export function uploadStudentAvatar(data) {
  return request.post('/gateway/rentserver/fileStore/uploadStudentAvatar', data)
}
export function delFileStore(id) {
  return request.get('/gateway/rentserver/fileStore/delete/' + id)
}

// 大学生创业工位
export function workPosition(data) {
  return request.get(
    "/gateway/rentserver/businessLocationApply/frontend/getByUserId",
    data
  );
}
// 大学生实习（训）见习岗位
export function trainStu(data) {
  return request.get("/gateway/rentserver/jobApply/frontend/getByUserId", data);
}


// 2022-05-24  新增申报记录分页修改
// 市级
export function getDeclarationRecordData1(data) {
  return request.get(
    "/gateway/talentserver/frontend/apply/cityTalent/companyName",
    data
  );
}
// 区级
export function getDeclarationRecordData2(data) {
  return request.get(
    "/gateway/talentserver/frontend/apply/cityTalent/companyNamePage",
    data
  );
}


// 法人中心
// 校验
export function getCheckUserId(data) {
  return request.get(
    "/gateway/accountserver/personalCenter/getEnterpriseCheck",
    data
  );
}
// 青山英才列表
export function getQingShanList(data) {
  return request.get(
    "/gateway/accountserver/personalCenter/get/enterprise",
    data
  );
}
// 详情
export function getQingShanDetail(data) {
  return request.get(
    "/gateway/accountserver/personalCenter/get/detail",
    data
  );
}
