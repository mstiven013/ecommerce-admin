import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login/login-page.component';
import { RecoverPasswordPageComponent } from '../pages/recover-password/recover-password-page.component';

export const AuthRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'recover-password', component: RecoverPasswordPageComponent }
]