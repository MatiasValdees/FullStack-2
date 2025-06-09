document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rut = document.getElementById("rut").value.trim();
    const nombres = document.getElementById("nombres").value.trim();
    const apellidoP = document.getElementById("apellido-paterno").value.trim();
    const apellidoM = document.getElementById("apellido-materno").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const especialidad = document.getElementById("especialidad").value;

    if (
      !rut ||
      !nombres ||
      !apellidoP ||
      !apellidoM ||
      !correo ||
      !telefono ||
      especialidad === "Especialidad"
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }
  });
});