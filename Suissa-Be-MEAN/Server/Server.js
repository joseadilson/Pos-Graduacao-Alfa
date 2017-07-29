var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>hellow World</h1>");
  //response.end();
});

server.listen(3000, function(){
  console.log('Executando Servidor HTTP, http://localhosto:3000/');
});

