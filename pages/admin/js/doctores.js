document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formDoctores");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rut = document.getElementById("rut").value.trim();
    const nombres = document.getElementById("nombres").value.trim();
    const apellidoP = document.getElementById("apellido-paterno").value.trim();
    const apellidoM = document.getElementById("apellido-materno").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const especialidad = document.getElementById("especialidad").value;
    const password = document.getElementById("password").value;
    const passwordRepetida = document.getElementById("passwordRepetida").value;
    const tablaBody = document.getElementById("tableDoctores");
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
    if (!validarContrasenas(password, passwordRepetida)) {
      return;
    }

    alert("Doctor agregado correctamente.");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>${rut}</td>
      <td>${nombres}</td>
      <td>${apellidoP}</td>
      <td>${apellidoM}</td>
      <td>${correo}</td>
      <td>${telefono}</td>
      <td>${especialidad}</td>
      <td><button type="button" class="btn btn-sm btn-outline-danger" disabled>Eliminar</button></td>
    `;

    tablaBody.appendChild(nuevaFila);

    form.reset();
  });
});