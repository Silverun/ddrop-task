const prisma = require("../prisma/index");

const getStreamer = async (req, res) => {
  const { streamerId } = req.params;

  try {
    const streamer = await prisma.streamer.findUnique({
      where: {
        id: streamerId,
      },
    });
    res.status(200).send(streamer);
  } catch (error) {
    res
      .status(400)
      .send({ error: error, message: "Could not find this streamer" });
  }
};

module.exports = {
  getStreamer,
};
