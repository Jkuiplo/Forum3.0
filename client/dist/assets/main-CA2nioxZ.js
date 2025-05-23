(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function L(){return`
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
			  <img id="avatar"src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
			    alt="User">
			</a>
			<ul class="dropdown-menu dropdown-menu-end bg-body"
			  aria-labelledby="profileDropdown">
			  <li>
			    <h6 class="dropdown-header text-body">My Profile</h6>
			  </li>
			  <li><a id="profile-link" class="dropdown-item text-body" href="/profile"><i class="bi bi-person me-2"></i>Profile</a></li>
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




       




	`}function d(e){const o=document.getElementById("toast");o.querySelector(".toast-body").textContent=e,bootstrap.Toast.getOrCreateInstance(o).show()}function S(e){const o=document.cookie.split(";").map(a=>a.trim());for(const a of o)if(a.startsWith(e+"="))return a.split("=")[1];return null}const g=S("Token");document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("mediaInput"),o=document.getElementById("previewContainer"),a=document.getElementById("createPostForm");e==null||e.addEventListener("change",()=>{const t=e.files[0];if(o.innerHTML="",!t)return;const s=t.type,l=new FileReader;l.onload=c=>{let n;s.startsWith("image/")?(n=document.createElement("img"),n.src=c.target.result,n.className="img-fluid rounded",n.style.maxHeight="300px"):s.startsWith("video/")&&(n=document.createElement("video"),n.src=c.target.result,n.controls=!0,n.className="w-100 rounded",n.style.maxHeight="300px"),n&&o.appendChild(n)},l.readAsDataURL(t)});function i(t){const s=document.getElementById("toast");s.querySelector(".toast-body").textContent=t,bootstrap.Toast.getOrCreateInstance(s).show()}a==null||a.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData,l=a.querySelector('input[placeholder="Title"]').value,c=a.querySelector("textarea").value,n=a.querySelector("select").value,h=e.files[0];s.append("title",l),s.append("content",c),s.append("community",n),h&&s.append("image",h);try{const b=await fetch("http://localhost:5000/api/threads",{method:"POST",headers:{Authorization:`Bearer ${g}`},body:s,credentials:"same-origin"});if(!b.ok){const I=await b.text();alert("Ошибка: "+I);return}i("Пост опубликован!"),a.reset(),o.innerHTML="",bootstrap.Modal.getInstance(document.getElementById("createPostModal")).hide()}catch(b){console.error(b),i("Произошла ошибка при публикации поста.")}})});document.body.insertAdjacentHTML("afterbegin",L());const v=document.querySelector(".header-nav.unauthorized"),f=document.querySelector(".header-nav.authorized"),u=document.getElementById("toggleAuthState"),x=document.querySelector(".create-post-btn"),T=document.getElementById("authModal"),k=document.querySelectorAll(".google-auth-btn");new bootstrap.Modal(T);const C=new bootstrap.Modal(document.getElementById("createPostModal"));let r=!1;S("Token")?(console.log("да"),r=!0,m(),M().then(e=>{e.avatar&&(document.getElementById("avatar").src=e.avatar)})):(console.log("нет"),r=!1,m());async function M(){try{return(await fetch("http://localhost:5000/api/users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`}})).json()}catch(e){console.log(e)}}function m(){r=!r,r?(v.classList.add("visually-hidden"),f.classList.remove("visually-hidden"),u&&(u.textContent="Switch to Unauthorized")):(v.classList.remove("visually-hidden"),f.classList.add("visually-hidden"),u&&(u.textContent="Switch to Authorized"))}const E=document.querySelector("#signup form"),p=E.querySelectorAll("input"),q=p[0],P=p[1],A=p[2];async function B(e,o,a){return(await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:o,password:a})})).json()}E.addEventListener("submit",async e=>{e.preventDefault();const o=q.value.trim(),a=P.value.trim(),i=A.value.trim();if(!o||!a||!i){alert("Please fill in all fields.");return}const t=await B(a,o,i);t.message==="Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email"?(console.log("Эта почта уже используется"),d("Эта почта уже используется")):t.message==="Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"?(console.log("Этот ник уже используется"),d("Этот ник уже используется")):t.message==="Пользователь зарегестрирован"&&(console.log("Пользователь зарегестрирован"),d("Пользователь зарегестрирован"),bootstrap.Modal.getInstance(document.getElementById("authModal")).hide())});const y=document.querySelector("#login form"),O=y.querySelector('input[type="text"]'),U=y.querySelector('input[type="password"]');y.addEventListener("submit",async e=>{e.preventDefault();const o=O.value.trim(),a=U.value.trim();if(!o||!a){d("Заполните оба поля!");return}console.log("Username:",o),console.log("Password:",a);try{const i=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:a})});if(i.ok){const t=await i.json();document.cookie=`Token=${t.token}; path=/; max-age=2592000; samesite=strict`,d("Успешный вход!","success");const s=bootstrap.Modal.getInstance(document.getElementById("authModal"));s&&s.hide(),setTimeout(()=>window.location.href="/",1e3)}else{const t=await i.json();console.error("Login failed:",t.message),d("Неверный логин или пароль","error")}}catch(i){console.error("Network error:",i),d("Ошибка сети")}});function j(){const e=document.querySelector(".reddit-sidebar"),o=document.querySelector(".sidebar-toggle"),a=document.querySelector(".sidebar-close"),i=document.querySelector(".sidebar-overlay");if(!e)return;o&&o.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),a&&a.addEventListener("click",t),i&&i.addEventListener("click",t),document.addEventListener("keydown",s=>{s.key==="Escape"&&e.classList.contains("active")&&t()});function t(){e.classList.remove("active"),document.body.style.overflow=""}}x&&x.addEventListener("click",()=>{C.show()});k.forEach(e=>{e.addEventListener("click",()=>{window.location.href="/auth/google",console.log("Google auth initiated")})});m();document.querySelectorAll('[data-bs-toggle="modal"]').forEach(e=>{e.addEventListener("click",function(){this.getAttribute("data-auth-type")==="signup"&&new bootstrap.Tab(document.querySelector("#signup-tab")).show()})});function w(){const e=localStorage.getItem("theme")==="dark";document.body.classList.toggle("dark-bg",e),document.documentElement.setAttribute("data-bs-theme",e?"dark":"light");const o=document.getElementById("logo");o&&(o.style.color=e?"white":"black")}document.addEventListener("DOMContentLoaded",()=>{if(!localStorage.getItem("theme")){const o=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.setItem("theme",o?"dark":"light")}w();const e=document.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{const a=localStorage.getItem("theme")==="dark"?"light":"dark";localStorage.setItem("theme",a),w()})});j();fetch("/api/users/me",{headers:{Authorization:`Bearer ${g}`}}).then(e=>{if(!e.ok)throw new Error("Не удалось получить пользователя");return e.json()}).then(e=>{const o=e.username;if(!o)throw new Error("Имя пользователя не найдено");const a=document.getElementById("profile-link");a&&(a.href=`/u/${encodeURIComponent(o)}`)}).catch(e=>{console.error(e)});export{g as t};
