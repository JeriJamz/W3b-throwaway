const fs = require('fs')
const express = require('express')

const port = process.env.PORT || 4655

const app = express()

app.get('/', respondText)//all these are functions that gotta get defined
app.get('/json', respondJson)
app.get('/static/*', respondStatic)

app.listen(port, () => console.log(`Server listening on port ${port}`))

function respondText(req, res){

    res.setHeader('Content-Type', 'text/plain')//this put it at the header and heres the arg
    res.end('Hi')//this is the message that will be displayed

}

function respondJson(req, res){

    res.json({text: 'hi', number: [1,2,36,5,86]})

}


function respondEcho(req, res){

  const {input = ''} = req.query
  
     res.json({

	normal: input,
	shouty: input.toUpperCase(),
	characterCount: input.legth,
	backwards: input
	    .split('')
	    .reverse()
	    .join('') 

     })

}


function respondStatic(req, res){

   const filename = `${__dirname}/publc/${req/params[0]}`
   is.createReadStream(filename)
	.on('error', ()=> respondNotFound(req, res))
	.pipe(res)
}



