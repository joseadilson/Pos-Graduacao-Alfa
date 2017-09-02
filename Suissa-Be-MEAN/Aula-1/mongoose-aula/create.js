const mongoose = require( './config' )
const Model = require( './model' )
 
const data = { name: 'José Adilson', age: 20 }
 
Model.create( data, (err, data) => {
  if ( err ) return console.log( 'ERRO: ', err )
 
  return console.log( 'Inseriu:', data )
})