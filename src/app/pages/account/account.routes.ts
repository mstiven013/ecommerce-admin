import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { AuthGuard } from "../../guards/auth.guard";
import { AccountTmpComponent } from "./account-tmp/account-tmp.component";
import { MePageComponent } from "./me-page/me-page.component";
import { AllBooksPageComponent } from "./books/all-books-page/all-books-page.component";
import { SingleBookPageComponent } from "./books/single-book-page/single-book-page.component";
import { BooksPagesComponent } from "./books/books-pages.component";
import { SpecialtiesPagesComponent } from "./specialties/specialties-pages.component";
import { SingleSpecialtyPageComponent } from "./specialties/single-specialty-page/single-specialty-page.component";
import { AllSpecialtiesPageComponent } from "./specialties/all-specialties-page/all-specialties-page.component";

export const AccountRoutes: Routes = [
    { 
        path: 'account', 
        component: AccountTmpComponent, 
        canActivate: [AuthGuard], 
        canActivateChild: [AuthGuard],
        children: [
            { path: '', component: DashboardPageComponent },
            { path: 'me', component: MePageComponent },
            { 
                path: 'books', 
                component: BooksPagesComponent,
                children: [
                    { path: '', component: AllBooksPageComponent },
                    { path: 'single', component: SingleBookPageComponent }
                ]
            },
            { 
                path: 'specialties',
                component: SpecialtiesPagesComponent,
                children: [
                    { path: '', component: AllSpecialtiesPageComponent },
                    { path: 'single', component: SingleSpecialtyPageComponent },
                    { path: 'single/:id', component: SingleSpecialtyPageComponent }
                ]
            }
        ]
    }
]