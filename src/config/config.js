require("dotenv").config();

const {
  DB_HOSTNAME_DEV,
  DB_NAME_DEV,
  DB_USERNAME_DEV,
  DB_PASSWORD_DEV,
  DB_PORT_DEV,

  DB_HOSTNAME_TEST,
  DB_NAME_TEST,
  DB_USERNAME_TEST,
  DB_PASSWORD_TEST,
  DB_PORT_TEST,

  DB_HOSTNAME_PROD,
  DB_NAME_PROD,
  DB_USERNAME_PROD,
  DB_PASSWORD_PROD, 
  DB_PORT_PROD,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_NAME_DEV,
    host: DB_HOSTNAME_DEV,
    port: DB_PORT_DEV,
    dialect: "mysql",

    // logging: console.log,

    dialectOptions: {
      connectTimeout: 120000,
    },
  },
  test: {
    username: DB_USERNAME_TEST,
    password: DB_PASSWORD_TEST,
    database: DB_NAME_TEST,
    host: DB_HOSTNAME_TEST,
    dialect: "mysql",
    port: DB_PORT_TEST,
    
    dialectOptions: {
      connectTimeout: 120000,
    },
  },

  production: {
    username: DB_USERNAME_PROD,
    password: DB_PASSWORD_PROD,
    database: DB_NAME_PROD,
    host: DB_HOSTNAME_PROD,
    port: DB_PORT_PROD,
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 120000,
    },
  },
};