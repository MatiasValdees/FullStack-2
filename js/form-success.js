document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formModificarPerfil");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Operación exitosa");
    form.submit();
  });
});