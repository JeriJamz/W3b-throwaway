/*Going over node work again also this is supposed to be the first API*/
//Ima a python guy. Pray for me.
const server = http.createServer(function(req, res){//request and response

    if(req.url =='/') return respondText(req, res)
    if(req.url =='\json') return respondJson(req, res)
    if(req.url.match(/^\/echo/)) return respondEcho(req, res)//this an a style call from the api

    resondNotFound(req, res)

})

function respondEcho(req, res){

  const { input = '' } = querystring.parse(//I this this parse is so we can actually take input and read whats going on

    req.url
	.split('?')
	.splice(1)
	.join('')

  )
  res.setHeader('Contet-Type', 'application/json')//Ima assume this is setting the header and this will come atop the screen
  res.end(//the respose. It can dont do this class and it methods

    JSON.stringfy({//this calls the JSON functions and us can make styles to JSON strings

	normal: input,
	shouty: input.toUpperCase(),/*We are actually make an API, I feel like Js is the C of websites*/
	characterCount: input.length,
	backwards: input
	    .split('')
	    .reverse()
	    .join('')

    }) 
  )
}