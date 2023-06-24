const express = require("express");
const router = express.Router();
const streamersController = require("../controllers/streamersController");

router.get("/", streamersController.getAllStreamers);

router.post("/", streamersController.addStreamer);

router.put("/:streamerId/vote", streamersController.changeRating);

module.exports = router;
