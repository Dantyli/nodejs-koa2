const Koa=require('koa')
const app=new Koa()
const bodyParser=require('koa-bodyparser')
//bodyParser是一个方法，点调用时();
app.use(bodyParser());
//get 方法
app.use(async (ctx,next)=>{
    let url=ctx.url
    let req=ctx.request
    await next()
    console.log(req)

})

//post 方法
app.use(async (ctx,next)=>{
    if(ctx.method=='POST'){
        let postData=ctx.request.body
        ctx.body=postData
        console.log(postData)
    }else{
        ctx.body=`<form action="/" method="post">
        <input name="name"/>
        <input name="gender"/>
        <input type="submit" value="submit"/>
        </form>`
    }
})
app.listen(3000)