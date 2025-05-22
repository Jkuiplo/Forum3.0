const express = require('express');
const postRoutes = express.Router();

// Заглушка для хранения постов (вместо базы данных)
const posts = {
  '1': { id: '1', title: 'Первый пост', content: 'Содержание первого поста' },
  '2': { id: '2', title: 'Второй пост', content: 'Содержание второго поста' },
};

// 1. Роут: на /api/t/:id отдаем ссылку на пост
postRoutes.get('/t/:id', (req, res) => {
  const postId = req.params.id;
  if (!posts[postId]) {
    return res.status(404).json({ error: 'Пост не найден' });
  }

  // Например, ссылка на пост (можешь подстроить под свой фронтенд)
  const postUrl = `http://localhost:5000/post/${postId}`;
  res.json({ url: postUrl });
});

// 2. Роут: на /post/:id отдаем сам пост
postRoutes.get('/post/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts[postId];

  if (!post) {
    return res.status(404).json({ error: 'Пост не найден' });
  }

  res.json(post);
});

module.exports = postRoutes;
