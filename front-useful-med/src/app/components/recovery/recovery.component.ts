import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recovery',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css'
})
export class RecoveryComponent {
    recoveryForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.recoveryForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }


    onSubmit() {
    console.log('Formulario enviado');
    if (this.recoveryForm.valid) {
      const { email } = this.recoveryForm.value;
      console.log('Enviando recovery:', email);
      alert("Recuperación de contraseña exitosa, revisa tu correo electrónico");
      this.recoveryForm.reset();
    } else {
      console.log('Formulario inválido');
      this.recoveryForm.markAllAsTouched();
    }
  }
}
