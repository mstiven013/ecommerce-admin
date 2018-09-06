import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

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
