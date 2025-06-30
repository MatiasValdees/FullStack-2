import { Component } from '@angular/core';
import { MenuItem, NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar [menuItems]="menu"></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AdminLayoutComponent {
  menu: MenuItem[] = [
    { label: 'Mantenedor de Doctores', route: '/admin/doctor-crud' },
    { label: 'Mantenedor de Especialidades', route: '/admin/especialidades-crud' },
    { label: 'Modificar Contraseña', route: '/admin/cambiar-password' }
  ];
  home: string = '/admin/home';

}