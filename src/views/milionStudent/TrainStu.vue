<template>
  <div class="content-wrapper">
    <div class="top-title">
      <div class="title-left">实习见习申请</div>
    </div>
    <div class="">
      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        class="Form1"
      >
        <tbody>
          <tr>
            <td rowspan="3">申请单位/岗位：</td>
            <td colspan="3">
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit1"
                @change="getUnit2List(false)"
              >
                <el-option v-for="(o, i) in unit1List" :key="'1'+i" :value="o.dictName" :label="o.dictName"></el-option>
              </el-select>
              —
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit11"
                @change="getUnit3List(false)"
              >
                <el-option v-for="(o, i) in unit2List" :key="'12'+i" :value="o.name" :label="o.name"></el-option>
              </el-select>
              —
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit12"
              >
                <el-option v-for="(o, i) in unit3List" :key="'13'+i" :value="o.name" :label="o.name"></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit2"
                @change="getUnit21List(false)"
              >
                <el-option v-for="(o, i) in unit1List" :key="'2'+i" :value="o.dictName" :label="o.dictName"></el-option>
              </el-select>
              —
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit21"
                @change="getUnit31List(false)"
              >
                <el-option v-for="(o, i) in unit21List" :key="'22'+i" :value="o.name" :label="o.name"></el-option>
              </el-select>
              —
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit22"
              >
                <el-option v-for="(o, i) in unit31List" :key="'23'+i" :value="o.name" :label="o.name"></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit3"
                @change="getUnit22List(false)"
              >
                <el-option v-for="(o, i) in unit1List" :key="'3'+i" :value="o.dictName" :label="o.dictName"></el-option>
              </el-select>
              —
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit31"
                @change="getUnit32List(false)"
              >
                <el-option v-for="(o, i) in unit22List" :key="'32'+i" :value="o.name" :label="o.name"></el-option>
              </el-select>
              —
              <el-select
                class=""
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
                v-model="obj.unit32"
              >
                <el-option v-for="(o, i) in unit32List" :key="'33'+i" :value="o.name" :label="o.name"></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>姓名：</td>
            <td>
              <el-input
                v-model="obj.name"
                disabled
              ></el-input>
              <!-- <span>{{ obj.name }}</span> -->
            </td>
            <td>身份证号：</td>
            <td>
              <el-input
                v-model="obj.idCard"
                disabled
              ></el-input>

              <!-- <span>{{ obj.idCard }}</span> -->
            </td>
          </tr>
          <tr>
            <td>性别：</td>
            <td>
              <!-- <el-input
                v-model="obj.gender"
                :disabled="status == '未受理' &&status=='已受理'? true : false"
              ></el-input> -->

              <span>{{ obj.gender == '1' ? '男' : '女' }}</span>

              <!-- <el-radio-group
                style="margin-top:10px"
                v-model="obj.gender"
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
              >
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
              </el-radio-group> -->
            </td>
            <td>民族：</td>
            <td>
              <el-input
                v-model="obj.nation"
                disabled
              ></el-input>

              <!-- <span>{{ obj.nation }}</span> -->
            </td>
          </tr>
          <tr>
            <td>联系方式：</td>
            <td>
              <el-input
                v-model="obj.phoneNumber"
                disabled
              ></el-input>

              <!-- <span>{{ obj.phoneNumber }}</span> -->
            </td>
            <td>电子邮箱：</td>
            <td>
              <el-input
                v-model="obj.email"
                disabled
              ></el-input>

              <!-- <span>{{ obj.email }}</span> -->
            </td>
          </tr>
          <tr>
            <td>毕业（在读）院校：</td>
            <td colspan="3">
              <el-input
                v-model="obj.school"
                disabled
              ></el-input>

              <!-- <span>{{ obj.school }}</span> -->
            </td>
          </tr>

          <tr>
            <td>专业：</td>
            <td>
              <el-input
                v-model="obj.specality"
                disabled
              ></el-input>

              <!-- <span>{{ obj.specality }}</span> -->
            </td>
            <td>最高学历：</td>
            <td>
              <el-select
                v-model="obj.education"
                disabled
              >
                <el-option value="">—请选择—</el-option>
                <el-option
                  value="BAA102522D404273A34CEAF26478CAF2"
                  label="大专及以下"
                ></el-option>
                <el-option
                  value="6F3A155C4A25410FBD13A47B2EBB5285"
                  label="本科"
                ></el-option>
                <el-option
                  value="3012A9BC0C8843CB9E74A5D5A5EAE70B"
                  label="硕士研究生"
                ></el-option>
                <el-option
                  value="79C986D1-8811-45FD-A320-A10108B1FCE6"
                  label="博士研究生"
                ></el-option>
              </el-select>
              <!-- <span>{{ obj.education }}</span> -->
              <!-- <el-input type="hidden" /> -->
            </td>
          </tr>
          <tr>
            <td>毕业证号/学籍号：</td>
            <td>
              <el-input
                v-model="obj.educationCard"
                disabled
              ></el-input>

              <!-- <span>{{ obj.educationCard }}</span> -->
            </td>
            <td>毕业时间：</td>
            <td>
              <el-date-picker
                v-model="obj.graduateDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                disabled
              >
              </el-date-picker>
              <!-- <span>{{ obj.graduateDate | formatDate }}</span> -->
            </td>
          </tr>
          <tr>
            <td>申请类别：</td>
            <td colspan="3">
              <label class="">
                <table border="0" style="width:100%;">
                  <tbody>
                    <tr>
                      <el-radio-group
                        style="margin-top:10px"
                        v-model="obj.jobType"
                        :disabled="
                            status == '未受理' || status == '已受理' ? true : false
                          "
                      >
                        <el-radio label="1">见习</el-radio>
                        <el-radio label="2">实习（训）</el-radio>
                      </el-radio-group>
                    </tr>
                  </tbody>
                </table>
              </label>
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <el-select
                placeholder="请选择"
                v-model="personalPro"
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
              >
                <el-option value="个人简历"> </el-option>
              </el-select>
            </td>

            <td colspan="3">
              <el-upload
                class="upload-demo"
                ref="upload"
                action=""
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="handleChange"
                :disabled="
                  status == '未受理' || status == '已受理' ? true : false
                "
              >
                <el-button
                  slot="trigger"
                  size="small"
                  type="primary"
                  :disabled="
                    status == '未受理' || status == '已受理' ? true : false
                  "
                  >选取文件</el-button
                >

                <!-- <span slot="tip" class="el-upload__tip">
                  未选择任何文件
                </span>
                <el-button
                  style="margin-left: 10px;"
                  size="small"
                  type="success"
                  @click="submitUpload"
                  :disabled="status == '未受理' &&status=='已受理'? true : false"
                  >上传</el-button
                > -->
              </el-upload>
            </td>
            <!-- <td colspan="1">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
             
              </el-upload>
            </td> -->
          </tr>
          <tr>
            <td>文件</td>
            <td>分类</td>
            <td>上传时间</td>
            <td>操作</td>
          </tr>
          <tr v-for="(v, i) in file1" :key="i">
            <td>{{ v.name }}</td>
            <td>{{ personalPro }}</td>
            <td>{{ v.time | formatDate }}</td>
            <td v-if="status == '已受理'" @click="getDownloadFile(v)" style="cursor:pointer;">
              下载
            </td>
            <td @click="delFile(v)" v-else  style="cursor:pointer;">
              删除
            </td>
          </tr>
        </tbody>
      </table>

      <button
        @click="saveFile()"
        v-show="status == '已受理' || status == '未受理' ? false : true"
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px"
      >
        保存
      </button>
      <button
        @click="submitFile()"
        v-show="status == '已受理' || status == '未受理' ? false : true"
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px;margin-left:20px"
      >
        提交
      </button>
      <button
        v-show="status == '未受理' ? true : false"
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px;margin-left:20px"
      >
        审核中
      </button>
      <button
        v-show="status == '已受理' ? true : false"
        style="width:100px;height:30px;border-radius:5px;backgroundColor:#3cbad0;border:none;color:white;margin-top:20px;margin-bottom:50px;margin-left:20px"
      >
        已受理
      </button>
    </div>
  </div>
