var http = require('http');
var fs = require('fs');

const index = fs.readFileSync('./index.html')

http.createServer((request, response) => {
  
  if ( request.url === '' ) {
    response.writeHead( 200, {"Content-Type" : "text/html"} )
    return response.end( fs.readFileSync( './index.html' ) )
  }

  const url = request.url.replace( '/', '' )
  console.log( 'url', url )
  fs.readFile( url + '.html', ( err, file ) => {
    response.writeHead( 400, { 'Content-Type': 'text/html' } )
  } )
  
  

  
  response.end(index)
})
.listen(3000)
  console.log('Executando Servidor HTTP, http://localhost:3000/');

