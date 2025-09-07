const { invoke } = window.__TAURI__.core;

window.addEventListener("DOMContentLoaded", () => {
  // Menu toggle functionality
  const menuBtn = document.querySelector(".menu-btn");
  const menuImg = menuBtn?.querySelector("img");
  const sidebar = document.querySelector(".sidebar");
  let isSidebarVisible = false;

  if (menuBtn && menuImg && sidebar) {
    menuBtn.addEventListener("click", () => {
      isSidebarVisible = !isSidebarVisible;
      
      if (isSidebarVisible) {
        sidebar.style.display = "block";
        menuImg.src = "./assets/icon-close.svg";
        menuImg.alt = "Close";
      } else {
        sidebar.style.display = "none";
        menuImg.src = "./assets/icon-menu.svg";
        menuImg.alt = "Menu";
      }
    });
  }

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