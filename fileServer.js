//this is working but its a progress
//this is supposed to hold local files(txt)
//this is basically Server2 cont.
const http = require('http')//cli/hos connect
const fs = require('fs')
const querystring = require('querystring')

const port = process.env.PORT || 6854 //hopefully this is random

const server = http.createServer(function (req, res){

    //this is what make it a local...LOCAL server
    if(req.url == '/') return respondText(req, res)
    if(req.url == '/json') return respondJson(req, res)
    if(req.url.match(/^\/echo/)) return responEcho(req, res)
    if(req.url.match(/^\/static/)) return respondStatic(req, res)

    respondNotFound(req, res)

})

function respondEcho(req, res){

  const { input =''} = querystring.parse(

    req.url
	.split('?')
	.splice(1)
	.join('')
  )
 
    res.setHeader('Content-Type','application/json')
    res.end(

	JSON.stringify({



	})
    )
}

function respondStatic(req, res){

    const filename = `${__dirname}/public${req.url.split('/static')[1]}`
    fs.createReadStream(filename)
	.on('error', ()=> respondNotFound(req, res))
	.pipe(res)
}

function respondNotFound(req, res){//gotta actually make these things they not built in

    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Not Found')

}