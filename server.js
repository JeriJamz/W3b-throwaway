const http = require('http')
const port = process.env.PORT || 1654 //this is to make a port i think
const server = http.createServer(function (req, res){
    res.end('I gotta stop using notepad')//no semicolon? Sure?
})//this close is for the createServer

server.listen(port)
console.log(`NSA testing ${port}`)//``is a valid string




