document.addEventListener("DOMContentLoaded", function (event) {
  if (GLightbox) {
    GLightbox({ selector: "img" });
  }

  prepareCodepens();
  hideDraftMenuLinks();
  prepareDraftMenuLinkUnhide();
});

function prepareCodepens() {
  const codepens = document.querySelectorAll(".codepen");

  if (codepens.length > 0) {
    const codepenScript = document.createElement("script");
    codepenScript.src = "https://static.codepen.io/assets/embed/ei.js";
    document.head.appendChild(codepenScript);
  }
}

function hideDraftMenuLinks() {
  if (getMagicAdmin()) return;

  const menuItems = document.querySelectorAll("li.nav-list-item");
  for (const menuItem of menuItems) {
    const link = menuItem.querySelector(".nav-list-link");
    if (link.innerHTML.includes("Draft")) {
      menuItem.classList.add("d-none");
    }
  }
}

function prepareDraftMenuLinkUnhide() {
  const footer = document.querySelector(".site-footer");
  const link = document.createElement("a");
  link.innerHTML = "π";
  link.href = window.location;
  footer.appendChild(link);

  link.addEventListener("click", () => {
    toggleMagicAdmin();
  });
}

function getMagicAdmin() {
  const adminString = localStorage.getItem("magic-admin");
  return adminString ? JSON.parse(adminString) : false;
}

function toggleMagicAdmin() {
  const admin = getMagicAdmin();
  localStorage.setItem("magic-admin", JSON.stringify(!admin));
}
