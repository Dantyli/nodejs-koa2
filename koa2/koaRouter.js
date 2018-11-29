var Koa=require('koa')
var Router=require('koa-router')
var app=new Koa()
var router=new Router()
router.get('/',(ctx,next)=>{

})
//named routes
router.get('user','/user/:id',(ctx,next)=>{
    //..
})
router.url('user',2)
//multiple middleware
router.get('/users/:id',(ctx,next)=>{
    return URLSearchParams.findOne(ctx.params.id).then((user)=>{
        ctx.name=user
        next()
    })
},
ctx=>{
    console.log(ctx.user)
})
//嵌套路由
var forums=new Router()
var posts=new Router()
posts.get('/',(ctx,next)=>{})
posts.post('/:pid',(ctx,next)=>{})
forums.use('/forums/:fid/posts',posts.routes(),posts.allowedMethods())
app.use(forums.routes())
app.use(router.routes())
//路由前缀
var router=new Router({
    prefix:'/users'
})
router.get('/',(ctx,next)=>{})
router.get('/:id',(ctx,next)=>{})
//url parameters
router.get('/:category/:title',(ctx,next)=>{
    console.log(ctx.params)
    //=>{category:'programming',title:'how to'}
})
router.use(['/users','/admin'],userAuth())
app.use(router.routes())
router.redirect('/login','sign-in')
