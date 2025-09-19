import 'dotenv';
dotenv.config();


module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL, 
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    pool: { min: 2, max: 10 },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    pool: { min: 2, max: 20 },
  },
};
