import{t as m}from"./main-CA2nioxZ.js";import{d as y,r as w,b as p}from"./config-U9AGjeG7.js";function g(e){return`
    <div class="modal fade" id="commentsModal-${e}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content bg-body text-body">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Comments</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${k(e)}
            <div class="comments-list mt-4">
              ${L(e)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function k(e){return`
    <div class="comment-form bg-body text-body p-3 rounded">
      <form class="add-comment-form" data-post-id="${e}">
        <div class="form-group mb-3">
          <textarea class="form-control bg-body text-body" rows="3" placeholder="What are your thoughts?" required></textarea>
        </div>
        <div class="form-actions d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">Comment</button>
        </div>
      </form>
    </div>
  `}function L(e){return`<div class="comments-list mt-4" id="comments-list-${e}"></div>`}async function h(e){const t=document.querySelector(`#comments-list-${e}`);if(t){console.log(`Loading comments for post ${e}`),t.innerHTML='<div class="text-muted">Loading comments...</div>';try{const o=await fetch(`http://localhost:5000/api/comments/${e}`);if(!o.ok)throw new Error("Failed to fetch");const n=await o.json();if(console.log(n),!Array.isArray(n))throw new Error("Invalid format");const s=n.map(a=>`
      <div class="comment bg-body text-body p-3 mb-3 rounded border border-secondary" data-comment-id="${a.id}">
        <div class="d-flex">
          <img src="${a.avatar?a.avatar:"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"}" 
            alt="${a.author}" 
            class="rounded-circle me-3" 
            width="32" 
            height="32">

          <div class="comment-body flex-grow-1">
            <div class="comment-header d-flex align-items-center mb-2">
              <span class="author fw-bold me-2">${a.username}</span>
              <span class="timestamp text-muted small">${y.utc(a.created_at).tz("Asia/Almaty").fromNow()}</span>
            </div>
            <div class="comment-content mb-2">${a.content}</div>
            <div class="comment-actions d-flex align-items-center">
              <button class="btn btn-sm btn-outline-secondary me-2 vote-btn upvote">
                <i class="bi bi-arrow-up"></i>
              </button>
              <span class="vote-count me-2">${a.total_votes}</span>
              <button class="btn btn-sm btn-outline-secondary me-3 vote-btn downvote">
                <i class="bi bi-arrow-down"></i>
              </button>
              <button class="btn btn-sm btn-link text-decoration-none">Reply</button>
            </div>
          </div>
        </div>
      </div>
    `).join("");t.innerHTML=s||'<div class="text-muted">No comments yet.</div>',E()}catch(o){t.innerHTML='<div class="text-danger">Failed to load comments.</div>',console.error(o)}}}function $(e){document.querySelectorAll(`[data-target="#commentsModal-${e}"]`).forEach(t=>{t.addEventListener("click",()=>{h(e)})}),document.querySelectorAll(`.add-comment-form[data-post-id="${e}"]`).forEach(t=>{t.addEventListener("submit",async o=>{o.preventDefault();const n=t.querySelector("textarea"),s=n.value.trim();if(s)try{if(!(await fetch(`http://localhost:5000/api/comments/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({content:s})})).ok)throw new Error("Failed to post comment");n.value="",await h(e)}catch(a){console.error("Error posting comment:",a)}})})}function E(e){document.querySelectorAll(".comment .vote-btn").forEach(t=>{t.addEventListener("click",async function(){const o=this.closest(".comment"),n=o.dataset.commentId,s=this.classList.contains("upvote"),a=this.classList.contains("downvote"),u=o.querySelector(".vote-count");let i=parseInt(u.textContent);const d=o.querySelector(".upvote"),l=o.querySelector(".downvote"),v=this.classList.contains("active");let c;v?c=0:s?c=1:a&&(c=-1);try{const r=await fetch("http://localhost:5000/api/votes/comment",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({commentId:n,vote:c})});if(!r.ok)throw new Error("Failed to update vote");const b=await r.json();d.classList.remove("active"),l.classList.remove("active"),v?i+=s?-1:1:(this.classList.add("active"),s?i+=l.classList.contains("active")?2:1:i-=d.classList.contains("active")?2:1),u.textContent=i}catch(r){console.error("Error updating comment vote:",r)}})})}function x(e,t){return`
    <div class="modal fade" id="shareModal-${e}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-body text-body">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Share Post</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <button class="btn btn-outline-primary w-100 mb-2" id="copyLinkBtn-${e}">
              <i class="bi bi-clipboard"></i> Copy Link
            </button>
            <a href="https://t.me/share/url?url=${encodeURIComponent(t)}" target="_blank" class="btn btn-outline-info w-100 mb-2">
              <i class="bi bi-telegram"></i> Share on Telegram
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(t)}" target="_blank" class="btn btn-outline-success w-100">
              <i class="bi bi-whatsapp"></i> Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `}function C(e,t){const o=document.getElementById(`copyLinkBtn-${e}`);o&&o.addEventListener("click",()=>{navigator.clipboard.writeText(t).then(()=>{o.textContent="Copied!",setTimeout(()=>o.innerHTML='<i class="bi bi-clipboard"></i> Copy Link',1500)}).catch(()=>alert("Failed to copy link"))})}const f=document.getElementById("main");async function S(e){try{const t=await fetch(`${p}/api/bookmarks/${e}`,{method:"POST",headers:{Authorization:`Bearer ${m}`}});if(t.ok)return await t.json();{const o=await t.json();console.error("Error:",o.message||"Unknown");return}}catch(t){console.error("Network error:",t.message||"Unknown error");return}}async function T(e){try{const t=await fetch(`${p}/api/bookmarks/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${m}`}});if(t.ok)return await t.json();{const o=await t.json();console.error("Error:",o.message||"Unknown");return}}catch(t){console.error("Network error:",t.message||"Unknown error");return}}async function B(){try{const e=await fetch("http://localhost:5000/api/threads",{method:"GET",credentials:"same-origin",headers:{Authorization:`Bearer ${m}`}});if(e.ok){const t=await e.json();return console.log(t),t}else{const t=await e.json();return console.error("Error:",t.message||"Unknown error"),[]}}catch(e){return console.error("Network error:",e.message||"Unknown error"),[]}}async function A(){try{const e=await B();f.innerHTML=w(e),M(),e.forEach(t=>{console.log(p),document.body.insertAdjacentHTML("beforeend",x(t.id,`${window.location.origin}/posts/${t.id}`)),C(t.id,`${window.location.origin}/posts/${t.id}`)})}catch(e){console.error("Error loading posts:",e),f.innerHTML='<div class="alert alert-danger">Failed to load posts</div>'}}function M(){document.querySelectorAll(".vote-btn").forEach(e=>{e.addEventListener("click",async function(){const t=this.closest(".post"),o=t.dataset.postId;let n=parseInt(t.dataset.userVote);const s=this.classList.contains("upvote"),a=this.classList.contains("downvote"),u=t.querySelector(".vote-count");let i=parseInt(u.textContent);const d=t.querySelector(".upvote"),l=t.querySelector(".downvote"),v=d.querySelector("i"),c=l.querySelector("i");let r;s&&n===1||a&&n===-1?r=0:s?r=1:a&&(r=-1);try{if(!(await fetch("http://localhost:5000/api/votes/thread",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({threadId:o,vote:r})})).ok)throw new Error("Failed to update vote");d.classList.remove("active"),l.classList.remove("active"),v.className="bi bi-caret-up",c.className="bi bi-caret-down",r===0?(n===1&&(i-=1),n===-1&&(i+=1),t.dataset.userVote=0):r===1?(i+=n===-1?2:1,d.classList.add("active"),v.className="bi bi-caret-up-fill text-danger",t.dataset.userVote=1):r===-1&&(i-=n===1?2:1,l.classList.add("active"),c.className="bi bi-caret-down-fill text-primary",t.dataset.userVote=-1),u.textContent=i}catch(b){console.error("Error updating vote:",b)}})}),document.querySelectorAll(".comment-btn").forEach(e=>{e.addEventListener("click",async()=>{const t=e.closest(".post").dataset.postId;document.getElementById(`commentsModal-${t}`)||(document.body.insertAdjacentHTML("beforeend",g(t)),$(t)),await h(t),new bootstrap.Modal(document.getElementById(`commentsModal-${t}`)).show()})}),document.addEventListener("click",async e=>{const t=e.target.closest(".action-btn.save-btn");if(!t)return;const o=t.dataset.threadId;if(console.log("Clicked bookmark btn for threadId:",o),t.classList.contains("saved")){const s=await T(o);console.log("removeBookmark result:",s),s&&(t.classList.remove("saved"),t.innerHTML='<i class="bi bi-bookmark text-body"></i> Save')}else{const s=await S(o);console.log("addBookmark result:",s),s&&(t.classList.add("saved"),t.innerHTML='<i class="bi bi-bookmark-fill text-body"></i> Saved')}})}document.addEventListener("DOMContentLoaded",A);
