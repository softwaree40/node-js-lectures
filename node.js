// const os = require("os")
// let totalMemory = os.totalmem()
// let freeMemory = os.freemem
// console.log(`This is Total Memory: ${totalMemory}`)
// console.log(`This is Free Memory: ${freeMemory}`)
// // create files system with node

// const fs = require("fs")
// fs.readdir("./",(errors,files)=>{
//    if(errors){
//      console.log(errors)
//    }else{
//        console.log("I am files",files)
//    }
// })
// Event in node
// This is a class EventEmitter
const EventEmitter = require("events")
// create new instance of EventEmitter
const emitter = new EventEmitter()
// let handle the event that is raise or emit
emitter.on("EmailMessages Sends",(arg)=>{
    console.log("I am listening to the emailMessage Sends!", arg)
})
// Create object to emit
const objConfig = {
  id: 1,
  firstname: "John",
  lastname: "steven"

}
// let emit or raise event
emitter.emit("EmailMessages Sends",objConfig)



