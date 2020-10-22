//1.导入express模块   require() 用于在当前模块中加载和使用其他模块
const express = require('express')
//2.创建应用对象
const app = express()
//3.创建路由规则
app.get('/home',(request,response)=>{
  //响应一个页面
  //访问http://localhost:9000/home访问index.html页面
  //__dirname 绝对地址
  response.sendFile(__dirname+'/index.html')

})

app.get('/data',(request,response)=>{
  //send发送响应请求
  response.send('UserInfo')
})
//app.listen() 就是在给定的主机和端口上监听请求
app.listen(9000,()=>{
  console.log('Server is starting....')
})
