const express = require("express");
const router = express.Router();
const { changeNickname, toggleFollow, getFollowersCount, getUserByUsername, getMe} = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");



router.get("/me", authenticate, getMe);
router.get("/:username", getUserByUsername); 
router.put("/nickname", authenticate, changeNickname);
router.post("/:id/follow", authenticate, toggleFollow);
router.get("/:id/followers/count", getFollowersCount);


module.exports = router;
