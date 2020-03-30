const {GraphQLServer} = require ('graphql-yoga');

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
    
`;

const resolvers = {
    Query:{
        hello:(root, params, context, info) => `hola ${params.name}`
    },
};

/**
*
* root: información del server gel
* params: datos que envía el cliente y se definen en el type def
*
*/

const server = new GraphQLServer({
typeDefs,
resolvers,
}); 


server.start(() => console.log ('servidor arriba en puerto 400'));