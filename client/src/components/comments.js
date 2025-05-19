// Comments Popup Component
export function renderCommentsPopup(postId, isDarkTheme = true) {
  const themeClass = isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark';
  const themeBodyClass = isDarkTheme ? 'bg-body text-body' : 'bg-body text-body';
  const borderClass = isDarkTheme ? 'border-secondary' : 'border-light';

  return `
    <div class="modal fade" id="commentsModal-${postId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content ${themeClass}">
          <div class="modal-header ${borderClass}">
            <h5 class="modal-title">Comments</h5>
            <button type="button" class="btn-close ${isDarkTheme ? 'btn-close-white' : ''}" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${renderCommentForm(postId, themeBodyClass)}
            <div class="comments-list mt-4">
              ${renderCommentsList(postId, themeBodyClass, borderClass)}
            </div>
          </div>
          <div class="modal-footer ${borderClass}">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCommentForm(postId, themeClass) {
  return `
    <div class="comment-form ${themeClass} p-3 rounded">
      <form class="add-comment-form" data-post-id="${postId}">
        <div class="form-group mb-3">
          <textarea class="form-control ${themeClass}" rows="3" placeholder="What are your thoughts?" required></textarea>
        </div>
        <div class="form-actions d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">Comment</button>
        </div>
      </form>
    </div>
  `;
}

function renderCommentsList(postId, themeClass, borderClass) {
  // In a real app, you would fetch these from your API
  const mockComments = [
    {
      id: 1,
      author: 'User1',
      avatar: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
      content: 'This is a great post! I totally agree with your points.',
      timestamp: '2 hours ago',
      votes: 5
    },
    {
      id: 2,
      author: 'User2',
      avatar: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png',
      content: 'Interesting perspective. Have you considered the alternative viewpoint?',
      timestamp: '1 hour ago',
      votes: 2
    }
  ];

  return mockComments.map(comment => `
    <div class="comment ${themeClass} p-3 mb-3 rounded border ${borderClass}">
      <div class="d-flex">
        <img src="${comment.avatar}" alt="${comment.author}" class="rounded-circle me-3" width="32" height="32">
        <div class="comment-body flex-grow-1">
          <div class="comment-header d-flex align-items-center mb-2">
            <span class="author fw-bold me-2">${comment.author}</span>
            <span class="timestamp text-muted small">${comment.timestamp}</span>
          </div>
          <div class="comment-content mb-2">${comment.content}</div>
          <div class="comment-actions d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary me-2 vote-btn upvote">
              <i class="bi bi-arrow-up"></i>
            </button>
            <span class="vote-count me-2">${comment.votes}</span>
            <button class="btn btn-sm btn-outline-secondary me-3 vote-btn downvote">
              <i class="bi bi-arrow-down"></i>
            </button>
            <button class="btn btn-sm btn-link text-decoration-none">Reply</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Function to initialize the comments popup
// Function to initialize the comments popup
export function setupCommentsPopup(postId) {
  // Add click handler to your "Comments" button
  document.querySelectorAll(`[data-target="#commentsModal-${postId}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      // You might want to fetch actual comments here
      console.log(`Loading comments for post ${postId}`);
    });
  });

  // Handle comment submission
  document.querySelectorAll(`.add-comment-form[data-post-id="${postId}"]`).forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const textarea = form.querySelector('textarea');
      const content = textarea.value.trim();

      if (content) {
        try {
          // Здесь был бы запрос к API

          const commentsList = form.closest('.modal-body').querySelector('.comments-list');
          const newComment = {
            id: Date.now(),
            author: 'You',
            avatar: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png',
            content,
            timestamp: 'just now',
            votes: 1
          };

          const commentHtml = `
            <div class="comment bg-body text-body p-3 mb-3 rounded border border-secondary">
              <div class="d-flex">
                <img src="${newComment.avatar}" alt="${newComment.author}" class="rounded-circle me-3" width="32" height="32">
                <div class="comment-body flex-grow-1">
                  <div class="comment-header d-flex align-items-center mb-2">
                    <span class="author fw-bold me-2">${newComment.author}</span>
                    <span class="timestamp text-muted small">${newComment.timestamp}</span>
                  </div>
                  <div class="comment-content mb-2">${newComment.content}</div>
                  <div class="comment-actions d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary me-2 vote-btn upvote">
                      <i class="bi bi-arrow-up"></i>
                    </button>
                    <span class="vote-count me-2">${newComment.votes}</span>
                    <button class="btn btn-sm btn-outline-secondary me-3 vote-btn downvote">
                      <i class="bi bi-arrow-down"></i>
                    </button>
                    <button class="btn btn-sm btn-link text-decoration-none">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          `;

          commentsList.insertAdjacentHTML('afterbegin', commentHtml);
          textarea.value = '';
        } catch (error) {
          console.error('Error posting comment:', error);
        }
      }
    });
  });
}
