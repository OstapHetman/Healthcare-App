import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.scss']
})
export class PatientsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.collapsible').collapsible();
    $('select').material_select();
  }

}
