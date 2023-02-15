<template>
  <div class="content-wrapper " style="margin-bottom:50px">
    <div style="height:40px;border-bottom:3px solid  #00a9ec;">
      <h2 style="color: #00a9ec;text-align:left">企业信息</h2>
    </div>
    <div>
      <div class="form-group">
        <div class="">
          <label for="name" class="">企业名称:</label>

          <input
            type="text"
            value="武汉"
            name="name"
            id="name"
            v-model="list.name"
          />
        </div>
        <div class="">
          <label for="name" class="">企业地址:</label>

          <input
            type="text"
            value="武汉市"
            name="address"
            id="address"
            v-model="list.address"
          />
        </div>
      </div>

      <div class="form-group">
        <div class="">
          <label for="contactor" class="" style="margin-left:15px"
            >联系人:</label
          >

          <input
            type="text"
            value="冯"
            name="contactor"
            id="contactor"
            v-model="list.contactor"
          />
        </div>
        <div class="">
          <label for="contactorMobile" class="">联系电话:</label>

          <input
            type="text"
            name="contactorMobile"
            id="contactorMobile"
            value="1"
            v-model="list.contactorMobile"
          />
        </div>
      </div>

      <div class="form-group">
        <div class="" style="text-align: left;">
          <label for="registerDate" style="margin-left: 100px;" class="" 
            >单位注册时间:</label
          >
          <el-date-picker
            v-model="list.dateCreated"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          <!-- <input
            onclick="WdatePicker({el:'d13'})"
            readonly="readonly"
            value="2002-11-28"
            id="d13"
            name="registerDate"
            type="text"
            class="input_css"
            v-model="list.dateCreated"
          />
          <img
            onclick="WdatePicker({el:'d13'})"
            src="/js/My97DatePicker/skin/datePicker.gif"
            width="16"
            height="22"
            align="absmiddle"
          /> -->
        </div>
        <div class="">
          <label for="registerCapitcal" class="">注册资金:</label>

          <input
            type="text"
            id="registerCapitcal"
            name="registerCapitcal"
            value=""
            v-model="list.registerCapitcal"
          />
        </div>
      </div>

      <div class="form-group">
        <!-- <div class="" style="margin-top: 5px;margin-left:-36px"> -->
        <div class="" style="text-align: left;">
          <label for="gender" class="" style="margin-left: 100px;">是否上市:</label>

          <input
            type="radio"
            style="margin-left: 5px;margin-top: 5px;"
            name="isOnsale"
            id="isOnsale"
            :value="false"
            checked="checked"
            v-model="list.isOnsale"
          />否
          <input
            type="radio"
            style="margin-left: 5px;margin-top: 5px;"
            name="isOnsale"
            id="isOnsale"
            :value="true"
            v-model="list.isOnsale"
          />是
        </div>
        <div class="" style="text-align: left;">
          <label for="gender" class="" style="margin-left: 54px;">是否为高新企业:</label>
          <input
            type="radio"
            style="margin-top: 5px;"
            name="isHighTech"
            id="isHighTech"
            :value="false"
            checked="checked"
            v-model="list.isHighTech"
          />否
          <input
            type="radio"
            style="margin-top: 5px;"
            name="isHighTech"
            id="isHighTech"
            :value="true"
            v-model="list.isHighTech"
          />是
        </div>
      </div>

      <div class="big-text">
        <label for="edu" class="">主营业务:</label>

        <textarea
          class="form-control"
          id="major"
          name="major"
          rows="5"
          v-model="list.major"
        >
。</textarea
        >
      </div>

      <div class="big-text">
        <label for="work" class="">企业简介:</label>

        <textarea
          class="form-control"
          id="memo"
          name="memo"
          rows="5"
          v-model="list.memo"
        >
。</textarea
        >
      </div>

      <div class="form-group" style="justify-content: center;">
        <el-button style="backgroundColor:#d58512;color:#fff;border:none;" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { editCompany, saveEditCompany } from "@/api/personal";
import { getId } from '../../utils/auth';
export default {
  data() {
    return {
      list: {
        name: "",
        address: "",
        contactor: "",
        contactorMobile: "",
        dateCreated: "",
        registerCapitcal: "",
        isOnsale: true,
        isHighTech: false,
        major: "",
        memo: "",
        id: "",
      }
    };
  },
  created() {
    this.getEditCompany();
  },
  mounted() {
    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight()
    }, 500)
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight

      document.querySelector('.content-wrapper').style.height = (h - headH - footH - 70) + 'px'
    },
    async getEditCompany() {
      const { data } = await editCompany({
        // userId: "01104a9c-0dd8-432f-aef9-4914b483aeb5"
        userId: getId()
      });
      console.log(data);
      var [list] = data;
      console.log(list);
      this.list.name = list.name;
      this.list.address = list.address;
      this.list.contactor = list.contactor;
      this.list.contactorMobile = list.contactorMobile;
      this.list.dateCreated = list.dateCreated;
      this.list.registerCapitcal = list.registerCapitcal;
      this.list.isOnsale = list.isOnsale;
      this.list.isHighTech = list.isHighTech;
      this.list.major = list.major;
      this.list.memo = list.memo;
      this.list.id = list.id;
    },
    save() {
      saveEditCompany(this.list).then(res => {
        console.log(res, 'base');
        if(res && res.code == 200) {
          this.$message.success(res.msg)
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
// 版心
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
  overflow: auto;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-group {
  display: flex;
  // justify-content: space-around;
  margin-top: 10px;
  & > div {
    flex: 1;
  }
}
input[type="text"] {
  width: 330px;
  height: 30px;
  // width: 95%;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
.big-text {
  display: flex;
  margin-left: 100px;
  margin-top: 20px;
  .form-control {
    // display: block;
    // width: 886px;
    width: 85%;
    height: 114px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
