import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private auth: AuthService) {
 
    }
}
