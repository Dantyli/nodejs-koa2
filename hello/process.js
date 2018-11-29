//process对象是一个全局变量，无需使用require()
console.log(`current directory :${process.cwd()}`)
for(let k in process.env){
    console.log(`${k}:${process.env[k]}`)
}