import { Component } from '@angular/core';

export interface Paciente {
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
  styleUrls: ['./paciente-crud-page.component.css']
})
export class PacienteCrudPageComponent {
  
  pacientes: Paciente[] = [];

  nuevoPaciente: Paciente = {
    rut: '',
    nombres: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  };

  repetirContrasena: string = '';

  agregarPaciente() {
    if (this.nuevoPaciente.contrasena !== this.repetirContrasena) return;

    this.pacientes.push({ ...this.nuevoPaciente });
    this.nuevoPaciente = {
      rut: '',
      nombres: '',
      apellido: '',
      correo: '',
      telefono: '',
      contrasena: ''
    };
    this.repetirContrasena = '';
  }

  eliminarPaciente(index: number) {
    this.pacientes.splice(index, 1);
  }
}
