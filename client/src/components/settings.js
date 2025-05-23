import {token} from '../js/main.js';

export async function renderSettingsPage(isAuthenticated = true) {
  let userData = null;

  if (token) {
    try {
      const response = await fetch('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        userData = await response.json();
      }
    } catch (err) {
      console.error('Failed to fetch user data:', err);
    }
  }

  // Render the HTML first
  const html = `
    <div class="settings-container bg-body">
      <div class="settings-header">
        <h2 class="text-body">User Settings</h2>
      </div>
      ${isAuthenticated ? renderSettingsContent(userData) : renderAuthRequired()}
    </div>
  `;

  // Then initialize the form after a small delay to ensure DOM is ready
  setTimeout(() => {
    if (isAuthenticated) {
      initSettingsForm(userData);
    }
  }, 50);

  return html;
}


function renderProfileSettings(userData = {}) {
  const displayName = userData.displayName || userData.username || '';
  const about = userData.about || '';
  const avatar_url = userData.avatar || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png';
  const banner_url = userData.banner_url || '';

  return `
    <section class="settings-section bg-body p-4 rounded shadow-sm mb-4" id="profile-settings">
      <h3 class="text-body mb-4">Profile Information</h3>
      <form class="settings-form d-flex flex-column gap-4">
        <div class="form-group">
          <label class="text-body mb-2">Display Name</label>
          <input type="text" class="form-control bg-body text-body" value="${displayName}" name="displayName">
        </div>
        <div class="form-group">
          <label class="text-body mb-2">About</label>
          <textarea class="form-control bg-body text-body" rows="3" name="about">${about}</textarea>
        </div>
        <div class="form-group">
          <label class="text-body mb-2">Profile Picture</label>
          <div class="avatar-upload d-flex align-items-center gap-3">
            <img src="${avatar_url}" alt="Avatar" class="avatar-preview rounded" style="width: 64px; height: 64px;">
            <div class="file-input-container">
              <label class="file-input-label btn btn-sm btn-outline-secondary text-body">
                Choose File
                <input type="file" id="avatar-upload" accept="image/*" class="file-input">
              </label>
              <span class="file-input-name text-body ms-2">No file chosen</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="text-body mb-2">Banner Image</label>
          <div class="banner-upload d-flex flex-column gap-2">
            <div class="banner-preview bg-body-secondary rounded" style="background-image: url('${banner_url}'); background-size: cover; height: 100px;"></div>
            <div class="file-input-container">
              <label class="file-input-label btn btn-sm btn-outline-secondary text-body">
                Choose File
                <input type="file" id="banner-upload" accept="image/*" class="file-input">
              </label>
              <span class="file-input-name text-body ms-2">No file chosen</span>
            </div>
          </div>
        </div>
        <div class="form-actions d-flex justify-content-end gap-3 pt-3 border-top">
          <button type="button" class="btn btn-secondary text-body" id="cancel-changes-btn">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </section>
  `;
}


function renderSettingsContent(userData) {
  return `
    <div class="settings-content">
      ${renderNavItems()}
      ${renderProfileSettings(userData)}
    </div>
  `;
}


function renderNavItems() {
  const navItems = [
    { id: 'profile', icon: 'person', label: 'Profile' },
    { id: 'account', icon: 'gear', label: 'Account' },
    { id: 'privacy', icon: 'shield-lock', label: 'Privacy' },
    { id: 'notifications', icon: 'bell', label: 'Notifications' },
    { id: 'feed', icon: 'newspaper', label: 'Feed Settings' },
    { id: 'chat', icon: 'chat', label: 'Chat & Messaging' }
  ];

  return `
    <nav class="settings-nav bg-body-secondary p-3 rounded mb-4">
      ${navItems.map(item => `
        <button class="nav-item d-flex align-items-center gap-2 py-2 px-3 mb-1 rounded bg-body text-body border-0 w-100 text-start" data-section="${item.id}">
          <i class="bi bi-${item.icon} fs-5 text-body"></i>
          <span class="fw-medium">${item.label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}



function renderAuthRequired() {
  return `
    <div class="auth-required text-body">
      <i class="bi bi-lock text-body"></i>
      <h3 class="text-body">Sign in to access settings</h3>
      <p class="text-body">You need to be logged in to view and edit your settings</p>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Log In</button>
    </div>
  `;
}


function initSettingsForm(userData) {
  const form = document.querySelector('.settings-form');
  if (!form) return;

  // Avatar upload handling
  const avatarUpload = document.getElementById('avatar-upload');
  const avatarPreview = document.querySelector('.avatar-preview');
  const avatarFileName = form.querySelector('.avatar-upload .file-input-name');
  
  if (avatarUpload) {
    avatarUpload.addEventListener('change', (e) => {
      handleImageUpload(e, avatarPreview);
      updateFileNameDisplay(e, avatarFileName);
    });
  }

  // Banner upload handling
  const bannerUpload = document.getElementById('banner-upload');
  const bannerPreview = document.querySelector('.banner-preview');
  const bannerFileName = form.querySelector('.banner-upload .file-input-name');
  
  if (bannerUpload) {
    bannerUpload.addEventListener('change', (e) => {
      handleImageUpload(e, bannerPreview, true);
      updateFileNameDisplay(e, bannerFileName);
    });
  }

  // Cancel button
  const cancelBtn = document.getElementById('cancel-changes-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      form.reset();
      if (avatarPreview) {
        avatarPreview.src = userData.avatar_url || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png';
        avatarFileName.textContent = 'No file chosen';
      }
      if (bannerPreview) {
        bannerPreview.style.backgroundImage = `url('${userData.banner_url || ''}')`;

        
        bannerFileName.textContent = 'No file chosen';
      }
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // ... rest of your form submission logic
  });
}

function updateFileNameDisplay(event, fileNameElement) {
  const file = event.target.files[0];
  if (!file) {
    fileNameElement.textContent = 'No file chosen';
    return;
  }

  // Trim long file names
  const MAX_LENGTH = 20;
  let fileName = file.name;
  if (fileName.length > MAX_LENGTH) {
    const extension = fileName.split('.').pop();
    const baseName = fileName.substring(0, MAX_LENGTH - extension.length - 4);
    fileName = `${baseName}...${extension}`;
  }

  fileNameElement.textContent = fileName;
  fileNameElement.title = file.name; // Show full name on hover
}

// Keep the existing handleImageUpload function

function handleImageUpload(event, previewElement, isBanner = false) {
  const file = event.target.files[0];
  if (!file) return;

  // Check if the file is an image
  if (!file.type.match('image.*')) {
    showToast('Please select an image file (JPEG, PNG, etc.)', 'error');
    return;
  }

  // Check file size (example: limit to 5MB)
  if (file.size > 5 * 1024 * 1024) {
    showToast('Image size should be less than 5MB', 'error');
    return;
  }

  const reader = new FileReader();
  
  reader.onloadstart = () => {
    // You could add a loading spinner here if needed
  };

  reader.onload = (e) => {
    try {
      if (isBanner) {
        previewElement.style.backgroundImage = `url('${e.target.result}')`;
      } else {
        previewElement.src = e.target.result;
      }
    } catch (error) {
      console.error('Error updating preview:', error);
      showToast('Error updating image preview', 'error');
    }
  };

  reader.onerror = () => {
    showToast('Error reading the image file', 'error');
  };

  reader.readAsDataURL(file);
}

function showToast(message, type = 'success') {
  // Implement your toast notification system here
  alert(message); // Temporary fallback
}
