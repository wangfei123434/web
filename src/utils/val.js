export var checkName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("姓名不能为空"));
  } else {
    callback();
  }
};
export var checkIdNum = (rule, value, callback) => {
  if (value === "") {
    return callback(new Error("身份证号不能为空"));
  } else {
    callback();
  }
};
export var checkTel = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("手机号不能为空"));
  } else {
    callback();
  }
};
export var checkCom = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("单位不能为空"));
  } else {
    callback();
  }
};
export var checkSocaial = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("统一社会信用代码"));
  } else {
    callback();
  }
};
export var checkPlace = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("单位注册地址不能为空"));
  } else {
    callback();
  }
};
export var checkCode = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("密码不能为空"));
  } else {
    callback();
  }
};

// 验证密码

const passReg = /^[_a-zA-Z0-9]{8,16}$/;
export var validatePass = function(obj) {
  return (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请输入密码"));
    } else if (!passReg.test(value)) {
      callback(new Error("密码是8-16位的英文、数字、下划线！"));
    } else {
      if (obj.regForm.pass !== "") {
        obj.$refs.regForm.validateField("checkPass");
      }
      callback();
    }
  };
};
// 验证确认新密码
export var validatePass2 = function(obj) {
  return (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请再次输入密码"));
    } else if (!passReg.test(value)) {
      callback(new Error("密码是8-16位的英文、数字、下划线！"));
    } else if (value !== obj.regForm.checkPass) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  };
};
