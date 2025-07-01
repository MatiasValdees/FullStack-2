import { Component } from '@angular/core';
import { MenuItem, NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-paciente-layout',
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar [menuItems]="menu"></app-navbar>
    <router-outlet></router-outlet>
  `,
  templateUrl: './paciente-layout.component.html',
  styleUrl: './paciente-layout.component.css'
})
export class PacienteLayoutComponent {
  menu: MenuItem[] = [
      { label: 'Mi agenda', route: '/paciente/mi-agenda' },
    { label: 'Modificar Contraseña', route: '/doctor/cambiar-password' }

    ];
  home: string = '/paciente/home';
}
