const http = require('http');

const hostname = '444.5.6.3';//this the address 
const port = 1546;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server is http://${hostname}`)//this is a raw string text
});




