import { renderPosts } from '../components/posts.js';

const mainContent = document.getElementById('main');


/*-------------------------------------------------------------------*/
// Mock data - replace with actual API calls
async function fetchPosts() {
	// In a real app, you would fetch from your API
	return [
		{
			id: 1,
			community: 'javascript',
			author: 'webdev123',
			time: '5 hours ago',
			title: 'How to use async/await properly',
			content: 'I\'ve been struggling with async/await patterns. Here are some tips I learned...',
			votes: 42,
			comments: 8,
			image: null
		},
		{
			id: 2,
			community: 'reactjs',
			author: 'react_fan',
			time: '12 hours ago',
			title: 'React 19 new features preview',
			content: 'The new React version promises some exciting changes...',
			votes: 156,
			comments: 32,
			image: '../assets/1.jpg'
		}
	];
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