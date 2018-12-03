const sql=require('../lib/mysql');
async function getSignin(ctx){
    ctx.body=`<form method="post" action="/signin">
       <input name="name" />
       <input name="password"/>
       <input type="submit" value="登录">
    </form>`
}
async function postSignin(ctx){
    console.log(ctx.request.body);
    let {name,password}=ctx.request.body
    await sql.findDataByName(name).then(res=>{
        console.log(res[0])
        if(res.length&&res[0].name==name&&res[0].password==password){
            ctx.body='登录成功'
        }else{
            ctx.body='用户或密码错误'
        }
    })
} 
module.exports={
    getSignin,
    postSignin
}