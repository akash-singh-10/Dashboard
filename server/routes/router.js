const express = require("express");
const router = express.Router();
const users = require("../models/userSchema")


// register a user
router.post("/register", async (req,res) => {
    const {name, branch, age, email, mobile, address} = req.body;

    if(!name || !branch || !age || !email || !mobile || !address) {
        res.status(422).send("Please fill all details");
    }

    try {
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser) {
            res.status(422).json("This user is already present");
        } else {
            const addUser = new users({
                name, branch, age, email, mobile, address  // object destructuring
            });
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    } catch(error) {
        res.status(422).send(error);
    }
});

//get uesr data
router.get("/getdata", async(req,res) => {
    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch(error) {
        res.status(422).send(error);
    }
});

// get individual user
router.get("/getuser/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const userIndividual = await users.findById({_id:id});
        console.log(userIndividual);
        res.status(201).json(userIndividual);
    } catch(error) {
        res.status(422).send(error);
    }
});

// update user data
router.patch("/updateuser/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const updatedUser = await users.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedUser);
    } catch(error) {
        res.status(422).send(error);
    }
});

// delete a user
router.delete("/deleteuser/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedUser = await users.findByIdAndDelete({_id: id});
        res.status(201).json(deletedUser);
    } catch(error) {
        res.status(422).send(error);
    }
})

module.exports = router;