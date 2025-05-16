import"./main-H2MTFp0w.js";function e(t=[],a=!1){return`
    <div class="saved-container">
      <div class="saved-header bg-body">
        <h2 class="text-body">Saved Posts</h2>
        ${a?`<button class="btn btn-sm btn-outline-secondary manage-saved-btn text-body">
            <i class="bi bi-gear text-body"></i> Manage
          </button>`:""}
      </div>
      ${t.length>0?t.map(s=>o(s)).join(""):n(a)}
    </div>
  `}function o(t){return`
    <div class="saved-post bg-body" data-post-id="${t.id}">
      <div class="post-meta text-body">
        <span class="saved-from text-body">Saved from r/${t.community}</span>
        <span class="saved-date text-body">Saved ${t.savedDate}</span>
      </div>
      <div class="post-votes bg-body">
        <button class="vote-btn upvote text-body" aria-label="Upvote">
          <i class="bi bi-arrow-up text-body"></i>
        </button>
        <span class="vote-count text-body">${t.votes}</span>
        <button class="vote-btn downvote text-body" aria-label="Downvote">
          <i class="bi bi-arrow-down text-body"></i>
        </button>
      </div>
      <div class="post-content bg-body">
        <div class="post-header">
          <span class="post-community text-body">r/${t.community}</span>
          <span class="post-author text-body">Posted by u/${t.author}</span>
          <span class="post-time text-body">${t.time}</span>
        </div>
        <h3 class="post-title text-body">${t.title}</h3>
        ${t.image?`
          <div class="post-image-container bg-body">
            <img src="${t.image}" class="post-image" alt="${t.title}">
          </div>
        `:""}
        <div class="post-text text-body">${t.content}</div>
        <div class="post-actions">
          <button class="action-btn comment-btn text-body">
            <i class="bi bi-chat text-body"></i> ${t.comments} Comments
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
  `}function n(t){return`
    <div class="empty-saved bg-body text-body">
      <i class="bi bi-bookmark text-body"></i>
      <h3 class="text-body">No saved posts yet</h3>
      <p class="text-body">
        ${t?"Save posts to easily find them again in the future.":"Log in to save posts and view them here."}
      </p>
      ${t?`<button class="btn btn-primary" onclick="location.href='/'">Browse Posts</button>`:'<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Log In</button>'}
    </div>
  `}const b=document.getElementById("main");b.innerHTML=e();
