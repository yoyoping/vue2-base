module.exports = {
  devServer: {
    publicPath: '',
    // 设置代理
    proxy: {
      '': {
        // target: 'http://training.svinsight.com', // 线上开发环境服务器
        target: 'http://120.78.128.49:3000', // 本地开发服务器
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRequiresRewrite: {
          '': ''
        }
      }
    }
  }
}
