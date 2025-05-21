import"./main-q2aOKx0S.js";function i(){return`
    <div class="profile-container">
      ${a()}
      ${e()}
    </div>
  `}function a(){return`
    <div class="profile-header bg-body">
      <div class="cover-photo bg-secondary"></div>
      <div class="profile-info">
        <div class="avatar-container">
          <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png" 
               alt="User avatar" class="profile-avatar">
        </div>
        <div class="profile-actions">
          <button class="btn btn-outline-secondary edit-profile-btn text-body">
            <i class="bi bi-pencil"></i> Edit Profile
          </button>
        </div>
      </div>
      <div class="profile-meta">
        <h1 class="profile-username text-body">u/username</h1>
        <div class="profile-stats">
          <span class="stat-item text-body"><i class="bi bi-calendar"></i> Joined June 2023</span>
          <span class="stat-item text-body"><i class="bi bi-arrow-up-circle"></i> 1.2k Karma</span>
        </div>
      </div>
    </div>
  `}function e(){return`
    <div class="profile-content bg-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            ${o()}
          </div>
          <div class="col-lg-9">
            ${l()}
          </div>
        </div>
      </div>
    </div>
  `}function o(){return`
    <div class="profile-sidebar bg-card">
      <div class="sidebar-section about-section">
        <h3 class="sidebar-title text-body">About</h3>
        <p class="sidebar-text text-body">This is where the user's bio would go. It might include some personal information, interests, or other details.</p>
      </div>
      <div class="sidebar-section">
        <h3 class="sidebar-title text-body">Trophies</h3>
        <div class="trophies-container">
          <div class="trophy-item text-body">
            <i class="bi bi-trophy"></i> 1 Year Club
          </div>
          <div class="trophy-item text-body">
            <i class="bi bi-coin"></i> Gold Award
          </div>
        </div>
      </div>
      <div class="sidebar-section">
        <h3 class="sidebar-title text-body">Moderator Of</h3>
        <ul class="moderated-list">
          <li><a href="#" class="text-body">r/AIUForum</a></li>
          <li><a href="#" class="text-body">r/WebDevelopment</a></li>
        </ul>
      </div>
    </div>
  `}function l(){return`
    <div class="profile-posts">
      <div class="posts-header">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active text-body" href="#">Posts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-body" href="#">Comments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-body" href="#">Saved</a>
          </li>
        </ul>
      </div>
      <div class="posts-list">
        ${Array(5).fill(0).map((t,s)=>d(s)).join("")}
      </div>
    </div>
  `}function d(t){return`
    <div class="post-item bg-card">
      <div class="post-votes">
        <button class="vote-btn upvote"><i class="bi bi-arrow-up"></i></button>
        <span class="vote-count text-body">${Math.floor(Math.random()*100)}</span>
        <button class="vote-btn downvote"><i class="bi bi-arrow-down"></i></button>
      </div>
      <div class="post-content">
        <div class="post-meta text-body">
          <span>Posted in r/AIUForum ${t+1} days ago</span>
        </div>
        <h4 class="post-title text-body">This is a sample post title #${t+1}</h4>
        <p class="post-text text-body">This is some sample post content that would appear here in the user's profile page.</p>
        <div class="post-actions">
          <button class="action-btn text-body"><i class="bi bi-chat"></i> ${Math.floor(Math.random()*20)} Comments</button>
          <button class="action-btn text-body"><i class="bi bi-share"></i> Share</button>
          <button class="action-btn text-body"><i class="bi bi-bookmark"></i> Save</button>
        </div>
      </div>
    </div>
  `}const n=document.getElementById("main");document.querySelectorAll('[data-bs-toggle="modal"]').forEach(t=>{t.addEventListener("click",function(){this.getAttribute("data-auth-type")==="signup"&&new bootstrap.Tab(document.querySelector("#signup-tab")).show()})});n.insertAdjacentHTML("beforeend",i());
