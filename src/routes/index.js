// Import router
const express = require("express");
const router = express.Router();

// Define Routes
const todosRouter = require('./todos');
const activitiesRouter = require('./activities');
const home = router.get('/', function (req, res, next) {
    res.send('home');
});

// // Get All Routes
router.use('/activity-groups', activitiesRouter);
router.use('/todo-items', todosRouter);
router.use('/', home);

module.exports = router;