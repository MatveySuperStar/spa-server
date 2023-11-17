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

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Expose-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Origin", process.env.HOST_CLIENT);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use("/api/email", emailRouter);

app.listen(PORT, () => {
  console.log(`server ${5000}`);
});
