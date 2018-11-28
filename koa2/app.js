const Koa=require('koa')
const app=new Koa()
//对于任何请求app将调用该异步函数处理请求
app.use(async (ctx,next)=>{
    await next()
    ctx.response.text='text/html'
    ctx.response.body='<h1>hello,koa2</h1>'
})
app.listen(3000)
console.log('app started at port 3000..')