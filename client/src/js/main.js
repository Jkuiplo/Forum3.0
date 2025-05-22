import { renderHeader } from '../components/header.js';



function getCookie(name) {
  const cookies = document.cookie.split(';').map(c => c.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(name + '=')) {
      return cookie.split('=')[1];
    }
  }
  return null;
}

const token = getCookie("Token");
export {token}

document.addEventListener("DOMContentLoaded", () => {
  const mediaInput = document.getElementById("mediaInput");
  const previewContainer = document.getElementById("previewContainer");
  const createPostForm = document.getElementById("createPostForm");

  // Превью изображений/видео
  mediaInput?.addEventListener("change", () => {
    const file = mediaInput.files[0];
    previewContainer.innerHTML = "";

    if (!file) return;

    const fileType = file.type;
    const reader = new FileReader();

    reader.onload = (e) => {
      let previewElement;
      if (fileType.startsWith("image/")) {
        previewElement = document.createElement("img");
        previewElement.src = e.target.result;
        previewElement.className = "img-fluid rounded";
        previewElement.style.maxHeight = "300px";
      } else if (fileType.startsWith("video/")) {
        previewElement = document.createElement("video");
        previewElement.src = e.target.result;
        previewElement.controls = true;
        previewElement.className = "w-100 rounded";
        previewElement.style.maxHeight = "300px";
      }

      if (previewElement) {
        previewContainer.appendChild(previewElement);
      }
    };

    reader.readAsDataURL(file);
  });






function showToast(message) {
  const toastEl = document.getElementById("toast");
  toastEl.querySelector(".toast-body").textContent = message;

  const bsToast = bootstrap.Toast.getOrCreateInstance(toastEl); // 👈 только так
  bsToast.show();
}

  // Обработка отправки формы
  createPostForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const title = createPostForm.querySelector('input[placeholder="Title"]').value;
    const content = createPostForm.querySelector("textarea").value;
    const community = createPostForm.querySelector("select").value;
    const file = mediaInput.files[0];

    formData.append("title", title);
    formData.append("content", content);
    formData.append("community", community);
    if (file) {
      formData.append("image", file); // ⬅️ строго "image", не "file"
    }

    try {
      const res = await fetch("http://localhost:5000/api/threads", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}` // 🔒 если у тебя есть authMiddleware
        },
        body: formData,
        credentials: 'same-origin',
      });

      if (!res.ok) {
        const err = await res.text();
        alert("Ошибка: " + err);
        return;
      }

      showToast("Пост опубликован!");
      createPostForm.reset();
      previewContainer.innerHTML = "";
      bootstrap.Modal.getInstance(document.getElementById("createPostModal")).hide();
    } catch (err) {
      console.error(err);
      showToast("Произошла ошибка при публикации поста.");
    }
  });
});


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


let isAuthenticated = false
if(getCookie("Token")){
  console.log("да")
  isAuthenticated = true;
  toggleAuthState();
  getUserData().then(data =>{
    if(data.avatar) document.getElementById('avatar').src = data.avatar;
  });
}
else{
  console.log("нет")
  isAuthenticated = false;
  toggleAuthState();
}

async function getUserData() {
  try{
    const res = await fetch("http://localhost:5000/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    return res.json();
  }catch(err){
    console.log(err);
  }
}


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

//  log in and sign up blya

// Получаем форму регистрации из вкладки "Sign Up"
const signupForm = document.querySelector('#signup form');
const signupInputs = signupForm.querySelectorAll('input');

// Отдельно выбираем поля по их порядку
const emailInput = signupInputs[0];
const usernameInput = signupInputs[1];
const passwordInput = signupInputs[2];



// Функция отправки данных на сервер
async function registerUser(username, email, password) {
  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  return response.json();
}

// Обработка отправки формы
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !usernameValue || !passwordValue) {
    alert('Please fill in all fields.');
    return;
  }

  const result = await registerUser(usernameValue, emailValue, passwordValue);

  if (result.message === "Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email") {
    console.log("Эта почта уже используется");
    showToast("Эта почта уже используется");
  } else if (result.message === "Ошибка: SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username") {
    console.log('Этот ник уже используется');
    showToast("Этот ник уже используется");
  } else if (result.message === "Пользователь зарегестрирован") {
    console.log('Пользователь зарегестрирован');
    showToast("Пользователь зарегестрирован");
    // Закрываем модалку и открываем другую при необходимости
    const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    authModal.hide();
     // Эта функция у тебя, видимо, уже есть
  }
});



// Получаем форму логина внутри вкладки #login
const loginForm = document.querySelector('#login form');

// Получаем поля ввода из формы логина
const usernamInput = loginForm.querySelector('input[type="text"]');
const passworInput = loginForm.querySelector('input[type="password"]');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = usernamInput.value.trim();
  const password = passworInput.value.trim();

  if (!email || !password) {
    showToast("Заполните оба поля!", "warning");
    return;
  }

  console.log('Username:', email);
  console.log('Password:', password);

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {  // Укажи свой адрес, если другой
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),  // В твоём API логин по username
    });

    if (response.ok) {
      const data = await response.json();
      document.cookie = `Token=${data.token}; path=/; max-age=2592000; samesite=strict`;
      showToast("Успешный вход!", "success");
      // Закрываем модалку (если нужно)
      const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
      if (authModal) authModal.hide();

      // Перенаправление
      setTimeout(() => window.location.href = '/', 1000);
    } else {
      const error = await response.json();
      console.error('Login failed:', error.message);
      showToast("Неверный логин или пароль", "error");
    }
  } catch (err) {
    console.error('Network error:', err);
    showToast("Ошибка сети", "error");
  }
});


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
    window.location.href = '/auth/google'
    console.log('Google auth initiated');
  });
});

// Initialize state
toggleAuthState();

// // Event listener for demo button
// if (toggleAuthBtn) {
//  toggleAuthBtn.addEventListener('click', toggleAuthState);
// }

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