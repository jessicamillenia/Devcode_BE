'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "abc@gmail.com",
        password: await bcrypt.hash("1234567890", 10),
        created_at: new Date(),
        updated_at: null
      },
      {
        email: "def@gmail.com",
        password: await bcrypt.hash("1234567890", 10),
        created_at: new Date(),
        updated_at: null
      },
      {
        email: "ghi@gmail.com",
        password: await bcrypt.hash("1234567890", 10),
        created_at: new Date(),
        updated_at: null
      },
      {
        email: "jkl@gmail.com",
        password: await bcrypt.hash("1234567890", 10),
        created_at: new Date(),
        updated_at: null
      },
      {
        email: "mno@gmail.com",
        password: await bcrypt.hash("1234567890", 10),
        created_at: new Date(),
        updated_at: null
      },
      {
        email: "pqr@gmail.com",
        password: await bcrypt.hash("1234567890", 10),
        created_at: new Date(),
        updated_at: null
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
