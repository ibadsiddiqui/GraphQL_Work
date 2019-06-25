//Import ApolloServer for creating an instance of a apollo/graphql server.
//Also import gql for creating your graphql schema.
require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server');
//Port where your server is listening to.

//Type Definitions with your Query type, and schema query keyword set to it.
const typeDefs = gql`
    # Query object type.
    type Query {
        helloString: String,
        index: Int
    }
    # Assign your query type to your Query type.
    schema {
        query: Query
    }
`
//Define your resolvers that will define how your fields are executed.
const resolvers = {
    Query: {
        helloString: () => "Hello World!",
        index: () => 1

    }
}
//Define your server by assigning it to your ApolloServer instance.
const server = new ApolloServer({ resolvers, typeDefs })

//Now listen on your server.
server.listen({ port: process.env.PORT }).then(({ url }) =>
    console.log('Listening on ' + url)
);