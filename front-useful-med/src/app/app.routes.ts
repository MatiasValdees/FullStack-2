import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { DoctorCrudPageComponent } from './components/doctor-crud-page/doctor-crud-page.component';
import { EspecialidadesCrudPageComponent } from './components/especialidades-crud-page/especialidades-crud-page.component';
import { ChangePasswordPageComponent } from './components/change-password-page/change-password-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PacienteCrudPageComponent } from './components/paciente-crud-page/paciente-crud-page.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteLayoutComponent } from './layouts/paciente-layout/paciente-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recovery', component: RecoveryComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'doctor-crud', component: DoctorCrudPageComponent },
      {path: 'especialidades-crud',component: EspecialidadesCrudPageComponent},
      { path: 'cambiar-password', component: ChangePasswordPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminComponent },
    ],
  },
    {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [
      { path: 'pacientes-crud', component: PacienteCrudPageComponent },
      { path: 'mi-agenda',component: AgendaComponent},
      { path: 'cambiar-password', component: ChangePasswordPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DoctorComponent },
    ],
  },
  {
    path:'paciente',
    component:PacienteLayoutComponent,
    children:[
      { path: 'home',component:PacienteComponent},
      { path: 'cambiar-password', component: ChangePasswordPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];
