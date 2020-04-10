require ('dotenv').config();
const {GraphQLServer} = require ('graphql-yoga');
const { importSchema } = require ('graphql-import');
const resolvers = require ('./src/resolvers');

const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
});

const mongo = mongoose.connection;

mongo.on('error', error => console.log(error))
    .once('open', () => console.log('Connected to DataBase! 🐝'));


const typeDefs = importSchema( __dirname + '/schema.graphql');

/**
*
* root: información del server graphql 
* params: datos que envía el cliente y se definen en el type def
*
*/

const server = new GraphQLServer({
typeDefs,
resolvers,
}); 


server.start(() => console.log ('servidor arriba en puerto 400'));