var fn_index=async (ctx,next)=>{
    ctx.response.body=`
    <form action="/signin">
        <p>name :<input name="name" /></p>
        <p>gender :<input name="gender" /></p>
        <button type="submit">submit</button>
    </form>
    `
}
var fn_signin=async (ctx,next)=>{
    var name=ctx.request.body.name||'',
    password=ctx.request.body.password||'';
    if(name==='dantyli'&&password=='123456'){
        ctx.response.body=`<h1>welcome ,${name}</h1>`
    }else{
        ctx.response.body=`<h1>login failed</h1>`
    }
}
module.exports={
    'GET /':fn_index,
    'POST /sign':fn_signin
}