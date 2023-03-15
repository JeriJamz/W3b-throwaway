/*Need this funcs*/
const fs  = require('fs')
const http = require('http')
const querystring  = require('querystring')

const port = process.env.PORT || 4564/*Wat if i make this an ip adress and listen*/

const server = http.createServer(function(req, res){

    if(req.url === '/') return respondText(req, res)
    if(req.url === '/json') return respondJson(req, res)
    if(req.url.match(/*\/echo/)) return respondEcho(req, res)
    if(req.url.match(/*\/static/)) return respondStatic(req, res)

    respondNotFound(req, res)

})

server.listen(port)
console.log(`NSA is on port: ${port}`)

function respondText(req, res){

    res.setHeader('Content-Type', 'text/plain')//I like this function
    res.end('Yo')/*This pritnts a string. idc jus no consolelog*/

}

function respondJson(req,res){

    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({text: 'hi', numbers: [1,2,3]}))

}

function respondEcho(req, res){
  
  const{input = ''} = querystring.parse{
    req.url
	.split('?')
	.splice(1)
	.join('')  

}

    res.setHeader('Content-Type', 'application/json')
    res.end(

	JSON.stringfy({

	    normal: input,
	    shouty: input.toUpperCase(),
	    characterCount: input.length,
	    backwards: input
		.split('')
		.reverse()
		.join('')

	})

     )

}


function respondNotFound(req, res){

    res.writeHead(404, {'content-Type', 'text/plain'})
    res.end('Not Found')
}

