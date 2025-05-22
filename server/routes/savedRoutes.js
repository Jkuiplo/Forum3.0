const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getBookmarks, addBookmark, deleteBookmark } = require("../controllers/savedController");

router.get("/:username", authMiddleware, getBookmarks);
router.post("/:threadId", authMiddleware, addBookmark); 
router.delete("/:threadId", authMiddleware, deleteBookmark); 

module.exports = router;
