'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todos", [
      {
        activity_group_id: 1,
        title: "test1",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 1,
        title: "test2",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 1,
        title: "test3",
        is_active: "1",
        priority: "high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 1,
        title: "test4",
        is_active: "1",
        priority: "low",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 2,
        title: "test1",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 2,
        title: "test2",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 2,
        title: "test3",
        is_active: "1",
        priority: "high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 2,
        title: "test4",
        is_active: "1",
        priority: "low",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 3,
        title: "test1",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 3,
        title: "test2",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 3,
        title: "test3",
        is_active: "1",
        priority: "high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 3,
        title: "test4",
        is_active: "1",
        priority: "low",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 4,
        title: "test1",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 4,
        title: "test2",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 4,
        title: "test3",
        is_active: "1",
        priority: "high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 4,
        title: "test4",
        is_active: "1",
        priority: "low",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 7,
        title: "test1",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 7,
        title: "test2",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 7,
        title: "test3",
        is_active: "1",
        priority: "high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 7,
        title: "test4",
        is_active: "1",
        priority: "low",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 10,
        title: "test1",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 10,
        title: "test2",
        is_active: "1",
        priority: "very-high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 10,
        title: "test3",
        is_active: "1",
        priority: "high",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      {
        activity_group_id: 10,
        title: "test4",
        is_active: "1",
        priority: "low",
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
