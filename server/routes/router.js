const express = require("express");
const router = express.Router();
const users = require("../models/userSchema")


// register a user
router.post("/register", async (req,res) => {
    const {name, branch, age, email, mobile, address} = req.body;

    if(!name || !branch || !age || !email || !mobile || !address) {
        res.status(404).send("Please fill all details");
    }

    try {
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser) {
            res.status(404).json("This user is already present");
        } else {
            const addUser = new users({
                name, branch, age, email, mobile, address  // object destructuring
            });
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    } catch(error) {
        res.status(404).send(error);
    }
});

//get uesr data
router.get("/getdata", async(req,res) => {
    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch(error) {
        res.status(404).send(error);
    }
});

module.exports = router;