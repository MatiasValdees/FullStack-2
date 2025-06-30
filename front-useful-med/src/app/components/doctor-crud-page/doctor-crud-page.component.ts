import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Doctor {
  rut: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  telefono: string;
  especialidad: string;
}

@Component({
  selector: 'app-doctor-crud-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './doctor-crud-page.component.html'
})
export class DoctorCrudPageComponent {
  doctorForm: FormGroup;
  doctores: Doctor[] = [];
  especialidades = ['Pediatría', 'Dermatología', 'Oftalmogía'];
  
  constructor(private fb: FormBuilder) {
    this.doctorForm = this.fb.group({
      rut: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9)]],
      especialidad: ['', Validators.required],
      password1: ['', Validators.required],
      passwordRepetida1: ['', Validators.required]
    });
  }

  agregarDoctor() {
    if (this.doctorForm.valid) {
      const { password1, passwordRepetida1, ...rest } = this.doctorForm.value;

      if (password1 !== passwordRepetida1) {
        alert('Las contraseñas no coinciden');
        return;
      }

      this.doctores.push(rest);
      this.doctorForm.reset();
    } else {
      this.doctorForm.markAllAsTouched();
    }
  }

  eliminarDoctor(index: number) {
    this.doctores.splice(index, 1);
  }
}
