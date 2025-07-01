import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-password-page.component.html',
})
export class ChangePasswordPageComponent {
  contrasenaActual = '';
  nuevaContrasena = '';
  repetirContrasena = '';
  error = '';
  mensaje = '';

  guardarCambios() {
    this.error = '';
    this.mensaje = '';

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;

    if (!passwordPattern.test(this.nuevaContrasena)) {
      this.error = 'La nueva contraseña debe tener entre 8 y 20 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.';
      return;
    }

    if (this.nuevaContrasena !== this.repetirContrasena) {
      this.error = 'Las contraseñas nuevas no coinciden.';
      return;
    }

    this.mensaje = 'Contraseña actualizada correctamente.';
    this.contrasenaActual = '';
    this.nuevaContrasena = '';
    this.repetirContrasena = '';
  }
}
