<template>
  <div class="content-wrapper">
    <!-- 有效身份证件上传 -->
    <div class="idCard">
      <div class="cardTitle">有效身份证件上传</div>
      <div class="cardBox">
        <div class="left customUpLoad">
          <input
            ref="idCardLeft_file"
            type="file"
            name="idCardLeft"
            style="width:100%;display: none;"
            @change="idCardLeftChange"
          />
          <img :src="front" alt="" />
          <div @click.prevent="$refs.idCardLeft_file.click()" class="uploadBtn">
            点击上传
          </div>
        </div>

        <div class=" customUpLoad">
          <input
            ref="idCardRight_file"
            type="file"
            name="idCardRight"
            style="width:100%;display: none;"
            @change="idCardRightChange"
          />
          <img :src="back" alt="" />
          <div
            @click.prevent="$refs.idCardRight_file.click()"
            class="uploadBtn"
          >
            点击上传
          </div>
        </div>
      </div>
    </div>

    <el-form :model="form" :rules="rules" ref="attachmentForm" label-width="180px">
      <el-form-item label="户口本上传:" class="customUpLoad customUpLoad1" prop="hkb">
        <input
          ref="hkb_file"
          type="file"
          name="hkb"
          style="width:100%;display: none;"
          @change="hkbChange"
        />
        <el-input
          v-model="form.hkb"
          class="uploadInput"
          @click.prevent="$refs.hkb_file.click()"
          placeholder="户口本上传"
        ></el-input>
        <el-button @click.prevent="$refs.hkb_file.click()" type="primary" class="uploadBtn1"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="最高学历证书:" class="customUpLoad customUpLoad1" prop="diploma">
        <input
          ref="diploma_file"
          type="file"
          name="diploma"
          style="width:100%;display: none;"
          @change="diplomaChange"
        />
        <el-input
          v-model="form.diploma"
          class="uploadInput"
          @click.prevent="$refs.diploma_file.click()"
          placeholder="留学回国人员须提供教育部认证的留学回国人员学历认证书"
        ></el-input>
        <el-button @click.prevent="$refs.diploma_file.click()" type="primary" class="uploadBtn1"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item
        label="最高学位证书:"
        class="customUpLoad customUpLoad1"
        prop="qualifications"
      >
        <input
          ref="degreeCertificate_file"
          type="file"
          name="degreeCertificate"
          style="width:100%;display: none;"
          @change="degreeCertificateChange"
        />
        <el-input
          v-model="form.qualifications"
          class="uploadInput"
          @click.prevent="$refs.degreeCertificate_file.click()"
          placeholder="留学回国人员须提供教育部认证的留学回国人员学位认证书"
        ></el-input>
        <el-button
          @click.prevent="$refs.degreeCertificate_file.click()" class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="学历验证报告:" class="customUpLoad customUpLoad1" prop="certificate">
        <input
          ref="verificationReport_file"
          type="file"
          name="verificationReport"
          style="width:100%;display: none;"
          @change="verificationReportChange"
        />
        <el-input
          v-model="form.certificate"
          class="uploadInput"
          @click.prevent="$refs.verificationReport_file.click()"
          placeholder="学历验证报告"
        ></el-input>
        <el-button
          @click.prevent="$refs.verificationReport_file.click()" class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="主要业绩证明:" class="customUpLoad customUpLoad1" prop="yjzm">
        <input
          ref="yjzm_file"
          type="file"
          name="performanceCertification"
          style="width:100%;display: none;"
          @change="yjzmChange"
        />
        <el-input
          v-model="form.yjzm"
          class="uploadInput"
          @click.prevent="$refs.yjzm_file.click()"
          placeholder="主要业绩证明"
        ></el-input>
        <el-button
          @click.prevent="$refs.yjzm_file.click()" class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item
        label="劳动合同及缴纳社保证明:"
        class="customUpLoad customUpLoad1"
        prop="sbzm"
      >
        <input
          ref="laborContract_file"
          type="file"
          name="laborContract"
          style="width:100%;display: none;"
          @change="laborContractChange"
        />
        <el-input
          v-model="form.sbzm"
          class="uploadInput"
          @click.prevent="$refs.laborContract_file.click()"
          placeholder="劳动合同及缴纳社保证明"
        ></el-input>
        <el-button
          @click.prevent="$refs.laborContract_file.click()" class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="持股证明:" class="customUpLoad customUpLoad1" prop="gdzm" v-if="title == 'qs_excellentYouth_startup'">
        <input
          ref="GDZMCertification_file"
          type="file"
          name="performanceCertification"
          style="width:100%;display: none;"
          @change="GDZMCertificationChange"
        />
        <el-input
          v-model="form.gdzm"
          class="uploadInput"
          @click.prevent="$refs.GDZMCertification_file.click()"
          placeholder="代表性论著、专利证书、产品证书等复印件或证明材料"
        ></el-input>
        <el-button
          @click.prevent="$refs.GDZMCertification_file.click()" class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>

      <!-- 其他附件 -->
      <el-form-item
        label="其他:"
        class="customUpLoad"
        v-for="(otherAttachment, i) in otherAttachmentList"
        :key="i"
      >
        <input
          :ref="'otherAttachment_file_' + i"
          type="file"
          :name="'otherAttachment_' + i"
          style="width:100%;display: none;"
          @change="otherAttachmentChange($event, i)"
        />
        <el-input
          :ref="'otherAttachment_input_' + i"
          :value="otherAttachment"
          class="uploadInput"
        ></el-input>
        <el-button @click="otherAttachmentClick($event, i)" type="primary" class="uploadBtn1"
          >上传</el-button
        >
        <span
          class="el-icon-close closeBtn"
          @click="closeOtherAttachment(i)"
        ></span>
      </el-form-item>

      <div
        id="addFuJian"
        ref="addFuJianDom"
        style="text-align: right;width: 75%;"
      >
        <span id="add" style="color: blue;cursor: pointer;" @click="addFuJian"
          >+补充材料</span
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import zheng from '@/assets/imgs/zheng.png';
import fan from '@/assets/imgs/fan.png';

