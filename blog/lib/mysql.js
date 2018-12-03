var mysql=require('mysql');
var config=require('../config/index')
var pool=mysql.createPool({
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    port:config.database.PORT
})
let query=(sql,values)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
//注册用户
exports.insertData=(value)=>{
    let _sql='insert into user set name=?,password=?,moment=?'
    return query(_sql,value)
}
//判断用户是否存在
exports.findDataCountByName=(name)=>{
    let _sql=`select count(*) as count from user where name="${name}"`;
    return query(_sql)
}
//查询用户名和密码
exports.findDataByName=(name)=>{
    let _sql=`select * from user where name="${name}"`
    return query(_sql)
}