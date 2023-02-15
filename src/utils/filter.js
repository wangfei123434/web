import Vue from "vue";
import moment from "moment";

// 处理时间
Vue.filter("formatDate", function(str) {
  return str && str != "Invalid Date" ? moment(str).format("YYYY-MM-DD ") : "";
});

Vue.filter("formatDate1", function(str) {
  if (str && str != "Invalid Date") {
    return moment(str).format("YYYY-MM-DD HH:mm:ss");
  } else {
    return "";
  }
});

Vue.filter("idToAreaName", function(id) {
  let result = "";
  switch (id) {
    case "9BE15342-BC28-45D4-A358-9C614349A03F":
      result = "江汉区";
      break;
    case "88FF32FB-8D80-483E-84AE-AF61FCB4EC6A":
      result = "江岸区";
      break;
    case "B16CA8CB-636C-4FF1-8211-EF6B51CDAA27":
      result = "硚口区";
      break;
    case "D1D5782A-6369-4766-AFCB-9F58668EBF43":
      result = "汉阳区";
      break;
    case "EB5285A8-C841-4F7C-A39F-3F31FD332C12":
      result = "武昌区";
      break;
    case "1F8C8A6C-0322-4210-90AB-534ED4668B8A":
      result = "洪山区";
      break;
    case "1988F7F5-4FE9-4992-9662-9F64344744B1":
      result = "青山区";
      break;
    case "5DA2D683-161D-4357-8ECB-C3519BD9E571":
      result = "东湖新技术开发区";
      break;
    case "58B27BE0-E1EE-4F0B-A070-634AB8931871":
      result = "江夏区";
      break;
    case "3E3ECD5E-9976-4A74-9BA1-73A1CF5D2624":
      result = "东西湖区";
      break;
    case "689E478A-F499-428E-9340-F18FD11199C3":
      result = "黄陂区";
      break;
    case "41050CBE-264E-4E56-9585-4F49F0D5CF5C":
      result = "蔡甸区";
      break;
    case "9A4FAA76-4C40-4CD0-A6B3-A8F3ECDF2DED":
      result = "新洲区";
      break;
    case "42403F88-4D60-4980-90C1-BC4BD124581C":
      result = "武汉经济技术开发区（汉南区）";
      break;
  }
  return result;
});

Vue.filter("idName", function(id) {
  let result = "";
  switch (id + "") {
    // case "0":
    //   result = "身份证";
    //   break;
    // case "1":
    //   result = "父母身份证";
    //   break;
    // case "2":
    //   result = "配偶身份证";
    //   break;
    // case "3":
    //   result = "子女身份证";
    //   break;
    case "4":
      result = "婚姻登记凭证";
      break;
    case "5":
      result = "学位证书";
      break;
    case "6":
      result = "个人就业合同";
      break;
    case "7":
      result = "法人营业执照";
      break;
    case "8":
      result = "其他";
      break;
    case "9":
      result = "户口簿";
      break;

    case "10":
      // result = "头像";
      result = "个人登记照";
      break;
    case "11":
      result = "学历证书/留学生服务中心认证报告";
      break;
    case "13":
      result = "本人身份证正反面";
      break;
    // case "15":
    //   result = "个人就业合同";
    //   break;
    case "16":
      result = "社保卡";
      break;
    // case "17":
    //   result = "个人登记照";
    //   break;

    case "18":
      result = "父亲身份证正反面";
      break;
    case "19":
      result = "母亲身份证正反面";
      break;
    case "20":
      result = "配偶身份证正反面";
      break;
    case "22":
      result = "股权证明";
      break;
  }
  return result;
});

// 法人中心 市级表格 申请类型
Vue.filter("applyTypeFR", function(s) {
  let res = "";
  switch (s) {
    case "cylj3":
      res = "产业领军人才3类";
      break;
    case "gcjj2":
      res = "钢城工匠2类";
      break;
    case "qs_excellentYouth_doctor":
      res = "优秀青年人才1类";
      break;
    case "qs_excellentYouth_recommend":
      res = "优秀青年人才2类";
      break;
    case "qs_excellentYouth_startup":
      res = "优秀青年人才3类";
      break;
    case "qs_leaders_innovation":
      res = "产业领军人才1类";
      break;
    case "qs_leaders_startup":
      res = "产业领军人才2类";
      break;
    case "qs_qingshanElite_craftsman":
      res = "钢城工匠1类";
      break;
    case "gcjj2":
      res = "钢城工匠2类";
      break;
    case "lj1":
      res = "产业领军创新类";
      break;
    case "lj2":
      res = "产业领军创业类";
      break;
    case "YXQNRC":
      res = "优秀青年人才";
      break;
    case "b3":
      res = "创投机构举(推)荐类";
      break;
    case "c":
      res = "用人单位举(推)荐类";
      break;
    case "zl":
      res = "战略科技人才";
      break;
    case "a1":
      res = "海内外知名高校博士类";
      break;
    case "a2":
      res = "获得省级以上荣誉优秀类";
      break;
    case "b1":
      res = "入选青年科技创新人才";
      break;
    case "b2":
      res = "获得市级以上创业赛事";
      break;
    default:
      res = s;
  }
  return res;
});
// 法人中心 市级表格 审核状态
Vue.filter("statusFR", function(s) {
  let res = "";
  switch (s) {
    case "":
      break;

    default:
      res = s;
      break;
  }
  return res;
});

