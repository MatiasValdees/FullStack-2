import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm:FormGroup;


  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    console.log('Formulario enviado');
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Enviando login:', email, password);
      alert("Inicio de sesión exitoso");
      this.loginForm.reset(); 
      if(email.includes('admin')) {
        console.log('Redirigiendo a admin');
        this.router.navigate(['/admin']);
      }else if(email.includes('doctor')) {
        console.log('Redirigiendo a doctor');
        this.router.navigate(['/doctor']);
      }else if(email.includes('patient')) {
        console.log('Redirigiendo a patient');
        this.router.navigate(['/patient']);
      }
    } else {
      console.log('Formulario inválido');
      this.loginForm.markAllAsTouched();
    }
  }
}
