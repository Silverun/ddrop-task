const express = require("express");
const router = express.Router();
const streamerController = require("../controllers/streamerController");

router.get("/", streamerController.getStreamer);

module.exports = router;
