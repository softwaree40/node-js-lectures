const os = require("os")
let totalMemory = os.totalmem()
let freeMemory = os.freemem
console.log(`This is Total Memory: ${totalMemory}`)
console.log(`This is Free Memory: ${freeMemory}`)
// create files system with node

const fs = require("fs")
fs.readdir("./",(errors,files)=>{
   if(errors){
     console.log(errors)
   }else{
       console.log("I am files",files)
   }
})