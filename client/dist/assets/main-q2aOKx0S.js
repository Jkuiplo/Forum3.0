(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function L(){return`
	  <header class="reddit-header bg-body">
	    <div class="container-fluid">
	      <div class="row align-items-center">
		<div class="col-md-2 col-sm-3 col-4 header-logo bg-body">
		  <div class="d-flex align-items-center">
		    <button class="sidebar-toggle me-2 bg-body text-body">
		      <i class="bi bi-list"></i>
		    </button>
		    <a href="/" class="d-flex align-items-center ">
		      <span class="logo-text text-body" id="logo">AIU Forum</span>
		    </a>
		  </div>
		</div>

		<div class="col-md-6 col-sm-5 col-8 header-search bg-body">
		  <div class="search-container bg-body">
		    <i class="bi bi-search search-icon text-body"></i>
		    <input type="text" class="search-input bg-body text-body" placeholder="Search forum">
		  </div>
		</div>

		<div class="col-md-4 col-sm-4 d-none d-sm-flex header-nav unauthorized bg-body">
		  <nav class="d-flex align-items-center justify-content-end w-100 gap-2">
		    <button class="btn btn-outline-light btn-sm login-btn text-body text-body"
		      data-bs-toggle="modal" data-bs-target="#authModal"
		      data-auth-type="login">
		      <i class="bi bi-box-arrow-in-right text-body"></i> Log In
		    </button>
		    <button class="btn btn-primary btn-sm signup-btn text-body" data-bs-toggle="modal"
		      data-bs-target="#authModal" data-auth-type="signup">
		      <i class="bi bi-person-plus"></i> Sign Up
		    </button>
		  </nav>
		</div>

		<div class="col-md-4 col-sm-4 d-none d-sm-flex header-nav authorized visually-hidden bg-body">
		<div class="d-flex align-items-center justify-content-end w-100 gap-3">
		<button class="btn btn-primary btn-sm create-post-btn text-body">
		<i class="bi bi-plus-lg"></i> Create Post
		</button>
		<button class="theme-moon btn btn-primary btn-sm create-post-btn text-body  theme-toggle" >
		    <i class="bi bi-moon"></i> 
		  </button>
		
		    <div class="d-flex align-items-center gap-2 bg-body">
		      <a href="#" class="nav-link " title="Chat"><i class="bi bi-chat-square-text text-body"></i></a>
		      <a href="#" class="nav-link text-body" title="Notifications"><i class="bi bi-bell"></i></a>
		      <a href="#" class="nav-link text-body" title="Coins"><i class="bi bi-coin"></i></a>

		      <div class="dropdown">
			<a href="#" class="nav-link user-avatar dropdown-toggle"
			  id="profileDropdown" data-bs-toggle="dropdown"
			  aria-expanded="false">
			  <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
			    alt="User">
			</a>
			<ul class="dropdown-menu dropdown-menu-end bg-body"
			  aria-labelledby="profileDropdown">
			  <li>
			    <h6 class="dropdown-header text-body">My Profile</h6>
			  </li>
			  <li><a class="dropdown-item text-body" href="/profile"><i class="bi bi-person me-2"></i>Profile</a></li>
			  <li><a class="dropdown-item text-body" href="/saved"><i class="bi bi-bookmark me-2"></i>Saved</a></li>
			  <li><a class="dropdown-item text-body" href="/settings"><i class="bi bi-gear me-2"></i>Settings</a></li>
			  <li><hr class="dropdown-divider"></li>
			  <li><a class="dropdown-item text-body" href="/logout"><i class="bi bi-box-arrow-right me-2"></i>Log Out</a></li>
			</ul>
		      </div>
		    </div>
		  </div>
		</div>

		<div class="col-1 d-sm-none text-end bg-body">
		  
		</div>
	      </div>
	    </div>
	  </header>

	  <div class="reddit-sidebar bg-body">
	    <div class="sidebar-content bg-body">
	      <div class="sidebar-header">
		<h3	>Communities</h3>
		<button class="sidebar-close text-body"><i class="bi bi-x-lg"></i></button>
	      </div>
	      <div class="sidebar-body">
		<ul class="sidebar-menu">
		  <li><a href="#" class="text-body"><i class="bi bi-house-door"></i> Home</a></li>
		  <li><a href="#" class="text-body"><i class="bi bi-fire"></i> Popular</a></li>
		  <li><a href="#" class="text-body"><i class="bi bi-collection"></i> All</a></li>
		  <li class="divider"></li>
		  <li><a href="#" class="text-body"><i class="bi bi-plus-circle"></i> Create Community</a></li>
		  <li class="divider"></li>
		  <li><h4 class="text-body">Your Communities</h4></li>
		  <li><a href="#" class="text-body">r/javascript</a></li>
		  <li><a href="#" class="text-body">r/webdev</a></li>
		  <li><a href="#" class="text-body">r/reactjs</a></li>
		</ul>
	      </div>
	    </div>
	    <div class="sidebar-overlay"></div>
	  </div>

	<div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content bg-body">
				<div class="modal-header text-body">
					<h5 class="modal-title text-body" id="authModalLabel">Welcome to AIU Forum</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="auth-tabs mb-4">
						<ul class="nav nav-tabs" id="authTab" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="nav-link active bg-body text-body" id="login-tab"
									data-bs-toggle="tab" data-bs-target="#login"
									type="button" role="tab">Log In</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link bg-body text-body" id="signup-tab"
									data-bs-toggle="tab" data-bs-target="#signup"
									type="button" role="tab">Sign Up</button>
							</li>
						</ul>
						<div class="tab-content" id="authTabContent">
							<div class="tab-pane fade show active" id="login"
								role="tabpanel">
								<form class="mt-3">
									<div class="mb-3">
										<input type="text" class="form-control bg-body text-body"
											placeholder="Username">
									</div>
									<div class="mb-3">
										<input type="password"
											class="form-control bg-body text-body"
											placeholder="Password">
									</div>
									<button type="submit"
										class="btn btn-primary w-100 text-body">Log
										In</button>
								</form>
								<div class="text-center my-3 text-body">OR</div>
								<button
									class="btn btn-outline-dark w-100 mb-3 google-auth-btn ">
									<img src="./assets/google-logo.png" alt="Google"
										class="me-2" style="height: 20px;">
									Continue with Google
								</button>
							</div>
							<div class="tab-pane fade" id="signup" role="tabpanel">
								<form class="mt-3">
									<div class="mb-3">
										<input type="email" class="form-control bg-body text-body"
											placeholder="Email">
									</div>
									<div class="mb-3">
										<input type="text" class="form-control bg-body text-body"
											placeholder="Username">
									</div>
									<div class="mb-3">
										<input type="password"
											class="form-control bg-body text-body"
											placeholder="Password">
									</div>
									<button type="submit"
										class="btn btn-primary w-100 text-body">Sign
										Up</button>
								</form>
								<div class="text-center my-3 text-body">OR</div>
								<button
									class="btn btn-outline-dark w-100 mb-3 google-auth-btn text-body">
									<img src="./assets/google-logo.png" alt="Google"
										class="me-2" style="height: 20px;">
									Continue with Google
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



<div class="modal fade" id="createPostModal" tabindex="-1" aria-labelledby="createPostModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content bg-body">
      <div class="modal-header">
        <h5 class="modal-title text-body" id="createPostModalLabel">Create a post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="createPostForm">
          <div class="mb-3 text-body">
            <select class="form-select bg-body text-body" name="community" required>
              <option selected disabled>Choose a community</option>
              <option value="javascript">r/javascript</option>
              <option value="webdev">r/webdev</option>
              <option value="reactjs">r/reactjs</option>
            </select>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control bg-body text-body" name="title" placeholder="Title" required>
          </div>
          <div class="mb-3">
            <textarea class="form-control bg-body text-body" name="content" rows="5"
              placeholder="Text (optional)"></textarea>
          </div>

          <div class="mb-3">
            <label for="mediaInput" class="form-label text-body">Upload image or video</label>
            <input class="form-control bg-body text-body" type="file" id="mediaInput" name="media"
              accept="image/*,video/*">
          </div>
          <div id="previewContainer" class="mb-3"></div>

          <div class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary text-body">Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>




       




	`}function x(t){const o=document.cookie.split(";").map(a=>a.trim());for(const a of o)if(a.startsWith(t+"="))return a.split("=")[1];return null}const I=x("Token");document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("mediaInput"),o=document.getElementById("previewContainer"),a=document.getElementById("createPostForm");t==null||t.addEventListener("change",()=>{const i=t.files[0];if(o.innerHTML="",!i)return;const e=i.type,s=new FileReader;s.onload=n=>{let l;e.startsWith("image/")?(l=document.createElement("img"),l.src=n.target.result,l.className="img-fluid rounded",l.style.maxHeight="300px"):e.startsWith("video/")&&(l=document.createElement("video"),l.src=n.target.result,l.controls=!0,l.className="w-100 rounded",l.style.maxHeight="300px"),l&&o.appendChild(l)},s.readAsDataURL(i)}),a==null||a.addEventListener("submit",async i=>{i.preventDefault();const e=new FormData,s=a.querySelector('input[placeholder="Title"]').value,n=a.querySelector("textarea").value,l=a.querySelector("select").value,p=t.files[0];e.append("title",s),e.append("content",n),e.append("community",l),p&&e.append("image",p);try{const c=await fetch("http://localhost:5000/api/threads",{method:"POST",headers:{Authorization:`Bearer ${I}`},body:e,credentials:"same-origin"});if(!c.ok){const S=await c.text();alert("Ошибка: "+S);return}alert("Пост опубликован!"),a.reset(),o.innerHTML="",bootstrap.Modal.getInstance(document.getElementById("createPostModal")).hide()}catch(c){console.error(c),alert("Произошла ошибка при публикации поста.")}})});function d(t){const o=document.getElementById("toast");o.querySelector(".toast-body").textContent=t,bootstrap.Toast.getOrCreateInstance(o).show()}document.body.insertAdjacentHTML("afterbegin",L());const y=document.querySelector(".header-nav.unauthorized"),h=document.querySelector(".header-nav.authorized"),b=document.getElementById("toggleAuthState"),v=document.querySelector(".create-post-btn"),E=document.getElementById("authModal"),T=document.querySelectorAll(".google-auth-btn");new bootstrap.Modal(E);const k=new bootstrap.Modal(document.getElementById("createPostModal"));let r=!1;x("Token")?(console.log("да"),r=!0,u()):(console.log("нет"),r=!1,u());function u(){r=!r,r?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden"),b&&(b.textContent="Switch to Unauthorized")):(y.classList.remove("visually-hidden"),h.classList.add("visually-hidden"),b&&(b.textContent="Switch to Authorized"))}const w=document.querySelector("#signup form"),m=w.querySelectorAll("input"),C=m[0],M=m[1],q=m[2];async function P(t,o,a){return(await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:o,password:a})})).json()}w.addEventListener("submit",async t=>{t.preventDefault();const o=C.value.trim(),a=M.value.trim(),i=q.value.trim();if(!o||!a||!i){alert("Please fill in all fields.");return}const e=await P(a,o,i);e.message==="Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email"?(console.log("Эта почта уже используется"),d("Эта почта уже используется")):e.message==="Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"?(console.log("Этот ник уже используется"),d("Этот ник уже используется")):e.message==="Пользователь зарегестрирован"&&(console.log("Пользователь зарегестрирован"),d("Пользователь зарегестрирован"),bootstrap.Modal.getInstance(document.getElementById("authModal")).hide())});const g=document.querySelector("#login form"),A=g.querySelector('input[type="text"]'),O=g.querySelector('input[type="password"]');g.addEventListener("submit",async t=>{t.preventDefault();const o=A.value.trim(),a=O.value.trim();if(!o||!a){d("Заполните оба поля!");return}console.log("Username:",o),console.log("Password:",a);try{const i=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:a})});if(i.ok){const e=await i.json();document.cookie=`Token=${e.token}; path=/; max-age=2592000; samesite=strict`,d("Успешный вход!","success");const s=bootstrap.Modal.getInstance(document.getElementById("authModal"));s&&s.hide(),setTimeout(()=>window.location.href="/",1e3)}else{const e=await i.json();console.error("Login failed:",e.message),d("Неверный логин или пароль","error")}}catch(i){console.error("Network error:",i),d("Ошибка сети")}});function N(){const t=document.querySelector(".reddit-sidebar"),o=document.querySelector(".sidebar-toggle"),a=document.querySelector(".sidebar-close"),i=document.querySelector(".sidebar-overlay");if(!t)return;o&&o.addEventListener("click",()=>{t.classList.add("active"),document.body.style.overflow="hidden"}),a&&a.addEventListener("click",e),i&&i.addEventListener("click",e),document.addEventListener("keydown",s=>{s.key==="Escape"&&t.classList.contains("active")&&e()});function e(){t.classList.remove("active"),document.body.style.overflow=""}}v&&v.addEventListener("click",()=>{k.show()});T.forEach(t=>{t.addEventListener("click",()=>{window.location.href="/auth/google",console.log("Google auth initiated")})});u();document.querySelectorAll('[data-bs-toggle="modal"]').forEach(t=>{t.addEventListener("click",function(){this.getAttribute("data-auth-type")==="signup"&&new bootstrap.Tab(document.querySelector("#signup-tab")).show()})});function f(){const t=localStorage.getItem("theme")==="dark";document.body.classList.toggle("dark-bg",t),document.documentElement.setAttribute("data-bs-theme",t?"dark":"light");const o=document.getElementById("logo");o&&(o.style.color=t?"white":"black")}document.addEventListener("DOMContentLoaded",()=>{if(!localStorage.getItem("theme")){const o=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.setItem("theme",o?"dark":"light")}f();const t=document.querySelector(".theme-toggle");t&&t.addEventListener("click",()=>{const a=localStorage.getItem("theme")==="dark"?"light":"dark";localStorage.setItem("theme",a),f()})});N();export{I as t};
