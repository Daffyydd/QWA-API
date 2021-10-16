import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './_helpers';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent,LoginComponent,HomeComponent,AdminComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
