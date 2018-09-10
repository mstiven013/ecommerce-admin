import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { AuthGuard } from "../../guards/auth.guard";

export const AccountRoutes: Routes = [
    { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] }
]