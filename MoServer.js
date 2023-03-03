const http = require('http');

//const port=(6000);
const port = process.env.PORT || 6000

const server = http.createServer(function (req,res) {
    console.log('Idk how make the window pop up on my server');
    res.SetHeader('Content-Type','application/json');
    res.end(JSON.stringify({text: 'Yer',numbers: [1,23,456]}));
    res.end('request');
});

function responeNotFound(res,req){
    res.writeHead(404,{'Content-Type':'text/plain'});//This write a header i think, like it an attr of the 404
    res.end('That shit not real');//this make it seem like the page broke
}

server.listen(port);
console.log(`Server listening on port ${port}`);
