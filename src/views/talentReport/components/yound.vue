<template>
  <!-- 青年 -->
  <div class="box">
    <div class="explain">
      <p>填写要求：</p>
      <p>
        1、请按要求填写完整、真实信息，若无相关信息，请填写“无”，不得空项、漏项。
      </p>
      <p>2、外国语表述的信息请按惯例翻译成中文。</p>
      <p>
        3、申报书请用A4纸正反打印，一式6份；其他附件材料请装订成册，报送1份。
      </p>
    </div>
    <hr />
    <el-form
      class="form"
      ref="form"
      :model="form"
      label-width="180px"
      :rules="rules"
    >
      <!-- 个人图像 -->
      <div class="personImg">
        <div class="customUpLoad">
          <el-form-item prop="header">
            <input
              ref="personImg_file"
              type="file"
              name="personImg"
              style="width: 100%; display: none"
              @change="personImgChange"
            />
            <img :src="form.header" alt="" />
            <div
              @click.prevent="$refs.personImg_file.click()"
              class="uploadBtn"
            >
              点击更换
            </div>
          </el-form-item>
        </div>
      </div>
      <el-form-item label="姓名">
        <span>{{ form.name }}</span>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="国籍" prop="nationality">
        <el-input v-model="form.nationality" style="width: 220px"></el-input>
      </el-form-item>
      <el-form-item label="出生年月" prop="birthday">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="政治面貌" prop="politic">
        <el-input v-model="form.politic"></el-input>
      </el-form-item>
      <el-form-item label="证件号码">
        <span>{{ form.idCard }}</span>
      </el-form-item>
      <el-form-item label="联系电话">
        <span>{{ form.mobile }}</span>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="毕业院校" prop="school">
        <el-input v-model="form.school"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="field">
        <el-input v-model="form.field"></el-input>
      </el-form-item>
      <el-form-item label="学位" prop="education">
        <el-select v-model="form.education" placeholder="请选择">
          <el-option label="中专" value="中专"></el-option>
          <el-option label="大专" value="大专"></el-option>
          <el-option label="本科" value="本科"></el-option>
          <el-option label="硕士研究生" value="硕士研究生"></el-option>
          <el-option label="博士研究生" value="博士研究生"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="技术职称" prop="techTitle">
        <el-input v-model="form.techTitle"></el-input>
      </el-form-item>
      <el-form-item label="现任职务" prop="post">
        <el-input v-model="form.post"></el-input>
      </el-form-item>
      <el-form-item label="任职时间" prop="currentPostDate">
        <el-date-picker
          v-model="form.currentPostDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="产业领域" prop="industry1">
        <el-select
          v-model="form.industry1"
          placeholder="请选择"
          style="margin-right: 20px"
          @change="industry1Change"
        >
          <el-option
            v-for="(o, i) in industry1List"
            :key="i"
            :label="o.label"
            :value="o.value"
          ></el-option>
        </el-select>
        <el-select
          v-model="form.industry2"
          placeholder="请选择"
          @change="industry2Change"
        >
          <el-option
            v-for="(o, i) in industry2List"
            :key="i"
            :label="o.label"
            :value="o.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="教育经历" prop="edu">
        <el-input
          type="textarea"
          autosize
          v-model="form.edu"
          :rows="5"
          placeholder="（按时间顺序，从本科填起，包括“时间、国家、院校、专业、学位”）
如：
19XX年9月-19XX年7月 中国 XX大学XX学院XX专业信息技术学士
20XX年9月-20XX年X月 美国XX大学XX学院XX专业信息技术硕士"
        ></el-input>
      </el-form-item>
      <el-form-item label="工作经历" prop="work">
        <el-input
          type="textarea"
          autosize
          v-model="form.work"
          :rows="5"
          placeholder="（按时间顺序，包括“时间、国家、单位、职务”，不超过5项，兼职请注明）
如：
20XX年7月-20XX年X月 中国 XXXX有限公司XX部门XX项目组负责人
"
        ></el-input>
      </el-form-item>
      <el-form-item label="创新能力业绩贡献" prop="contrib">
        <el-input
          type="textarea"
          autosize
          v-model="form.contrib"
          :rows="5"
          placeholder="1、主持（参与）过的主要项目
