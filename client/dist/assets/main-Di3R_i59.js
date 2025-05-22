(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();function L(){return`
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




       




	`}function x(e){const s=document.cookie.split(";").map(o=>o.trim());for(const o of s)if(o.startsWith(e+"="))return o.split("=")[1];return null}const w=x("Token");document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("mediaInput"),s=document.getElementById("previewContainer"),o=document.getElementById("createPostForm");e==null||e.addEventListener("change",()=>{const t=e.files[0];if(s.innerHTML="",!t)return;const a=t.type,n=new FileReader;n.onload=r=>{let l;a.startsWith("image/")?(l=document.createElement("img"),l.src=r.target.result,l.className="img-fluid rounded",l.style.maxHeight="300px"):a.startsWith("video/")&&(l=document.createElement("video"),l.src=r.target.result,l.controls=!0,l.className="w-100 rounded",l.style.maxHeight="300px"),l&&s.appendChild(l)},n.readAsDataURL(t)});function i(t){const a=document.getElementById("toast");a.querySelector(".toast-body").textContent=t,bootstrap.Toast.getOrCreateInstance(a).show()}o==null||o.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData,n=o.querySelector('input[placeholder="Title"]').value,r=o.querySelector("textarea").value,l=o.querySelector("select").value,p=e.files[0];a.append("title",n),a.append("content",r),a.append("community",l),p&&a.append("image",p);try{const c=await fetch("http://localhost:5000/api/threads",{method:"POST",headers:{Authorization:`Bearer ${w}`},body:a,credentials:"same-origin"});if(!c.ok){const S=await c.text();alert("Ошибка: "+S);return}i("Пост опубликован!"),o.reset(),s.innerHTML="",bootstrap.Modal.getInstance(document.getElementById("createPostModal")).hide()}catch(c){console.error(c),i("Произошла ошибка при публикации поста.")}})});document.body.insertAdjacentHTML("afterbegin",L());const y=document.querySelector(".header-nav.unauthorized"),h=document.querySelector(".header-nav.authorized"),b=document.getElementById("toggleAuthState"),v=document.querySelector(".create-post-btn"),E=document.getElementById("authModal"),I=document.querySelectorAll(".google-auth-btn");new bootstrap.Modal(E);const k=new bootstrap.Modal(document.getElementById("createPostModal"));let d=!1;x("Token")?(console.log("да"),d=!0,u(),C().then(e=>{e.avatar&&(document.getElementById("avatar").src=e.avatar)})):(console.log("нет"),d=!1,u());async function C(){try{return(await fetch("http://localhost:5000/api/users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`}})).json()}catch(e){console.log(e)}}function u(){d=!d,d?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden"),b&&(b.textContent="Switch to Unauthorized")):(y.classList.remove("visually-hidden"),h.classList.add("visually-hidden"),b&&(b.textContent="Switch to Authorized"))}const T=document.querySelector("#signup form"),m=T.querySelectorAll("input"),M=m[0],q=m[1],P=m[2];async function A(e,s,o){return(await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:s,password:o})})).json()}T.addEventListener("submit",async e=>{e.preventDefault();const s=M.value.trim(),o=q.value.trim(),i=P.value.trim();if(!s||!o||!i){alert("Please fill in all fields.");return}const t=await A(o,s,i);t.message==="Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email"?(console.log("Эта почта уже используется"),showToast("Эта почта уже используется")):t.message==="Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"?(console.log("Этот ник уже используется"),showToast("Этот ник уже используется")):t.message==="Пользователь зарегестрирован"&&(console.log("Пользователь зарегестрирован"),showToast("Пользователь зарегестрирован"),bootstrap.Modal.getInstance(document.getElementById("authModal")).hide())});const g=document.querySelector("#login form"),O=g.querySelector('input[type="text"]'),B=g.querySelector('input[type="password"]');g.addEventListener("submit",async e=>{e.preventDefault();const s=O.value.trim(),o=B.value.trim();if(!s||!o){showToast("Заполните оба поля!","warning");return}console.log("Username:",s),console.log("Password:",o);try{const i=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:o})});if(i.ok){const t=await i.json();document.cookie=`Token=${t.token}; path=/; max-age=2592000; samesite=strict`,showToast("Успешный вход!","success");const a=bootstrap.Modal.getInstance(document.getElementById("authModal"));a&&a.hide(),setTimeout(()=>window.location.href="/",1e3)}else{const t=await i.json();console.error("Login failed:",t.message),showToast("Неверный логин или пароль","error")}}catch(i){console.error("Network error:",i),showToast("Ошибка сети","error")}});function U(){const e=document.querySelector(".reddit-sidebar"),s=document.querySelector(".sidebar-toggle"),o=document.querySelector(".sidebar-close"),i=document.querySelector(".sidebar-overlay");if(!e)return;s&&s.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),o&&o.addEventListener("click",t),i&&i.addEventListener("click",t),document.addEventListener("keydown",a=>{a.key==="Escape"&&e.classList.contains("active")&&t()});function t(){e.classList.remove("active"),document.body.style.overflow=""}}v&&v.addEventListener("click",()=>{k.show()});I.forEach(e=>{e.addEventListener("click",()=>{window.location.href="/auth/google",console.log("Google auth initiated")})});u();document.querySelectorAll('[data-bs-toggle="modal"]').forEach(e=>{e.addEventListener("click",function(){this.getAttribute("data-auth-type")==="signup"&&new bootstrap.Tab(document.querySelector("#signup-tab")).show()})});function f(){const e=localStorage.getItem("theme")==="dark";document.body.classList.toggle("dark-bg",e),document.documentElement.setAttribute("data-bs-theme",e?"dark":"light");const s=document.getElementById("logo");s&&(s.style.color=e?"white":"black")}document.addEventListener("DOMContentLoaded",()=>{if(!localStorage.getItem("theme")){const s=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.setItem("theme",s?"dark":"light")}f();const e=document.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{const o=localStorage.getItem("theme")==="dark"?"light":"dark";localStorage.setItem("theme",o),f()})});U();export{w as t};
