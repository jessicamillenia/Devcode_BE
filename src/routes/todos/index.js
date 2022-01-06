const express = require("express");
const router = express.Router();
// const todos = require("../../../controllers/v1/todos");

router.get('/', function (req, res, next) {
        res.send('todos');
    });

// router.get("/", todos.get_all);

module.exports = router;
