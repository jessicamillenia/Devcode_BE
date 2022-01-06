const express = require("express");
const router = express.Router();
const activities = require("../../controllers/activities");

router.get("/", activities.getAll);
router.get("/:id", activities.getOne);
router.post("/", activities.create);
router.delete("/:id", activities.delete);
router.patch("/:id", activities.update);

module.exports = router;
