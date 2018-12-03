const router=require('koa-router')()
const controller=require('../controller/signup')
//注册页面和post注册
router.get('/signup',controller.getSignup)
router.post('/signup',controller.postSignup)
module.exports=router