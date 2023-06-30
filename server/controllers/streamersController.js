const prisma = require("../prisma/index");

const getAllStreamers = async (req, res) => {
  try {
    const allStreamers = await prisma.streamer.findMany();
    res.status(200).send(allStreamers);
  } catch (error) {
    res
      .status(400)
      .send({ error: error, message: "Could not retrieve streamer list" });
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
    if (error.meta.target === "Streamer_name_key") {
      return res.status(400).send({
        error: error,
        message: "Streamer with this name already exists",
      });
    }
    res.status(400).send(error);
  }
};

const upVote = async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.streamer.update({
      where: {
        id: id,
      },
      data: {
        votes: {
          increment: 1,
        },
      },
    });
    res.status(200).send("Upvoted successfully");
  } catch (error) {
    res.status(400).send({ error: error, message: "Could not upvote" });
  }
};

const downVote = async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.streamer.update({
      where: {
        id: id,
      },
      data: {
        votes: {
          decrement: 1,
        },
      },
    });
    res.status(200).send("Downvoted successfully");
  } catch (error) {
    res.status(400).send({ error: error, message: "Could not downvote" });
  }
};

module.exports = {
  getAllStreamers,
  addStreamer,
  upVote,
  downVote,
};
