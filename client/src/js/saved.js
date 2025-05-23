import { baseURL } from '../config.js'
import { token } from './main.js'
import { renderPosts } from '../components/posts.js'


fetch(`${baseURL}/api/users/me`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(res => {
    if (!res.ok) throw new Error('Ошибка при получении данных пользователя');
    return res.json();
  })
  .then(userData => {
    const nickname = userData.username;
    if (!nickname) throw new Error('Ник пользователя не найден');

    return fetch(`${baseURL}/api/bookmarks/${encodeURIComponent(nickname)}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  })
  .then(res => {
    if (!res.ok) throw new Error('Ошибка при получении тредов');
    return res.json();
  })
  .then(posts => {
      console.log("Пришедшие посты:", posts); // проверь структуру

    const container = document.querySelector('#bookmarked-posts');
    container.innerHTML = renderPosts(posts, true, 'saved');
  })
  .catch(err => {
    console.error(err);
  });