const { invoke } = window.__TAURI__.core;

window.addEventListener("DOMContentLoaded", () => {
  // Preview toggle functionality
  const previewToggleBtn = document.querySelector(".preview-toggle");
  const previewToggleImg = previewToggleBtn?.querySelector("img");
  let isPreviewVisible = true;

  if (previewToggleBtn && previewToggleImg) {
    previewToggleBtn.addEventListener("click", () => {
      isPreviewVisible = !isPreviewVisible;
      
      if (isPreviewVisible) {
        previewToggleImg.src = "./assets/icon-show-preview.svg";
        previewToggleImg.alt = "Show Preview";
      } else {
        previewToggleImg.src = "./assets/icon-hide-preview.svg";
        previewToggleImg.alt = "Hide Preview";
      }
    });
  }
});