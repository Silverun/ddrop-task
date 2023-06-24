const prisma = require("../prisma/index");

const getStreamer = async (req, res) => {
  const streamer = await prisma.streamer.findUnique({
    where: {
      id: "6496de33ec63755815585f2b",
    },
  });

  res.send(streamer);
};

module.exports = {
  getStreamer,
};
