// backend/routes/profile.js
const express = require('express');
const path = require('path');
const db = require('../database.js'); // импорт SQLite или любой другой модуль
const router = express.Router();

// Отдаёт HTML-страницу профиля
router.get('/u/:username', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'client', 'dist', 'pages/profile.html'));
});


module.exports = router;
