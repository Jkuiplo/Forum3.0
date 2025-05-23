import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);


export function renderPosts(posts = []) {
	return `
	  <div class="posts-container">
	    ${posts.length > 0 ?
			posts.map(post => renderSinglePost(post)).join('') :
			renderEmptyState(isAuthenticated)
		}
	  </div>
	`;
}

function renderSinglePost(post) {
	const time = dayjs(post.created_at).fromNow();
	return `
	  <div class="post bg-body" data-post-id="${post.id}">
	    <div class="post-votes bg-body">
	      <button class="vote-btn upvote text-body" aria-label="Upvote">
		<i class="bi bi-arrow-up text-body"></i>
	      </button>
	      <span class="vote-count text-body">${post.votes}</span>
	      <button class="vote-btn downvote text-body" aria-label="Downvote">
		<i class="bi bi-arrow-down text-body"></i>
	      </button>
	    </div>
	    <div class="post-content bg-body">
	      <div class="post-header">
		<span class="post-community text-body">r/${post.community}</span>
		<span class="post-author text-body">Posted by u/${post.author}</span>
		<span class="post-time text-body">${time}</span>
	      </div>
	      <h3 class="post-title text-body">${post.title}</h3>
	      ${post.image ? `
		<div class="post-image-container bg-body">
		  <img src="${post.image}" class="post-image" alt="${post.title}">
		</div>
	      ` : ''}
	      <div class="post-text text-body">${post.content}</div>
	      <div class="post-actions">
		<button class="action-btn comment-btn text-body">
		  <i class="bi bi-chat text-body"></i> ${post.comments || 0} Comments
		</button>
		<button class="action-btn share-btn text-body">
		  <i class="bi bi-share text-body"></i> Share
		</button>
		<button class="action-btn save-btn text-body">
		  <i class="bi bi-bookmark text-body"></i> Save
		</button>
	      </div>
	    </div>
	  </div>
	`;
}

function renderEmptyState(isAuthenticated) {
	return `
	  <div class="empty-posts bg-body text-body">
	    <i class="bi bi-postcard text-body"></i>
	    <h3 class="text-body">No posts yet</h3>
	    <p class="text-body">Be the first to create a post in this community</p>
	    ${isAuthenticated ?
			'<button class="btn btn-primary create-post-btn">Create Post</button>' :
			'<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Log In to Post</button>'
		}
	  </div>
	`;
}
