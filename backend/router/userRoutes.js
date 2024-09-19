const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const User = require('./model/user')



// GET all users
router.get("/", async(req, res) => {
  const countUserData = await User.find({})
    res.json(countUserData);
});
router.get("/count", async (req, res) => {
    try {
      const userCount = await User.countDocuments({});
      res.json({ totalUsers: userCount });
    } catch (error) {
      console.error("Error fetching user count:", error);
      res.status(500).json({ error: "Failed to fetch user count" });
    }
  });
  
router.get("/:id", async(req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ status: "error", message: "User not found" });
    }
});




router.post("/", async (req, res) => {
    try {
        const newUser = new User({
            user_name: req.body.user_name,
            photo: req.body.photo,
            user_address: req.body.user_address,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password:req.body.password,
            phone_number: req.body.phone_number
        });

        const result = await newUser.save();
        res.status(201).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

router.patch("/:id", async (req, res) => {
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true, 
          runValidators: true,
      });

      if (!updatedUser) {
          return res.status(404).json({ status: "error", message: "User not found" });
      }

      res.json({ status: "success", data: updatedUser });
  } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
      const deleteUserInfo = await User.findByIdAndDelete(req.params.id);
      if (!deleteUserInfo) {
          return res.status(404).json({ status: "error", message: "User not found" });
      }
      res.json({ status: "success", message: "User deleted successfully" });
  } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
  }
});


module.exports = router;
