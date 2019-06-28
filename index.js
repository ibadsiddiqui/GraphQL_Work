//Import ApolloServer for creating an instance of a apollo/graphql server.
//Also import gql for creating your graphql schema.
require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const resolvers = require('./graphFiles/resolvers');
const typeDefs = require('./graphFiles/typeDefs');

//Define your server by assigning it to your ApolloServer instance.
const server = new ApolloServer({ resolvers, typeDefs })

//Now listen on your server.
server.listen({ port: process.env.PORT }).then(({ url }) =>
    console.log('Listening on ' + url)
);