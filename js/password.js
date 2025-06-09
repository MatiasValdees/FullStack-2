document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-validation");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const password = document.getElementById("contrasena").value.trim();
    const repeatPassword = document.getElementById("repetir-contrasena").value.trim();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un carácter especial.");
      return;
    }

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("Operación exitosa");
    form.submit();
  });
});