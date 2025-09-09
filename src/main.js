const { invoke } = window.__TAURI__.core;

window.addEventListener("DOMContentLoaded", async () => {
  // Load and display files from data.json
  const fileList = document.getElementById("fileList");
  
  try {
    const response = await fetch('./data.json');
    const files = await response.json();
    
    files.forEach(file => {
      const li = document.createElement("li");
      li.className = "file-item";
      
      const fileIcon = document.createElement("img");
      fileIcon.src = "./assets/icon-document.svg";
      fileIcon.alt = "Document";
      
      const fileInfo = document.createElement("div");
      fileInfo.className = "file-info";
      
      const fileName = document.createElement("p");
      fileName.className = "file-name";
      fileName.textContent = file.name;
      
      const fileDate = document.createElement("p");
      fileDate.className = "file-date";
      fileDate.textContent = file.createdAt;
      
      fileInfo.appendChild(fileDate);
      fileInfo.appendChild(fileName);
      
      li.appendChild(fileIcon);
      li.appendChild(fileInfo);
      
      li.addEventListener("click", () => {
        // Update document name in header
        const docName = document.querySelector(".document-name");
        if (docName) docName.textContent = file.name;
        
        // TODO: Load file content into editor
        console.log("Loading file:", file.name);
      });
      
      fileList.appendChild(li);
    });
  } catch (error) {
    console.error("Failed to load files:", error);
  }


  // Menu toggle functionality
  const menuBtn = document.querySelector(".menu-btn");
  const menuImg = menuBtn?.querySelector("img");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  let isSidebarVisible = false;

  if (menuBtn && menuImg && sidebar && mainContent) {
    menuBtn.addEventListener("click", () => {
      isSidebarVisible = !isSidebarVisible;
      
      if (isSidebarVisible) {
        sidebar.classList.add("visible");
        mainContent.classList.add("shifted");
        menuImg.src = "./assets/icon-close.svg";
        menuImg.alt = "Close";
      } else {
        sidebar.classList.remove("visible");
        mainContent.classList.remove("shifted");
        menuImg.src = "./assets/icon-menu.svg";
        menuImg.alt = "Menu";
      }
    });
  }

  // Preview toggle functionality
  const previewToggleBtn = document.querySelector(".preview-toggle");
  const previewToggleImg = previewToggleBtn?.querySelector("img");
  const editor = document.querySelector(".editor");
  let isPreviewVisible = true;

  if (previewToggleBtn && previewToggleImg && editor) {
    previewToggleBtn.addEventListener("click", () => {
      isPreviewVisible = !isPreviewVisible;
      
      if (isPreviewVisible) {
        previewToggleImg.src = "./assets/icon-show-preview.svg";
        previewToggleImg.alt = "Show Preview";
        editor.classList.remove("preview-hidden");
      } else {
        previewToggleImg.src = "./assets/icon-hide-preview.svg";
        previewToggleImg.alt = "Hide Preview";
        editor.classList.add("preview-hidden");
      }
    });
  }
});
