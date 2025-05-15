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
    db.run(`INSERT INTO threads (title, content, user_id, image, community) VALUES (?, ?, ?, ?, ?)`,
        [title, content, user_id, image, community], function (err) {
            callback(err, this?.lastID);
        }
    );
},


    getAll: (callback) => {
        db.all(`
            SELECT 
                t.id,
                t.title,
                t.content,
                t.image,
                t.created_at,
                t.community,
                u.username AS author,
                COALESCE(SUM(CASE WHEN v.vote = 1 THEN 1 WHEN v.vote = -1 THEN -1 ELSE 0 END), 0) AS votes,
                COUNT(c.id) AS comment_count
            FROM threads t
            JOIN users u ON t.user_id = u.id
            LEFT JOIN votes v ON t.id = v.FK_thread_id
            LEFT JOIN comments c ON t.id = c.FK_thread_id
            GROUP BY t.id
            ORDER BY t.created_at DESC;
        `, callback);
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
