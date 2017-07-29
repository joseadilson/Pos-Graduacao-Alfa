const mongoose = require( 'mongoose' )
const dbURI = 'mongodb://localhost/pos-alfa-2017'

mongoose.connect( dbURI )

mongoose.connection.on( 'connection', () => console.log( `Mongoose default open to ${dbURI}` ) )
mongoose.connection.on( 'disconnected', () => console.log( `Mongoose connection desconnected` ) )
mongoose.connection.on( 'open', () => console.log( `Mongoose connection open` ) )
mongoose.connection.on( 'error', ( err ) => console.log( `Mongoose default error: ${err}` ) )


process.on( 'SIGINT', () => 
    mongoose.connection.close( () => {
        console.log('Mongoose disconected through app termination')
        process.exit(0)
    } )
)

module.exports = mongoose