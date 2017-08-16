const mongoose = require( './config' )
 
const query = { age: 20 }
const mod = { name: 'Modou' }
 
Model.update( query, mod, ( err, data ) => {
  if ( err ) return console.log( 'ERRO: ', err )
 
  return console.log( 'Modificou:', data )
})