const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "",   // Change later?!?
    database: "trivia"
  }
})



module.exports = db;






