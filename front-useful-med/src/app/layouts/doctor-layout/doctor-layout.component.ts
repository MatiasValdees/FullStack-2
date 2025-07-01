import { Component } from '@angular/core';
import { MenuItem, NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-layout',
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar [menuItems]="menu"></app-navbar>
    <router-outlet></router-outlet>
  `,
  templateUrl: './doctor-layout.component.html',
  styleUrl: './doctor-layout.component.css'
})
export class DoctorLayoutComponent {
  menu: MenuItem[] = [
    { label: 'Mi Agenda', route: '/doctor/mi-agenda' },
    { label: 'Mantenedor Pacientes', route: '/doctor/pacientes-crud' },
    { label: 'Modificar Contraseña', route: '/doctor/cambiar-password' }
  ];
  home: string = '/doctor/home';

}
