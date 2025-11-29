// Seleccionar elementos
const menuToggle = document.getElementById("menuToggle");
const navbarRight = document.getElementById("navbarRight");
const menuOverlay = document.getElementById("menuOverlay");
const navLinks = document.querySelectorAll(".nav-links a");

// Función para abrir/cerrar el menú
function toggleMenu() {
  menuToggle.classList.toggle("active");
  navbarRight.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  // Prevenir scroll cuando el menú está abierto
  if (navbarRight.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Cerrar el menú
function closeMenu() {
  menuToggle.classList.remove("active");
  navbarRight.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Event listener para el botón hamburguesa
menuToggle.addEventListener("click", toggleMenu);

// Cerrar menú al hacer clic en el overlay
menuOverlay.addEventListener("click", closeMenu);

// Cerrar menú al hacer clic en un link
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Cerrar menú al redimensionar la ventana a desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeMenu();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownTrigger = document.querySelector(".dropdown-trigger");
  const navItemDropdown = document.querySelector(".nav-item-dropdown");

  if (dropdownTrigger && navItemDropdown) {
    dropdownTrigger.addEventListener("click", function (e) {
      // Solo en móviles
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        navItemDropdown.classList.toggle("mobile-active");
      }
    });
  }

  // Cerrar dropdown al redimensionar a desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024 && navItemDropdown) {
      navItemDropdown.classList.remove("mobile-active");
    }
  });
});
