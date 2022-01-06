const express = require("express");
const router = express.Router();
const todos = require("../../controllers/todos");

router.get("/", todos.getAll);
router.get("/:id", todos.getOne);
router.post("/", todos.create);
router.delete("/:id", todos.delete);
router.patch("/:id", todos.update);

module.exports = router;
