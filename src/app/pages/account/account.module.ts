import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { AccountRoutes } from './account.routes';
import { RouterModule } from '@angular/router';

//Material
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule, MatTabsModule, MatCheckboxModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

//Forms
import { ReactiveFormsModule } from '@angular/forms';

//Http services
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

//Common components
import { LoaderComponent } from '../../common/loader/loader.component';

//Account page components
import { DashboardPageComponent } from '../../pages/account/dashboard-page/dashboard-page.component';
import { AppModule } from '../../app.module';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
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
