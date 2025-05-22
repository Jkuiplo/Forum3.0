const Saved = require('../models/Saved');
const sqlite3 = require('sqlite3').verbose();
const db = require('../database');

exports.getBookmarks = (req, res) => {
	const username = req.params.username;
	const currentUserId = req.user.id;

	const getUserQuery = `
		SELECT id, hide_bookmarks
		FROM users
		WHERE username = ?
	`;

	db.get(getUserQuery, [username], (err, user) => {
		console.log(username)
	if (err) {
		console.error("Ошибка при выполнении запроса:", err);
		return res.status(500).json({ message: "Ошибка при поиске пользователя" });
	}
		if (!user) return res.status(404).json({ message: "Пользователь не найден" });

		const isOwner = user.id === currentUserId;

		if (user.hide_bookmarks && !isOwner) {
			return res.status(403).json({ message: "Пользователь скрыл свои закладки" });
		}

		// Получаем закладки
		Saved.getBookmarks(user.id, (err, result) => {
			if (err) return res.status(500).json({ message: "Ошибка при получении закладок" });
			res.status(200).json({ message: "Закладки получены", result });
		});
	});
};

exports.addBookmark = (req, res) => {
	const userId = req.user.id;
	const threadId = req.params.threadId;

	Saved.saveBookmark(userId, threadId, (err) => {
		if (err) {
			if (err.code === 'SQLITE_CONSTRAINT') {
				return res.status(400).json({ message: "Эта закладка уже добавлена" });
			}
			return res.status(500).json({ message: "Ошибка при добавлении закладки" });
		}
		res.status(201).json({ message: "Закладка добавлена" });
	});
};




