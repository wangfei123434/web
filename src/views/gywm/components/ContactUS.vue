<template>
  <div class="bg-white ptb-50 w-1200-auto">
    <div class="map mtb-20">
      <!-- <iframe class="w-full h-full" src="https://map.baidu.com/@12725273.29,3558757.28,12z" border="0"/> -->
      <div class="w-full h-full" id="map"></div>
    </div>
    <div class="ContactUS-box flex">
      <div class="ContactUS-item mr-20 f-1">
        <div class="ContactUS-item__title">
          联系地址
        </div>
        <div class="ContactUS-item__sub-title">
          Contact address
        </div>
        <div class="ContactUS-item__detail">
          地址：武汉市江岸区劳动街办事处惠济路39号杨森公馆
        </div>
        <div class="line"></div>
        <img :src="locationImg" class="w-24 h-30 icon" />
      </div>
      <div class="ContactUS-item f-1">
        <div class="ContactUS-item__title">
          联系电话
        </div>
        <div class="ContactUS-item__sub-title">
          Contact number
        </div>
        <div class="ContactUS-item__detail bold">
          027-82267029
        </div>
        <div class="line"></div>
        <img :src="phoneImg" class="w-26 h-26 icon" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      locationImg: require("../images/location.png"),
      phoneImg: require("../images/phone.png")
    };
  },
  mounted() {
    var map;
    //创建和初始化地图函数：
    function initMap() {
      createMap(); //创建地图
      setMapEvent(); //设置地图事件
      addMapControl(); //向地图添加控件
      addMapOverlay(); //向地图添加覆盖物
    }
    function createMap() {
      map = new BMap.Map("map");
      map.centerAndZoom(new BMap.Point(114.298344, 30.616921), 16);
    }
    function setMapEvent() {
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom();
    }
    function addClickHandler(target, window) {
      target.addEventListener("click", function() {
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay() {
      var markers = [
        {
          content: "地址：武汉市江岸区劳动街办事处惠济路39号杨森公馆",
          title: "武汉市人才工作局",
          imageOffset: { width: -23, height: -21 },
          position: { lat: 30.616921, lng: 114.298344 },
        }
      ];
      for (var index = 0; index < markers.length; index++) {
        var point = new BMap.Point(
          markers[index].position.lng,
          markers[index].position.lat
        );
        var marker = new BMap.Marker(point, {
          icon: new BMap.Icon(
            "http://api.map.baidu.com/lbsapi/createmap/images/icon.png",
            new BMap.Size(20, 25),
            {
              imageOffset: new BMap.Size(
                markers[index].imageOffset.width,
                markers[index].imageOffset.height
              )
            }
          )
        });
        var label = new BMap.Label(markers[index].title, {
          offset: new BMap.Size(25, 5)
        });
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
        marker.setLabel(label);
        addClickHandler(marker, infoWindow);
        map.addOverlay(marker);
      }
    }
    //向地图添加控件
    function addMapControl() {
      var scaleControl = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      });
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: true
      });
      map.addControl(overviewControl);
    }
    initMap();
  }
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 562px;
  background: #ffffff;
  //border: 1px solid #707070;
  opacity: 1;
}
.ContactUS-box {
  .ContactUS-item {
    height: 250px;
    padding: 50px;
    position: relative;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
    > * {
      text-align: left;
    }
    .ContactUS-item__title {
      font-size: 22px;
      font-weight: bold;
    }
    .ContactUS-item__sub-title {
      font-size: 14px;
      font-weight: 400;
      opacity: 1;
    }
    .ContactUS-item__detail {
      font-size: 16px;
      font-weight: 400;
      margin-top: 30px;
    }
    &:first-child {
      background: #0a63dd;
      color: white;
      .line {
        background: white;
      }
    }
    &:last-child {
      background: #f4f4f4;
      color: #273140 !important;
      .line {
        background: #273140;
      }
    }
    .icon {
      position: absolute;
      right: 37px;
      top: 40px;
    }
    .line {
      right: 50px;
      bottom: 50px;
      position: absolute;
      width: 1px;
      height: 110px;
      content: "";
    }
  }
}

::v-deep .BMapLabel{
  font-size: 30px !important;
  padding: 10px !important;
}
</style>
