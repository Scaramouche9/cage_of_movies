
// calls needed modules
const http = require('http'),
  fs = require('fs'),
  url = require('url');

http.createServer((request, response) => {
  let addr = request.url,
    q = url.parse(addr, true);
  // filePath?

  fs.appendFile('log.txt', 'URL: ' + addr + '\n Timestamp: ' + new Date() + '\n\n', (err) => {
    if (err) {
    console.log(err);
      } else {
    console.log('Added to log');
    }
  });
  
  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }
  
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
}).listen(8080);

