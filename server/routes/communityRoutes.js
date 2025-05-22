const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./database.db");

const router = express.Router();

// Получение всех постов по названию комьюнити
router.get('/c/:communityName', (req, res) => {
  const { communityName } = req.params;

  const communityQuery = `SELECT id FROM communities WHERE name = ?`;
  db.get(communityQuery, [communityName], (err, community) => {
    if (err) 
      return res.status(500).json({ error: 'Database error' });
    if (!community) return res.status(404).json({ error: 'Community not found' });

    const postsQuery = `SELECT * FROM communities WHERE id = ?`;
    db.all(postsQuery, [community.id], (err, posts) => {
      if (err){
        console.log(err);
       return res.status(500).json({ error: 'Database error' });
      }
      res.json(posts);
    });
  });
});

module.exports = router;