require("dotenv").config();
// require('./db_folder/connect')
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const postRoute = require('./route/post')                                                               
const bodyParser = require('body-parser')
app.use(bodyParser.json())


//   middleware                                                  
app.use(express.json())
app.use('/v1', postRoute)


const MONGODB_URL = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("database is connected"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
