document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-validation");
  const tablaBody = document.querySelector("tbody");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rut = document.getElementById("rutPaciente").value.trim();
    const nombres = document.getElementById("nombresPaciente").value.trim();
    const apellido = document.getElementById("apellidoPaciente").value.trim();
    const correo = document.getElementById("correoPaciente").value.trim();
    const telefono = document.getElementById("telefonoPaciente").value.trim();
    const password = document.getElementById("contrasena").value;
    const passwordRepetida = document.getElementById("repetir-contrasena").value;

    if (!rut || !nombres || !apellido || !correo || !telefono) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (password !== passwordRepetida) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("Paciente agregado correctamente.");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>${rut}</td>
      <td>${nombres}</td>
      <td>${apellido}</td>
      <td>${correo}</td>
      <td>${telefono}</td>
      <td><button type="button" class="btn btn-sm btn-outline-danger" disabled>Eliminar</button></td>
    `;

    tablaBody.appendChild(nuevaFila);
    form.reset();
  });
});
