import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { HomeRoutes } from './home.routes';
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

//Init page components
import { AppComponent } from '../../app.component';
import { LoginPageComponent } from '../../pages/home/login/login-page.component';
import { RecoverPasswordPageComponent } from '../../pages/home/recover-password/recover-password-page.component';

//Common components
import { LoaderComponent } from '../../common/loader/loader.component';
import { AppModule } from '../../app.module';
import { HomeTmpComponent } from './home-tmp/home-tmp.component';
import { AccountModule } from '../account/account.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginPageComponent,
    RecoverPasswordPageComponent,
    HomeTmpComponent
  ],
  imports: [
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

    //Routes
    RouterModule.forRoot(
      HomeRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }
