<template>
<!-- 百度地图版 -->
  <div class="mapBox">
    <div id="allmap"></div>
    <div class="tooltip" v-show="!userInfo">您当前是未登录状态请先登录</div>
  </div>
</template>

<script>
import { BMp } from '@/map';
import { projectList, countHouseForMap, getStudentStatus } from '@/api/house.js';
import { mapState } from 'vuex';
import { getId } from "../../../utils/auth";

export default {
  data () {
    return {
      projectList: [],
      zoom: 12,

      areaData: [], // 区域数据
      projectData: [], // 具体项目数据
      isAreaMarkerVisible: true
    }
  },
  created () {
    this.getData()
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    initBMap (cb) {
      BMp('619aN09GQ6lkEn69knIoRRMOcgXfMYyO').then(BMapGL => {
        var map = new BMapGL.Map('allmap')
        this.map = map
        this.BMapGL = BMapGL
        map.centerAndZoom('武汉市', this.zoom)
        //  创建信息窗口对象
        map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

        let isInit = true
        // 缩放时，该事件会多次触发
        map.addEventListener('tilesloaded', function () {
          if (isInit) {
            isInit = false
            cb && cb()
          }
        })

        let that = this
        document.onmousewheel = e => {
          this.zoom = that.map.getZoom()

          this.map.closeInfoWindow()
        };
      })
    },
    async getProjectList () {
      const data = await projectList({
        phone: this.userInfo.mobile,
        idType: '01',
        idCard: this.userInfo.idNumber,
        currentPage: 1,
        pageSize: 10
      })
      this.projectList = data.data.message.body.ProjectList.map(item => [
        item.longitude,
        item.latitude,
        item.villagename
      ])

      this.initBMap()
    },
    createLabel (data, layerType) {
      data.forEach(d => {
        const label = new this.BMapGL.Label(d.regionName, {
          position: new this.BMapGL.Point(d.longitude, d.latitude),
          // offset: new this.BMapGL.Size(-20, -18)
          offset: new this.BMapGL.Size(0, 10)
        })
        label.setStyle({
          backgroundColor: '#6495ED',
          borderColor: 'transparent',
          color: '#fff',
          textAlign: 'center',
          fontSize: '18px',
          padding: "15px",
          width: "90px",
          height: "90px",
          lineheight: "90px",
          borderRadius: "50%",
        })
        label.setContent(
          `<span>${d.regionName}</span><br/><span>${d.count}套</span>`
        )
        label.layerType = layerType
        label.data = d

        this.map.addOverlay(label)

        label.addEventListener('click', e => {
          const cw = e.currentTarget

          let areaLabelEle = this.getAreaLabelEle()
          if (areaLabelEle.length > 0) {
            areaLabelEle.forEach(e => {
              e.hide()
            })
          }

          let areaLabelEle1 = this.getAreaLabelEle1()
          if (areaLabelEle1.length > 0) {
            areaLabelEle1.forEach(e => {
              e.show()
            })
          }

          this.map.setZoom(14.1)
          
          setTimeout(() => {
            this.map.setCenter(
              cw.data.regionName
            )

            this.isAreaMarkerVisible = false
          }, 200)
            
        })
      })
    },

    createLabel1 (data, layerType) {
      data.forEach(d => {
        const label = new this.BMapGL.Label(d.regionName, {
          position: new this.BMapGL.Point(d.longitude, d.latitude),
          offset: new this.BMapGL.Size(-20, -18)
        })
        label.setStyle({
          backgroundColor: '#6495ED',
          borderColor: 'transparent',
          color: '#fff',
          textAlign: 'center',
          padding: "0 10px",
          borderRadius: "6px",
        })

        let total = d.housecountA + d.housecountB + d.housecountC

        let name = ""
        if(d.sourceType == 2) {
          name = d.villageName
        }else if(d.sourceType == 3) {
          name = d.projectname
        }
        label.setContent(
          // `<span>${d.regionName}</span><br/><span>${d.count}套</span>`
          `<span>${name}<br/>${total}套</span>`
        )
        label.layerType = layerType
        label.data = d

        this.map.addOverlay(label)

        label.addEventListener('click', (e) => {
          const cw = e.currentTarget
          // 先判断是否登入
          if(!this.userInfo) {
            this.$router.push('/login')
          }else{
            // 查接口是否有资格 true -- 选房详情 ; false -- 申请

            getStudentStatus({
              studentId: getId(),
              area: cw.data.districtname || cw.data.districtName,
            }).then(res => {
              console.log(res);
              if(res.code != 200) {
                this.$confirm(res.msg, '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  if(res.code == 201) {
                    this.$router.push('/reportOnlie')
                  }else if(res.code == 202) {

                  }else if(res.code == 203) {
                    
                  }
                }).catch(() => {

                })
              }else if(res.code == 200) {
                // let id = cw.data.projectid
                this.$router.push({
                  path: "reportHouse3",
                  query: {
                    projectId: cw.data.projectid || '',
                    villageId: cw.data.villageId || '',
                    sourceType: cw.data.sourceType
                  }
                });
              }
          })

          }

        })
      })
    },

    getData () {
      countHouseForMap({}).then(res => {
        // console.log(res);
        const d = res.data
        if (d) {
          this.areaData = d
          let arr = []
          d.forEach(e => {
            if (e.childData && e.childData.length > 0) {
              arr.push(...e.childData)
            }
          })
          this.projectData = arr

          this.initBMap(() => {
            // 区域
            this.createLabel(this.areaData, 'areaMarkLabel')

            this.createLabel1(this.projectData, 'areaMarkLabel1')
            let areaLabelEle1 = this.getAreaLabelEle1()
            if (areaLabelEle1.length > 0) {
              areaLabelEle1.forEach(e => {
                e.hide()
              })
            }
          })
        }
      })
    },
    getAreaLabelEle () {
      const all = this.map.getOverlays()
      return all.filter(e => e.layerType == 'areaMarkLabel')
    },
    getAreaLabelEle1 () {
      const all = this.map.getOverlays()
      return all.filter(e => e.layerType == 'areaMarkLabel1')
    },
  },
  watch: {
    // 区域marker对象的显影问题待研究，api无法实现显影交互
    zoom (newV, oldV) {
      if (newV >= 14 && this.isAreaMarkerVisible) {
        this.isAreaMarkerVisible = false

        let areaLabelEle = this.getAreaLabelEle()
        if (areaLabelEle.length > 0) {
          areaLabelEle.forEach(e => {
            e.hide()
          })
        }

        let areaLabelEle1 = this.getAreaLabelEle1()
        if (areaLabelEle1.length > 0) {
          areaLabelEle1.forEach(e => {
            e.show()
          })
        }
      } else if (newV <= 13 && !this.isAreaMarkerVisible) {
        this.isAreaMarkerVisible = true

        const areaLabelEle = this.getAreaLabelEle()
        if (areaLabelEle.length > 0) {
          areaLabelEle.forEach(e => {
            e.show()
          })
        }

        let areaLabelEle1 = this.getAreaLabelEle1()
        if (areaLabelEle1.length > 0) {
          areaLabelEle1.forEach(e => {
            e.hide()
          })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}
#allmap {
  width: 100%;
  height: 500px;
}
p {
  margin-left: 5px;
  font-size: 14px;
}
.BMapLabel {
  background: transparent;
  border-color: transparent;
}

#allmap {
  & /deep/ .BMap_cpyCtrl {
    display: none;
  }
  & /deep/ .anchorBL {
    display: none;
  }
}

.tooltip {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: rgba(0,0,0,0.3);
  color: #f00;
}
.mapBox {
  position: relative;
}
</style>
