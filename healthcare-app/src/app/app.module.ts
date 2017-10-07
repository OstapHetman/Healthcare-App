// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
import { Routes, RouterModule } from '@angular/router';

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

export const routes: Routes = [
      { path: '', component: HomePageComponent },
      { path: 'about-page', component: AboutPageComponent },
      { path: 'contact-page', component: ContactPageComponent },
      { path: 'login-page', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeSliderComponent,
    LoginPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    DashboardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
