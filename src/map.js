export function BMp(ak) {
  return new Promise(function(resolve, reject) {
    window.init = function() {
      // resolve(BMp)
      resolve(BMapGL)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      // 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
      'http://api.map.baidu.com/api?type=webgl&v=2.0&ak=' + ak + '&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
