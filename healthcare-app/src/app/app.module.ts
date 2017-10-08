// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
import { Routes, RouterModule } from '@angular/router';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

// Components
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthService } from './services/auth.service';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { ProfilePageComponent } from './dashboard/profile-page/profile-page.component';
import { PatientsPageComponent } from './dashboard/patients-page/patients-page.component';
import { LaboratoryPageComponent } from './dashboard/laboratory-page/laboratory-page.component';
import { CalendarPageComponent } from './dashboard/calendar-page/calendar-page.component';


export const routes: Routes = [
      { path: '', component: HomePageComponent },
      { path: 'about-page', component: AboutPageComponent },
      { path: 'contact-page', component: ContactPageComponent },
      { path: 'login-page', component: LoginPageComponent },
      { path: 'dashboard', component: DashboardComponent ,
       children :[
      { path: 'profile-page', outlet: 'dashboardContent', component: ProfilePageComponent },
      { path: 'patients-page', outlet: 'dashboardContent', component: PatientsPageComponent },
      { path: 'laboratory-page', outlet: 'dashboardContent', component: LaboratoryPageComponent },
      { path: 'calendar-page', outlet: 'dashboardContent', component: CalendarPageComponent }
       ]},
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => localStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeSliderComponent,
    LoginPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    DashboardComponent,
    HomePageComponent,
    SidenavComponent,
    ProfilePageComponent,
    PatientsPageComponent,
    LaboratoryPageComponent,
    CalendarPageComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
