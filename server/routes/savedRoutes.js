const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getBookmarks, addBookmark } = require("../controllers/savedController");

router.get("/:username", authMiddleware, getBookmarks);
router.post("/:threadId", authMiddleware, addBookmark); 

module.exports = router;