</template>

<script>
import { trainStu, trainSave, downloadFile, getArea, getAreaCompany, getCompanyPosition } from "@/api/million";
import { mapState } from "vuex";
import moment from "moment";
import { getId } from "../../utils/auth";
export default {
  data() {
    return {
      unit1List: [],
      unit2List: [],
      unit3List: [],

      unit21List: [],
      unit31List: [],

      unit22List: [],
      unit32List: [],
      obj: {
        //  单位
        unit1: "",
        unit11: "",
        unit12: "",

        unit2: "",
        unit21: "",
        unit22: "",

        unit3: "",
        unit31: "",
        unit32: "",

        job1: "",
        job2: "",
        job3: "",
        unit1Opinion: "",
        unit2Opinion: "",
        unti3Opinion: "",

        name: "",
        idCard: "",
        gender: "",
        nation: "",
        phoneNumber: "",
        email: "",
        school: "",
        specality: "",
        education: "",
        educationCard: "",
        graduateDate: "",
        jobType: "",
        id: ""
        //  地址
      },
      // 下拉框
      personalPro: "个人简历",
      // 文件
      file: null,
      status: "",
      deleteArr: [],

      id: ''
    };
  },
  mounted() {
    this.getTrainStu();
    

    
  },

  computed: {
    ...mapState(["userInfo"]),
    ...mapState(["personalInfo"]),
    education1() {
      let result = "";
      switch (this.obj.education) {
        case "BAA102522D404273A34CEAF26478CAF2":
          result = "大专及以下";
          break;
        case "6F3A155C4A25410FBD13A47B2EBB5285":
          result = "本科";
          break;
        case "3012A9BC0C8843CB9E74A5D5A5EAE70B":
          result = "硕士研究生";
          break;
        case "79C986D1-8811-45FD-A320-A10108B1FCE6":
          result = "博士研究生";
          break;
      }

      return result;
    },
    file1() {
      if(this.file) {
        return [this.file]
      }
      return null
    }
  },
  methods: {
    getUnit2List(flag, cd) {
      let a = this.unit1List.find(e => e.dictName == this.obj.unit1)
      getAreaCompany({
        areaId: a.id
      }).then(res => {
        if(res && res.code == 200) {
          this.unit2List = res.data

          if(!flag) {
            this.obj.unit11 = ""
            this.obj.unit12 = ""
          }

          cd?.()
        }
      })
    },
    getUnit21List(flag, cd) {
      let a = this.unit1List.find(e => e.dictName == this.obj.unit2)
      getAreaCompany({
        areaId: a.id
      }).then(res => {
        if(res && res.code == 200) {
          this.unit21List = res.data

          if(!flag) {
            this.obj.unit21 = ""
            this.obj.unit22 = ""
          }

          cd?.()
        }
      })
    },
    getUnit22List(flag, cd) {
      let a = this.unit1List.find(e => e.dictName == this.obj.unit3)
      getAreaCompany({
        areaId: a.id
      }).then(res => {
        if(res && res.code == 200) {
          this.unit22List = res.data

          if(!flag) {
            this.obj.unit31 = ""
            this.obj.unit32 = ""
          }

          cd?.()
        }
      })
    },
    getUnit3List(flag) {
      let a = this.unit2List.find(e => e.name == this.obj.unit11)
      getCompanyPosition({
        companyId: a.id
      }).then(res => {
        if(res && res.code == 200) {
          this.unit3List = res.data

          if(!flag) {
            this.obj.unit12 = ""
          }
        }
      })
    },
    getUnit31List(flag) {
      let a = this.unit21List.find(e => e.name == this.obj.unit21)
      getCompanyPosition({
        companyId: a.id
      }).then(res => {
        if(res && res.code == 200) {
          this.unit31List = res.data

          if(!flag) {
            this.obj.unit22 = ""
          }
        }
      })
    },
    getUnit32List(flag) {
      let a = this.unit22List.find(e => e.name == this.obj.unit31)
      getCompanyPosition({
        companyId: a.id
      }).then(res => {
        if(res && res.code == 200) {
          this.unit32List = res.data

          if(!flag) {
            this.obj.unit32 = ""
          }
        }
      })
    },
    async getTrainStu() {
      const { data } = await trainStu({
        id: getId()
      });
      let d = Object.assign({}, data)
      delete d.unit1
      delete d.unit2
      delete d.unit3
      this.obj = d;

      this.obj.gender = data.gender + "";
      
      if (!data.id) {
        this.obj.id = "";
      }
      if (!data.jobType) {
        this.$set(this.obj, 'jobType', '1')
      }else{
        this.$set(this.obj, 'jobType', data.jobType + '')
      }

      this.$set(this.obj, 'unit1', data.region1)
      this.$set(this.obj, 'unit11', data.unit1)
      this.$set(this.obj, 'unit12', data.job1)

      

      this.$set(this.obj, 'unit2', data.region2)
      this.$set(this.obj, 'unit21', data.unit2)
      this.$set(this.obj, 'unit22', data.job2)

      this.$set(this.obj, 'unit3', data.region3)
      this.$set(this.obj, 'unit31', data.unit3)
      this.$set(this.obj, 'unit32', data.job3)

      this.status = data.status; //禁用
      this.id = data.id; //禁用

      this.file = null
      this.deleteArr = []
      if(data.fileStore) {
        this.file = {
          file: data.fileStore.file, // 目前接口还没有file对象，
          name: data.fileStore.fileName,
          time: data.fileStore.createDate,
          // isPerson,
          id: data.fileStore.id,
          filePath: data.fileStore.filePath
        };
      }

      getArea().then(res => {
      if(res && res.code == 200) {
          this.unit1List = res.data

          if(this.obj.unit1) {
            this.getUnit2List(true, () => {
              if(this.obj.unit11) {
                this.getUnit3List(true)
              }
            })
          }

          if(this.obj.unit2) {
            this.getUnit21List(true, () => {
              if(this.obj.unit21) {
                this.getUnit31List(true)
              }
            })
          }

          if(this.obj.unit3) {
            this.getUnit22List(true, () => {
              if(this.obj.unit21) {
                this.getUnit32List(true)
              }
            })
          }
        }
      })
    },
    // getDownloadFile(uid) {
    //   downloadFile({ id: uid }).then(res => {
    //     console.log(res, 666666666);
    //   });
    // },
    getDownloadFile({ file, name, filePath }) {
      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      // image.setAttribute("crossOrigin",'Anonymous');
      image.onload = function(e) {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png");
        let a = document.createElement("a");
        let event = new MouseEvent("click");
        if (name) {
          a.download = name;
        } else {
          a.download = "down_load.jpg";
        }
        a.href = url;
        // 触发a的单击事件
        a.dispatchEvent(event);
      };
      // 获取img上的src值，赋值之后，完成之后会调用onload事件
      image.src = filePath;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    handleChange(e) {
      const file = e.raw;
      console.log(file);

      this.file && this.file.id && this.deleteArr.push(this.file.id)

      this.file2 = file;
      this.file = {
          file,
          name: file.name,
          // time: file.lastModifiedDate,
          time: moment().format('YYYY-MM-DD'),
          uid: file.uid,
          filePath: ""
        };
    },

    // downFile({ file, name, filePath }) {
    //   const img = document.createElement("a");
    //   img.href = filePath;
    //   img.download = name;
    //   a.click();

    // },

    delFile(v) {
      this.file && this.file.id && this.deleteArr.push(this.file.id)
      this.file = null
    },

    saveFile() {
      const formData = new FormData();

      Object.keys(this.obj).forEach(e => {
        if (e == "applyDate" || e == "checkDate") {
          let d = this.obj[e] ? moment(this.obj[e]).format("yyyy-MM-DD HH:mm:ss") : '';
          d && formData.append(e, d);
        }else if( e == "graduateDate") {
          let d = this.obj[e] ? moment(this.obj[e]).format("yyyy-MM-DD") : '';
          d && formData.append(e, d);
        }else if (e == "status") {
          formData.append(e, "未提交");
        }else if (e == "jobType") {
          formData.append(e, parseInt(this.obj[e]));
        }else if(e.startsWith('unit') || e.startsWith('job')){

        }else{
          this.obj[e] && formData.append(e, this.obj[e]);
        }
      });

      formData.append("deleteId", this.deleteArr.join(','));
      this.file2 && formData.append("file", this.file2);
      formData.delete("fileStore");

      formData.append("unit1", this.obj.unit11 || '');
      formData.append("job1", this.obj.unit12 || '');
      formData.append("unit2", this.obj.unit21 || '');
      formData.append("job2", this.obj.unit22 || '');
      formData.append("unit3", this.obj.unit31 || '');
      formData.append("job3", this.obj.unit32 || '');
     
      this.$confirm("你要保存吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          trainSave(formData).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "保存成功"
              });
              this.getTrainStu();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "未保存成功"
          });
        });
    },
    submitFile() {
      const formData = new FormData();

     Object.keys(this.obj).forEach(e => {
        if (e == "applyDate" || e == "checkDate") {
          let d = this.obj[e] ? moment(this.obj[e]).format("yyyy-MM-DD HH:mm:ss") : '';
          d && formData.append(e, d);
        }else if( e == "graduateDate") {
          let d = this.obj[e] ? moment(this.obj[e]).format("yyyy-MM-DD") : '';
          d && formData.append(e, d);
        }else if (e == "status") {
          formData.append(e, "未受理");
        }else if (e == "jobType") {
          formData.append(e, parseInt(this.obj[e]));
        }else if(e.startsWith('unit') || e.startsWith('job')){

        }else{
          this.obj[e] && formData.append(e, this.obj[e]);
        }
      });
      this.file2 && formData.append("file", this.file2);
      formData.delete("fileStore");
      formData.append("deleteId", this.deleteArr.join(','));

      formData.append("unit1", this.obj.unit11 || '');
      formData.append("job1", this.obj.unit12 || '');
      formData.append("unit2", this.obj.unit21 || '');
      formData.append("job2", this.obj.unit22 || '');
      formData.append("unit3", this.obj.unit31 || '');
      formData.append("job3", this.obj.unit32 || '');

      this.$confirm("你要提交吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          trainSave(formData).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "提交成功"
              });
              this.getTrainStu();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "未提交成功"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
}
.top-title {
  width: 100%;
  height: 40px;
  background-color: #f5e9e9;
  margin-top: 20px;
  margin-bottom: 10px;
  .title-left {
    width: 210px;
    height: 40px;
    line-height: 40px;
    border-top: 2px solid red;
    background-color: #fff;
    font-weight: bolder;
    font-size: 20px;
  }
}
el-input[type="text"] {
  height: 30px;
  width: 95%;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
// el-select {
//   height: 34px;
//   padding: 6px 12px;
//   font-size: 14px;
//   line-height: 1.42857143;
//   color: #555;
//   background-color: #fff;
//   background-image: none;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// }
.Form1 {
  border-right: 1px solid #cccccc;

  border-bottom: 1px solid #cccccc;

  border-collapse: collapse;
  tr {
    height: 40px;
    td {
      border-right: 1px solid #cccccc;

      border-left: 1px solid #cccccc;
      border-top: 1px solid #cccccc;

      background-color: white;
      padding: 2px;
      font-size: 14px;
      font-family: "宋体";
      border-spacing: 1px;
      text-align: left;
    }
    th {
      border-left: 1px solid #cccccc;
      border-top: 1px solid #cccccc;

      background-color: white;
      padding: 2px;
      font-size: 14px;
      font-family: "宋体";
      text-align: right;
      text-align: center;
      // width: 50%;
    }
  }
}

& /deep/ .el-input {

    input:disabled {
      cursor: not-allowed;
      color: #aaa;
    }
    // input[disabled] {
    //   cursor: not-allowed;
    //   color: #aaa;
    // }
    select:disabled {
      cursor: not-allowed;
      color: #aaa;
    }
    textarea:disabled {
      cursor: not-allowed;
      color: #aaa;
    }
}

</style>
