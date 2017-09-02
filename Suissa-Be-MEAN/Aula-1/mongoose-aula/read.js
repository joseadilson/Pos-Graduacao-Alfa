const mongoose = require( './config' )
 
const data = { name: 'José Adilson' }
 
Model.find( {}, ( err, data ) => {
  if ( err ) return console.log( 'ERRO: ', err )
 
  return console.log( 'Listagem:', data )
})