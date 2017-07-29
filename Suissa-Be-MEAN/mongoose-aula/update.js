const mongoose = require( './config' )
 
const _schema = {
  name:  String
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( 'Pokemon', schema )

const query = { age: 20 }
const mod = { name: 'Modou' }
 
Model.update( query, mod, ( err, data ) => {
  if ( err ) return console.log( 'ERRO: ', err )
 
  return console.log( 'Modificou:', data )
})