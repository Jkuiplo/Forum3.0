const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./database.db');

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