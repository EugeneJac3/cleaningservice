const express = require('express')
const app = express();
const mongoose = require('mongoose')
require("dotenv").config();

mongoose.connect(process.env.MongoURI)


app.listen(3001, () => {
    console.log("Server is working");
});