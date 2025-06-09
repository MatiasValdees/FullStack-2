document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioEspecialidad");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Especialidad creada correctamente");
    form.submit();
  });
});