document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioEspecialidad");
  form.addEventListener("submit", function (e) {
    const tablaBody = document.getElementById("tableEspecialidades");
    const especialidad = document.getElementById("especialidad").value.trim();

    e.preventDefault();
    alert("Especialidad creada correctamente");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>4</td>
      <td>${especialidad}</td>
      <td><button type="button" class="btn btn-sm btn-outline-danger" disabled>Eliminar</button></td>
    `;
    tablaBody.appendChild(nuevaFila);
  });
});