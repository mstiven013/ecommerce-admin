import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

//Init page components
import { AppComponent } from './app.component';

//Account page components
import { HomeModule } from './pages/home/home.module';
import { AccountModule } from './pages/account/account.module';

//Common components
import { LoaderComponent } from './common/loader/loader.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NavMenuComponent
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

    //Http module
    HttpClientModule,
    HttpModule,

    //Forms
    ReactiveFormsModule,

    //Custom modules
    RouterModule
  ],
  providers: [],
  exports: [
    LoaderComponent,
    NavMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class SharedModule { }
