const express = require("express");
const router = express.Router();
const streamersController = require("../controllers/streamersController");

router.get("/", streamersController.getAllStreamers);

router.post("/", streamersController.addStreamer);

router.put("/:streamerId/upvote", streamersController.upVote);
router.put("/:streamerId/downvote", streamersController.downVote);

module.exports = router;
