const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

/* const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});


app.get('/', (req, res) => res.send('Hello World!')) */
