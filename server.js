const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql `
   type Query {
    hello: String
  } 
`;

const resolvers = {
  Query:  {
    hello: () => 'Hellllllo world!',
  },
}; 

const server = new ApolloServer({ typeDefs, resolvers })

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse tooooo http://localhost:4000' + server.graphqlPath)
);


/* const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')

const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors(), bodyParser.json());

const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))

app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
); */