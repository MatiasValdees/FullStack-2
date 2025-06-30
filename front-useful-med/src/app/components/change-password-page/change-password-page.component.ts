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
    if (this.nuevaContrasena !== this.repetirContrasena) {
      this.error = 'Las contraseñas nuevas no coinciden.';
      this.mensaje = '';
      return;
    }else{
      this.error = '';
      this.mensaje = 'Contraseña actualizada correctamente.';
      this.contrasenaActual = '';
      this.nuevaContrasena = '';
      this.repetirContrasena = '';
    }
  }
}
