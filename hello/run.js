'use strict'
var fs=require('fs')
var path=require('path')
process.nextTick(()=>{
    console.log('callback')
})
console.log('set')
process.on('exit',(code)=>{
    console.log(`ahout to exit with code ${code}`)
})
fs.readFile(path.resolve(__dirname,'./sample.txt'),'utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('read'+data)
    }
})
var rs=fs.createReadStream(path.resolve(__dirname,'./sample.txt'),'utf-8')
rs.on('data',function(chunk){
    console.log('DATA')
    console.log(chunk)
})
rs.on('end',function(){
    console.log('end')
})
rs.on('error',(err)=>{
    //console.log(err)
})
