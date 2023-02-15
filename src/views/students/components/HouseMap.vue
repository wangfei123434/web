<template>
<!-- 腾讯地图版 -->
  <div class="mapBox">
    <div id="allmap"></div>
    <div class="tooltip" v-show="!userInfo">
      <img src="../../../assets/imgs/houseList/zhuYi.svg" alt="">
      您未登录，仅能查看地图房源
      <!-- 您当前是未登录状态请先登录 -->
    </div>
  </div>
</template>

<script>
import { projectList, countHouseForMap, getStudentStatus } from '@/api/house.js';
import { mapState } from 'vuex';
import { getId } from "../../../utils/auth";
import { EventBus } from '@/event-bus.js';
import customOverlay from './customOverlay.js';

export default {
  data() {
    return {
      projectList: [],
      zoom: 11,

      areaData: [], // 区域数据
      projectData: [], // 具体项目数据
      isAreaMarkerVisible: true,

      areaLabelArr: [],
      projectLabelArr: [],
    }
  },
  created () {
    // this.getData()
  },
  mounted() {
    this.initBMap()
    this.getData()

    EventBus.$on('customAreaClick', e => {
      this.toggleAreaLabelArr()
      this.zoom = e
    })

    EventBus.$on('customProcjectClick', e => {
      if(window.customProcjectClickFirst != true) return
      window.customProcjectClickFirst = false

      // 先判断是否登入
      if(!this.userInfo) {
        this.$router.push('/login')
      }else{
        // 查接口是否有资格 true -- 选房详情 ; false -- 申请
        getStudentStatus({
          studentId: getId(),
          area: e.districtname || e.districtName,
        }).then(res => {
          console.log(res);
          if(res.code != 200) {
            this.$confirm(res.msg, '提示', {
              confirmButtonText: '确定',
              showCancelButton: false,
              type: 'warning'
            }).then(() => {
              if(res.code == 201) {
                this.$router.push('/reportOnlie')
              }
            }).catch(() => {

            })
          }else if(res.code == 200) {
            // let id = cw.data.projectid
            this.$router.push({
              path: "reportHouse3",
              query: {
                projectId: e.projectid || '',
                villageId: e.villageId || '',
                sourceType: e.sourceType,
                 projectName: e.projectName,
                villageName: e.villageName,
              }
            });
          }
      })

      }
    })

    let that = this
    document.onmousewheel = e => {
      this.zoom = that.map && that.map.getZoom()
    };

    // 计算满屏高度
    setTimeout(() => {
      this.calcFullHeight()
    }, 500)
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    calcFullHeight() {
      let h = document.documentElement.clientHeight
      let headH = document.querySelector('.header-wrapper').clientHeight
      let footH = document.querySelector('footer').clientHeight
      let elHeaderH = document.querySelector('.el-header').clientHeight

      document.querySelector('.mapBox').style.height = (h - headH - footH - elHeaderH - 2) + 'px'
    },
    initBMap (cb) {
      // console.log(TMap);
        var center = new TMap.LatLng(30.57024669280235, 114.30042924810527)
            //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = this.map = window.map = new TMap.Map(document.getElementById('allmap'), {
            center: center,//设置地图中心点坐标
            zoom: this.zoom,   //设置地图缩放级别
        });

        map.setDoubleClickZoom(false)
        map.removeControl("zoom")
        map.removeControl("logo")
        console.log(this.map);
    },
    createLabel (data, layerType) {
      let that = this
      data.forEach(d => {
        let label = new customOverlay({
          map: that.map,
          position: new TMap.LatLng(d.latitude, d.longitude),
          data: d,
          minRadius: 0,
          maxRadius: 20,
          contentName: d.regionName,
          contentCount: d.count,
          layerType
        });

      // console.log(label);
        if(layerType == 'projectLabel') {
          this.projectLabelArr.push(label)
        }else{
          this.areaLabelArr.push(label)
        }
      })
    },

    getData() {
      countHouseForMap({}).then(res => {
        // console.log(res);
        const d = res.data;
        if (d) {
          this.areaData = d;
          let arr = [];
          d.forEach(e => {
            if (e.childData && e.childData.length > 0) {
              arr.push(...e.childData);
            }
          });
          this.projectData = arr;

          // this.initBMap()

          // 区域
          this.createLabel(this.areaData, 'areaLabel')
          this.createLabel(this.projectData, 'projectLabel')

          this.toggleAreaLabelArr()
        }
      });
    },
    toggleAreaLabelArr() {
      if(this.isAreaMarkerVisible) {
        this.areaLabelArr.forEach(label => {
          label.dom.style.display = 'block'
        })
        this.projectLabelArr.forEach(label => {
          label.dom.style.display = 'none'
        })
      }else{
        this.areaLabelArr.forEach(label => {
          label.dom.style.display = 'none'
        })
        this.projectLabelArr.forEach(label => {
          label.dom.style.display = 'block'
        })
      }
      this.isAreaMarkerVisible = !this.isAreaMarkerVisible
    }
  },
  watch: {
    // 区域marker对象的显影问题待研究，api无法实现显影交互
    zoom(newV, oldV) {
      if (newV >= 13 && !this.isAreaMarkerVisible) {
        this.toggleAreaLabelArr()
      }else if (newV <= 11.5 && this.isAreaMarkerVisible){
        this.toggleAreaLabelArr()
      }
    },
  }
};
</script>

<style lang="less" scoped>
#allmap {
  width: 100%;
  height: 500px;
  position: relative;
}

#allmap {
  & /deep/ .logo-text{
    display: none;
  }
  & /deep/ .rotate-circle .compass-img{
    left: 0;
  }
  & /deep/ .rotate-circle .rotate-left-img{
    left: 0;
  }
  & /deep/ .rotate-circle .rotate-right-img{
    left: 0;
  }
  & /deep/ .rotate-circle .rotate-top-img{
    left: 0;
  }
  & /deep/ .rotate-circle .rotate-bottom-img{
    left: 0;
  }
}

.tooltip {
  position: absolute;
  top: 10px;
  left: 50%;
  // width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  color: #f00;
  z-index: 10000;
  transform: translateX(-50%);
  // width: 270px;
  height: 46px;
  background: #FFDCDC;
  border: 1px solid #D10100;
  box-shadow: 0px 0px 19px 1px rgba(209, 1, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-left: 10px;
  }
}
.mapBox {
  position: relative;
  // min-height: 640px;
  display: flex;
  // align-items: center;
}

</style>
