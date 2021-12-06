module.exports={
  publicPath:'./',
  //修改 webpackn
  chainWebpack(config){
    config.plugin('html').tap(args=>{
      args[0].title='校園社團介紹網'
      return args
    })
  }
}