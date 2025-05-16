import { renderPosts } from '../components/posts.js';

const mainContent = document.getElementById('main');


/*-------------------------------------------------------------------*/
// Mock data - replace with actual API calls
async function fetchPosts() {
	try{
		const responce = await fetch('/api/threads', {
			method:'GET',
			credentials: 'same-origin'
		});
		if(responce.ok){
			const threads = await responce.json();
			console.log(threads);
			threads.created_at
			return(threads);
		}
		else{
			const error = await responce.json();
			console.error('Ошибка', error.message || 'неизвестно какая');
		}
	}catch(error){
		console.error('Ошибка сети:', error.message || 'неизвестно какая');
		}
}

// Initialize posts
async function initPosts() {
	try {
		const posts = await fetchPosts();
		mainContent.innerHTML = renderPosts(posts);
		setupPostInteractions();
	} catch (error) {
		console.error('Error loading posts:', error);
		mainContent.innerHTML = renderPosts([]);
	}
}

// Handle post interactions
function setupPostInteractions() {
	// Upvote/downvote functionality
	document.querySelectorAll('.vote-btn').forEach(btn => {
		btn.addEventListener('click', function () {
			const postId = this.closest('.post').dataset.postId;
			const isUpvote = this.classList.contains('upvote');

			// In a real app, you would send this to your API
			console.log(`${isUpvote ? 'Upvote' : 'Downvote'} post ${postId}`);

			// Temporary UI update
			this.classList.toggle('active');
			const voteCount = this.closest('.post-votes').querySelector('.vote-count');
			const currentCount = parseInt(voteCount.textContent);
			voteCount.textContent = isUpvote ? currentCount + 1 : currentCount - 1;
		});
	});

	// Other post actions
	document.querySelectorAll('.comment-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			const postId = btn.closest('.post').dataset.postId;
			console.log('View comments for post', postId);
			// You would implement comment viewing here
		});
	});
}

/*-------------------------------------------------------------------*/


initPosts();