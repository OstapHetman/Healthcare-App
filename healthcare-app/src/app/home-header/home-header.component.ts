import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

}