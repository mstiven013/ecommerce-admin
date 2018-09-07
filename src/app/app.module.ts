import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

//Init page components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RecoverPasswordPageComponent } from './pages/recover-password/recover-password-page.component';
import { RouterModule } from '@angular/router';

//Routes
import { AppRoutes } from './routes/routes';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoaderComponent } from './common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RecoverPasswordPageComponent,
    DashboardPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //Material
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatMenuModule,

    //Http module
    HttpClientModule,
    HttpModule,

    //Forms
    ReactiveFormsModule,

    //Routes
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
