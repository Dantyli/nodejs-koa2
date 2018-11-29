var Koa=require('koa')
var app=new Koa()
app.use(async (ctx,next)=>{
    var start=new Date().getTime();
    await next()
    var ms=new Date().getTime()-start
    console.log(`耗时${ms}ms`)
    ctx.response.body='hello '
})
//logger
app.use(async (ctx,next)=>{
    var start=new Date().getTime()
    await next()
    var ms=new Date().getTime()-start;
    console.log('%s %s-%s',ctx.method,ctx.url,ms)
})
app.use(async ()=>{
    this.body='hello world'
})
app.listen(3000)