import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login/login-page.component";
import { RecoverPasswordPageComponent } from "./recover-password/recover-password-page.component";
import { HomeTmpComponent } from "./home-tmp/home-tmp.component";

export const HomeRoutes: Routes = [
    { 
        path: '', 
        component: HomeTmpComponent, 
        children: [
            { path: '', component: LoginPageComponent },
            { path: 'recover-password', component: RecoverPasswordPageComponent }
        ]
    }
]