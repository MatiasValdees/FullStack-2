import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cita {
  dia: number;
  doctor: string;
  hora: string;
  sala: string;
}

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent {
  citas: Cita[] = [
    { dia: 15, doctor: 'Matías Valdes', hora: '10:30', sala: 'Sala 3' },
  ];

  citaSeleccionada: Cita | null = null;

  nuevaCita: Partial<Cita> = {
    dia: 0,
    doctor: '',
    hora: '',
    sala: '',
  };

  obtenerCitaPorDia(dia: number | null): Cita | undefined {
    if (dia === null) return undefined;
    return this.citas.find(cita => cita.dia === dia);
  }

  seleccionarCita(cita: Cita): void {
    this.citaSeleccionada = cita;
  }

  agregarCita(): void {
    if (
      this.nuevaCita.dia &&
      this.nuevaCita.doctor &&
      this.nuevaCita.hora &&
      this.nuevaCita.sala
    ) {
      this.citas.push(this.nuevaCita as Cita);
      this.nuevaCita = { dia: 0, doctor: '', hora: '', sala: '' };
      this.citaSeleccionada = null;
    }
  }

  diasMes: (number | null)[][] = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, null],
  ];
}
