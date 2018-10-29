import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppModule } from '../../app.module';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { EditorModule } from '@tinymce/tinymce-angular';

//Routes
import { AccountRoutes } from './account.routes';
import { RouterModule } from '@angular/router';

//Material
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule, MatTabsModule, MatCheckboxModule, MatProgressBarModule, MatMenuModule, MatButtonModule, MatTableModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Select2Module } from 'ng2-select2';

//Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Http services
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

//Common components
import { LoaderComponent } from '../../common/loader/loader.component';

//Account page components
import { DashboardPageComponent } from '../../pages/account/dashboard-page/dashboard-page.component';
import { AccountTmpComponent } from './account-tmp/account-tmp.component';
import { MePageComponent } from './me-page/me-page.component';

//Books pages
import { BooksPagesComponent } from './books/books-pages.component';
import { SingleBookPageComponent } from './books/single-book-page/single-book-page.component';
import { AllBooksPageComponent } from './books/all-books-page/all-books-page.component';
import { BasicSettingsBookComponent } from './books/single-book-page/basic-settings-book/basic-settings-book.component';
import { ActionsBarBookComponent } from './books/single-book-page/actions-bar-book/actions-bar-book.component';

//Specialties pages
import { SpecialtiesPagesComponent } from './specialties/specialties-pages.component';
import { SingleSpecialtyPageComponent } from './specialties/single-specialty-page/single-specialty-page.component';
import { AllSpecialtiesPageComponent } from './specialties/all-specialties-page/all-specialties-page.component';

//Authors pages
import { AuthorsPagesComponent } from './authors/authors-pages.component';
import { AllAuthorsPageComponent } from './authors/all-authors-page/all-authors-page.component';

//Users pages
import { UsersPagesComponent } from './users/users-pages.component';
import { AllUsersPageComponent } from './users/all-users-page/all-users-page.component';
import { SingleUserPageComponent } from './users/single-user-page/single-user-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    AccountTmpComponent,
    MePageComponent,

    //Books
    BooksPagesComponent,
    SingleBookPageComponent,
    ActionsBarBookComponent,
    BasicSettingsBookComponent,
    AllBooksPageComponent,

    //Specialties
    SpecialtiesPagesComponent,
    AllSpecialtiesPageComponent,
    SingleSpecialtyPageComponent,

    //Authors
    AuthorsPagesComponent,
    AllAuthorsPageComponent,

    //Users
    UsersPagesComponent,
    AllUsersPageComponent,
    SingleUserPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,

    EditorModule,

    //Material
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    Select2Module,

    //Routes
    RouterModule.forRoot(
      AccountRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: []
})
export class AccountModule { }
