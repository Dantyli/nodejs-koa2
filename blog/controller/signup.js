//注册业务
const sql=require('../lib/mysql')
const moment=require('moment')
const fs=require('fs')
const path=require('path')
async function getSignup(ctx){
    await ctx.render('signup')
}
async function postSignup(ctx){
        let {name,password,repeatpwd}=ctx.request.body
        if(name&&password&&(password==repeatpwd)){
           await sql.findDataCountByName(name).then(async (res)=>{
               console.log(res)
               if(res[0].count>=1){
                   ctx.body='用户存在'
               }else{
                   await sql.insertData([name,password,moment().format('YYYY-MM-DD HH:mm:ss')])
                   .then(result=>{
                       console.log('注册成功')
                       //注册成功
                       ctx.body='signup success'
                   })
               }
           }) 
        }else{
            ctx.body='information not complete'
            console.log('lll')
        }
}
module.exports={
    postSignup:postSignup,
    getSignup:getSignup
}