export function renderHeader() {


	return `
	  <header class="reddit-header bg-body">
	    <div class="container-fluid">
	      <div class="row align-items-center">
		<div class="col-md-2 col-sm-3 col-4 header-logo bg-body">
		  <div class="d-flex align-items-center">
		    <button class="sidebar-toggle me-2 bg-body bg-text">
		      <i class="bi bi-list"></i>
		    </button>
		    <a href="#" class="d-flex align-items-center ">
		      <span class="logo-text bg-text" id="logo">AIU Forum</span>
		    </a>
		  </div>
		</div>

		<div class="col-md-6 col-sm-5 col-8 header-search bg-body">
		  <div class="search-container bg-body">
		    <i class="bi bi-search search-icon bg-text"></i>
		    <input type="text" class="search-input bg-body bg-text" placeholder="Search forum">
		  </div>
		</div>

		<div class="col-md-4 col-sm-4 d-none d-sm-flex header-nav unauthorized bg-body">
		  <nav class="d-flex align-items-center justify-content-end w-100 gap-2">
		    <button class="btn btn-outline-light btn-sm login-btn bg-text text-body"
		      data-bs-toggle="modal" data-bs-target="#authModal"
		      data-auth-type="login">
		      <i class="bi bi-box-arrow-in-right text-body"></i> Log In
		    </button>
		    <button class="btn btn-primary btn-sm signup-btn bg-text" data-bs-toggle="modal"
		      data-bs-target="#authModal" data-auth-type="signup">
		      <i class="bi bi-person-plus"></i> Sign Up
		    </button>
		  </nav>
		</div>

		<div class="col-md-4 col-sm-4 d-none d-sm-flex header-nav authorized visually-hidden bg-body">
		<div class="d-flex align-items-center justify-content-end w-100 gap-3">
		<button class="btn btn-primary btn-sm create-post-btn bg-text">
		<i class="bi bi-plus-lg"></i> Create Post
		</button>
		<button class="theme-moon btn btn-primary btn-sm create-post-btn bg-text  theme-toggle" >
		    <i class="bi bi-moon"></i> 
		  </button>
		
		    <div class="d-flex align-items-center gap-2 bg-body">
		      <a href="#" class="nav-link " title="Chat"><i class="bi bi-chat-square-text bg-text"></i></a>
		      <a href="#" class="nav-link bg-text" title="Notifications"><i class="bi bi-bell"></i></a>
		      <a href="#" class="nav-link bg-text" title="Coins"><i class="bi bi-coin"></i></a>

		      <div class="dropdown">
			<a href="#" class="nav-link user-avatar dropdown-toggle"
			  id="profileDropdown" data-bs-toggle="dropdown"
			  aria-expanded="false">
			  <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
			    alt="User">
			</a>
			<ul class="dropdown-menu dropdown-menu-end"
			  aria-labelledby="profileDropdown">
			  <li>
			    <h6 class="dropdown-header bg-text">My Profile</h6>
			  </li>
			  <li><a class="dropdown-item bg-text" href="./pages/profile.html"><i class="bi bi-person me-2"></i>Profile</a></li>
			  <li><a class="dropdown-item bg-text" href="./pages/saved.html"><i class="bi bi-bookmark me-2"></i>Saved</a></li>
			  <li><a class="dropdown-item bg-text" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
			  <li><hr class="dropdown-divider"></li>
			  <li><a class="dropdown-item bg-text" href="#"><i class="bi bi-box-arrow-right me-2"></i>Log Out</a></li>
			</ul>
		      </div>
		    </div>
		  </div>
		</div>

		<div class="col-1 d-sm-none text-end bg-body">
		  <button class="mobile-menu-btn bg-body bg-text">
			<i class="bi bi-list text-primary" style="color: black; "></i>
		  </button>
		</div>
	      </div>
	    </div>
	  </header>

	  <div class="reddit-sidebar bg-body">
	    <div class="sidebar-content bg-body">
	      <div class="sidebar-header">
		<h3 class="bg-text">Communities</h3>
		<button class="sidebar-close bg-text"><i class="bi bi-x-lg"></i></button>
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
					<h5 class="modal-title bg-text" id="authModalLabel">Welcome to AIU Forum</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="auth-tabs mb-4">
						<ul class="nav nav-tabs" id="authTab" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="nav-link active bg-body bg-text" id="login-tab"
									data-bs-toggle="tab" data-bs-target="#login"
									type="button" role="tab">Log In</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link bg-body bg-text" id="signup-tab"
									data-bs-toggle="tab" data-bs-target="#signup"
									type="button" role="tab">Sign Up</button>
							</li>
						</ul>
						<div class="tab-content" id="authTabContent">
							<div class="tab-pane fade show active" id="login"
								role="tabpanel">
								<form class="mt-3">
									<div class="mb-3">
										<input type="text" class="form-control bg-body bg-text"
											placeholder="Username">
									</div>
									<div class="mb-3">
										<input type="password"
											class="form-control bg-body bg-text"
											placeholder="Password">
									</div>
									<button type="submit"
										class="btn btn-primary w-100 bg-text">Log
										In</button>
								</form>
								<div class="text-center my-3 bg-text">OR</div>
								<button
									class="btn btn-outline-dark w-100 mb-3 google-auth-btn bg-text">
									<img src="./assets/google-logo.png" alt="Google"
										class="me-2" style="height: 20px;">
									Continue with Google
								</button>
							</div>
							<div class="tab-pane fade" id="signup" role="tabpanel">
								<form class="mt-3">
									<div class="mb-3">
										<input type="email" class="form-control bg-body bg-text"
											placeholder="Email">
									</div>
									<div class="mb-3">
										<input type="text" class="form-control bg-body bg-text"
											placeholder="Username">
									</div>
									<div class="mb-3">
										<input type="password"
											class="form-control bg-body bg-text"
											placeholder="Password">
									</div>
									<button type="submit"
										class="btn btn-primary w-100 bg-text">Sign
										Up</button>
								</form>
								<div class="text-center my-3 bg-text">OR</div>
								<button
									class="btn btn-outline-dark w-100 mb-3 google-auth-btn bg-text">
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
					<h5 class="modal-title bg-text" id="createPostModalLabel">Create a post</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<select class="form-select bg-body bg-text">
								<option selected>Choose a community</option>
								<option>r/javascript</option>
								<option>r/webdev</option>
								<option>r/reactjs</option>
							</select>
						</div>
						<div class="mb-3">
							<input type="text" class="form-control bg-body bg-text" placeholder="Title">
						</div>
						<div class="mb-3">
							<textarea class="form-control bg-body bg-text" rows="5"
								placeholder="Text (optional)"></textarea>
						</div>
						<div class="d-flex justify-content-end gap-2">
							<button type="button" class="btn btn-outline-secondary"
								data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary bg-text">Post</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="auth-toggle" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
		<button id="toggleAuthState" class="btn btn-warning bg-text">Toggle Auth State</button>
	</div>
	`;
}
