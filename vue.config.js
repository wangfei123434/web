module.exports = {
  lintOnSave: false,
  productionSourceMap:false,
  devServer: {
    open: true,
    port: 8081,
    proxy: {
      "/gateway": {
        // target: "http://172.16.10.173:4105", // 目标路径
        target: "http://58.49.165.170:8084", // 目标路径
        // target: "http://172.16.10.174:81", // 目标路径
        // target: "http://www.whzc.gov.cn", // 目标路径

        changeOrigin: true, // 是否跨域
        ws: true
      },
      "/images": {
        target: "http://172.16.10.173:81", // 目标路径
        changeOrigin: true, // 是否跨域
        ws: true
      },
      // "/user": {
      //   target: "http://58.49.165.170:8084/images/", // 目标路径
      //   changeOrigin: true, // 是否跨域
      //   ws: true
      // },
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '武汉人才服务网'
        return args
      })
  }
};
