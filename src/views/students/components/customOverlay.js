import { EventBus } from '@/event-bus.js';

class customOverlay extends TMap.DOMOverlay {
    constructor(options) {
        super(options);
    }

    // 初始化：获取配置参数
    onInit({
        position,
        data,
        minRadius = 0,
        maxRadius = 50,
        contentName,
        contentCount,
        layerType
    } = {}) {
        Object.assign(this, {
            position,
            data,
            minRadius,
            maxRadius,
            contentName,
            contentCount,
            layerType
        });
    }

    // 创建DOM元素，返回一个Element，使用this.dom可以获取到这个元素
    createDOM() {
        let mydom=document.createElement("div");
        //设置DOM样式
        if(this.layerType == 'projectLabel'){ // 项目
            mydom.style.cssText = 'padding:5px 10px;background:#6495ED;line-height:15px;font-size:14px;position:absolute;top:0px;left:0px;color:#fff;cursor:pointer;border-radius: 6px;';
            let d = this.data
            let total = d.housecountA + d.housecountB + d.housecountC
            let name = ""
            if(d.sourceType == 2) {
                name = d.villageName
            }else if(d.sourceType == 3) {
                name = d.projectname
            }
            mydom.innerHTML = `<span>${name}</span><br/><span>${total}套</span>`

            this.onClick = (e) => {
                window.customProcjectClickFirst = true
                e.stopPropagation()
                // DOMOverlay继承自EventEmitter，可以使用emit触发事件
                EventBus.$emit('customProcjectClick', d)
            };
        }else{ // 区域
            mydom.style.cssText = 'padding:10px;background:#6495ED;line-height:15px;font-size:18px;position:absolute;top:0px;left:0px;border-radius: 50%;width: 90px;height: 90px;color:#fff;padding-top: 30px;cursor:pointer;';
            // mydom.style.cssText = 'border: 1px solid #fff;padding:1px;background:#6495ED;line-height:15px;font-size:18px;position:absolute;top:0px;left:0px;border-radius: 50%;width: 90px;height: 90px;color:#fff;padding-top: 30px;cursor:pointer;';
            mydom.innerHTML = `<span>${this.contentName}</span><br/><span>${this.contentCount}套</span>`
        
            
            this.onClick = (e) => {
                // DOMOverlay继承自EventEmitter，可以使用emit触发事件
                this.map.zoomTo(14)
                
                setTimeout(() => {
                    this.map.panTo(this.position)
                    EventBus.$emit('customAreaClick', 14)
                }, 400)
            };
        }
        mydom.addEventListener('click', this.onClick);
        return mydom;
    }

    // 更新DOM元素，在地图移动/缩放后执行
    updateDOM() {
        if (!this.map) {
            return;
        }
     
        // 经纬度坐标转容器像素坐标
        let pixel = this.map.projectToContainer(this.position);
     
        //默认使用DOM左上角作为坐标焦点进行绘制（左上对齐）
        let left = pixel.getX() - this.dom.clientWidth / 2 + 'px';
        let top = pixel.getY() - this.dom.clientHeight / 2 + 'px';
         
        //将平面坐标转为三维空间坐标
        this.dom.style.transform = `translate(${left}, ${top})`;
    }

    // 销毁时
    onDestroy() {
        if (this.onClick) {
            this.dom.removeEventListener(this.onClick);
        }
    }
}

export default customOverlay