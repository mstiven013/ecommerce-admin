import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppModule } from '../../app.module';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

//Routes
import { AccountRoutes } from './account.routes';
import { RouterModule } from '@angular/router';

//Material
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule, MatTabsModule, MatCheckboxModule, MatProgressBarModule, MatMenuModule, MatButtonModule, MatTableModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

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

@NgModule({
  declarations: [
    DashboardPageComponent,
    AccountTmpComponent,
    MePageComponent
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
