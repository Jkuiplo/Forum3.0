const path = require('path');
const fs = require('fs');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Configure storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Create separate directories for avatars and banners
        let uploadDir = path.join(__dirname, '../uploads');
        if (file.fieldname === 'avatar') {
            uploadDir = path.join(uploadDir, 'avatars');
        } else if (file.fieldname === 'banner') {
            uploadDir = path.join(uploadDir, 'banners');
        }
        
        // Ensure directory exists
        fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Simple timestamp + extension format
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG, PNG, and WebP images are allowed!'), false);
        }
    }
});

// Helper function to delete old files
const deleteOldFile = async (filePath) => {
    if (!filePath) return;
    
    try {
        // Remove leading slash if present
        const relativePath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
        const fullPath = path.join(__dirname, '../', relativePath);
        
        if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
        }
    } catch (err) {
        console.error('Error deleting file:', err);
    }
};

// PUT /api/users/me - Update user profile
// PUT /api/users/me - Update user profile
exports.updateProfile = [
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'banner', maxCount: 1 }
  ]),
  async (req, res) => {
    const userId = req.user.id;
    const { displayName, about, hide_bookmarks } = req.body;

    try {
      // Validate inputs
      if (displayName && displayName.trim().length < 3) {
        return res.status(400).json({ error: "Display name must be at least 3 characters" });
      }

      // Get current user data first
      const currentUser = await new Promise((resolve, reject) => {
        db.get("SELECT avatar, banner_url FROM users WHERE id = ?", [userId], (err, row) => {
          if (err) reject(err);
          else resolve(row || {});
        });
      });

      // Prepare updates
      const updates = {};
      const fields = [];
      const params = [];

      if (displayName) {
        updates.username = displayName.trim();
        fields.push("username = ?");
        params.push(updates.username);
      }

      if (about !== undefined) {
        updates.about = about.trim();
        fields.push("about = ?");
        params.push(updates.about);
      }

      if (hide_bookmarks !== undefined) {
        updates.hide_bookmarks = hide_bookmarks;
        fields.push("hide_bookmarks = ?");
        params.push(updates.hide_bookmarks);
      }

      // Handle avatar upload
      if (req.files?.avatar) {
        if (currentUser.avatar) {
          await deleteOldFile(currentUser.avatar);
        }
        updates.avatar = `/uploads/avatars/${req.files.avatar[0].filename}`;
        fields.push("avatar = ?");
        params.push(updates.avatar);
      }

      // Handle banner upload
      if (req.files?.banner) {
        if (currentUser.banner_url) {
          await deleteOldFile(currentUser.banner_url);
        }
        updates.banner_url = `/uploads/banners/${req.files.banner[0].filename}`;
        fields.push("banner_url = ?");
        params.push(updates.banner_url);
      }

      if (fields.length === 0) {
        return res.status(400).json({ error: "No changes provided" });
      }

      // Update database
      params.push(userId);
      const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
      
      await new Promise((resolve, reject) => {
        db.run(query, params, function(err) {
          if (err) reject(err);
          else resolve(this);
        });
      });

      // Get updated user data
      const updatedUser = await new Promise((resolve, reject) => {
        db.get(
          "SELECT id, username, avatar, banner_url, about, hide_bookmarks FROM users WHERE id = ?",
          [userId],
          (err, row) => {
            if (err) reject(err);
            else resolve(row);
          }
        );
      });

      res.json(updatedUser);

    } catch (err) {
      console.error('Error updating profile:', err);
      
      // Clean up uploaded files if error occurred
      if (req.files?.avatar) {
        await deleteOldFile(`/uploads/avatars/${req.files.avatar[0].filename}`);
      }
      if (req.files?.banner) {
        await deleteOldFile(`/uploads/banners/${req.files.banner[0].filename}`);
      }

      res.status(500).json({ 
        error: err.message || "Server error",
        details: process.env.NODE_ENV === 'development' ? err.stack : undefined
      });
    }
  }
];




exports.changeNickname = async (req, res) => {
	const userId = req.user.id; // предполагается, что authenticate добавляет req.user
	const { username } = req.body;

	if (!username || username.trim().length < 3) {
		return res.status(400).json({ error: "Некорректный ник" });
	}

	try {
		await db.run("UPDATE users SET username = ? WHERE id = ?", username, userId);
		res.json({ success: true, username });
	} catch (err) {
		res.status(500).json({ error: "Ошибка сервера" });
	}
};


// POST /api/user/:id/follow
exports.toggleFollow = async (req, res) => {
	const followerId = req.user.id;
	const followingId = parseInt(req.params.id);

	if (followerId === followingId) {
		return res.status(400).json({ error: "Нельзя подписаться на себя" });
	}

	try {
		const exists = await db.get(
			"SELECT 1 FROM follows WHERE follower_id = ? AND following_id = ?",
			followerId, followingId
		);

		if (exists) {
			await db.run(
				"DELETE FROM follows WHERE follower_id = ? AND following_id = ?",
				followerId, followingId
			);
			return res.json({ followed: false });
		} else {
			await db.run(
				"INSERT INTO follows (follower_id, following_id) VALUES (?, ?)",
				followerId, followingId
			);
			return res.json({ followed: true });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Ошибка сервера" });
	}
};

// GET /api/user/:id/followers/count
exports.getFollowersCount = async (req, res) => {
	const userId = parseInt(req.params.id);

		console.log('getFollowersCount for userId:', userId);


	try {
		const row = await db.get(
			"SELECT COUNT(*) AS count FROM follows WHERE following_id = ?",
			userId
		);
		res.json({ followers: row.count });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Ошибка сервера" });
	}
};

// GET /api/user
exports.getUserByUsername = (req, res) => {
  const username = req.params.username;
  db.get('SELECT * FROM users WHERE LOWER(username) = LOWER(?)', [username], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
    if (!row) return res.status(404).json({ error: 'User not found' });
    res.json(row);
  });
};

exports.getMe = (req, res) => {
	const user = req.user;
	res.json(user);
}