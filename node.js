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
// let handle the event that is raise
emitter.on("EmailMessages Sends",()=>{
    console.log("I am listening to the emailMessage Sends!")
})
// let emit or raise event
emitter.emit("EmailMessages Sends")


