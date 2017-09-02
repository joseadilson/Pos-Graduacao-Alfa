var http = require('http');
var fs = require('fs');
var mongoose = require('../mongoose-aula/config')
var Model = require( '../mongoose-aula/model' )

const ACTIONS = [
  'create',
  'read',
  'update',
  'delete'
]


const index = fs.readFileSync('./index.html')

http.createServer((request, response) => {
  
  /*
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
  */

  const url = request.url.replace( '/', '' )
  console.log( 'url', url )
  require( ACTIONS[ action ] )
  switch(action) {
    case 'create':
        require( './create' )      
        break;
    case 'update':
        
        break;
    case 'delete':
        
        break;
    case 'read':
        
        break;
    default:
       console.log('fudeu');
       break;
}
})
.listen(3000)
  console.log('Executando Servidor HTTP, http://localhost:3000/');

