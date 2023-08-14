const mongoose = require("mongoose");

const DB = "mongodb+srv://akashsingh:AkashSingh445@cluster0.efcmsxo.mongodb.net/dashboard?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection start")
}).catch((error) => {
    console.log(error.message)
})