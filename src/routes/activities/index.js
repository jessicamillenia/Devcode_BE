const express = require("express");
const router = express.Router();
// const activities = require("../../../controllers/v1/activities");

router.get('/', function (req, res, next) {
        res.send('activities');
    });

// router.get("/", activities.get_all);

module.exports = router;
