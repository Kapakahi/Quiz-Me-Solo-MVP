///MAYBE DELETE THIS PAGE?!?

const { gql } = require('apollo-server');





const typeDefs = gql`

  type Question {
    id: ID,
    question: String!,
    answer1: String!,
    answer2: String!,
    answer3: String!,
    answer4: String!,
    answer5: String!,
    correctAnswer: String!,
    isCorrect: Boolean
  }

  type Query {
    id: ID
    
  }
  `;

module.exports = typeDefs;