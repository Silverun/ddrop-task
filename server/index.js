const express = require("express");
const streamersRoute = require("./routes/streamersRoute");
const streamerRoute = require("./routes/streamerRoute");
require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use("/streamers", streamersRoute);
app.use("/streamer", streamerRoute);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
