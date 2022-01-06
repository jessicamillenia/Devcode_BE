'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("activities", [
      {
        email: "abc@gmail.com",
        title: "coba 1",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "abc@gmail.com",
        title: "coba 2",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "def@gmail.com",
        title: "coba 3",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "def@gmail.com",
        title: "coba 4",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "ghi@gmail.com",
        title: "coba 5",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "ghi@gmail.com",
        title: "coba 6",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "jkl@gmail.com",
        title: "coba 7",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "jkl@gmail.com",
        title: "coba 8",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "mno@gmail.com",
        title: "coba 9",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        email: "mno@gmail.com",
        title: "coba 10",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("activities", null, {});
  }
};
