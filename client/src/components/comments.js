import { token } from '../js/main.js';

import dayjs from './posts.js'




// Comments Popup Component
export function renderCommentsPopup(postId) {
  return `
    <div class="modal fade" id="commentsModal-${postId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content bg-body text-body">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Comments</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${renderCommentForm(postId)}
            <div class="comments-list mt-4">
              ${renderCommentsList(postId)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCommentForm(postId) {
  return `
    <div class="comment-form bg-body text-body p-3 rounded">
      <form class="add-comment-form" data-post-id="${postId}">
        <div class="form-group mb-3">
          <textarea class="form-control bg-body text-body" rows="3" placeholder="What are your thoughts?" required></textarea>
        </div>
        <div class="form-actions d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">Comment</button>
        </div>
      </form>
    </div>
  `;
}

function renderCommentsList(postId) {
  return `<div class="comments-list mt-4" id="comments-list-${postId}"></div>`;
}

export async function loadCommentsList(postId) {
  const container = document.querySelector(`#comments-list-${postId}`);
  if (!container) return;

  console.log(`Loading comments for post ${postId}`);

  container.innerHTML = '<div class="text-muted">Loading comments...</div>';

  try {
    const res = await fetch(`http://localhost:5000/api/comments/${postId}`);
    if (!res.ok) throw new Error('Failed to fetch');

    const comments = await res.json();
    console.log(comments);

    if (!Array.isArray(comments)) throw new Error('Invalid format');

    const html = comments.map(comment => `
      <div class="comment bg-body text-body p-3 mb-3 rounded border border-secondary" data-comment-id="${comment.id}">
        <div class="d-flex">
          <img src="${comment.avatar ? 'http://localhost:5000/' + comment.avatar : 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'}" 
            alt="${comment.author}" 
            class="rounded-circle me-3" 
            width="32" 
            height="32">

          <div class="comment-body flex-grow-1">
            <div class="comment-header d-flex align-items-center mb-2">
              <span class="author fw-bold me-2">${comment.username}</span>
              <span class="timestamp text-muted small">${dayjs.utc(comment.created_at).tz('Asia/Almaty').fromNow()}</span>
            </div>
            <div class="comment-content mb-2">${comment.content}</div>
            <div class="comment-actions d-flex align-items-center">
              <button class="btn btn-sm btn-outline-secondary me-2 vote-btn upvote">
                <i class="bi bi-arrow-up"></i>
              </button>
              <span class="vote-count me-2">${comment.total_votes}</span>
              <button class="btn btn-sm btn-outline-secondary me-3 vote-btn downvote">
                <i class="bi bi-arrow-down"></i>
              </button>
              <button class="btn btn-sm btn-link text-decoration-none">Reply</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = html || '<div class="text-muted">No comments yet.</div>';
    setupCommentVotes();
  } catch (err) {
    container.innerHTML = `<div class="text-danger">Failed to load comments.</div>`;
    console.error(err);
  }
}


export function setupCommentsPopup(postId) {
  document.querySelectorAll(`[data-target="#commentsModal-${postId}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      loadCommentsList(postId); // ← вызываем тут
    });
  });

  document.querySelectorAll(`.add-comment-form[data-post-id="${postId}"]`).forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const textarea = form.querySelector('textarea');
      const content = textarea.value.trim();

      if (!content) return;

      try {
        const res = await fetch(`http://localhost:5000/api/comments/${postId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ content })
        });

        if (!res.ok) throw new Error('Failed to post comment');

        textarea.value = '';
        await loadCommentsList(postId); // обновим список

      } catch (error) {
        console.error('Error posting comment:', error);
      }
    });
  });
}


function setupCommentVotes(id) {
  document.querySelectorAll('.comment .vote-btn').forEach(btn => {
    btn.addEventListener('click', async function () {
      const comment = this.closest('.comment');
      const commentId = comment.dataset.commentId;
      const isUpvote = this.classList.contains('upvote');
      const isDownvote = this.classList.contains('downvote');

      const voteCountEl = comment.querySelector('.vote-count');
      let voteCount = parseInt(voteCountEl.textContent);

      const upvoteBtn = comment.querySelector('.upvote');
      const downvoteBtn = comment.querySelector('.downvote');

      const isCurrentlyActive = this.classList.contains('active');
      let voteType;

      if (isCurrentlyActive) {
        voteType = 0; // remove vote
      } else if (isUpvote) {
        voteType = 1; // upvote
      } else if (isDownvote) {
        voteType = -1; // downvote
      }

      try {
        const response = await fetch(`http://localhost:5000/api/votes/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            commentId,
            vote: voteType
          })
        });

        if (!response.ok) throw new Error('Failed to update vote');

        const result = await response.json();

        // Обновление интерфейса
        upvoteBtn.classList.remove('active');
        downvoteBtn.classList.remove('active');

        if (isCurrentlyActive) {
          voteCount += isUpvote ? -1 : 1;
        } else {
          this.classList.add('active');
          if (isUpvote) {
            voteCount += downvoteBtn.classList.contains('active') ? 2 : 1;
          } else {
            voteCount -= upvoteBtn.classList.contains('active') ? 2 : 1;
          }
        }

        voteCountEl.textContent = voteCount;

      } catch (error) {
        console.error('Error updating comment vote:', error);
      }
    });
  });
}
