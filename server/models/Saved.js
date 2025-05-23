const sqlite3 = require('sqlite3').verbose();
const db = require('../database');

const Saved = {
	getBookmarks: (userId, callback) => {
		const query = `
		SELECT 
		    t.id,
		    t.title,
		    t.content,
		    t.image,
		    t.created_at,
		    t.community_id,
		    u.username AS author,
		    COALESCE(tv.total_votes, 0) AS votes,
		    COALESCE(tc.comment_count, 0) AS comment_count,

		    CASE
		        WHEN b.FK_users_id IS NOT NULL THEN 1
		        ELSE 0
		    END AS is_bookmarked,

		    v.vote AS user_vote

		FROM threads t
		JOIN users u ON t.user_id = u.id

		LEFT JOIN (
		    SELECT FK_thread_id, SUM(vote) AS total_votes
		    FROM votes
		    WHERE FK_comment_id IS NULL
		    GROUP BY FK_thread_id
		) tv ON t.id = tv.FK_thread_id

		LEFT JOIN (
		    SELECT FK_thread_id, COUNT(*) AS comment_count
		    FROM comments
		    GROUP BY FK_thread_id
		) tc ON t.id = tc.FK_thread_id

		LEFT JOIN bookmarks b ON b.FK_users_id = ? AND b.FK_threads_id = t.id

		LEFT JOIN votes v ON v.FK_users_id = ? AND v.FK_thread_id = t.id

		WHERE b.FK_users_id = ?

		ORDER BY t.created_at DESC;

				`;
		db.all(query, [userId, userId, userId], (err, rows) => {
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
	},

	deleteBookmark: (userId, threadId, callback) => {
		const query = `
			DELETE FROM bookmarks WHERE FK_users_id = ? AND FK_threads_id = ?
		`;
		db.run(query, [userId, threadId], function(err) {
			if (err) return callback(err);
			if (this.changes === 0) return callback(new Error('Закладка не найдена'));
			callback(null);
		});
	}

};

module.exports = Saved;
