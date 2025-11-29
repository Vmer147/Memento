function Login(event) {
  event.preventDefault();
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener el botón por su ID
  const botonInicioSesion = document.getElementById("btn-inicia-sesion");

  // 2. Adjuntar el evento 'click' a ese botón
  if (botonInicioSesion) {
    botonInicioSesion.addEventListener("click", Login);
  }
});
