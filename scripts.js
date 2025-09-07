// Aquí puedes agregar animaciones o funciones interactivas
console.log("Critical Hub E-Sports cargado ✅");
// ===== MENÚ HAMBURGUESA =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});