export default {
  props: ['type', 'data'],
  data() {
    return {
      form: {
        hkb: "",
        diploma: "",
        qualifications: "",
        certificate: "",
        cgzm: "",
        sbzm: "",
        gdzm: "",
        yjzm: "",
      },
      otherAttachmentList: [], // 创建其他附件上传dom的数组
      otherAttachmentArr: [], // 其他附件上传 - input 框中的名字

      // 身份证
      front: zheng,
      back: fan,
      idCardLeftData: null,
      idCardRightData: null,

      hkbData: null,
      diplomaData: null,
      qualificationsData: null,
      certificateData: null,
      cgzmData: null,
      sbzmData: null,
      gdzmData: null,
      yjzmData: null,

      rules1: {
        hkb: [{ required: true, message: "请上传户口本", trigger: "blur" }],
        diploma: [{ required: true, message: "请上传最高学历证书", trigger: "blur" }],
        qualifications: [{ required: true, message: "请上传最高学位证书", trigger: "blur" }],
        certificate: [{ required: true, message: "请上传学历验证报告", trigger: "blur" }],
        yjzm: [{ required: true, message: "请上传主要业绩证明", trigger: "blur" }],
        sbzm: [{ required: true, message: "请上传劳动合同及缴纳社保证明", trigger: "blur" }],
      },
      rules2: {
        hkb: [{ required: true, message: "请上传户口本", trigger: "blur" }],
        diploma: [{ required: true, message: "请上传最高学历证书", trigger: "blur" }],
        qualifications: [{ required: true, message: "请上传最高学位证书", trigger: "blur" }],
        certificate: [{ required: true, message: "请上传学历验证报告", trigger: "blur" }],
        cgzm: [{ required: true, message: "请上传主要成果", trigger: "blur" }],
        sbzm: [{ required: true, message: "请上传劳动合同及缴纳社保证明", trigger: "blur" }],
        yjzm: [{ required: true, message: "请上传主要业绩证明", trigger: "blur" }],
      },
      rules3: {
        hkb: [{ required: true, message: "请上传户口本", trigger: "blur" }],
        diploma: [{ required: true, message: "请上传最高学历证书", trigger: "blur" }],
        qualifications: [{ required: true, message: "请上传最高学位证书", trigger: "blur" }],
        certificate: [{ required: true, message: "请上传学历验证报告", trigger: "blur" }],
        cgzm: [{ required: true, message: "请上传主要成果", trigger: "blur" }],
        gdzm: [{ required: true, message: "请上传持股证明", trigger: "blur" }],
        yjzm: [{ required: true, message: "请上传主要业绩证明", trigger: "blur" }],
      },
    };
  },
  computed: {
    title() {
      return this.$route.query.title;
    },
    rules() {
      if(this.$route.query.title == 'qs_excellentYouth_doctor') {
        return this.rules1
      }else if(this.$route.query.title == 'qs_excellentYouth_startup'){
        return this.rules3
      }
      return this.rules2
    }
  },
  methods: {
    // 业绩证明
    yjzmChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.yjzm = file.name

      let id = this.yjzmData && this.yjzmData.id
      id && this.$emit('setDelArr', id)

      this.yjzmData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    // 身份证件正面
    idCardLeftChange(e) {
        const input = e.target;
        const [file] = input.files;
        var oFReader = new FileReader();
        oFReader.readAsDataURL(file);
        let that = this
        oFReader.onloadend = function(oFRevent){
          var src = oFRevent.target.result;
          that.front = src
        }

        let id = this.idCardLeftData && this.idCardLeftData.id
        id && this.$emit('setDelArr', id)

        this.idCardLeftData = {
            file,
            name: file.name,
            time: Date.now()
        };
    },
    // 身份证件反面
    idCardRightChange(e) {
        const input = e.target;
        const [file] = input.files;
        var oFReader = new FileReader();
        oFReader.readAsDataURL(file);
        let that = this
        oFReader.onloadend = function(oFRevent){
          var src = oFRevent.target.result;
          that.back = src
        }

        let id = this.idCardRightData && this.idCardRightData.id
        id && this.$emit('setDelArr', id)

        this.idCardRightData = {
            file,
            name: file.name,
            time: Date.now()
        };
    },
    // 户口本
    hkbChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.hkb = file.name

      let id = this.hkbData && this.hkbData.id
      id && this.$emit('setDelArr', id)

      this.hkbData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    // 最高学历证书
    diplomaChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.diploma = file.name

      let id = this.diplomaData && this.diplomaData.id
      id && this.$emit('setDelArr', id)

      this.diplomaData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    //最高学位证书
    degreeCertificateChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.qualifications = file.name

      let id = this.qualificationsData && this.qualificationsData.id
      id && this.$emit('setDelArr', id)

      this.qualificationsData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    // 学历验证报告
    verificationReportChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.certificate = file.name

      let id = this.certificateData && this.certificateData.id
      id && this.$emit('setDelArr', id)

      this.certificateData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    //主要成果
    performanceCertificationChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.cgzm = file.name

      let id = this.cgzmData && this.cgzmData.id
      id && this.$emit('setDelArr', id)

      this.cgzmData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    // 劳动合同及缴纳社保证明
    laborContractChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.sbzm = file.name

       let id = this.sbzmData && this.sbzmData.id
      id && this.$emit('setDelArr', id)

      this.sbzmData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    // 持股证明
    GDZMCertificationChange(e) {
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      this.form.gdzm = file.name

       let id = this.gdzmData && this.gdzmData.id
      id && this.$emit('setDelArr', id)

      this.gdzmData = {
        file,
        name: file.name,
        time: Date.now()
      }
    },
    otherAttachmentChange(e, i) {
      console.log(e, this, i);
      const input = e.target;
      const [file] = input.files;

      input.value = "";
      // this.form.cgzm = file.name

      let id = this.otherAttachmentArr && this.otherAttachmentArr[i] && this.otherAttachmentArr[i].id
      id && this.$emit('setDelArr', id)

      this.otherAttachmentArr.push({
        file,
        name: file.name,
        time: Date.now()
      });

      this.$refs["otherAttachment_input_" + i][0].$el.querySelector(
        "input"
      ).value = file.name;
    },
    otherAttachmentClick(e) {
      let btn = e.target;
      if (btn.tagName == "SPAN") {
        btn = btn.parentElement;
      }
      let parent = btn.parentElement;
      parent.querySelector("input[type='file']").click();
    },
    closeOtherAttachment(i) {
      this.otherAttachmentList.splice(i, 1);

      this.otherAttachmentArr.splice(i, 1);
    },
    addFuJian() {
      // console.log(this.$refs.addFuJianDom);
      this.otherAttachmentList.push('');
    },
    setData() {
      this.sourceData = this.data;
      let attachmentReqDTOS = this.data;
      if (attachmentReqDTOS) {
        this.otherAttachmentList = [];
        this.otherAttachmentArr = [];
        attachmentReqDTOS.forEach(e => {
          switch (e.type) {
            // case "HEADER": //头像
            //   this.header = e.url;
            //   break;
            case "FRONT": // 身份证前面
              this.front = e.url;
              this.idCardLeftData = e
              break;
            case "BACK": // 身份证后面
              this.back = e.url;
              this.idCardRightData = e
              break;
            case "DIPLOMA": // 最高学历证书
              this.form.diploma = e.name;
              this.diplomaData = e
              break;
            case "QUALIFICATIONS": // 最高学位证书
              this.form.qualifications = e.name;
              this.qualificationsData = e
              break;
            case "CERTIFICATE": // 学历验证报告
              this.form.certificate = e.name;
              this.certificateData = e
              break;
            case "CGZM": // 成果证明
              this.form.cgzm = e.name;
              this.cgzmData = e
              break;
            case "SBZM": // 社保证明
              this.form.sbzm = e.name;
              this.sbzmData = e
              break;
            case "GDZM": // 股东证明
              this.form.gdzm = e.name;
              this.gdzmData = e
              break;
            case "YJZM": // 业绩证明
              this.form.yjzm = e.name;
              this.yjzmData = e
              break;
            case "HKB": // 户口本
              this.form.hkb = e.name;
              this.hkbData = e
              break;

            case "REPLENISH": // 其他    otherFile 入参
              this.otherAttachmentList.push(
                // this.otherAttachmentList.length
                e.name
              );
              this.otherAttachmentArr.push(e);
              break;
          }
        });
      }
    },
    getParam(formData) {
      (this.idCardLeftData && !this.idCardLeftData.id) && formData.append("front", this.idCardLeftData.file);
      (this.idCardRightData && !this.idCardRightData.id) && formData.append("back", this.idCardRightData.file);
      (this.diplomaData && !this.diplomaData.id) && formData.append("diploma", this.diplomaData.file);
      (this.qualificationsData && !this.qualificationsData.id) && formData.append("qualifications", this.qualificationsData.file);
      (this.certificateData && !this.certificateData.id) && formData.append("certificate", this.certificateData.file);
      (this.sbzmData && !this.sbzmData.id) && formData.append("sbzm", this.sbzmData.file);
      (this.cgzmData && !this.cgzmData.id) && formData.append("cgzm", this.cgzmData.file);
      (this.gdzmData && !this.gdzmData.id) && formData.append("gdzm", this.gdzmData.file);
      (this.hkbData && !this.hkbData.id) && formData.append("hkb", this.hkbData.file);
      (this.yjzmData && !this.yjzmData.id) && formData.append("yjzm", this.yjzmData.file);

      this.otherAttachmentArr && this.otherAttachmentArr.forEach(e => {
        e.file && formData.append(`otherFiles`, e.file);
      })

      return formData
    },
    check() {
      this.$refs.attachmentForm.validate(valid => {
        if (valid) {
          // console.log("附件!");
          this.$emit('attackCheck', true)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  watch: {
    data() {
      this.setData()
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.el-form-item__content {
  display: flex;
}
.content-wrapper {
  padding: 30px 0px 50px 0px;
  width: 100%;
  .idCard {
    margin-bottom: 20px;
    .cardTitle {
      margin-bottom: 20px;
    }
    .cardBox {
      display: flex;
      //   justify-content: center;
      .left {
        margin-right: 50px;
        margin-left: 100px;
      }
    }
    img {
      width: 320px;
      height: 200px;
      margin-bottom: 5px;
      padding: 4px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
  .mergeCol3 {
    & /deep/ .el-input {
      width: 560px;
      margin-right: 20px;
    }
    span {
      margin-right: 20px;
    }
  }
  .width360 {
    width: 360px;
  }
  .uploadBtn {
    color: #00a9ec;
    margin-top: 5px;
   
    cursor: pointer;
  }
  .uploadBtn1 {
     margin-left: 20px;
  }

  .personImg {
    position: absolute;
    right: -40px;
    top: 0;
    z-index: 10;
    img {
      width: 140px;
      height: 140px;
      margin-bottom: 5px;
      padding: 4px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  .customRow {
    display: flex;
    align-items: center;
  }

  &
    /deep/
    .el-form-item.is-required:not(.is-no-asterisk)
    > .el-form-item__label:before,
  .el-form-item.is-required:not(.is-no-asterisk)
    .el-form-item__label-wrap
    > .el-form-item__label:before {
    content: "*";
    color: #ff4949;
    margin-right: 0px;
    font-size: 24px;
  }
  & /deep/ .el-form-item__label {
    font-weight: bold;
  }

  .saveBtn {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
  }
  .submitBtn {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
  }
  .closeBtn {
      position: absolute;
      right: -50px;
      top: 12px;
      font-size: 18px;
      cursor: pointer;
      &:hover {
          font-weight: bold;
      }
  }

  
}
</style>
