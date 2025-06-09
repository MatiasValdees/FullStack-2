function validarContrasenas(password, passwordRepetida) {

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  if (!passwordRegex.test(password)) {
    alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un carácter especial.");
    return false;
  }

  if (password !== passwordRepetida) {
    console.log("Contraseña", password);
    console.log("Repetir Contraseña", passwordRepetida);
    
    alert("Las contraseñas no coinciden.");
    return false;
  }

  return true;
}