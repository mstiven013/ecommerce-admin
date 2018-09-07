import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { AuthRoutes } from './routes/auth.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RecoverPasswordPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //Http module
    HttpClientModule,
    HttpModule,

    //Forms
    ReactiveFormsModule,

    //Routes
    RouterModule.forRoot(
      AuthRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
