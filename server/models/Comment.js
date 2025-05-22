const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

const Comment = {
    // 📌 Создать комментарий
    create: (threadId, userId, content, callback) => {
        const sql = `INSERT INTO comments (FK_thread_id, FK_users_id, content) VALUES (?, ?, ?)`;
        db.run(sql, [threadId, userId, content], function (err) {
            if (err) return callback(err);
            callback(null, this.lastID);
        });
    },

    // 📌 Получить все комментарии к треду
  getByThreadId: (threadId, callback) => {
    const sql = `
        SELECT 
            c.id,
            u.avatar, 
            u.username,
            c.content, 
            c.created_at, 
            COALESCE(cv.total_votes, 0) AS total_votes
        FROM comments c
        JOIN users u ON c.FK_users_id = u.id

        LEFT JOIN (
            SELECT FK_comment_id, SUM(vote) AS total_votes
            FROM votes
            WHERE FK_thread_id IS NULL
            GROUP BY FK_comment_id
        ) cv ON c.id = cv.FK_comment_id

        WHERE c.FK_thread_id = ?
        ORDER BY c.created_at ASC;
    `;

    db.all(sql, [threadId], callback);
},



    // 📌 Получить один комментарий
    getById: (commentId, callback) => {
        const sql = `SELECT * FROM comments WHERE id = ?`;
        db.get(sql, [commentId], callback);
    },

    // 📌 Обновить комментарий
    update: (commentId, content, callback) => {
        const sql = `UPDATE comments SET content = ? WHERE id = ?`;
        db.run(sql, [content, commentId], callback);
    },

    // 📌 Удалить комментарий
    delete: (commentId, callback) => {
        const sql = `DELETE FROM comments WHERE id = ?`;
        db.run(sql, [commentId], callback);
    },
};

module.exports = Comment;
