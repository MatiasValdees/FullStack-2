import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Paciente {
  rut: string;
  nombres: string;
  apellido: string;
  correo: string;
  telefono: string;
  contrasena: string;
}

@Component({
  selector: 'app-paciente-crud-page',
  templateUrl: './paciente-crud-page.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class PacienteCrudPageComponent {
  pacientes: Paciente[] = [];

  nuevoPaciente: Paciente = {
    rut: '',
    nombres: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: '',
  };

  repetirContrasena: string = '';
  error: string = '';

  agregarPaciente(form: NgForm) {
    if (!this.contrasenasIguales()) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }

    if (!this.contrasenaValida(this.nuevoPaciente.contrasena)) {
      this.error = 'La contraseña debe tener entre 8 y 20 caracteres, incluir mayúsculas, minúsculas, un número y un carácter especial.';
      return;
    }

    this.pacientes.push({ ...this.nuevoPaciente });
    this.error = '';
    form.resetForm();
  }

  eliminarPaciente(index: number) {
    this.pacientes.splice(index, 1);
  }

  contrasenasIguales(): boolean {
    return this.nuevoPaciente.contrasena === this.repetirContrasena;
  }

  contrasenaValida(contrasena: string): boolean {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
    return pattern.test(contrasena);
  }
}
