require("dotenv").config();
const express = require("express");
const emailRouter = require("./routes/emailRouter");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.HOST_CLIENT,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use("/api/email", emailRouter);

app.listen(PORT, () => {
  console.log(`server ${5000}`);
});
