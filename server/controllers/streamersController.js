const prisma = require("../prisma/index");

const getAllStreamers = async (req, res) => {
  try {
    const allStreamers = await prisma.streamer.findMany();
    res.status(200).send(allStreamers);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addStreamer = async (req, res) => {
  const { name, description, platform } = req.body;
  try {
    await prisma.streamer.create({
      data: {
        name,
        platform,
        description,
      },
    });
    res.status(200).send("Streamer added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

const changeRating = async (req, res) => {
  res.send("upvoted");
};

module.exports = {
  getAllStreamers,
  addStreamer,
  changeRating,
};
