import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [FormsModule,CommonModule
  ],
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

  agregarPaciente() {
    if (!this.contrasenasIguales()) return;

    this.pacientes.push({ ...this.nuevoPaciente });
    this.resetFormulario();
  }

  eliminarPaciente(index: number) {
    this.pacientes.splice(index, 1);
  }

  contrasenasIguales(): boolean {
    return this.nuevoPaciente.contrasena === this.repetirContrasena;
  }

  resetFormulario() {
    this.nuevoPaciente = {
      rut: '',
      nombres: '',
      apellido: '',
      correo: '',
      telefono: '',
      contrasena: '',
    };
    this.repetirContrasena = '';
  }
}
