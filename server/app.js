require("dotenv").config();
require("./db/conn");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./models/useSchema");

const app = express();


app.listen(8000, () => {
    console.log("server is running ");
})