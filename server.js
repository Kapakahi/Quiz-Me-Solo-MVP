const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
// this is our dummy database
const questions = require("./data/questions.json")


const typeDefs = gql `

   type Question {
     question: String!
     answer1: String!
     answer2: String!
     answer3: String!
     answer4: String!
     answer5: String!
     correctAnswer: String!
   }

   type Query {
    name: String
    questions: [Question]
  } 
`;

// right here

const resolvers = {
  Query:  {
    name: () => 'Garrett',
    questions: () => {
      // we need to get the questions from somewhere
      // and offer them as tribute to the GraphQL god
      // in the proper shape
      return questions;
    }
  },
}; 

const server = new ApolloServer({ typeDefs, resolvers })

const app = express();

app.use(express.static(__dirname + "/dist"));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse tooooo http://localhost:4000' + server.graphqlPath)
);


