import { renderProfile } from '../components/profile.js';

const mainContent = document.getElementById('main');

document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {
	btn.addEventListener('click', function () {
		if (this.getAttribute('data-auth-type') === 'signup') {
			const signupTab = new bootstrap.Tab(document.querySelector('#signup-tab'));
			signupTab.show();
		}
	});
});

mainContent.insertAdjacentHTML('beforeend', renderProfile());



document.addEventListener('DOMContentLoaded', async () => {
  const pathParts = window.location.pathname.split('/u/');
  const username = pathParts[1]; // взять то, что после /u/
  const profilename = document.querySelector('.profile-username');
  const profileavatar = document.querySelector('.profile-avatar');

  try {
    const res = await fetch(`/api/users/${username}`);
    if (!res.ok) throw new Error('User not found');
    const user = await res.json();
    console.log(user)

    profilename.textContent = user.username;
    if(user.avatar) profileavatar.src = user.avatar 

  } catch (err) {
    document.body.innerHTML = '<h1>User not found</h1>';
    console.error(err);
  }



});


