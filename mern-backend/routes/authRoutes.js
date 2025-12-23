const express =require("express");
const router=express.Router();
const {registerUser,loginUser} =require("../controllers/authController");
const protect= require("../middleware/authMiddleware");

router.post("/register",registerUser);
router.post("/login",loginUser);

const User = require("../models/user");

router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports= router;