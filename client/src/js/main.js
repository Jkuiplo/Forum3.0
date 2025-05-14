import { renderHeader } from '../components/header.js';

// Render components
document.body.insertAdjacentHTML('afterbegin', renderHeader());

// DOM Elements
const unauthorizedNav = document.querySelector('.header-nav.unauthorized');
const authorizedNav = document.querySelector('.header-nav.authorized');
const toggleAuthBtn = document.getElementById('toggleAuthState');
const createPostBtn = document.querySelector('.create-post-btn');
const authModal = document.getElementById('authModal');
const googleAuthBtns = document.querySelectorAll('.google-auth-btn');


// Initialize Bootstrap components
const authModalInstance = new bootstrap.Modal(authModal);
const createPostModal = new bootstrap.Modal(document.getElementById('createPostModal'));

// Auth state management
let isAuthenticated = false;

function toggleAuthState() {
	isAuthenticated = !isAuthenticated;

	if (isAuthenticated) {
		unauthorizedNav.classList.add('visually-hidden');
		authorizedNav.classList.remove('visually-hidden');
		if (toggleAuthBtn) {
			toggleAuthBtn.textContent = 'Switch to Unauthorized';
		}
	} else {
		unauthorizedNav.classList.remove('visually-hidden');
		authorizedNav.classList.add('visually-hidden');
		if (toggleAuthBtn) {
			toggleAuthBtn.textContent = 'Switch to Authorized';
		}
	}
}

// Initialize sidebar functionality
function initSidebar() {
	const sidebar = document.querySelector('.reddit-sidebar');
	const sidebarToggle = document.querySelector('.sidebar-toggle');
	const sidebarClose = document.querySelector('.sidebar-close');
	const sidebarOverlay = document.querySelector('.sidebar-overlay');

	if (!sidebar) return;

	// Toggle sidebar when clicking the button
	if (sidebarToggle) {
		sidebarToggle.addEventListener('click', () => {
			sidebar.classList.add('active');
			document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
		});
	}

	// Close sidebar when clicking close button
	if (sidebarClose) {
		sidebarClose.addEventListener('click', closeSidebar);
	}

	// Close sidebar when clicking overlay
	if (sidebarOverlay) {
		sidebarOverlay.addEventListener('click', closeSidebar);
	}

	// Close sidebar when pressing Escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && sidebar.classList.contains('active')) {
			closeSidebar();
		}
	});

	function closeSidebar() {
		sidebar.classList.remove('active');
		document.body.style.overflow = ''; // Re-enable scrolling
	}
}

// Create post button handler
if (createPostBtn) {
	createPostBtn.addEventListener('click', () => {
		createPostModal.show();
	});
}

// Google auth button handlers
googleAuthBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// In a real app, this would trigger your Google auth flow
		console.log('Google auth initiated');

		// For demo purposes, we'll just authenticate after a delay
		setTimeout(() => {
			authModalInstance.hide();
			toggleAuthState();
		}, 1500);
	});
});

// Initialize state
toggleAuthState();

// Event listener for demo button
if (toggleAuthBtn) {
	toggleAuthBtn.addEventListener('click', toggleAuthState);
}

// Handle auth modal tab switching based on which button opened it
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {
	btn.addEventListener('click', function () {
		const authType = this.getAttribute('data-auth-type');
		if (authType === 'signup') {
			const signupTab = new bootstrap.Tab(document.querySelector('#signup-tab'));
			signupTab.show();
		}
	});
});


// Function to apply the current theme
function applyTheme() {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-bg', isDark);
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    const logo = document.getElementById('logo');
    if (logo) logo.style.color = isDark ? 'white' : 'black';
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme (default to system preference if not set)
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
    
    applyTheme();
    
    // Set up theme toggle button if it exists on this page
    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme();
        });
    }
});


initSidebar();