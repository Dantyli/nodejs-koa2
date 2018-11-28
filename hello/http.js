'use strict'
var 
    fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
var root=path.resolve('./')
var server=http.createServer((request,response)=>{
    var pathname=url.parse(request.url).pathname
    var filepath=path.join(root,'./',pathname)
    console.log(filepath)
    fs.stat(filepath,(err,stats)=>{
        if(!err&&stats.isFile()){
            response.writeHead(200)
            fs.createReadStream(filepath).pipe(response)
        }else{
            response.writeHead(404)
        }
    })
})
server.listen(1111)