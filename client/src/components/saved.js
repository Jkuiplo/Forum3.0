export function renderSaved(posts = [], isAuthenticated = false) {
  return `
    <div class="saved-container">
      <div class="saved-header bg-body">
        <h2 class="text-body">Saved Posts</h2>
        ${isAuthenticated ? 
          `<button class="btn btn-sm btn-outline-secondary manage-saved-btn text-body">
            <i class="bi bi-gear text-body"></i> Manage
          </button>` : ''
        }
      </div>
      ${posts.length > 0 ?
        posts.map(post => renderSavedPost(post)).join('') :
        renderEmptySavedState(isAuthenticated)
      }
    </div>
  `;
}

function renderSavedPost(post) {
  return `
    <div class="saved-post bg-body" data-post-id="${post.id}">
      <div class="post-meta text-body">
        <span class="saved-from text-body">Saved from r/${post.community}</span>
        <span class="saved-date text-body">Saved ${post.savedDate}</span>
      </div>
      <div class="post-votes bg-body">
        <button class="vote-btn upvote text-body" aria-label="Upvote">
          <i class="bi bi-arrow-up text-body"></i>
        </button>
        <span class="vote-count text-body">${post.votes}</span>
        <button class="vote-btn downvote text-body" aria-label="Downvote">
          <i class="bi bi-arrow-down text-body"></i>
        </button>
      </div>
      <div class="post-content bg-body">
        <div class="post-header">
          <span class="post-community text-body">r/${post.community}</span>
          <span class="post-author text-body">Posted by u/${post.author}</span>
          <span class="post-time text-body">${post.time}</span>
        </div>
        <h3 class="post-title text-body">${post.title}</h3>
        ${post.image ? `
          <div class="post-image-container bg-body">
            <img src="${post.image}" class="post-image" alt="${post.title}">
          </div>
        ` : ''}
        <div class="post-text text-body">${post.content}</div>
        <div class="post-actions">
          <button class="action-btn comment-btn text-body">
            <i class="bi bi-chat text-body"></i> ${post.comments} Comments
          </button>
          <button class="action-btn share-btn text-body">
            <i class="bi bi-share text-body"></i> Share
          </button>
          <button class="action-btn unsave-btn text-body">
            <i class="bi bi-bookmark-fill text-body"></i> Unsave
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderEmptySavedState(isAuthenticated) {
  return `
    <div class="empty-saved bg-body text-body">
      <i class="bi bi-bookmark text-body"></i>
      <h3 class="text-body">No saved posts yet</h3>
      <p class="text-body">
        ${isAuthenticated ? 
          'Save posts to easily find them again in the future.' : 
          'Log in to save posts and view them here.'
        }
      </p>
      ${!isAuthenticated ? 
        '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Log In</button>' : 
        '<button class="btn btn-primary" onclick="location.href=\'/\'">Browse Posts</button>'
      }
    </div>
  `;
}