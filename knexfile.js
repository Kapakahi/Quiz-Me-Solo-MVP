const db = require("./server/knex");

module.exports = {
  development: {
    client: "pg",
    connection: db.connection,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
      propagateCreateError: false,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
