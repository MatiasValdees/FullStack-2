
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-especialidades-crud-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './especialidades-crud-page.component.html'
})
export class EspecialidadesCrudPageComponent {
  especialidades: string[] = ['Pediatría', 'Dermatología', 'Oftalmología'];
  nuevaEspecialidad = '';

  agregarEspecialidad() {
    const nombre = this.nuevaEspecialidad.trim();
    if (nombre && !this.especialidades.includes(nombre)) {
      this.especialidades.push(nombre);
      this.nuevaEspecialidad = '';
    }
  }

  eliminarEspecialidad(index: number) {
    this.especialidades.splice(index, 1);
  }
}