//选择文件
Vue.filter("uploadOption", function(v) {
  let res = "";
  switch (v + "") {
    case "11":
      res = "学历证书/留学生服务中心认证报告";
      break;
    // case "17":
    //   res = "个人登记照";
    //   break;
    case "13":
      res = "本人身份证正反面";
      break;
    // case "14":
    //   res = "本人身份证反面";
    //   break;
    case "5":
      res = "学位证书";
      break;
    case "7":
      res = "法人营业执照";
      break;
    case "6":
      res = "个人就业合同";
      break;
    case "16":
      res = "社保卡";
      break;
  }
  return res;
});

// 个人中心 人才安居 在线选房 状态
Vue.filter('personSelectStatus', function(v) {
  let res =""
  switch (v) {
    case '0':
      res = "选房中"
      break;
    case '1':
      res = "选房成功"
      break;
    case '2':
      res = "选房失败"
      break;
    case '3':
      res = "过期失效"
      break;
    case '4':
      res = "选房成功超时未签约"
      break;
    case '5':
      res = "选房成功签约成功"
      break;
  }
  return res
})

// 青山区
Vue.filter('districtStatus', function(v) {
  let res
  switch (v) {
    case 0:
      res = "草稿"
      break;
    case 1:
      res = "已提交"
      break;
    case 3:
      res = "已通过"
      break;
    case 4:
      res = "未通过"
      break;
    case 1000:
      res = "待入选"
      break;
    case 1001:
      res = "未入选"
      break;
    case 1002:
      res = "已入选"
      break;
  }
  return res
})
Vue.filter('cityStatus', function(v) {
  let res
  switch (v) {
    case 0:
      res = "草稿"
      break;
    case 1:
      res = "区级审核中"
      break;
    case 2:
      res = "市级审核中"
      break;
    case 3:
      res = "已通过线上审核"
      break;
    case 4:
      res = "区级审核未通过"
      break;
    case 5:
      res = "市级审核未通过"
      break;
    case 6:
      res = "待区级受理"
      break;
    case 100:
      res = "自荐审核中"
      break;
    case 101:
      res = "单位审核中"
      break;
    case 102:
      res = "单位审核未通过"
      break;
    case 103:
      res = "区级不受理"
      break;
    case 104:
      res = "区级已退回"
      break;
  }
  return res
})
Vue.filter('cityStatus1', function(v) {
  let res
  switch (v) {
    case 0:
      res = "草稿"
      break;
    case 1:
        res = "区级审核中";
        break;
      case 2:
        res = "市级审核中";
        break;
      case 3:
        res = "市级通过";
        break;
      case 4:
        res = "区级不通过";
        break;
      case 5:
        res = "市级不通过";
        break;
      case 7:
        res = "市级退回";
        break;
      case 104:
        res = "区级退回";
        break;
  }
  return res
})
Vue.filter('districtStatusName', function(v) {
  let res
  // switch (parseInt(v)) {
  //   case 0:
  //     res = "草稿"
  //     break;
  //   case 1:
  //     res = "审核中"
  //     break;
  //   case 2:
  //     res = "已确认"
  //     break;
  //   case 3:
  //     res = "未通过"
  //     break;
  //   case 4:
  //     res = "已退回"
  //     break;
  // }
  switch (v) {
    case null:
      res = "未提交"
      break
    case '0':
      res = "已保存"
      break;
    case '1':
      res = "审核中"
      break;
    case '2':
      res = "通过"
      break;
    case '3':
      res = "不通过"
      break;
    case '4':
      res = "退回"
      break;
  }
  return res
})

Vue.filter('certificateTypeName', function(v) {
  let res
  switch (v) {
    case "0":
      res = "身份证"
      break;
    case "2":
      res = "港澳台通行证"
      break;
    case "3":
      res = "护照"
      break;
  }
  return res
})
//法人中心-举荐资格认定-举荐资格认定状态-字典
Vue.filter('cityRecommendStatusName', function(v) {
  let res
  switch (v) {
    case "0":
      res = "已保存"
      break;
    case "1":
      res = "审核中"
      break;
    case "3":
      res = "不通过"
      break;
    case "2":
      res = "通过"
      break;
    case "4":
        res = "退回"
        break;
  }
  return res
})
//法人中心-举荐资格认定-单位类型-字典
Vue.filter('cityRecommendTypeName', function(v) {
  let res
  switch (v) {
    case "1":
      res = "企事业单位"
      break;
    case "2":
      res = "国家重点实验室以及有国家重点实验室的高校院所"
      break;
    case "3":
      res = "湖北实验室"
      break;
    case "4":
      res = "高校科研院所"
      break;
  }
  return res
})
Vue.filter('cityRecommendTypeName1', function(v) {
  let res
  switch (v) {
    case "1":
      res = "创投机构推荐"
      break;
    case "2":
      res = "非创投机构推荐"
      break;
  }
  return res
})