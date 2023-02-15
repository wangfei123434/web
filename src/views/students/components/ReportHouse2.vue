<template>
  <div>
    <div class="top">
      <h3><span>{{ $route.query.area }}</span></h3>
      <div class="phone">
        <img src="../../../assets/imgs/houseList/phone.svg" width="20px" alt="">
        <span>咨询电话</span>
        <span>027-88922075</span>
      </div>
    </div>
    <div class="listBox">
      <div class="list" v-for="(d, i) in list" :key="i" >
        <div class="head">
          <span class="name">{{d.name}}</span>
          <span class="count">
            <b>{{d.housecountA + d.housecountB + d.housecountC}}</b>
            套</span>
        </div>
        <div class="body">
          <div class="btn" @click="handleClick(i)">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { communiteList, projectList, countHouseForMapOld, countHouseForMap, getStudentStatus } from "@/api/house.js";
import { getId } from "../../../utils/auth";
import { mapState } from "vuex";
// import { getToken } from "@/utils/auth";

export default {
  data() {
    return {
      activeName: "first",
      VillageList: [],
      ProjectList: [],
      imgs: [],

      list: []
    };
  },
  created() {
    this.getData()

    this.list = this.$route.query.data
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    getData() {
      let area = this.$route.query.area
      countHouseForMap({}).then(res => {
        try {
          let d = res.data.filter(e => e.regionName == area)
          if(d) {
            this.list = []
            d.forEach(e => {
              this.list.push(...e.childData)
            });

            
            this.list = this.list.map(e => {
              let name = ''
              if(e.sourceType == 2) {
                name = e.villageName
              }else if(e.sourceType == 3) {
                name = e.projectname
              }
              return {
                ...e,
                name
              }
            })
            console.log(this.list);
          }
          
        } catch (error) {
          
        }
      })
    },
    handleClick(i) {
      let id = this.list[i].projectid
      let projectName = this.list[i].projectname || this.list[i].projectName
      let projectId = this.list[i].projectId
      let villageId = this.list[i].villageId
      let sourceType = this.list[i].sourceType
      let villageName = this.list[i].villageName
      this.$router.push({
        path: "reportHouse3",
        query: {
          projectId: projectId || '',
          villageId: villageId || '',
          sourceType: sourceType,
          projectName,
          villageName,
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>
.listBox {
  text-align: left;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // min-height: 495px;
  .list {
    width: 400px;
    height: 120px;
    background: #F7F7F7;
    border-radius: 4px;
    margin-bottom: 30px;
    padding: 10px;
    box-sizing: border-box;
    .head {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333333;
      border-bottom: 1px solid #E5E5E5;
      padding: 0 5px;
      .name{
        font-size: 16px;
       
        font-weight: bold;
      }
      .count {
        font-size: 14px;
        color: #9F9F9F;
        b {
          color: #D10100;
           font-size: 18px;
        }
      }
    }
    .body {
      margin-top: 20px;
      padding: 0 5px;
      .btn {
        width: 80px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background: #D10100;
        border-radius: 12px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}


/deep/ .el-tabs__item:hover {
  color: red !important;
}
/deep/ .el-tabs__item.is-active {
  color: red !important;
}
/deep/ .el-tabs__active-bar {
  background-color: red !important;
}
.top {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 40px;
  
  h3 {
    margin-left: 10px;
    color: #333333;
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0;
    &::before {
      content: '';
      display: inline-block;
      width: 100px;
      height: 14px;
      background: #FFCFCF;
      border-radius: 0px 6px 6px 0px;
      position: absolute;
      left: -10px;
      bottom: 10px;
    }
    span {
      position: absolute;
      margin-left: 10px;
      font-size: 24px;
    }
  }
  .phone {
    color: #333333;
    font-size: 14px;
    margin-bottom: 30px;
  }

  & > div {
    display: flex;
    align-items: center;
    & > span {
      margin-left: 10px;
    }
  }
}
//
.house-list {
  display: flex;
  border-bottom: 2px solid #ccc;
  a {
    font-size: 18px;
    font-weight: bolder;
  }
  img {
    display: inline-block;
    width: 200px;
    height: 150px;
    border-radius: 5px;
  }
  .list-right {
    flex: 1;
    margin-left: 50px;
    height: 250px;
    display: flex;
    flex-direction: column;
  }
  .remain {
    p {
      & > span {
        color: red;
        font-size: 50px;
      }
    }
  }
}

// 文字处理
.articleList {
  text-align: left;
}
</style>
