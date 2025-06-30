import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  citas = [
    {
      dia: 15,
      mes: 'Junio',
      anio: 2025,
      doctor: 'Matías Valdes',
      hora: '10:30',
      sala: 'Sala 3',
      paciente: 'Juan Pérez',
    },
    {
      dia: 20,
      mes: 'Junio',
      anio: 2025,
      doctor: 'Laura Gómez',
      hora: '14:00',
      sala: 'Sala 1',
      paciente: 'Juan Pérez',
    },
    {
      dia: 25,
      mes: 'Junio',
      anio: 2025,
      doctor: 'Carlos Martínez',
      hora: '09:00',
      sala: 'Sala 5',
      paciente: 'Juan Pérez',
    },
  ];
}
