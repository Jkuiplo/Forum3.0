export function renderSharePopup(postId, postUrl) {
  return `
    <div class="modal fade" id="shareModal-${postId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-body text-body">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Share Post</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <button class="btn btn-outline-primary w-100 mb-2" id="copyLinkBtn-${postId}">
              <i class="bi bi-clipboard"></i> Copy Link
            </button>
            <a href="https://t.me/share/url?url=${encodeURIComponent(postUrl)}" target="_blank" class="btn btn-outline-info w-100 mb-2">
              <i class="bi bi-telegram"></i> Share on Telegram
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(postUrl)}" target="_blank" class="btn btn-outline-success w-100">
              <i class="bi bi-whatsapp"></i> Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupSharePopup(postId, postUrl) {
  // Кнопка копирования
  const copyBtn = document.getElementById(`copyLinkBtn-${postId}`);
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(postUrl)
        .then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.innerHTML = `<i class="bi bi-clipboard"></i> Copy Link`, 1500);
        })
        .catch(() => alert('Failed to copy link'));
    });
  }
}
