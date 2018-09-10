import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { AuthGuard } from "../../guards/auth.guard";
import { AccountTmpComponent } from "./account-tmp/account-tmp.component";
import { MePageComponent } from "./me-page/me-page.component";

export const AccountRoutes: Routes = [
    { 
        path: 'account', 
        component: AccountTmpComponent, 
        canActivate: [AuthGuard], 
        canActivateChild: [AuthGuard],
        children: [
            { path: '', component: DashboardPageComponent },
            { path: 'me', component: MePageComponent }
        ]
    }
]