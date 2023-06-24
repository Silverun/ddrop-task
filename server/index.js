const express = require("express");
const app = express();
const streamersRoute = require("./routes/streamersRoute");
const streamerRoute = require("./routes/streamerRoute");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/streamers", streamersRoute);
app.use("/streamer", streamerRoute);

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
