import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login/login-page.component';
import { RecoverPasswordPageComponent } from '../pages/recover-password/recover-password-page.component';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'recover-password', component: RecoverPasswordPageComponent },
    { path: 'dashboard', component: DashboardPageComponent }
]