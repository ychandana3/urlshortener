const express = require("express");
const { StatusCodes } = require("http-status-codes");
const urlRoutes = require("./routes/urlRoutes");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());
app.use(urlRoutes);

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://chandu:9jJS4bQRmrijgG8D@cluster0.zr8rwnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on PORT: ${PORT}`);
    });
    console.log("Connected");
  })
  .catch((err) => console.log(err));
