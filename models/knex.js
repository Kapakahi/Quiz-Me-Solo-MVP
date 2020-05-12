const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "hello",
    database: "trivia"
  }
})



module.exports = db;


/* const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/truckstop`,
  searchPath: "public", */
//});





