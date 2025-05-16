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


async function userData() {
	const responce = await fetch("http://localhost:5000/api/auth/me"), {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${token}`
		},
	}
}