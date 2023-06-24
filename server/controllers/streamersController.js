const prisma = require("../prisma/index");

const getAllStreamers = async (req, res) => {
  const allStreamers = await prisma.streamer.findMany();
  res.status(200).send(allStreamers);
};

const addStreamer = async (req, res) => {
  await prisma.streamer.create({
    data: {
      name: "Dan",
      platform: "Kick",
      description: "Good lad",
    },
  });
};

const changeRating = async (req, res) => {
  res.send("upvoted");
};

module.exports = {
  getAllStreamers,
  addStreamer,
  changeRating,
};
