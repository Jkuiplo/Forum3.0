const db = require('../database');

db.run(`
    CREATE TABLE IF NOT EXISTS threads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        image TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
`, (err) => {
    if (err) {
        console.error('Ошибка при создании таблицы threads:', err.message);
    } else {
        console.log('✅ Таблица threads готова');
    }
});

const Thread = {
    create: (title, content, user_id, image, community = 'general', callback) => {
    db.run(`INSERT INTO threads (title, content, user_id, image, community_id) VALUES (?, ?, ?, ?, ?)`,
        [title, content, user_id, image, community], function (err) {
            callback(err, this?.lastID);
        }
    );
},



getAll: (userId, callback) => {
    db.all(`
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

    ORDER BY t.created_at DESC;

    `, [userId, userId], callback);
},

    getById: (id, callback) => {
        db.get(`SELECT * FROM threads WHERE id = ?`, [id], callback);
    },

    update: (id, title, content, image, callback) => {
        db.run(`UPDATE threads SET title = ?, content = ?, image = ? WHERE id = ?`,
            [title, content, image, id], callback);
    },

    delete: (id, callback) => {
        db.run(`DELETE FROM threads WHERE id = ?`, [id], callback);
    }
};

module.exports = Thread;