（项目起止时间、名称、性质、经费、人数、职务、申报人作用贡献等）
2、主要成果
（代表性论著<论文>、专利、产品或服务，在国内外重要学术会议报告发言等情况等，每类不超过5项）
3、人才项目设想
"
        ></el-input>
      </el-form-item>

      <el-form-item
        class="rowLabel"
        prop="hasOtherAgreement"
        label="您是否存在知识产权纠纷、竞业禁止、保密约定等情况，如有，请列出："
      >
        <el-radio-group v-model="form.hasOtherAgreement" class="customRow">
          <el-radio :label="false">无</el-radio>
          <el-radio :label="true">有</el-radio>

          <el-input
            v-model="form.otherAgreement"
            placeholder="请输入"
            style="width: 300px; margin-right: 20px"
          ></el-input>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="有效身份证件复印件:" class="customUpLoad" prop="">
        <input
          ref="card_file"
          type="file"
          name="diploma"
          style="width: 100%; display: none"
          @change="cardChange"
        />
        <el-input
          v-model="form.card"
          class="uploadInput"
          placeholder="留学回国人员须提供教育部认证的留学回国人员学历认证书"
        ></el-input>
        <el-button
          @click.prevent="$refs.card_file.click()"
          type="primary"
          class="uploadBtn1"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="学历和学位证书:" class="customUpLoad" prop="">
        <input
          ref="diploma_file"
          type="file"
          name="diploma"
          style="width: 100%; display: none"
          @change="diplomaChange"
        />
        <el-input
          v-model="form.diploma"
          class="uploadInput"
          @click.prevent="$refs.diploma_file.click()"
          placeholder="留学回国人员须提供教育部认证的留学回国人员学历认证书"
        ></el-input>
        <el-button
          @click.prevent="$refs.diploma_file.click()"
          type="primary"
          class="uploadBtn1"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item
        label="主要成果:"
        class="customUpLoad customUpLoad1"
        prop=""
      >
        <input
          ref="performanceCertification_file"
          type="file"
          name="performanceCertification"
          style="width: 100%; display: none"
          @change="performanceCertificationChange"
        />
        <el-input
          v-model="form.cgzm"
          class="uploadInput"
          placeholder="代表性论著、专利证书、产品证书等复印件或证明材料"
        ></el-input>
        <el-button
          @click.prevent="$refs.performanceCertification_file.click()"
          class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="工作合同等:" class="customUpLoad" prop="">
        <input
          ref="performanceCertification_file"
          type="file"
          name="performanceCertification"
          style="width: 100%; display: none"
          @change="performanceCertificationChange"
        />
        <el-input
          v-model="form.cgzm"
          type="textarea"
          :rows="2"
          resize="none"
          class="uploadTextarea"
          placeholder="工作合同复印件、在引进单位工作的证明（包括但不限于购买社保、商业保险的证明材料）、引进来汉前后的个人所得税完税证明"
        ></el-input>
        <el-button
          @click.prevent="$refs.performanceCertification_file.click()"
          class="uploadBtn1"
          type="primary"
          >上传2</el-button
        >
      </el-form-item>
      <el-form-item label="其他奖励证书复印件:" class="customUpLoad" prop="">
        <input
          ref="performanceCertification_file"
          type="file"
          name="performanceCertification"
          style="width: 100%; display: none"
          @change="performanceCertificationChange"
        />
        <el-input
          v-model="form.cgzm"
          class="uploadInput"
          placeholder="其他奖励证书复印件"
        ></el-input>
        <el-button
          @click.prevent="$refs.performanceCertification_file.click()"
          class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>
      <el-form-item label="单位推荐函:" class="customUpLoad" prop="">
        <input
          ref="performanceCertification_file"
          type="file"
          name="performanceCertification"
          style="width: 100%; display: none"
          @change="performanceCertificationChange"
        />
        <el-input
          v-model="form.cgzm"
          class="uploadInput"
          placeholder="单位推荐函"
        ></el-input>
        <el-button
          @click.prevent="$refs.performanceCertification_file.click()"
          class="uploadBtn1"
          type="primary"
          >上传</el-button
        >
      </el-form-item>

      <div class="foot">
        <el-button @click="save(0)" class="saveBtn" :disabled="btnDis"
          >保存</el-button
        >
        <el-button @click="submit(1)" class="submitBtn" :disabled="btnDis"
          >提交</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  .form {
    position: relative;
  }

  .rowLabel {
    & /deep/ .el-form-item__label {
      text-align: center;
      width: 100% !important;
    }
  }

  .foot {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
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

  .personImg {
    position: absolute;
    right: 40px;
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
}
.customUpLoad {
  .uploadInput {
    width: 700px;
  }
  .uploadTextarea {
    width: 700px;
    & /deep/ .el-textarea__inner {
      border: none !important;
    }
  }
  .uploadBtn {
    color: #00a9ec;
    margin-top: -5px;
    cursor: pointer;
    line-height: 20px;
  }
  .uploadBtn1 {
    margin-left: 20px;
  }
}
</style>