import{t as p}from"./main-CA2nioxZ.js";async function C(t=!0){let e=null;if(p)try{const a=await fetch("/api/users/me",{headers:{Authorization:`Bearer ${p}`}});a.ok&&(e=await a.json())}catch(a){console.error("Failed to fetch user data:",a)}const o=`
    <div class="settings-container bg-body">
      <div class="settings-header">
        <h2 class="text-body">User Settings</h2>
      </div>
      ${t?E(e):P()}
    </div>
  `;return setTimeout(()=>{t&&_(e)},50),o}function F(t={}){const e=t.displayName||t.username||"",o=t.about||"",a=t.avatar||"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png",n=t.banner_url||"";return`
    <section class="settings-section bg-body p-4 rounded shadow-sm mb-4" id="profile-settings">
      <h3 class="text-body mb-4">Profile Information</h3>
      <form class="settings-form d-flex flex-column gap-4">
        <div class="form-group">
          <label class="text-body mb-2">Display Name</label>
          <input type="text" class="form-control bg-body text-body" value="${e}" name="displayName">
        </div>
        <div class="form-group">
          <label class="text-body mb-2">About</label>
          <textarea class="form-control bg-body text-body" rows="3" name="about">${o}</textarea>
        </div>
        <div class="form-group">
          <label class="text-body mb-2">Profile Picture</label>
          <div class="avatar-upload d-flex align-items-center gap-3">
            <img src="${a}" alt="Avatar" class="avatar-preview rounded" style="width: 64px; height: 64px;">
            <div class="file-input-container">
              <label class="file-input-label btn btn-sm btn-outline-secondary text-body">
                Choose File
                <input type="file" id="avatar-upload" accept="image/*" class="file-input">
              </label>
              <span class="file-input-name text-body ms-2">No file chosen</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="text-body mb-2">Banner Image</label>
          <div class="banner-upload d-flex flex-column gap-2">
            <div class="banner-preview bg-body-secondary rounded" style="background-image: url('${n}'); background-size: cover; height: 100px;"></div>
            <div class="file-input-container">
              <label class="file-input-label btn btn-sm btn-outline-secondary text-body">
                Choose File
                <input type="file" id="banner-upload" accept="image/*" class="file-input">
              </label>
              <span class="file-input-name text-body ms-2">No file chosen</span>
            </div>
          </div>
        </div>
        <div class="form-actions d-flex justify-content-end gap-3 pt-3 border-top">
          <button type="button" class="btn btn-secondary text-body" id="cancel-changes-btn">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </section>
  `}function E(t){return`
    <div class="settings-content">
      ${L()}
      ${F(t)}
    </div>
  `}function L(){return`
    <nav class="settings-nav bg-body-secondary p-3 rounded mb-4">
      ${[{id:"profile",icon:"person",label:"Profile"},{id:"account",icon:"gear",label:"Account"},{id:"privacy",icon:"shield-lock",label:"Privacy"},{id:"notifications",icon:"bell",label:"Notifications"},{id:"feed",icon:"newspaper",label:"Feed Settings"},{id:"chat",icon:"chat",label:"Chat & Messaging"}].map(e=>`
        <button class="nav-item d-flex align-items-center gap-2 py-2 px-3 mb-1 rounded bg-body text-body border-0 w-100 text-start" data-section="${e.id}">
          <i class="bi bi-${e.icon} fs-5 text-body"></i>
          <span class="fw-medium">${e.label}</span>
        </button>
      `).join("")}
    </nav>
  `}function P(){return`
    <div class="auth-required text-body">
      <i class="bi bi-lock text-body"></i>
      <h3 class="text-body">Sign in to access settings</h3>
      <p class="text-body">You need to be logged in to view and edit your settings</p>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Log In</button>
    </div>
  `}function _(t){const e=document.querySelector(".settings-form");if(!e)return;const o=document.getElementById("avatar-upload"),a=document.querySelector(".avatar-preview"),n=e.querySelector(".avatar-upload .file-input-name");o&&o.addEventListener("change",s=>{x(s,a),h(s,n)});const r=document.getElementById("banner-upload"),i=document.querySelector(".banner-preview"),d=e.querySelector(".banner-upload .file-input-name");r&&r.addEventListener("change",s=>{x(s,i,!0),h(s,d)});const l=document.getElementById("cancel-changes-btn");l&&l.addEventListener("click",()=>{e.reset(),a&&(a.src=t.avatar_url||"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png",n.textContent="No file chosen"),i&&(i.style.backgroundImage=`url('${t.banner_url||""}')`,d.textContent="No file chosen")}),e.addEventListener("submit",async s=>{s.preventDefault()})}function h(t,e){const o=t.target.files[0];if(!o){e.textContent="No file chosen";return}const a=20;let n=o.name;if(n.length>a){const r=n.split(".").pop();n=`${n.substring(0,a-r.length-4)}...${r}`}e.textContent=n,e.title=o.name}function x(t,e,o=!1){const a=t.target.files[0];if(!a)return;if(!a.type.match("image.*")){b("Please select an image file (JPEG, PNG, etc.)","error");return}if(a.size>5*1024*1024){b("Image size should be less than 5MB","error");return}const n=new FileReader;n.onloadstart=()=>{},n.onload=r=>{try{o?e.style.backgroundImage=`url('${r.target.result}')`:e.src=r.target.result}catch(i){console.error("Error updating preview:",i),b("Error updating image preview","error")}},n.onerror=()=>{b("Error reading the image file","error")},n.readAsDataURL(a)}function b(t,e="success"){alert(t)}const q=document.getElementById("main");function w(t,e="success"){console.log(`${e}: ${t}`),alert(`${e}: ${t}`)}async function B(){q.innerHTML=await C(),setTimeout(()=>{const t=document.querySelector(".settings-form");if(!t)return;const e=document.getElementById("avatar-upload"),o=document.getElementById("banner-upload"),a=document.querySelector(".avatar-preview"),n=document.querySelector(".banner-preview"),r=document.querySelector(".avatar-upload .file-input-name"),i=document.querySelector(".banner-upload .file-input-name");t.querySelector('button[type="submit"]'),t.addEventListener("submit",async l=>{l.preventDefault();const s=t.querySelector('button[type="submit"]'),S=s.textContent;s.disabled=!0,s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...';try{const c=new FormData,m=t.querySelector('[name="displayName"]').value.trim(),g=t.querySelector('[name="about"]').value.trim();m&&c.append("displayName",m),g&&c.append("about",g);const v=e.files[0];v&&c.append("avatar",v);const y=o.files[0];y&&c.append("banner",y);const f=await fetch("/api/users/me",{method:"PUT",headers:{Authorization:`Bearer ${p}`},body:c});if(!f.ok){const I=await f.json().catch(()=>({}));throw new Error(I.error||"Failed to update profile")}const u=await f.json();w("Profile updated successfully!"),u.avatar_url&&(a.src=`${u.avatar_url}?${Date.now()}`),u.banner_url&&(n.style.backgroundImage=`url('${u.banner_url}?${Date.now()}')`),e.value="",o.value="",r.textContent="No file chosen",i.textContent="No file chosen"}catch(c){console.error("Update error:",c),w(c.message||"Failed to update profile","error")}finally{s.disabled=!1,s.textContent=S}}),e&&a&&e.addEventListener("change",l=>{$(l,a),N(l,r)}),o&&n&&o.addEventListener("change",l=>{$(l,n,!0),N(l,i)});const d=document.getElementById("cancel-changes-btn");d&&d.addEventListener("click",()=>{t.reset(),a&&(a.src=a.dataset.originalSrc||"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"),n&&(n.style.backgroundImage=n.dataset.originalBg||""),r&&(r.textContent="No file chosen"),i&&(i.textContent="No file chosen")})},100)}function $(t,e,o=!1){const a=t.target.files[0];if(!a)return;const n=new FileReader;n.onload=r=>{o?e.style.backgroundImage=`url('${r.target.result}')`:e.src=r.target.result},n.readAsDataURL(a)}function N(t,e){const o=t.target.files[0];if(!o){e.textContent="No file chosen";return}const a=20;let n=o.name;if(n.length>a){const r=n.split(".").pop();n=`${n.substring(0,a-r.length-4)}...${r}`}e.textContent=n,e.title=o.name}document.addEventListener("DOMContentLoaded",B);
