import { Routes } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component : LoginComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component : DashboardComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];
