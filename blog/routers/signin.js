const router=require('koa-router')()
const controller=require('../controller/signin')
router.get('/signin',controller.getSignin)
router.post('/signin',controller.postSignin)
module.exports=router