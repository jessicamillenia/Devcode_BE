// Import router
const express = require("express");
const router = express.Router();

// Define Routes
const todosRouter = require('./todos');
const activitiesRouter = require('./activities');

// // Get All Routes
router.use('/activity-groups', activitiesRouter);
router.use('/todo-items', todosRouter);

module.exports = router;