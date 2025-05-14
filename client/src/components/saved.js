export function renderSaved() {
  return `
    <div class="saved-container">
      ${renderSavedHeader()}
      ${renderSavedContent()}
    </div>
  `;
}

function renderSavedHeader() {
  return `
    <div class="saved-header bg-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="saved-title-container">
              <h1 class="saved-title text-body">Saved Items</h1>
              <div class="saved-actions">
                <button class="btn btn-outline-secondary sort-btn text-body">
                  <i class="bi bi-filter"></i> Sort
                </button>
              </div>
            </div>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link text-body" href="#">All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-body" href="#">Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">Comments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">Media</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSavedContent() {
  return `
    <div class="saved-content bg-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            ${renderSavedItems()}
          </div>
          <div class="col-lg-4">
            ${renderSavedSidebar()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSavedItems() {
  return `
    <div class="saved-items">
      <div class="saved-list">
        ${Array(10).fill(0).map((_, i) => renderSavedItem(i)).join('')}
      </div>
      <div class="load-more-container">
        <button class="btn btn-outline-secondary load-more-btn text-body">
          Load More
        </button>
      </div>
    </div>
  `;
}

function renderSavedItem(index) {
  const types = ['post', 'comment', 'media'];
  const currentType = types[index % 3];
  
  return `
    <div class="saved-item bg-card">
      <div class="saved-item-header text-body">
        <span class="saved-item-type">${currentType === 'post' ? 'Saved post' : 
          currentType === 'comment' ? 'Saved comment' : 'Saved media'}</span>
        <span class="saved-item-date">${index + 1} ${index === 0 ? 'day' : 'days'} ago</span>
      </div>
      ${currentType === 'post' ? renderSavedPost(index) : 
        currentType === 'comment' ? renderSavedComment(index) : renderSavedMedia(index)}
    </div>
  `;
}

function renderSavedPost(index) {
  return `
    <div class="saved-post">
      <div class="post-votes">
        <button class="vote-btn upvote"><i class="bi bi-arrow-up"></i></button>
        <span class="vote-count text-body">${Math.floor(Math.random() * 100)}</span>
        <button class="vote-btn downvote"><i class="bi bi-arrow-down"></i></button>
      </div>
      <div class="post-content">
        <div class="post-meta text-body">
          <span>Posted in r/${['AIUForum', 'WebDevelopment', 'JavaScript'][index % 3]} by u/user${index}</span>
        </div>
        <h4 class="post-title text-body">Saved post title #${index + 1}</h4>
        <p class="post-text text-body">This is a saved post content. You can view it later from this section. ${index % 2 === 0 ? 'It might include additional details or links.' : ''}</p>
        <div class="post-actions">
          <button class="action-btn text-body"><i class="bi bi-chat"></i> ${Math.floor(Math.random() * 20)} Comments</button>
          <button class="action-btn text-body"><i class="bi bi-share"></i> Share</button>
          <button class="action-btn text-body"><i class="bi bi-bookmark-fill"></i> Unsave</button>
        </div>
      </div>
    </div>
  `;
}

function renderSavedComment(index) {
  return `
    <div class="saved-comment">
      <div class="comment-votes">
        <button class="vote-btn upvote"><i class="bi bi-arrow-up"></i></button>
        <span class="vote-count text-body">${Math.floor(Math.random() * 50)}</span>
        <button class="vote-btn downvote"><i class="bi bi-arrow-down"></i></button>
      </div>
      <div class="comment-content">
        <div class="comment-meta text-body">
          <span>Commented on post in r/${['AskReddit', 'TodayILearned', 'WorldNews'][index % 3]}</span>
        </div>
        <p class="comment-text text-body">This is a saved comment #${index + 1}. It shows what you commented on someone else's post. ${index % 2 === 0 ? 'The context might be important for future reference.' : ''}</p>
        <div class="comment-actions">
          <button class="action-btn text-body"><i class="bi bi-reply"></i> Reply</button>
          <button class="action-btn text-body"><i class="bi bi-share"></i> Share</button>
          <button class="action-btn text-body"><i class="bi bi-bookmark-fill"></i> Unsave</button>
        </div>
      </div>
    </div>
  `;
}

function renderSavedMedia(index) {
  const mediaTypes = ['image', 'video', 'link'];
  const currentMedia = mediaTypes[index % 3];
  
  return `
    <div class="saved-media">
      <div class="media-content">
        <div class="media-meta text-body">
          <span>Saved from r/${['pics', 'videos', 'gifs'][index % 3]} by u/user${index}</span>
        </div>
        <h4 class="media-title text-body">Saved ${currentMedia} #${index + 1}</h4>
        ${currentMedia === 'image' ? 
          `<div class="media-preview">
            <img src="https://picsum.photos/600/400?random=${index}" alt="Saved image" class="img-fluid">
          </div>` : 
          currentMedia === 'video' ?
          `<div class="media-preview">
            <div class="video-placeholder bg-secondary">
              <i class="bi bi-play-circle-fill"></i>
            </div>
          </div>` :
          `<div class="link-preview bg-secondary">
            <div class="link-icon"><i class="bi bi-link-45deg"></i></div>
            <div class="link-info text-body">
              <div class="link-domain">example.com</div>
              <div class="link-title">Interesting article about ${['technology', 'science', 'art'][index % 3]}</div>
            </div>
          </div>`
        }
        <div class="media-actions">
          <button class="action-btn text-body"><i class="bi bi-chat"></i> ${Math.floor(Math.random() * 15)} Comments</button>
          <button class="action-btn text-body"><i class="bi bi-share"></i> Share</button>
          <button class="action-btn text-body"><i class="bi bi-bookmark-fill"></i> Unsave</button>
        </div>
      </div>
    </div>
  `;
}

function renderSavedSidebar() {
  return `
    <div class="saved-sidebar bg-card">
      <div class="sidebar-section">
        <h3 class="sidebar-title text-body">Saved Categories</h3>
        <div class="categories-list">
          <button class="category-btn active text-body">All Saved Items</button>
          <button class="category-btn text-body">Posts</button>
          <button class="category-btn text-body">Comments</button>
          <button class="category-btn text-body">Images</button>
          <button class="category-btn text-body">Videos</button>
          <button class="category-btn text-body">Links</button>
        </div>
      </div>
      <div class="sidebar-section">
        <h3 class="sidebar-title text-body">Recently Visited</h3>
        <ul class="visited-list">
          <li><a href="#" class="text-body">r/AIUForum</a></li>
          <li><a href="#" class="text-body">r/WebDevelopment</a></li>
          <li><a href="#" class="text-body">r/JavaScript</a></li>
          <li><a href="#" class="text-body">r/reactjs</a></li>
        </ul>
      </div>
      <div class="sidebar-section">
        <h3 class="sidebar-title text-body">Save Options</h3>
        <div class="save-options">
          <button class="btn btn-outline-secondary export-btn text-body">
            <i class="bi bi-download"></i> Export Saved
          </button>
          <button class="btn btn-outline-secondary organize-btn text-body">
            <i class="bi bi-folder"></i> Organize
          </button>
        </div>
      </div>
    </div>
  `;
}