    //1. 引入express
    const express = require('express');

    //2. 创建应用对象
    const app = express();

    //3. 创建路由规则
    // request 是对请求报文的封装
    // response 是对响应报文的封装
    // url的路径是/server,就会执行回调函数里面的代码,并且response进行响应
    app.get('/server', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        //设置响应体
        //访问http://localhost:8000/server 页面会显示 HELLO AJAX - 2
        response.send('HELLO AJAX - 2');
    });

    //可以接收任意类型的请求
    app.all('/server', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        //响应头
        response.setHeader('Access-Control-Allow-Headers', '*');
        //设置响应体
        response.send('HELLO AJAX POST');
    });

    //JSON 响应
    app.all('/json-server', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        //响应头
        response.setHeader('Access-Control-Allow-Headers', '*');
        //响应一个数据
        const data = {
            name: 'atguigu'
        };
        //对对象进行字符串转换
        let str = JSON.stringify(data);
        //设置响应体
        response.send(str);
    });

    //针对 IE 缓存
    app.get('/ie', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        //设置响应体
        response.send('HELLO IE - 5');
    });

    //延时响应
    app.all('/delay', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        setTimeout(() => {
            //设置响应体
            response.send('延时响应');
        }, 1000)
    });

    //jQuery 服务
    app.all('/jquery-server', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        // response.send('Hello jQuery AJAX');
        const data = {name:'尚硅谷'};
        response.send(JSON.stringify(data));
    });

    //axios 服务
    app.all('/axios-server', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        // response.send('Hello jQuery AJAX');
        const data = {name:'尚硅谷'};
        //响应数据
        response.send(JSON.stringify(data));
    });

    //fetch 服务
    app.all('/fetch-server', (request, response) => {
        //设置响应头  设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        // response.send('Hello jQuery AJAX');
        const data = {name:'尚硅谷'};
        response.send(JSON.stringify(data));
    });

    //jsonp服务
    app.all('/jsonp-server',(request, response) => {
        // response.send('console.log("hello jsonp")');
        const data = {
            name: '尚硅谷atguigu'
        };
        //将数据转化为字符串
        let str = JSON.stringify(data);
        //返回结果
        //end不会返回特殊请求头
        //返回结果的形式是函数调用,形参是想要返回的结果数据
        response.end(`handle(${str})`);
    });

    //用户名检测是否存在
    app.all('/check-username',(request, response) => {
        // response.send('console.log("hello jsonp")');
        const data = {
            exist: 1,
            msg: '用户名已经存在'
        };
        //将数据转化为字符串
        let str = JSON.stringify(data);
        //返回结果
        //服务器里用handle,则全局作用域下必须有handle函数声明
        response.end(`handle(${str})`);
    });

    //jquery-jsonp
    app.all('/jquery-jsonp-server',(request, response) => {
        // response.send('console.log("hello jsonp")');
        const data = {
            name:'尚硅谷',
            city: ['北京','上海','深圳']
        };
        //将数据转化为字符串
        let str = JSON.stringify(data);
        //接收 callback 参数
        let cb = request.query.callback;

        //返回结果
        response.end(`${cb}(${str})`);
    });
    //cors
    app.all('/cors-server', (request, response)=>{
        //设置响应头
        //Access-Control-Allow-Origin 来源
        //Access-Control-Allow-Headers 头信息
        //Access-Control-Allow-Method 请求方法
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", '*');
        response.setHeader("Access-Control-Allow-Method", '*');
        // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        response.send('hello CORS');
    });

    //4. 监听端口启动服务
    app.listen(8000, () => {
        console.log("服务已经启动, 8000 端口监听中....");
    });
