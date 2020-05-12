const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "quiz-me-mvp.herokuapp.com",
    user: "postgres",
    password: "",   // Change later?!?
    database: "trivia"
  }
})



module.exports = db;






