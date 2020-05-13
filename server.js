const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
// this is our dummy database
const questions = require("./data/questions.json")



const typeDefs = gql `


  type Question {
     id: Int
     question: String!
     answer1: String!
     answer2: String!
     answer3: String!
     answer4: String!
     correctAnswer: String!
  }

  type Query {
    name: String
    questions: [Question]
  } 

  input newQuestion {
     question: String!
     answer1: String!
     answer2: String!
     answer3: String!
     answer4: String!
     correctAnswer: String!
    }

  type Mutation {
     createQuestion(input: newQuestion): Question 
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

  Mutation: {
      createQuestion: (request) => {
        const newQuestion = request.question;
        data.push(newQuestion)
        return newQuestion
      }
  }
}; 



const server = new ApolloServer({ typeDefs, resolvers })

const app = express();



app.use(express.static(__dirname + "/dist"));

server.applyMiddleware({ app });

const port = process.env.PORT || 4000
app.listen(port, () => {
// app.listen({ port: 4000 }, () =>
  console.log('Now browse tooooo http://localhost:4000' + server.graphqlPath)
});


