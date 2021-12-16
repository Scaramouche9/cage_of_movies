// import http module and listen for requests on port 8080
// iport url module at top 

const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
}).listen(8080);