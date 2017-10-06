// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
// Components
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
