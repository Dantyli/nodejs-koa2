const Koa=require('koa');
const path=require('path');
const bodyParser=require('koa-bodyparser');
const ejs=require('ejs');
const config=require('./config/index')
const router=require('koa-router');
const views=require('koa-views');
const app=new Koa();
//模板渲染中间件
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))
//处理post请求参数
app.use(bodyParser())
//路由
app.use(require('./routers/signup.js').routes())
app.use(require('./routers/signin').routes())

app.listen(config.port,()=>{
    console.log(`starting at port ${config.port}`)
})
