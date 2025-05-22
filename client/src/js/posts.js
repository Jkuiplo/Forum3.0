



import { renderPosts } from '../components/posts.js';
import { token } from './main.js';
import { renderCommentsPopup, setupCommentsPopup, loadCommentsList } from '../components/comments.js';
import { renderSharePopup, setupSharePopup } from '../components/sharePopup.js';

const mainContent = document.getElementById('main');




/*-------------------------------------------------------------------*/
// Fetch posts from API
async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:5000/api/threads', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const threads = await response.json();
            console.log(threads);
            return threads;
        } else {
            const error = await response.json();
            console.error('Error:', error.message || 'Unknown error');
            return [];
        }
    } catch (error) {
        console.error('Network error:', error.message || 'Unknown error');
        return [];
    }
}

// Initialize posts
async function initPosts() {
  try {
    const posts = await fetchPosts();
    mainContent.innerHTML = renderPosts(posts);
    setupPostInteractions();

    posts.forEach(post => {
      document.body.insertAdjacentHTML('beforeend', renderSharePopup(post.id, `${window.location.origin}/posts/${post.id}`));
      setupSharePopup(post.id, `${window.location.origin}/posts/${post.id}`
);
    });
    
  } catch (error) {
    console.error('Error loading posts:', error);
    mainContent.innerHTML = '<div class="alert alert-danger">Failed to load posts</div>';
  }
}


// Handle post interactions
function setupPostInteractions() {
    // Voting functionality
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const post = this.closest('.post');
            const postId = post.dataset.postId;
            const isUpvote = this.classList.contains('upvote');
            const isDownvote = this.classList.contains('downvote');

            const voteCountEl = post.querySelector('.vote-count');
            let voteCount = parseInt(voteCountEl.textContent);

            const upvoteBtn = post.querySelector('.upvote');
            const downvoteBtn = post.querySelector('.downvote');

            const isCurrentlyActive = this.classList.contains('active');
            let voteType;

            if (isCurrentlyActive) {
                voteType = 0; // remove vote
            } else if (isUpvote) {
                voteType = 1; // upvote
            } else if (isDownvote) {
                voteType = -1; // downvote
            }

            try {
                const response = await fetch(`http://localhost:5000/api/votes/thread`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        threadId: postId,
                        vote: voteType
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to update vote');
                }

                const result = await response.json();

                // Update UI based on server response
                upvoteBtn.classList.remove('active');
                downvoteBtn.classList.remove('active');

                if (isCurrentlyActive) {
                    voteCount += isUpvote ? -1 : 1;
                } else {
                    this.classList.add('active');
                    if (isUpvote) {
                        voteCount += downvoteBtn.classList.contains('active') ? 2 : 1;
                    } else {
                        voteCount -= upvoteBtn.classList.contains('active') ? 2 : 1;
                    }
                }

                voteCountEl.textContent = voteCount;

            } catch (error) {
                console.error('Error updating vote:', error);
                // Optionally show error to user
            }
        });
    });

    // Comments functionality
    document.querySelectorAll('.comment-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const postId = btn.closest('.post').dataset.postId;

    // Если модалка еще не добавлена
    if (!document.getElementById(`commentsModal-${postId}`)) {
      document.body.insertAdjacentHTML('beforeend', renderCommentsPopup(postId));
      setupCommentsPopup(postId); // Подключим форму
    }

    // Загружаем комментарии
    await loadCommentsList(postId);

    // Показываем модалку
    const modal = new bootstrap.Modal(document.getElementById(`commentsModal-${postId}`));
    modal.show();
  });
});

}

/*-------------------------------------------------------------------*/

// Initialize the page
document.addEventListener('DOMContentLoaded', initPosts);