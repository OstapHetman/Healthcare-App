import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
declare var $:any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    $('.dropdown-button').dropdown('open');
  }
 

}
