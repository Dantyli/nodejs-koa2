'use strict'
const fs=require('fs')
const path=require('path')
fs.readFile(path.join(__dirname,'sample.txt'),'utf-8',(err,data)=>{
    if(err){
        throw err
    }else{
        console.log(data)
    }
})
