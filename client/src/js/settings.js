import { renderSettingsPage } from '../components/settings.js';
import { token } from '../js/main.js';

const mainContent = document.getElementById('main');

// Enhanced showToast function
function showToast(message, type = 'success') {
  // Replace this with your actual toast implementation
  console.log(`${type}: ${message}`);
  alert(`${type}: ${message}`); // Fallback
}

async function initializeSettingsPage() {
  mainContent.innerHTML = await renderSettingsPage();
  
  // Wait for DOM to be ready
  setTimeout(() => {
    const form = document.querySelector('.settings-form');
    if (!form) return;

    // Get form elements
    const avatarUpload = document.getElementById('avatar-upload');
    const bannerUpload = document.getElementById('banner-upload');
    const avatarPreview = document.querySelector('.avatar-preview');
    const bannerPreview = document.querySelector('.banner-preview');
    const avatarFileName = document.querySelector('.avatar-upload .file-input-name');
    const bannerFileName = document.querySelector('.banner-upload .file-input-name');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Form submission handler
    form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...';

  try {
    const formData = new FormData();
    const displayName = form.querySelector('[name="displayName"]').value.trim();
    const about = form.querySelector('[name="about"]').value.trim();

    // Add text fields to form data
    if (displayName) formData.append('displayName', displayName);
    if (about) formData.append('about', about);

    // Add files if they exist
    const avatarFile = avatarUpload.files[0];
    if (avatarFile) formData.append('avatar', avatarFile);
    
    const bannerFile = bannerUpload.files[0];
    if (bannerFile) formData.append('banner', bannerFile);

    const response = await fetch('/api/users/me', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to update profile');
    }

    const updatedUser = await response.json();
    showToast('Profile updated successfully!');
    
    // Update previews with new URLs
    if (updatedUser.avatar_url) {
      avatarPreview.src = `${updatedUser.avatar_url}?${Date.now()}`;
    }
    if (updatedUser.banner_url) {
      bannerPreview.style.backgroundImage = `url('${updatedUser.banner_url}?${Date.now()}')`;
    }

    // Reset file inputs
    avatarUpload.value = '';
    bannerUpload.value = '';
    avatarFileName.textContent = 'No file chosen';
    bannerFileName.textContent = 'No file chosen';

  } catch (error) {
    console.error('Update error:', error);
    showToast(error.message || 'Failed to update profile', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});

    // Initialize image preview handlers
    if (avatarUpload && avatarPreview) {
      avatarUpload.addEventListener('change', (e) => {
        handleImageUpload(e, avatarPreview);
        updateFileNameDisplay(e, avatarFileName);
      });
    }

    if (bannerUpload && bannerPreview) {
      bannerUpload.addEventListener('change', (e) => {
        handleImageUpload(e, bannerPreview, true);
        updateFileNameDisplay(e, bannerFileName);
      });
    }

    // Cancel button handler
    const cancelBtn = document.getElementById('cancel-changes-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        form.reset();
        if (avatarPreview) {
          avatarPreview.src = avatarPreview.dataset.originalSrc || 
            'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png';
        }
        if (bannerPreview) {
          bannerPreview.style.backgroundImage = bannerPreview.dataset.originalBg || '';
        }
        if (avatarFileName) avatarFileName.textContent = 'No file chosen';
        if (bannerFileName) bannerFileName.textContent = 'No file chosen';
      });
    }

  }, 100); // Small delay to ensure all elements are rendered
}

// Helper functions
function handleImageUpload(event, previewElement, isBanner = false) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    if (isBanner) {
      previewElement.style.backgroundImage = `url('${e.target.result}')`;
    } else {
      previewElement.src = e.target.result;
    }
  };
  reader.readAsDataURL(file);
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
  fileNameElement.title = file.name;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeSettingsPage);