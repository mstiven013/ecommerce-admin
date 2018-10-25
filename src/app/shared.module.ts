import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

//Material
import { Select2Module } from 'ng2-select2';
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule, MatTabsModule, MatCheckboxModule, MatProgressBarModule, MatMenuModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatPaginatorIntl } from '@angular/material';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

//Forms
import { ReactiveFormsModule } from '@angular/forms';

//Http services
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

//Init page components
import { AppComponent } from './app.component';

//Account page components
import { HomeModule } from './pages/home/home.module';
import { AccountModule } from './pages/account/account.module';

//Common components
import { LoaderComponent } from './common/loader/loader.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';
import { HeaderComponent } from './common/header/header.component';
//import { DataTableModule } from 'angular-6-datatable';
import { DataTablesModule } from 'angular-datatables';
import { getSpanishPaginatorIntl } from './services/material/spanish-paginator-intl';

@NgModule({
  declarations: [
    LoaderComponent,
    NavMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    //Material
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatMenuModule,
    Select2Module,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,

    //Http module
    HttpClientModule,
    HttpModule,

    //Forms
    ReactiveFormsModule,

    //Data table
    DataTablesModule,

    //Custom modules
    RouterModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
  ],
  exports: [
    LoaderComponent,
    NavMenuComponent,
    HeaderComponent,
    DataTablesModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class SharedModule { }
