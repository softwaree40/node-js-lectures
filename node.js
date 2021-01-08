const os = require("os")
let totalMemory = os.totalmem()
let freeMemory = os.freemem
console.log(`This is Total Memory: ${totalMemory}`)
console.log(`This is Free Memory: ${freeMemory}`)
