const express = require("express");
const router = express.Router();
const streamerController = require("../controllers/streamerController");

router.get("/:streamerId", streamerController.getStreamer);

module.exports = router;
