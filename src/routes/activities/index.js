const express = require("express");
const router = express.Router();
const activities = require("../../controllers/activities");

router.get("/", activities.getAll);

module.exports = router;
