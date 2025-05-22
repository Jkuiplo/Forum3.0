const sqlite3 = require('sqlite3').verbose();
const db = require('../database');

const Saved = {
	getBookmarks: (userId, callback) => {
		const query = `
			SELECT threads.*
			FROM bookmarks
			JOIN threads ON bookmarks.FK_threads_id = threads.id
			WHERE bookmarks.FK_users_id = ?
		`;
		db.all(query, [userId], (err, rows) => {
			if (err) return callback(err);
			callback(null, rows);
		});
	},

	saveBookmark: (userId, threadId, callback) => {
		const query = `
			INSERT INTO bookmarks (FK_users_id, FK_threads_id)
			VALUES (?, ?)
		`;
		db.run(query, [userId, threadId], callback);
	}
};

module.exports = Saved;
