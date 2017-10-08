import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }
  

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

}
