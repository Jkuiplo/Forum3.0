import"./main-H2MTFp0w.js";function s(e=!0){return`
    <div class="settings-container bg-body">
      <div class="settings-header">
        <h2 class="text-body">User Settings</h2>
      </div>
      ${e?n():o()}
    </div>
  `}function n(){return`
    <div class="settings-content">
      <div class="settings-sidebar">
        <nav class="settings-nav">
          ${a()}
        </nav>
      </div>
      <div class="settings-main">
        ${i()}
      </div>
    </div>
  `}function a(){return[{id:"profile",icon:"person",label:"Profile"},{id:"account",icon:"gear",label:"Account"},{id:"privacy",icon:"shield-lock",label:"Privacy"},{id:"notifications",icon:"bell",label:"Notifications"},{id:"feed",icon:"newspaper",label:"Feed Settings"},{id:"chat",icon:"chat",label:"Chat & Messaging"}].map(t=>`
    <button class="nav-item text-body" data-section="${t.id}">
      <i class="bi bi-${t.icon} text-body"></i>
      <span>${t.label}</span>
    </button>
  `).join("")}function i(){return`
    <section class="settings-section bg-body" id="profile-settings">
      <h3 class="text-body">Profile Information</h3>
      <form class="settings-form">
        <div class="form-group">
          <label class="text-body">Display Name</label>
          <input type="text" class="form-control bg-body text-body" value="RedditUser123">
        </div>
        
        <div class="form-group">
          <label class="text-body">About</label>
          <textarea class="form-control bg-body text-body" rows="3">I love Reddit!</textarea>
        </div>
        
        <div class="form-group">
          <label class="text-body">Profile Picture</label>
          <div class="avatar-upload">
            <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png" alt="Avatar" class="avatar-preview">
            <button type="button" class="btn btn-sm btn-outline-secondary text-body">Change</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="text-body">Banner Image</label>
          <div class="banner-upload">
            <div class="banner-preview bg-body-secondary"></div>
            <button type="button" class="btn btn-sm btn-outline-secondary text-body">Change Banner</button>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="button" class="btn btn-secondary text-body">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </section>
  `}function o(){return`
    <div class="auth-required text-body">
      <i class="bi bi-lock text-body"></i>
      <h3 class="text-body">Sign in to access settings</h3>
      <p class="text-body">You need to be logged in to view and edit your settings</p>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Log In</button>
    </div>
  `}const d=document.getElementById("main");d.innerHTML=s();
