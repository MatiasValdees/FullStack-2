document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("modificarContrasenaModal");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const passwordRepetida = document.getElementById("passwordRepetida").value;
    const password = document.getElementById("password").value;
    if (!validarContrasenas(password, passwordRepetida)) {
      return;
    }
    alert("Contraseña actualizada correctamente.");
    form.reset();
  });
});