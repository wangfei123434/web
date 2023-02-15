<template>
  <div class="content-wrapper" style="margin-bottom:50px">
    <div class="content-box">
      <div
        style="display:flex;justify-content:space-between;align-items:center ;margin-top:50px;margin-bottom:15px;align-items:center"
      >
        <span
          @click="add"
          class="iconfont icon-add"
          style="fontSize:25px;width:50px;height:40px;border:1px solid #cccccc; display: inline-block;border-radius:5px;line-height:40px"
        ></span>
        <div style="display:flex;">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            style="width:250px;margin-right:50px;"
            @input="getLikeName"
          ></el-input>
          <span
            @click="relpoadFile"
            class="iconfont icon-shuaxin"
            style="fontSize:25px;width:50px;height:40px;border:1px solid #cccccc; display: inline-block;border-radius:5px;line-height:40px;cursor:pointer;"
          ></span>
        </div>
      </div>
      <el-dialog
        title="添加被举荐人"
        :visible="dialogVisible"
        width="30%"
        @closed="closed"
        :show-close="false"
      >
        <!-- <diaFile ref="child1" :father="tableData[index]" /> -->
        <diaFile ref="child1" :father="fatherData" @addData="getComListId" />

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="getChild">确 定</el-button>
        </span>
      </el-dialog>

      <el-table border style="width: 100%" :data="tableData">
        <el-table-column prop="index" label="序号" width="70">
        </el-table-column>
        <el-table-column prop="name" label="被举荐人" width="100">
        </el-table-column>
        <el-table-column prop="identity" label="被举荐人身份证号" width="200">
        </el-table-column>
        <el-table-column prop="typeName" label="举荐类型" width="200">
        </el-table-column>
        <el-table-column prop="dateCreated" label="添加时间" width="200">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pageBox">
        <span class="text">
          显示第{{ (currentPage-1)*pageSize + 1 }}条到第{{ currentPage*pageSize }}条数据, 总共{{ total }}条记录
          每页显示 
          <select
              v-model="pageSize"
              @change="pageSizeChange"
            >
              <option value="2">2</option>
              <option value="20">20</option>
            </select>
          条记录
        </span>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total"
          :hide-on-single-page="true"
        >
        </el-pagination>
      </div>
      <button
        class="backOff"
        style="margin-top:100px;margin-bottom:50px"
        @click="backOff"
      >
        返回
      </button>
    </div>
  </div>
</template>

<script>
import diaFile from "./components/diaFile.vue";
import moment from "moment";
import { getId } from "@/utils/auth";
import { comListId, deleteAssgin, likeName, deleteById } from "@/api/personal";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      input: "",
      pageSize: 2,
      currentPage: 1,
      total: 0,
      dialogVisible: false,
      tableData: [],
      // 分页
      obj: [],
      index: "",
      fatherData: {}
    };
  },
  components: { diaFile },

  created() {
    console.log(getId());

    // console.log(moment(Date.now()).format("YYYY"));

    this.getComListId();
  },
  updated() {
    // console.log(this.tableData[1].name);
  },

  computed: {
    ...mapState([
      'componyInfo',
    ])
  },

  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight

      let hh = h - headH - footH - 50
      let boxH = document.querySelector('.content-wrapper').clientHeight
      if(boxH < hh) {
        document.querySelector('.content-wrapper').style.height = (hh) + 'px'
        document.querySelector('.content-wrapper').classList.add('auto')
      }
    },
    pageSizeChange(e) {
      this.pageSize = parseInt(e.target.value)

      this.getComListId()
    },
    add() {
      this.dialogVisible = true;

      this.fatherData = {};
    },
    closed() {
      this.$refs.child1.clear();
      this.dialogVisible = false
    },
    getChild() {
      this.dialogVisible = false;
      this.$refs.child1.getAddAssgin(); //child1是写在子组件上的属性 getAddAssgin()是子组件的方法名
    },
    transform(s) {
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
          res = "产业领军创新人才";
          break;
        case "lj2":
          res = "产业领军创业人才";
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
    },
    async getComListId() {
      const { data } = await comListId({
        companyId: this.componyInfo.id,
        types: this.$route.query.val,
        // year: moment(Date.now()).format("YYYY")
      });
      console.log(data);
      this.tableData = data;
      this.tableData.forEach((v, i) => {
        this.$set(v, "typeName", this.transform(v.type));
        this.$set(v, "index", i + 1);
      });
      // 分页
      if (data) {
        this.obj = data;
        this.total = this.obj && this.obj.length;
        this.tableData = this.obj.slice(0, this.pageSize);
        this.currentPage = 1
      }

      this.calcFullHeight()
    },
     handleDelete(row) {
      deleteById({
        ids: this.tableData[row].id
      }).then(data => {
        if (data.code == 200) {
          this.$message.success(data.msg)
          this.getComListId();
        }
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.tableData = this.obj.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    handleEdit(index, that) {
      this.dialogVisible = true;
      this.index = index;
      console.log(that);

      this.fatherData = this.tableData[index];

      this.$nextTick(() => {
        // this.$ref &&
        //   this.$ref.child1 &&
        //   this.$refs.child1.setData(this.fatherData);
          this.$children[1].$children[2].setData(this.fatherData);
      })
    },
    relpoadFile() {
      this.input = ""
      this.getComListId();
    },
    backOff() {
      this.$router.go(-1);
    },
    async getLikeName() {
      if(this.input == '') {
        this.getComListId();
        return
      }
      const data = await likeName({
        condition: this.input,
        // companyId: getId(),
        companyId: this.componyInfo.id,
        types: this.$route.query.val
      });
      console.log(data);
      if (data.code == 200) {
        // this.getComListId();
        this.tableData = data.data;
        this.tableData.forEach((v, i) => {
          this.$set(v, "typeName", this.transform(v.type));
          this.$set(v, "index", i + 1);
        });
        // 分页
        if (data) {
          this.obj = data.data;
          this.total = this.obj && this.obj.length;
          this.tableData = this.obj.slice(0, this.pageSize);
          this.currentPage = 1
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.content-wrapper {
  width: 1200px;
  margin: 0 auto;
  border: 2px solid #5bc0de;
  .content-box {
    width: 80%;
    margin: 0 auto;
  }
  &.auto {
    overflow: auto;
  }
}
input[type="text"] {
  height: 30px;
  border: solid 1px #cccccc;
  font-size: 14px;
  padding: 4px 12px;
}
.backOff {
  width: 75px;
  height: 45px;
  background-color: #5bc0de !important;
  border-radius: 5px;
  border-color: transparent;
  color: white;
  font-size: 18px;
}
.pageBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: #333;
}
</style>
