import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/home/login/login-page.component';
import { RecoverPasswordPageComponent } from '../pages/home/recover-password/recover-password-page.component';
import { DashboardPageComponent } from '../pages/account/dashboard-page/dashboard-page.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'recover-password', component: RecoverPasswordPageComponent },
    { path: 'dashboard', component: DashboardPageComponent }
]