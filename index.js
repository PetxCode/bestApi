"use strict";
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileRoutes = require("./routes/file-upload-routes");

const DB = "mongodb://localhost:gameChanger";
const url =
  "mongodb+srv://shotkode:shotkode@cluster0.2kfdg.mongodb.net/shotkodeDB?retryWrites=true&w=majority";

const port = process.env.PORT || 4000;
// process.env.DATABASE_URL

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database has successfully connected");
  });

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.status(200).send("Your quest for this API is ready!");
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", fileRoutes.routes);

app.listen(port, () => console.log(`listening on ${port}`));
