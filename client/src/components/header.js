export function renderHeader() {


	return `
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




       




	`;
}