const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const profileRoutes = require('./profile.js');

// Роут для главной страницы

router.use(express.static(path.join(__dirname, '../../', 'client', 'dist')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'client', 'dist', 'index.html'));
});

router.get('/logout', (req, res) => {
  res.clearCookie('Token', { path: '/', sameSite: 'Strict' });
  res.clearCookie('connect.sid', { path: '/', sameSite: 'Strict' }); // если используешь express-session
  res.redirect('/');
});

router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'client', 'dist', 'pages/profile.html'));
});

router.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'client', 'dist', 'pages/settings.html'));
});

router.get('/saved', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'client', 'dist', 'pages/saved.html'));
});

router.use('/', profileRoutes);



module.exports = router;
