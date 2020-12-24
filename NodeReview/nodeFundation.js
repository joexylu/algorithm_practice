// in node, no window but global.


//make a module(scope of that file)
var url = "http://logger.io"

function log(message){
    console.log(message)
}// module.export = log or module.export.log = log
//to log module by require("log")

//module wrapper funciont
(function(exports, require, module, _filename, _dirname){

})

//build in path, os, file system, event module in nodejs

//event module
// const EventEmitter = require('events')//class

// const emitter = new EventEmitter()
// //register a listener
// emitter.on('messageLogged', function(){
//     console.log("listener call")
// })
// //raise event
// emitter.emit('messageLogged', 1, 'url')

//or

class Logger extends EventEmitter{
    log(message){
        console.log(message)
        this.emit("message", {id:1, url:"http"})
    }
}
// module.export = Logger


//HTTP module
const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('hello world')
        res.end()
    }
})

// server.listen(3000)


//what is buffer and stream
//temporary storage spot for a chunk of data being transferred
//stream is stream of data flow from one place to another, transfer data and increase performance

//what is middileware? 
//app.use() method 
//function to get request and send back response in server

// setImmediate() is designed to execute a script once the current poll (event loop) 
// phase completes.

// setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.

// What is package.json? What is it used for?
// This file holds various metadata information about the project. This file is used to give 
// information to npm that allows it to identify the project as well as handle the project's 
// dependencies.

// What is Streams in Node.js?
// Streams are pipes that let you easily read data from a source and pipe it to a destination. 
// Simply put, a stream is nothing but an EventEmitter and implements some specials methods. 
// Depending on the methods implemented, a stream becomes Readable, Writable, or Duplex 
// (both readable and writable).

//what is callback?
// A callback is a function called at the completion of a given task; this prevents any blocking, 
// and allows other code to be run in the meantime.

