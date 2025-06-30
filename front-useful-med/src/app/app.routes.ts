import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { DoctorCrudPageComponent } from './components/doctor-crud-page/doctor-crud-page.component';
import { EspecialidadesCrudPageComponent } from './components/especialidades-crud-page/especialidades-crud-page.component';
import { ChangePasswordPageComponent } from './components/change-password-page/change-password-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'recovery', component:RecoveryComponent},
{
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'doctor-crud', component: DoctorCrudPageComponent },
      { path: 'especialidades-crud', component: EspecialidadesCrudPageComponent },
      { path: 'cambiar-password', component: ChangePasswordPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home',component:AdminComponent}
    ]
  },
];