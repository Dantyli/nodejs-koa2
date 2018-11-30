const Koa=require('koa')
const views=require('koa-views')
const path=require('path')
const https=require('https')
const app=new Koa()
//加载模板引擎
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))
app.use(async (ctx)=>{
    let res=await getHBMarket()
    data=res.data
    await ctx.render('index',{
        data
    })
})

function getHBMarket(){
    return new Promise((resolve,reject)=>{
        https.get('https://www.huobi.co/-/x/pro/market/overview5',(res)=>{
            var str=''
            res.on('data',(chunk)=>{
                str+=chunk
            })
            res.on('end',()=>{
                resolve(JSON.parse(str))
            })
            res.on('error',()=>{
                reject('request fail')
            })
        })
    })
}
app.listen(3000,()=>{
    console.log(`start at port 3000`)
})

