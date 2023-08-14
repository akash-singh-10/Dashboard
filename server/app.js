require("dotenv").config();
require("./db/conn");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./models/useSchema");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());    

app.listen(8000, () => {
    console.log("server is running ");
})