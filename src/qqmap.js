// 腾讯地图
export function qqmap(ak) {
    return new Promise(function(resolve, reject) {
      window.init = function() {
        resolve(TMap)
      }
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        'https://map.qq.com/api/gljs?v=1.exp&key=S6IBZ-KIBLX-B324Z-TUMVO-3AAQK-EBB2N'
      script.onerror = reject
      document.head.appendChild(script)
    })
  }
  