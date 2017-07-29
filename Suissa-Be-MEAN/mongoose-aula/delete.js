const mongoose = require( './config' )
 
const _schema = {
  name:  String
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( 'Pokemon', schema )
 
Model.remove( {}, ( err, data ) => {
  if ( err ) return console.log( 'ERRO: ', err )
 
  return console.log( 'Removeu:', data )
})